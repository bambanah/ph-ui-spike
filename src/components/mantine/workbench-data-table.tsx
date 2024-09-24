import { Table } from "@mantine/core";
import React from "react";

const cohorts = [
  {
    name: "Test Query",
    patientCount: 127,
    completedDate: "31 Jan 2024",
    query:
      'SELECT patient_id as patient_id FROM `mk-propel-dev-admin.mk_propel_dev_mk_propel_dev_synthea_dataset.vw_allergy_intolerances` WHERE CONTAINS_SUBSTR(patient_id, "1")',
  },
  {
    name: "Second Query",
    patientCount: 2475,
    completedDate: "6 November 2022",
    query:
      'SELECT patient_id as patient_id FROM `mk-propel-dev-admin.mk_propel_dev_mk_propel_dev_synthea_dataset.vw_allergy_intolerances` WHERE CONTAINS_SUBSTR(patient_id, "1")',
  },
];

const WorkbenchDataTable = () => {
  return (
    <Table verticalSpacing={"md"}>
      <Table.Thead>
        <Table.Tr>
          <Table.Th>Cohort Name</Table.Th>
          <Table.Th>Patient Count</Table.Th>
          <Table.Th>Completed Date</Table.Th>
        </Table.Tr>
      </Table.Thead>
      <Table.Tbody>
        {cohorts.map((cohort) => (
          <Table.Tr key={cohort.name}>
            <Table.Td>{cohort.name}</Table.Td>
            <Table.Td>{cohort.patientCount}</Table.Td>
            <Table.Td>{cohort.completedDate}</Table.Td>
          </Table.Tr>
        ))}
      </Table.Tbody>
    </Table>
  );
};

export default WorkbenchDataTable;
