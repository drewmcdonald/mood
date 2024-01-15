import { useSupabaseClient } from "@supabase/auth-helpers-react";
import { Database } from "../db/generated/types";

export function useSbClient() {
  const client = useSupabaseClient<Database>();
  return client;
}
