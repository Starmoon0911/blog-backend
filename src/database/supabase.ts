import { createClient } from "@supabase/supabase-js";
import logger from "../utils/logger";

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseSecretKey = process.env.SUPABASE_SECRET_KEY;

if (!supabaseUrl) {
  throw new Error("SUPABASE_URL is missing");
}

if (!supabaseSecretKey) {
  throw new Error("SUPABASE_SECRET_KEY is missing");
}

const supabase = createClient(
  supabaseUrl,
  supabaseSecretKey,
);

export default supabase;