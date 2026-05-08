import SidebarContent from './SidebarContent'

const DesktopSidebar = () => {
  return (
    <aside className="hidden md:flex flex-col w-64 sticky top-0 h-dvh bg-slate-900 border-r border-slate-800">
      <SidebarContent />
    </aside>
  )
}

export default DesktopSidebar
