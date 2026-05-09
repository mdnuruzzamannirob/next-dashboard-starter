"use client";

import { sidebarLinks } from "@/lib/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";

const SidebarContent = () => {
  const pathname = usePathname();

  return (
    <>
      <div className="text-primary flex h-16 items-center border-b px-6 text-xl font-semibold">
        Healthcare
      </div>
      <nav className="flex-1 space-y-2 p-3">
        {sidebarLinks?.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`flex items-center gap-2.5 rounded-lg px-3 py-2.5 text-sm font-medium transition ${
              pathname === link.href
                ? "bg-primary text-primary-foreground"
                : "text-muted-foreground hover:bg-primary/10 hover:text-primary"
            }`}
          >
            {link.icon}
            {link.label}
          </Link>
        ))}
      </nav>
    </>
  );
};

export default SidebarContent;
