import { Table } from "@mantine/core";
import React from "react";

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

const WorkbenchUserTable = () => {
  return (
    <Table verticalSpacing={"md"}>
      <Table.Thead>
        <Table.Tr>
          <Table.Th>Cohort Name</Table.Th>
          <Table.Th>Patient Count</Table.Th>
        </Table.Tr>
      </Table.Thead>
      <Table.Tbody>
        {users.map((user) => (
          <Table.Tr key={user.email}>
            <Table.Td>{user.email}</Table.Td>
            <Table.Td>{user.role}</Table.Td>
          </Table.Tr>
        ))}
      </Table.Tbody>
    </Table>
  );
};

export default WorkbenchUserTable;
