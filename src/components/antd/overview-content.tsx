import { Space, theme, Typography } from "antd";
import { WarningOutlined } from "@ant-design/icons";
import WorkbenchDataTable from "./workbench-data-table";
import WorkbenchUserTable from "./workbench-user-table";
import { workbenchPurpose } from "@/lib/workbench-info";

const { Title } = Typography;

const OverviewContent = () => {
  const {
    token: { colorError },
  } = theme.useToken();

  return (
    <Space direction="vertical" style={{ width: "100%", gap: "2rem" }}>
      <div>
        <Title level={4}>Purpose</Title>
        <p>{workbenchPurpose}</p>
      </div>

      <div>
        <Title level={4}>Attachments</Title>
        <Space align="center" size="large">
          <WarningOutlined
            style={{
              fontSize: 24,
              color: colorError,
            }}
          />
          <span>No attachments in this workbench</span>
        </Space>
      </div>

      <div>
        <Title level={4}>Workbench Data</Title>
        <WorkbenchDataTable />
      </div>

      <div>
        <Title level={4}>Workbench Users</Title>
        <WorkbenchUserTable />
      </div>
    </Space>
  );
};

export default OverviewContent;
