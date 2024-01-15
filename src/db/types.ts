import { Database } from "./generated/types";

export type TableNames = keyof Database["public"]["Tables"];
export type RowType<TableName extends TableNames> =
  Database["public"]["Tables"][TableName]["Row"];
