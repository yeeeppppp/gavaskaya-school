// src/components/Auth/supabaseConfig.js
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://rgpuqrsxqpilpwbirbzn.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJncHVxcnN4cXBpbHB3YmlyYnpuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDI0MTAwMzksImV4cCI6MjA1Nzk4NjAzOX0.MzdkXB3ksIQGI5fCYhrF1PWf6LCF6e3M9dlYLCTHaw8';
const supabase = createClient(supabaseUrl, supabaseKey);

const auth = supabase.auth;

export { supabase, auth };