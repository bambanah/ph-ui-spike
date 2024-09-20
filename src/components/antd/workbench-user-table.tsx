import { Table } from "antd";
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

const columns = [
  {
    title: "Email",
    dataIndex: "email",
    key: "email",
  },
  {
    title: "Workbench Role",
    dataIndex: "role",
    key: "role",
  },
];

const WorkbenchUserTable = () => {
  return (
    <Table
      dataSource={users}
      columns={columns}
      rowKey="email"
      pagination={false}
    />
  );
};

export default WorkbenchUserTable;
