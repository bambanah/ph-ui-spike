"use client";

import { navConfig } from "@/lib/nav-config";
import { cn } from "@/lib/shadcn/utils";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import FrameworkLinks from "./framework-links";
import { ModeToggle } from "./theme-toggle";

const Navbar = () => {
  const { resolvedTheme } = useTheme();

  return (
    <aside className="flex h-full max-h-screen flex-col gap-2 p-2">
      <div className="flex h-14 items-center lg:h-[60px] justify-center">
        <Image
          alt="propel logo"
          width={8269}
          height={1702}
          src={
            resolvedTheme === "dark"
              ? "/ph-banner-light.png"
              : "/ph-banner-dark.png"
          }
        />
      </div>
      <nav className="grid items-start text-sm font-medium gap-1">
        {navConfig.map(({ href, title, icon }) => (
          <Link
            key={title}
            href={href}
            className={cn(
              "flex items-center gap-2 rounded-lg px-4 py-3 transition-all hover:bg-muted hover:text-foreground",
              title === "Workbench"
                ? "bg-muted text-foreground"
                : "text-muted-foreground"
            )}
          >
            {icon}
            {title}
          </Link>
        ))}
      </nav>
      <nav className="mt-auto mx-auto pb-5 flex gap-2">
        <ModeToggle />
        <FrameworkLinks />
      </nav>
    </aside>
  );
};

export default Navbar;
