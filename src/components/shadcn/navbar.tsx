"use client";

import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/shadcn/ui/tooltip";
import { navConfig } from "@/lib/nav-config";
import { cn } from "@/lib/shadcn/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ModeToggle } from "./theme-toggle";
import { useTheme } from "next-themes";

const Navbar = () => {
  const pathname = usePathname();
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
        {navConfig.map(({ href, title }) => (
          <Link
            key={title}
            href={href}
            className={cn(
              "flex items-center gap-3 rounded-lg px-3 py-2 transition-all hover:bg-muted hover:text-foreground",
              pathname?.startsWith(href)
                ? "bg-muted text-foreground"
                : "text-muted-foreground"
            )}
          >
            {title}
          </Link>
        ))}
      </nav>
      <nav className="mt-auto mx-auto pb-5">
        <ModeToggle />
      </nav>
    </aside>
  );
};

export default Navbar;
