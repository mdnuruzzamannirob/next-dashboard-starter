export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <main className="flex items-center justify-center min-h-dvh p-6">
      {children}
    </main>
  )
}
