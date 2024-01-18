import { useQuery } from "react-query";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { useApi } from "@mood/api";
import { Spinner } from "./Spinner";

export function RecentsDialog({ trigger }: { trigger: React.ReactNode }) {
  const { status, data } = useQuery("recents", useApi().queries.recents);

  return (
    <Dialog>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Recent Moods</DialogTitle>
        </DialogHeader>
        {status === "success" && (
          <ul>{data?.map(({ id, mood }) => <li key={id}>{mood}</li>)}</ul>
        )}
        {status !== "success" && <Spinner />}
      </DialogContent>
    </Dialog>
  );
}
