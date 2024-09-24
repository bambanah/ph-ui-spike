import { cn } from "@/lib/shadcn/utils";
import { HTMLProps } from "react";

export const H1 = ({ className, ...rest }: HTMLProps<HTMLHeadingElement>) => (
  <h1
    className={cn(
      "scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl",
      className
    )}
    {...rest}
  />
);

export const H2 = ({ className, ...rest }: HTMLProps<HTMLHeadingElement>) => (
  <h2
    className={cn(
      "scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0",
      className
    )}
    {...rest}
  />
);

export const H3 = ({ className, ...rest }: HTMLProps<HTMLHeadingElement>) => (
  <h3
    className={cn(
      "scroll-m-20 text-2xl font-semibold tracking-tight mb-2",
      className
    )}
    {...rest}
  />
);
