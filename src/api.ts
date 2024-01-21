import { useSbClient } from "./hooks/useSbClient";

export function useApi() {
  const client = useSbClient();

  return {
    queries: {
      recents: async () => {
        const result = await client
          .from("moods")
          .select()
          .order("created_at", { ascending: false })
          .limit(50);
        return result.data;
      },
    },
    mutations: {
      logMood: async (mood: string) => {
        return client.from("moods").insert({ mood }).select();
      },
    },
  };
}
