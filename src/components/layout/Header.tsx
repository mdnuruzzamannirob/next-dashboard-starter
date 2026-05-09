import { MobileSidebar } from './MobileSidebar'

const Header = () => {
  return (
    <header className="sticky top-0 z-20 h-16 w-full border-b bg-white/80 backdrop-blur-md flex items-center justify-between px-4 md:px-6">
      <div className="flex items-center gap-3">
        <div className="md:hidden">
          <MobileSidebar />
        </div>
        <h3 className="font-semibold text-gray-700">Dashboard Overview</h3>
      </div>

      <div className="flex items-center gap-3 md:gap-4">
        <div className="w-8 h-8 rounded-full bg-slate-200"></div>
      </div>
    </header>
  )
}

export default Header
