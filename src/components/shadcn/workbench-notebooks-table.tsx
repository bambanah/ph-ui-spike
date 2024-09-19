import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/shadcn/ui/table";
import { Badge } from "./ui/badge";

const notebooks = [
  {
    instanceName: "First Notebook",
    creator: "test.user@propelhealth.ai",
    lastUpdated: "31 Jan 2024",
    state: (
      <Badge variant="outline" className="ml-8">
        Stopped
      </Badge>
    ),
  },
  {
    instanceName: "Second Notebook",
    creator: "lachlan.underhill@propelhealth.ai",
    lastUpdated: "31 Jan 2024",
    state: (
      <Badge variant="default" className="ml-8">
        Running
      </Badge>
    ),
  },
];

export function WorkbenchNotebooksTable() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Instance Name</TableHead>
          <TableHead>Creator</TableHead>
          <TableHead className="text-right">Last Updated</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {notebooks.map((notebook) => (
          <TableRow key={notebook.instanceName}>
            <TableCell>
              {notebook.instanceName} {notebook.state}
            </TableCell>
            <TableCell>{notebook.creator}</TableCell>
            <TableCell className="text-right">{notebook.lastUpdated}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
