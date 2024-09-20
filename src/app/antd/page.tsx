"use client";

import NotebookContent from "@/components/antd/notebooks-content";
import OverviewContent from "@/components/antd/overview-content";
import { navConfig } from "@/lib/nav-config";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import { Breadcrumb, Layout, Menu, MenuProps, Tabs, theme } from "antd";
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
        <Layout className="overflow-y-auto max-w-6xl mx-auto p-4">
          <Breadcrumb style={{ margin: "16px 0" }}>
            <Breadcrumb.Item>
              <Link href="#">Workbenches</Link>
            </Breadcrumb.Item>
            <Breadcrumb.Item>Test Workbench</Breadcrumb.Item>
          </Breadcrumb>
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
