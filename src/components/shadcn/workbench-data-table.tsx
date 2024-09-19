"use client";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/shadcn/ui/table";
import { ChevronRight } from "lucide-react";
import { Badge } from "./ui/badge";
import { useState } from "react";
import { Button } from "./ui/button";
import { cn } from "@/lib/shadcn/utils";

const cohorts = [
  {
    name: "Test Query",
    patientCount: 127,
    completedDate: "31 Jan 2024",
    query:
      'SELECT patient_id as patient_id FROM `mk-propel-dev-admin.mk_propel_dev_mk_propel_dev_synthea_dataset.vw_allergy_intolerances` WHERE CONTAINS_SUBSTR(patient_id, "1")',
  },
  {
    name: "Second Query",
    patientCount: 2475,
    completedDate: "6 November 2022",
    query:
      'SELECT patient_id as patient_id FROM `mk-propel-dev-admin.mk_propel_dev_mk_propel_dev_synthea_dataset.vw_allergy_intolerances` WHERE CONTAINS_SUBSTR(patient_id, "1")',
  },
];

export function WorkbenchDataTable() {
  const [expanded, setExpanded] = useState<string[]>([]);

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-8"></TableHead>
          <TableHead>Cohort Name</TableHead>
          <TableHead className="text-right w-[10rem]">Patient Count</TableHead>
          <TableHead className="text-right w-[9rem]">Completed Date</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {cohorts.map((cohort) => (
          <TableRow key={cohort.name} className="">
            <TableCell className="p-2 text-right align-top">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => {
                  if (expanded.includes(cohort.name)) {
                    setExpanded(
                      expanded.filter((item) => item !== cohort.name)
                    );
                  } else {
                    setExpanded([...expanded, cohort.name]);
                  }
                }}
              >
                <ChevronRight
                  className={cn(
                    "cursor-pointer transition-transform",
                    expanded.includes(cohort.name) && "rotate-90"
                  )}
                />
              </Button>
            </TableCell>
            <TableCell className="font-medium align-top">
              {cohort.name}
              <Badge className="ml-4" variant="outline">
                Cohort Query
              </Badge>
              <div
                className={cn(
                  "mt-2 bg-muted/40 p-2 rounded-md font-mono",
                  expanded.includes(cohort.name) ? "block" : "hidden"
                )}
              >
                {cohort.query}
              </div>
            </TableCell>
            <TableCell className="text-right align-top">
              {cohort.patientCount.toLocaleString()}
            </TableCell>
            <TableCell className="text-right align-top">
              {cohort.completedDate.toString()}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
