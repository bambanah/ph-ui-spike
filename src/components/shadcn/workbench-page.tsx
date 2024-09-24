import { Button } from "@/components/shadcn/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/shadcn/ui/card";
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
import { WorkbenchDataTable } from "@/components/shadcn/workbench-data-table";
import { WorkbenchNotebooksTable } from "@/components/shadcn/workbench-notebooks-table";
import { WorkbenchUsersTable } from "@/components/shadcn/workbench-users-table";
import { workbenchPurpose } from "@/lib/workbench-info";
import { AlertCircle, EllipsisVertical, Plus, Search } from "lucide-react";
import Link from "next/link";

const WorkbenchPage = () => {
  return (
    <Card className="w-full max-w-4xl mx-auto mt-4">
      <CardHeader>
        <CardTitle className="flex w-full gap-2 items-center">
          <span>Test Workbench</span>
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
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="overview" className="flex flex-col gap-4">
          <TabsList>
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="notebooks">Notebooks</TabsTrigger>
          </TabsList>

          <TabsContent value="overview">
            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-2">
                <h4>Purpose</h4>
                <p>{workbenchPurpose}</p>
              </div>
              <div className="flex flex-col gap-2">
                <h4>Attachments</h4>
                <div className="flex gap-2 items-center">
                  <AlertCircle className="text-red-500" />
                  <p>No attachments in this workbench</p>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <h4>Workbench Data</h4>
                <WorkbenchDataTable />
              </div>
              <div className="flex flex-col gap-2">
                <h4>Workbench Users</h4>
                <WorkbenchUsersTable />
              </div>
            </div>
          </TabsContent>
          <TabsContent value="notebooks">
            <div className="flex flex-col gap-6">
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
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default WorkbenchPage;
