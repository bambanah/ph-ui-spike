import { Space, Table, Tag } from "antd";
import React from "react";

const notebooks = [
  {
    instanceName: "First Notebook",
    creator: "test.user@propelhealth.ai",
    lastUpdated: "31 Jan 2024",
    state: <Tag>Stopped</Tag>,
  },
  {
    instanceName: "Second Notebook",
    creator: "lachlan.underhill@propelhealth.ai",
    lastUpdated: "31 Jan 2024",
    state: <Tag color="green">Running</Tag>,
  },
];

const columns = [
  {
    title: "Instance Name",
    dataIndex: "instanceName",
    key: "instanceName",
  },
  {
    title: "Creator",
    dataIndex: "creator",
    key: "creator",
  },
  {
    title: "Last Updated",
    dataIndex: "lastUpdated",
    key: "lastUpdated",
  },
];

const WorkbenchNotebookTable = () => {
  return (
    <Table
      dataSource={notebooks.map((notebook) => ({
        ...notebook,
        instanceName: (
          <Space>
            {notebook.instanceName} {notebook.state}
          </Space>
        ),
      }))}
      columns={columns}
      rowKey="email"
      pagination={false}
    />
  );
};

export default WorkbenchNotebookTable;
