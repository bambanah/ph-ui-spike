"use client";

import NotebookContent from "@/components/antd/notebooks-content";
import OverviewContent from "@/components/antd/overview-content";
import {
  Breadcrumb,
  Button,
  Dropdown,
  Flex,
  Layout,
  Space,
  Tabs,
  theme,
} from "antd";
import { EllipsisVertical } from "lucide-react";
import Link from "next/link";

const { Content } = Layout;

const WorkbenchPage = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout className="overflow-y-auto max-w-4xl mx-auto p-4">
      <Flex justify="space-between">
        <Breadcrumb
          style={{ margin: "16px 0" }}
          items={[
            { href: "#", title: "Workbenches" },
            { title: "Test Workbench" },
          ]}
        />
        <Space>
          <Button>Edit Workbench</Button>
          <Dropdown
            trigger={["click"]}
            placement={"bottomCenter"}
            menu={{
              items: [
                {
                  label: <Link href="#">Publish Cohort</Link>,
                  key: "publish",
                },
              ],
            }}
          >
            <Button icon={<EllipsisVertical />} type="text" />
          </Dropdown>
        </Space>
      </Flex>
      <Content
        style={{
          padding: 24,
          paddingTop: 8,
          margin: 0,
          minHeight: 280,
          background: colorBgContainer,
          borderRadius: borderRadiusLG,
        }}
      >
        <Tabs
          defaultActiveKey={"overview"}
          items={[
            {
              key: "overview",
              label: "Overview",
              children: <OverviewContent />,
            },
            {
              key: "notebooks",
              label: "Notebooks",
              children: <NotebookContent />,
            },
          ]}
        />
      </Content>
    </Layout>
  );
};

export default WorkbenchPage;
