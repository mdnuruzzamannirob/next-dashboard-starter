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

        <main className="flex-1 p-6 bg-gray-100">{children}</main>
      </div>
    </div>
  )
}
