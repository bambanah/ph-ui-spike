import { File } from "lucide-react";
import Link from "next/link";
import React from "react";
import { Button } from "./button";

interface Props {
  fileName: string;
}

const FileLink = ({ fileName }: Props) => {
  return (
    <Button asChild variant="link" className="flex items-center gap-2">
      <Link href="#">
        <File className="w-4 h-4" /> {fileName}
      </Link>
    </Button>
  );
};

export default FileLink;
