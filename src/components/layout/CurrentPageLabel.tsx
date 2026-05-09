"use client";

import { sidebarLinks } from "@/lib/constants";
import { usePathname } from "next/navigation";

const CurrentPageLabel = () => {
  const pathname = usePathname();

  const currentPageLabel =
    sidebarLinks.find((link) => link.href === pathname)?.label || "Dashboard";

  return <h3 className="font-semibold truncate">{currentPageLabel}</h3>;
};

export default CurrentPageLabel;
