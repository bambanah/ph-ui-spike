"use client";

import { ActionIcon, Menu } from "@mantine/core";
import { Palette } from "lucide-react";
import Link from "next/link";

const FrameworkLinks = () => {
  return (
    <Menu>
      <Menu.Target>
        <ActionIcon variant="default" size="lg">
          <Palette className="h-[1.2rem] w-[1.2rem]" />
        </ActionIcon>
      </Menu.Target>

      <Menu.Dropdown>
        <Menu.Item>
          <Link href="/shadcn">shadcn/ui</Link>
        </Menu.Item>
        <Menu.Item>
          <Link href="/antd">Ant Design</Link>
        </Menu.Item>
        <Menu.Item disabled>
          <Link href="/mantine">Mantine</Link>
        </Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
};

export default FrameworkLinks;
