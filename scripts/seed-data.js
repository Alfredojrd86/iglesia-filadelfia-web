#!/usr/bin/env node
/*
  Seeds sample data into Supabase using the service role key from .env.local
  - Reads NEXT_PUBLIC_SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY
  - Optionally updates profiles.role to 'admin' for SEED_ADMIN_EMAIL

  Usage:
    SEED_ADMIN_EMAIL="you@example.com" node scripts/seed-data.js
*/

const fs = require('fs')
const path = require('path')
const { createClient } = require('@supabase/supabase-js')

// Load .env.local if present
const envLocalPath = path.resolve(process.cwd(), '.env.local')
if (fs.existsSync(envLocalPath)) {
  const lines = fs.readFileSync(envLocalPath, 'utf8').split(/\r?\n/)
  for (const line of lines) {
    if (!line || line.startsWith('#')) continue
    const idx = line.indexOf('=')
    if (idx === -1) continue
    const key = line.slice(0, idx).trim()
    const val = line.slice(idx + 1).trim()
    if (!(key in process.env)) process.env[key] = val
  }
}

const url = process.env.NEXT_PUBLIC_SUPABASE_URL
const serviceRole = process.env.SUPABASE_SERVICE_ROLE_KEY
if (!url || !serviceRole) {
  console.error('Missing env: NEXT_PUBLIC_SUPABASE_URL and/or SUPABASE_SERVICE_ROLE_KEY')
  process.exit(1)
}

const supabase = createClient(url, serviceRole)

async function ensureTableHasData(table, exampleRows) {
  const { data, error } = await supabase.from(table).select('id').limit(1)
  if (error) throw error
  if (data && data.length > 0) {
    console.log(`ℹ️  Table ${table} already has data. Skipping inserts.`)
    return
  }
  const { error: insErr, count } = await supabase.from(table).insert(exampleRows).select('*', { count: 'exact' })
  if (insErr) throw insErr
  console.log(`✅ Inserted ${count ?? exampleRows.length} rows into ${table}`)
}

async function maybePromoteAdmin(email) {
  if (!email) {
    console.log('ℹ️  SEED_ADMIN_EMAIL not set. Skipping admin promotion in profiles.')
    return
  }
  const { error } = await supabase
    .from('profiles')
    .update({ role: 'admin' })
    .eq('email', email)
  if (error) {
    console.warn('⚠️  Could not promote admin (profiles update). Ensure table and row exist.', error.message)
  } else {
    console.log(`✅ Promoted ${email} to admin (if profile existed).`)
  }
}

async function main() {
  // Missionaries seed
  const missionaries = [
    {
      name: 'Juan Pérez',
      location: 'Bangkok',
      country: 'Tailandia',
      bio: 'Misionero trabajando con comunidades locales en Bangkok desde 2020.',
      mission_start_date: '2020-03-15',
      is_active: true,
    },
    {
      name: 'María González',
      location: 'Nairobi',
      country: 'Kenia',
      bio: 'Enfocada en educación y desarrollo comunitario en Nairobi.',
      mission_start_date: '2019-08-01',
      is_active: true,
    },
    {
      name: 'Carlos Rodríguez',
      location: 'Lima',
      country: 'Perú',
      bio: 'Plantación de iglesias en zonas rurales del Perú.',
      mission_start_date: '2021-01-10',
      is_active: true,
    },
  ]

  // Events seed
  const events = [
    {
      title: 'Culto Dominical',
      description: 'Nuestro servicio principal de adoración',
      event_date: '2025-08-10 10:00:00',
      location: 'Templo Principal',
      is_featured: true,
    },
    {
      title: 'Estudio Bíblico',
      description: 'Estudio semanal de la Palabra',
      event_date: '2025-08-12 19:00:00',
      location: 'Salón de Conferencias',
      is_featured: false,
    },
    {
      title: 'Conferencia Misionera',
      description: 'Encuentro anual con nuestros misioneros',
      event_date: '2025-09-15 09:00:00',
      location: 'Centro de Convenciones',
      is_featured: true,
    },
  ]

  // Attempt inserts (will fail if tables are not created yet)
  await ensureTableHasData('missionaries', missionaries)
  await ensureTableHasData('events', events)

  await maybePromoteAdmin(process.env.SEED_ADMIN_EMAIL)
}

main()
  .then(() => {
    console.log('✅ Seeding complete.')
  })
  .catch((e) => {
    console.error('❌ Seeding failed:', e.message)
    process.exit(1)
  })


