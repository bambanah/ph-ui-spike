import { Button, Dropdown } from "antd";
import { Palette } from "lucide-react";
import Link from "next/link";
import React from "react";

const FrameworkLinks = () => {
  return (
    <Dropdown
      trigger={["click"]}
      placement={"bottomCenter"}
      menu={{
        items: [
          {
            label: <Link href="/shadcn">shadcn/ui</Link>,
            key: "shadcn",
          },
          {
            label: <Link href="/antd">Ant Design</Link>,
            key: "antd",
            disabled: true,
          },
          {
            label: <Link href="/mantine">Mantine</Link>,
            key: "mantine",
          },
        ],
      }}
    >
      <Button
        icon={<Palette className="w-[1.2rem] h-[1.2rem]" />}
        type="text"
      />
    </Dropdown>
  );
};

export default FrameworkLinks;
