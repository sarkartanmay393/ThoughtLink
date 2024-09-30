import type { Idea } from "~/utils/types";
import { DataTable } from "./tasks/components/data-table";
import { columns } from "./tasks/components/columns";
import taskss from './tasks/data/tasks.json';

type IdeaTableProps = {
  ideas: Idea[];
};

export default function IdeaTable({ ideas = [] }: IdeaTableProps) {
  return (
    <DataTable data={taskss ?? []} columns={columns} />
  );
}