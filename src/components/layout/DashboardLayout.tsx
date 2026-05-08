import DesktopSidebar from './DesktopSidebar'
import Header from './Header'

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className="min-h-dvh flex">
      <DesktopSidebar />

      <div className="flex-1 flex flex-col min-w-0">
        <Header />

        <main className="flex-1 p-6 lg:p-10 bg-gray-50/50">{children}</main>

        <footer className="py-4 px-6 border-t bg-white text-sm text-gray-500 text-center">
          © {new Date().getFullYear()} Your Brand
        </footer>
      </div>
    </div>
  )
}
