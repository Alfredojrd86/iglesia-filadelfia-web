#!/usr/bin/env node

const { createClient } = require('@supabase/supabase-js')

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
const serviceRole = process.env.SUPABASE_SERVICE_ROLE_KEY

if (!supabaseUrl || !anonKey) {
  console.error('Supabase env missing: set NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY')
  process.exit(2)
}

async function main() {
  const pub = createClient(supabaseUrl, anonKey)
  const { data: sessionData, error: sessionErr } = await pub.auth.getSession()
  if (sessionErr) {
    console.error('auth.getSession error:', sessionErr.message)
    process.exit(1)
  }
  console.log('✅ Public client OK (auth.getSession). Session:', sessionData?.session ? 'present' : 'none')

  if (serviceRole) {
    const srv = createClient(supabaseUrl, serviceRole)
    try {
      const { data: users, error } = await srv.auth.admin.listUsers({ page: 1, perPage: 1 })
      if (error) throw error
      console.log('✅ Service role OK (admin.listUsers). Count:', users?.users?.length ?? 0)
    } catch (e) {
      console.warn('⚠️ Service role check failed:', e.message)
    }
  } else {
    console.log('ℹ️ Service role not set. Skipping admin check.')
  }
}

main().catch((e) => {
  console.error('Unexpected error:', e)
  process.exit(1)
})


