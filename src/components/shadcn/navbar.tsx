"use client";

import { TooltipContent } from "@/components/shadcn/ui/tooltip";
import { navConfig } from "@/lib/nav-config";
import { cn } from "@/lib/shadcn/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ModeToggle } from "./theme-toggle";
import { Tooltip, TooltipTrigger } from "./ui/tooltip";

const Navbar = () => {
  const pathname = usePathname();

  return (
    <aside className="flex h-full max-h-screen flex-col gap-2">
      <div className="flex h-14 items-center border-b lg:h-[60px] justify-center">
        <Link href="/" className="flex items-center gap-1">
          <Image alt="propel logo" width={40} height={40} src="/ph-icon.png" />
          <span className="">Propel Health AI</span>
        </Link>
      </div>
      <nav className="pt-4 grid items-start px-2 font-medium lg:px-4">
        {navConfig.map(({ href, title }) => (
          <Link
            key={title}
            href={href}
            className={cn(
              "flex items-center gap-3 rounded-lg px-3 py-2 transition-all hover:text-primary",
              pathname?.startsWith(href)
                ? "bg-muted text-foreground"
                : "text-muted-foreground"
            )}
          >
            {title}
          </Link>
        ))}
      </nav>
      <nav className="mt-auto flex flex-col items-center gap-4 px-2 sm:py-5">
        <Tooltip>
          <TooltipTrigger asChild>
            <ModeToggle />
          </TooltipTrigger>
          <TooltipContent side="right">Settings</TooltipContent>
        </Tooltip>
      </nav>
    </aside>
  );
};

export default Navbar;
