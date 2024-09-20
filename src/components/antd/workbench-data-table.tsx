import { Table, Tag } from "antd";

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

const columns = [
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

const WorkbenchDataTable = () => {
  return (
    <Table
      dataSource={cohorts.map((cohort) => ({
        ...cohort,
        name: (
          <span className="flex gap-4">
            {cohort.name} <Tag>Cohort Query</Tag>
          </span>
        ),
      }))}
      columns={columns}
      rowKey="name"
      pagination={false}
    />
  );
};

export default WorkbenchDataTable;
