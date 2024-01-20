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
import { FloatingButtonWithTooltip } from "./shared/FloatingButtonWithTooltip";
import { Calendar } from "lucide-react";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@mood/components/ui/table";

export function MoodTable() {
  const { status, data } = useQuery("recents", useApi().queries.recents);

  if (status !== "success") {
    return <Spinner />;
  }

  return (
    <Table>
      {/* <TableCaption>A list of your recent invoices.</TableCaption> */}
      <TableHeader>
        <TableRow>
          <TableHead className="w-64">Time</TableHead>
          <TableHead>Mood</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data?.map(({ id, mood, created_at }) => (
          <TableRow key={id}>
            <TableCell className="font-medium">
              {new Date(created_at).toLocaleString()}
            </TableCell>
            <TableCell>{mood}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

export function RecentsDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <FloatingButtonWithTooltip
          tooltip="Recents"
          Icon={Calendar}
          position="fixed bottom-28 right-8"
        />
      </DialogTrigger>
      <DialogContent className="max-h-5/6 grow flex-col content-start">
        <DialogHeader>
          <DialogTitle>Recent Moods</DialogTitle>
        </DialogHeader>
        <MoodTable />
      </DialogContent>
    </Dialog>
  );
}
