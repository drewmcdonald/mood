import SignIn from "./components/SignIn";
import { useSessionContext } from "@supabase/auth-helpers-react";
import { MoodGrid } from "./components/MoodGrid";
import { Spinner } from "@mood/components/Spinner";
import { LogOutButton } from "./components/LogOutButton";

function App() {
  const { session, isLoading } = useSessionContext();

  if (isLoading) return <Spinner />;
  if (!session) return <SignIn />;

  return (
    <>
      <MoodGrid />
      <LogOutButton />
    </>
  );
}

export default App;
