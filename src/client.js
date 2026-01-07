import { createClient } from '@supabase/supabase-js';

// Supabase project URL and anon key
const URL = 'https://ubzmgjzumtockienotqe.supabase.co';
const API_KEY = 'sb_publishable_aZwdDHpMqW8mOxHbZ6_xCg_jhn6Ls0p';

export const supabase = createClient(URL, API_KEY);

