"use client";

import { navConfig } from "@/lib/nav-config";
import { Button, Layout, Menu, MenuProps, theme } from "antd";
import Image from "next/image";
import Link from "next/link";

const { Sider } = Layout;

const navItems: MenuProps["items"] = navConfig.map((item) => {
  return {
    key: item.href,
    label: <Link href={item.href}>{item.title}</Link>,
  };
});

interface Props {
  algorithm: "darkAlgorithm" | "defaultAlgorithm";
  setAlgorithm: React.Dispatch<
    React.SetStateAction<"darkAlgorithm" | "defaultAlgorithm">
  >;
}

const Navbar = ({ algorithm, setAlgorithm }: Props) => {
  const {
    token: { colorBgBase, colorBorderSecondary },
  } = theme.useToken();

  const toggleAlgorithm = () => {
    setAlgorithm(
      algorithm === "darkAlgorithm" ? "defaultAlgorithm" : "darkAlgorithm"
    );
  };

  return (
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
          width={200}
          height={40}
          src={
            algorithm === "darkAlgorithm"
              ? "/ph-banner-light.png"
              : "/ph-banner-dark.png"
          }
          className="border-border"
        />
      </div>
      <Menu
        mode="inline"
        defaultSelectedKeys={["/antd"]}
        style={{ borderRight: 0, backgroundColor: colorBgBase }}
        items={navItems}
      />
      <Button onClick={toggleAlgorithm}>Dark</Button>
    </Sider>
  );
};

export default Navbar;
