import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import SidebarContent from "./SidebarContent";

export const MobileSidebar = () => {
  return (
    <Sheet>
      <SheetTrigger className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-gray-100">
        <Menu size={18} />
      </SheetTrigger>
      <SheetContent side="left" className="max-w-64! min-w-64 border-none p-0">
        <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
        <aside className="flex h-full flex-col overflow-hidden">
          <SidebarContent closeOnNavigate />
        </aside>
      </SheetContent>
    </Sheet>
  );
};
