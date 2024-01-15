import { useSbClient } from "./hooks/useSbClient";

export function useApi() {
  const client = useSbClient();

  return {
    queries: {},
    mutations: {
      logMood: async (mood: string) => {
        return client.from("moods").insert({ mood }).select();
      },
    },
  };
}
