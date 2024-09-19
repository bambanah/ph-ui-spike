"use client";

import { navConfig } from "@/lib/nav-config";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import { Breadcrumb, Layout, Menu, MenuProps, theme } from "antd";
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
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <AntdRegistry>
      <Layout style={{ height: "100vh", overflow: "hidden" }}>
        <Sider width={200} style={{ height: "100%" }}>
          <div>LOGO</div>
          <Menu
            mode="inline"
            defaultSelectedKeys={["/antd"]}
            style={{ borderRight: 0 }}
            items={navItems}
          />
        </Sider>
        <Layout style={{ padding: "0 24px 24px", overflowY: "auto" }}>
          <Breadcrumb style={{ margin: "16px 0" }}>
            <Breadcrumb.Item>Workbenches</Breadcrumb.Item>
            <Breadcrumb.Item>Test Workbench</Breadcrumb.Item>
          </Breadcrumb>
          <Content
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            Content
          </Content>
        </Layout>
      </Layout>
    </AntdRegistry>
  );
};

export default AntDesignPage;
