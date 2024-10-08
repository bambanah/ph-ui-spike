"use client";

import { navConfig } from "@/lib/nav-config";
import { Button, Flex, Layout, Menu, MenuProps, theme } from "antd";
import { Moon, Sun } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import FrameworkLinks from "./framework-links";

const { Sider } = Layout;

const navItems: MenuProps["items"] = navConfig.map((item) => {
  return {
    key: item.title,
    label: <Link href={item.href}>{item.title}</Link>,
    icon: item.icon,
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
    const newAlgorithm =
      algorithm === "darkAlgorithm" ? "defaultAlgorithm" : "darkAlgorithm";

    localStorage.setItem("ant-theme", newAlgorithm);
    setAlgorithm(newAlgorithm);
  };

  return (
    <Sider
      width={250}
      className="h-full px-2"
      style={{
        backgroundColor: colorBgBase,
        borderRight: `1px solid ${colorBorderSecondary}`,
      }}
    >
      <div className="py-4 flex flex-col gap-6 h-full">
        <Image
          alt="propel logo"
          width={200}
          height={40}
          src={
            algorithm === "darkAlgorithm"
              ? "/ph-banner-light.png"
              : "/ph-banner-dark.png"
          }
          className="mx-auto"
        />
        <Menu
          mode="inline"
          defaultSelectedKeys={["Workbench"]}
          style={{ borderRight: 0, backgroundColor: colorBgBase }}
          items={navItems}
        />
        <Flex justify="center" gap={"0.5rem"} className="mt-auto mb-4">
          <Button
            icon={
              algorithm === "darkAlgorithm" ? (
                <Moon className="w-[1.2rem] h-[1.2rem]" />
              ) : (
                <Sun className="w-[1.2rem] h-[1.2rem]" />
              )
            }
            type="text"
            onClick={toggleAlgorithm}
          />
          <FrameworkLinks />
        </Flex>
      </div>
    </Sider>
  );
};

export default Navbar;
