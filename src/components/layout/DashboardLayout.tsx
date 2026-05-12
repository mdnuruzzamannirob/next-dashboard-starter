import DesktopSidebar from "./DesktopSidebar";
import Header from "./Header";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex min-h-dvh">
      <DesktopSidebar />

      <div className="flex min-w-0 flex-1 flex-col">
        <Header />
        <main className="flex-1 bg-gray-100 p-3 lg:p-6">{children}</main>
      </div>
    </div>
  );
}
