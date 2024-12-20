import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabaseClient';

// GET request to fetch approved profiles
export async function GET() {
  try {
    const { data, error } = await supabase
      .from('partners')
      .select('*')
      .eq('approved', true);

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json(data, { status: 200 });
  } catch (err) {
    return NextResponse.json({ error: 'Unexpected error occurred' }, { status: 500 });
  }
}
