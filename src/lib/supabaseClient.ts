// lib/supabaseClient.ts
import { createClient } from '@supabase/supabase-js';

// Fetch environment variables (we'll set them up in the next step)
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

// Initialize the Supabase client
export const supabase = createClient(supabaseUrl, supabaseAnonKey);
