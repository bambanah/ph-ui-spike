import { Compass, Database, History, Laptop, User } from "lucide-react";

export const navConfig: {
  title: string;
  href: string;
  icon?: React.ReactNode;
}[] = [
  {
    title: "Data Catalogue",
    href: "#",
    icon: <Database className="w-4 h-4" />,
  },
  {
    title: "Data Explorer",
    href: "#",
    icon: <Compass className="w-4 h-4" />,
  },
  {
    title: "Workbench",
    href: "#",
    icon: <Laptop className="w-4 h-4" />,
  },
  {
    title: "User Management",
    href: "#",
    icon: <User className="w-4 h-4" />,
  },
  {
    title: "Audit Log",
    href: "#",
    icon: <History className="w-4 h-4" />,
  },
];
