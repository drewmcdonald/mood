import SignIn from "./components/SignIn";
import { useSessionContext } from "@supabase/auth-helpers-react";
import { MoodGrid } from "./components/MoodGrid";
import { Spinner } from "@mood/components/Spinner";
import { LogOutButton } from "./components/LogOutButton";
import { RecentsDialog } from "./components/RecentsDialog";

function App() {
  const { session, isLoading } = useSessionContext();

  if (isLoading) return <Spinner />;
  if (!session) return <SignIn />;

  return (
    <div className="p-4">
      <MoodGrid />
      <RecentsDialog />
      <LogOutButton />
    </div>
  );
}

export default App;
