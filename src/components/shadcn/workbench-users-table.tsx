import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/shadcn/ui/table";

const users = [
  {
    email: "test.user@propelhealth.ai",
    role: "Workbench Admin",
  },
  {
    email: "john.smith@maxkelsen.com",
    role: "Workbench Member",
  },
  {
    email: "lachlan.underhill@propelhealth.ai",
    role: "Workbench Admin",
  },
];

export function WorkbenchUsersTable() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Email</TableHead>
          <TableHead>Workbench Role</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {users.map((user) => (
          <TableRow key={user.email}>
            <TableCell className="font-medium">{user.email}</TableCell>
            <TableCell>{user.role}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
