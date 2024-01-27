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
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { ScrollArea } from "./ui/scroll-area";

interface MoodEntry {
  created_at: string;
  mood: string;
}

const columnHelper = createColumnHelper<MoodEntry>();
const columns = [
  columnHelper.accessor("created_at", {
    id: "created_at",
    header: "Time",
    cell: (info) => new Date(info.getValue()).toLocaleString(),
  }),
  columnHelper.accessor("mood", { id: "mood" }),
];

export function RecentsDialog() {
  const { status, data } = useQuery("recents", useApi().queries.recents);

  return (
    <Dialog>
      <DialogTrigger asChild>
        <FloatingButtonWithTooltip
          tooltip="Recents"
          Icon={Calendar}
          position="fixed bottom-28 right-8"
        />
      </DialogTrigger>

      <DialogContent className="max-h-[90%] max-w-[90%]">
        <DialogHeader>
          <DialogTitle>Recent Moods</DialogTitle>
        </DialogHeader>
        <ScrollArea className="max-h-[75vh]">
          {status === "success" ? <MoodTable data={data ?? []} /> : <Spinner />}
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}

function MoodTable({ data }: { data: MoodEntry[] }) {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    enableRowSelection: true,
  });

  return (
    <Table>
      <TableHeader>
        {table.getHeaderGroups().map((headerGroup) => (
          <TableRow key={headerGroup.id}>
            {headerGroup.headers.map((header) => (
              <TableHead key={header.id}>
                {header.isPlaceholder
                  ? null
                  : flexRender(
                      header.column.columnDef.header,
                      header.getContext(),
                    )}
              </TableHead>
            ))}
          </TableRow>
        ))}
      </TableHeader>
      <TableBody>
        {table.getRowModel().rows.map((row) => (
          <TableRow key={row.id}>
            {row.getVisibleCells().map((cell) => (
              <TableCell key={cell.id}>
                {flexRender(cell.column.columnDef.cell, cell.getContext())}
              </TableCell>
            ))}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
