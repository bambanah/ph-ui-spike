"use client";

import NotebookContent from "@/components/antd/notebooks-content";
import OverviewContent from "@/components/antd/overview-content";
import { navConfig } from "@/lib/nav-config";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import {
  Breadcrumb,
  Button,
  Dropdown,
  Flex,
  Layout,
  Menu,
  MenuProps,
  Space,
  Tabs,
  theme,
} from "antd";
import { EllipsisVertical } from "lucide-react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

const { Content, Sider } = Layout;

const navItems: MenuProps["items"] = navConfig.map((item) => {
  return {
    key: item.href,
    label: <Link href={item.href}>{item.title}</Link>,
  };
});

const AntDesignPage = () => {
  const {
    token: {
      colorBgContainer,
      borderRadiusLG,
      colorBgBase,
      colorBorderSecondary,
    },
  } = theme.useToken();

  return (
    <AntdRegistry>
      <Head>
        <title>Ant Design</title>
      </Head>

      <Layout style={{ height: "100vh", overflow: "hidden" }}>
        <Sider
          width={200}
          className="h-full px-2"
          style={{
            backgroundColor: colorBgBase,
            borderRight: `solid ${colorBorderSecondary}`,
            borderRightWidth: "1px",
          }}
        >
          <div className="py-4">
            <Image
              alt="propel logo"
              width={8269}
              height={1702}
              src="/ph-banner-light.png"
            />
          </div>
          <Menu
            mode="inline"
            defaultSelectedKeys={["/antd"]}
            style={{ borderRight: 0, backgroundColor: colorBgBase }}
            items={navItems}
          />
        </Sider>
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
      </Layout>
    </AntdRegistry>
  );
};

export default AntDesignPage;
