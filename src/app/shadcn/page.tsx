import Navbar from "@/components/shadcn/navbar";
import { ThemeProvider } from "@/components/shadcn/theme-provider";
import WorkbenchPage from "@/components/shadcn/workbench-page";
import { Metadata } from "next";

import "./shadcn.css";

export const metadata: Metadata = {
  title: "Shadcn",
};

const ShadcnPage = () => {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <div className="grid h-screen w-full md:grid-cols-[200px_1fr]">
        <Navbar />

        <div className="bg-muted/40 min-h-screen overflow-y-auto p-8">
          <WorkbenchPage />
        </div>
      </div>
    </ThemeProvider>
  );
};

export default ShadcnPage;
