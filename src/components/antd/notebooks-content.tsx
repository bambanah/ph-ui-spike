import { PlusOutlined } from "@ant-design/icons";
import { Button, Input, Space } from "antd";
import WorkbenchNotebookTable from "./workbench-notebooks-table";

const { Search } = Input;

const NotebookContent = () => {
  return (
    <Space
      direction="vertical"
      style={{ width: "100%", gap: "1.5rem", marginTop: ".5rem" }}
    >
      <Space style={{ justifyContent: "space-between", width: "100%" }}>
        <Search placeholder="Search..." style={{ minWidth: 300 }} enterButton />
        <div>
          <Button>
            <PlusOutlined /> Create Notebook
          </Button>
        </div>
      </Space>
      <WorkbenchNotebookTable />
    </Space>
  );
};

export default NotebookContent;
