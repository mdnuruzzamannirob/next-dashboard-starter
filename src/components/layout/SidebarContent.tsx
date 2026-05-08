import { LayoutDashboard, Settings, User } from 'lucide-react'
import Link from 'next/link'

const SidebarContent = () => {
  return (
    <>
      <div className="px-6 h-16 flex items-center text-xl font-bold text-white border-b border-slate-800">
        BrandLogo
      </div>
      <nav className="flex-1 p-4 space-y-2">
        <Link
          href="/"
          className="flex items-center gap-3 px-4 py-2 rounded-md hover:bg-slate-800 transition text-slate-300 hover:text-white"
        >
          <LayoutDashboard size={20} /> Dashboard
        </Link>
        <Link
          href="/users"
          className="flex items-center gap-3 px-4 py-2 rounded-md hover:bg-slate-800 transition text-slate-300 hover:text-white"
        >
          <User size={20} /> Users
        </Link>
        <Link
          href="/settings"
          className="flex items-center gap-3 px-4 py-2 rounded-md hover:bg-slate-800 transition text-slate-300 hover:text-white"
        >
          <Settings size={20} /> Settings
        </Link>
      </nav>
    </>
  )
}

export default SidebarContent
