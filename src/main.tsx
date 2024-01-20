import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { SessionContextProvider } from "@supabase/auth-helpers-react";
import { client } from "./db/client.ts";
import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { Toaster } from "./components/ui/sonner.tsx";
import { TooltipProvider } from "./components/ui/tooltip.tsx";
import { SpeedInsights } from "@vercel/speed-insights/next";

const queryClient = new QueryClient();

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <TooltipProvider delayDuration={300}>
      <QueryClientProvider client={queryClient}>
        <SessionContextProvider supabaseClient={client}>
          <App />
          <Toaster richColors position="bottom-center" />
        </SessionContextProvider>
      </QueryClientProvider>
    </TooltipProvider>
    <SpeedInsights />
  </React.StrictMode>,
);
