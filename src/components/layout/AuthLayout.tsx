export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <main className="flex items-center bg-gray-100 justify-center min-h-dvh p-6">
      {children}
    </main>
  )
}
