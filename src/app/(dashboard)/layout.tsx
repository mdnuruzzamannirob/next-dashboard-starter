import DashboardLayout from '@/components/layout/DashboardLayout'

export default function layout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return <DashboardLayout>{children}</DashboardLayout>
}
