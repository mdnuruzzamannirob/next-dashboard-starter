"use client";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { SheetClose } from "@/components/ui/sheet";
import { sidebarLinks } from "@/lib/constants";
import { LogOut } from "lucide-react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

const SidebarContent = ({ closeOnNavigate = false }: { closeOnNavigate?: boolean }) => {
  const pathname = usePathname();
  const router = useRouter();

  return (
    <div className="flex h-full min-h-0 flex-col">
      <div className="text-primary flex h-16 items-center border-b px-6 text-xl font-semibold">
        Healthcare
      </div>
      <nav className="min-h-0 flex-1 space-y-2 overflow-y-auto p-3">
        {sidebarLinks?.map((link) =>
          closeOnNavigate ? (
            <SheetClose key={link.href} asChild>
              <Link
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
            </SheetClose>
          ) : (
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
          )
        )}
      </nav>
      <div className="p-3 pt-0">
        <AlertDialog>
          <AlertDialogTrigger asChild>
            <button
              type="button"
              className="text-muted-foreground hover:bg-red-100 hover:text-red-600 flex w-full items-center gap-2.5 rounded-lg px-3 py-2.5 text-sm font-medium transition"
            >
              <LogOut size={20} />
              Logout
            </button>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Confirm logout</AlertDialogTitle>
              <AlertDialogDescription>
                Are you sure you want to logout from your account?
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <AlertDialogAction onClick={() => router.replace("/login")}>Logout</AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </div>
    </div>
  );
};

export default SidebarContent;
