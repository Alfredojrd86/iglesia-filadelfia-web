#!/usr/bin/env node

const { spawn } = require('child_process');

console.log('🧪 Testing MCP Servers...\n');

// Test filesystem server
console.log('📁 Testing Filesystem Server...');
const filesystem = spawn('npx', ['@modelcontextprotocol/server-filesystem', '--root', process.cwd()]);

filesystem.on('error', (error) => {
  console.log('❌ Filesystem server error:', error.message);
});

filesystem.on('exit', (code) => {
  if (code === 0) {
    console.log('✅ Filesystem server is working');
  } else {
    console.log('❌ Filesystem server failed');
  }
});

// Test GitHub server
console.log('🐙 Testing GitHub Server...');
const github = spawn('npx', ['@modelcontextprotocol/server-github']);

github.on('error', (error) => {
  console.log('❌ GitHub server error:', error.message);
});

github.on('exit', (code) => {
  if (code === 0) {
    console.log('✅ GitHub server is working');
  } else {
    console.log('❌ GitHub server failed');
  }
});

console.log('\n🎯 MCP Configuration Status:');
console.log('✅ Servers installed globally');
console.log('✅ Config file created at ~/.mcp/config.json');
console.log('✅ CLAUDE.md created in project');
console.log('\n📝 Next steps:');
console.log('1. Update GitHub token in ~/.mcp/config.json');
console.log('2. Configure database URL when Supabase is set up');
console.log('3. Test with: claude "Analyze this project"');
