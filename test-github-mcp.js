#!/usr/bin/env node

const { spawn } = require('child_process');
const fs = require('fs');
const os = require('os');

console.log('🐙 Testing GitHub MCP Server...\n');

// Resolve token from environment
const resolvedToken = process.env.GITHUB_TOKEN || process.env.GITHUB_PERSONAL_ACCESS_TOKEN || '';
if (!resolvedToken) {
  console.error('⚠️ No GITHUB_TOKEN found in environment. Add it to .env.local or export it.');
}

// Test GitHub server with token from env
const github = spawn('npx', ['@modelcontextprotocol/server-github'], {
  env: {
    ...process.env,
    GITHUB_TOKEN: resolvedToken
  }
});

github.stdout.on('data', (data) => {
  console.log('📤 GitHub server output:', data.toString());
});

github.stderr.on('data', (data) => {
  console.log('❌ GitHub server error:', data.toString());
});

github.on('error', (error) => {
  console.log('❌ GitHub server spawn error:', error.message);
});

github.on('exit', (code) => {
  if (code === 0) {
    console.log('✅ GitHub server is working correctly');
  } else {
    console.log(`❌ GitHub server failed with code: ${code}`);
  }
});

// Test the configuration file
console.log('\n📋 Checking MCP configuration...');
const configPath = os.homedir() + '/.mcp/config.json';

if (fs.existsSync(configPath)) {
  try {
    const config = JSON.parse(fs.readFileSync(configPath, 'utf8'));
    console.log('✅ Config file exists');
    if (config.mcpServers && config.mcpServers.github) {
      console.log('✅ GitHub server configured in MCP');
    } else {
      console.log('❌ GitHub server not configured in MCP');
    }
  } catch (e) {
    console.log('❌ Failed to parse MCP config:', e.message);
  }
} else {
  console.log('❌ Config file not found');
}
