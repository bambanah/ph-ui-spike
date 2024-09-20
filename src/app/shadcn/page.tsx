import Navbar from "@/components/shadcn/navbar";
import { ThemeProvider } from "@/components/shadcn/theme-provider";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/shadcn/ui/breadcrumb";
import { Button } from "@/components/shadcn/ui/button";
import { Card, CardContent } from "@/components/shadcn/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/shadcn/ui/dropdown-menu";
import { Input } from "@/components/shadcn/ui/input";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/shadcn/ui/tabs";
import { TooltipProvider } from "@/components/shadcn/ui/tooltip";
import { H3 } from "@/components/shadcn/ui/typography";
import { WorkbenchDataTable } from "@/components/shadcn/workbench-data-table";
import { WorkbenchNotebooksTable } from "@/components/shadcn/workbench-notebooks-table";
import { WorkbenchUsersTable } from "@/components/shadcn/workbench-users-table";
import { AlertCircle, EllipsisVertical, Plus, Search } from "lucide-react";
import { Metadata } from "next";
import Link from "next/link";

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
      <TooltipProvider>
        <div className="grid min-h-screen w-full md:grid-cols-[200px_1fr]">
          <Navbar />

          <div className="bg-muted/40 min-h-screen p-8">
            <div className="max-w-6xl mx-auto">
              <div className="w-full flex gap-2 items-center">
                <Breadcrumb>
                  <BreadcrumbList>
                    <BreadcrumbItem>
                      <BreadcrumbLink href="#">Workbenches</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                      <BreadcrumbPage className="text-xl">
                        Workbench Name
                      </BreadcrumbPage>
                    </BreadcrumbItem>
                  </BreadcrumbList>
                </Breadcrumb>
                <Button variant="outline" className="ml-auto">
                  Edit Workbench
                </Button>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon">
                      <EllipsisVertical />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <Link href="#">
                      <DropdownMenuItem className="cursor-pointer">
                        Publish Cohort
                      </DropdownMenuItem>
                    </Link>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>

            <Tabs defaultValue="overview" className="w-full max-w-6xl mx-auto">
              <div className="my-4">
                <TabsList>
                  <TabsTrigger value="overview">Overview</TabsTrigger>
                  <TabsTrigger value="notebooks">Notebooks</TabsTrigger>
                </TabsList>
              </div>

              <TabsContent value="overview" className="">
                <Card>
                  <CardContent className="flex flex-col gap-8 p-6">
                    <div>
                      <H3>Purpose</H3>
                      <p>
                        Showcasing what a workbench page would look like built
                        with the shadcn/ui library.
                      </p>
                    </div>
                    <div>
                      <H3>Attachments</H3>
                      <span className="flex gap-2">
                        <AlertCircle className="text-red-500" /> No attachments
                        in this workbench
                      </span>
                    </div>
                    <div>
                      <H3>Workbench Data</H3>
                      <WorkbenchDataTable />
                    </div>
                    <div>
                      <H3>Workbench Users</H3>
                      <WorkbenchUsersTable />
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="notebooks" className="max-w-6xl mx-auto">
                <Card>
                  <CardContent className="flex flex-col gap-4 p-6">
                    <div className="w-full flex justify-between items-center">
                      <div className="flex items-center space-x-2 max-w-sm w-full">
                        <Input type="text" placeholder="Search..." />
                        <Button type="submit" variant="outline">
                          <Search className="w-4 h-4" />
                        </Button>
                      </div>
                      <Button className="flex gap-2">
                        <Plus className="w-4 h-4" />
                        Create Notebook
                      </Button>
                    </div>
                    <WorkbenchNotebooksTable />
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </TooltipProvider>
    </ThemeProvider>
  );
};

export default ShadcnPage;
