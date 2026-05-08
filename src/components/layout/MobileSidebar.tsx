import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
import { Menu } from 'lucide-react'
import SidebarContent from './SidebarContent'

export const MobileSidebar = () => {
  return (
    <Sheet>
      <SheetTrigger className="p-2 hover:bg-gray-100 rounded-md">
        <Menu size={24} />
      </SheetTrigger>
      <SheetContent side="left" className="p-0 min-w-64 max-w-64! bg-slate-900 border-none">
        <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
        <aside className="flex flex-col h-full overflow-y-auto">
          <SidebarContent />
        </aside>
      </SheetContent>
    </Sheet>
  )
}
