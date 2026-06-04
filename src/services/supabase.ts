import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://icbetyhzknnwkrkiomxa.supabase.co";

const supabaseAnonKey = "sb_publishable_p7f6FdOli6f3rHC_zDzj8Q_SAvvxco9";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
