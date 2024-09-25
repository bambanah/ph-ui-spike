import { Button, Flex, Table, Tag, Typography } from "antd";
import { TableProps } from "antd/es/table";
import { ChevronDown, ChevronRight } from "lucide-react";

const cohorts = [
  {
    title: "Test Query",
    patientCount: 127,
    completedDate: "31 Jan 2024",
    query:
      'SELECT patient_id as patient_id FROM `mk-propel-dev-admin.mk_propel_dev_mk_propel_dev_synthea_dataset.vw_allergy_intolerances` WHERE CONTAINS_SUBSTR(patient_id, "1")',
  },
  {
    title: "Second Query",
    patientCount: 2475,
    completedDate: "6 November 2022",
    query:
      'SELECT patient_id as patient_id FROM `mk-propel-dev-admin.mk_propel_dev_mk_propel_dev_synthea_dataset.vw_allergy_intolerances` WHERE CONTAINS_SUBSTR(patient_id, "1")',
  },
];

const WorkbenchDataTable = () => {
  const columns: TableProps<(typeof cohorts)[number]>["columns"] = [
    {
      title: "Cohort Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Patient Count",
      dataIndex: "patientCount",
      key: "patientCount",
    },
    {
      title: "Completed Date",
      dataIndex: "completedDate",
      key: "completedDate",
    },
  ];
  return (
    <Table
      dataSource={cohorts.map((cohort) => ({
        ...cohort,
        name: (
          <Flex gap="0.5rem">
            {cohort.title} <Tag>Cohort Query</Tag>
          </Flex>
        ),
      }))}
      expandable={{
        expandedRowRender: (record) => (
          <Typography.Text code>{record.query}</Typography.Text>
        ),
        expandIcon: ({ expanded, onExpand, record }) => (
          <Button
            onClick={(event) => onExpand(record, event)}
            icon={expanded ? <ChevronDown /> : <ChevronRight />}
            type="text"
            data-testid="expand-cohort"
          />
        ),
      }}
      columns={columns}
      rowKey={(record) => record.completedDate}
      pagination={false}
    />
  );
};

export default WorkbenchDataTable;
