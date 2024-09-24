import { Badge, Group, Table } from "@mantine/core";

const notebooks = [
  {
    instanceName: "First Notebook",
    creator: "test.user@propelhealth.ai",
    lastUpdated: "31 Jan 2024",
    state: (
      <Badge variant="filled" color="gray">
        Stopped
      </Badge>
    ),
  },
  {
    instanceName: "Second Notebook",
    creator: "lachlan.underhill@propelhealth.ai",
    lastUpdated: "31 Jan 2024",
    state: <Badge variant="filled">Running</Badge>,
  },
];

const WorkbenchNotebookTable = () => {
  return (
    <Table verticalSpacing={"md"}>
      <Table.Thead>
        <Table.Tr>
          <Table.Th>Instance Name</Table.Th>
          <Table.Th>Creator</Table.Th>
          <Table.Th>Last Updated</Table.Th>
        </Table.Tr>
      </Table.Thead>
      <Table.Tbody>
        {notebooks.map((notebook) => (
          <Table.Tr key={notebook.instanceName}>
            <Table.Td>
              <Group gap="sm">
                {notebook.instanceName}
                {notebook.state}
              </Group>
            </Table.Td>
            <Table.Td>{notebook.creator}</Table.Td>
            <Table.Td>{notebook.lastUpdated}</Table.Td>
          </Table.Tr>
        ))}
      </Table.Tbody>
    </Table>
  );
};

export default WorkbenchNotebookTable;
