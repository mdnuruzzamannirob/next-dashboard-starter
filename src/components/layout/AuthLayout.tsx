export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="flex min-h-dvh items-center justify-center bg-gray-100 p-3 lg:p-6">
      {children}
    </main>
  );
}
