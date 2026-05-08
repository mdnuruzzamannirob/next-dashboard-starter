import AuthLayout from '@/components/layout/AuthLayout'

export default function layout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return <AuthLayout>{children}</AuthLayout>
}
