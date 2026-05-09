import { LoginForm } from '@/components/modules/auth/LoginForm'
import { Logo } from '@/components/shared/Logo'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Sign In - Administrator Dashboard',
  description:
    'Sign in to your administrator dashboard account. Secure login with email and password authentication.',
  keywords: 'login, sign in, administrator, dashboard, authentication',
}

export default function LoginPage() {
  return (
    <main className="w-full max-w-md space-y-8 rounded-xl border border-gray-200 bg-white p-6">
      {/* Header */}
      <div className="space-y-2 text-center">
        <Logo />
        <h1 className="text-2xl font-bold text-gray-900">Welcome Back</h1>
        <p className="text-sm text-gray-600">
          Sign in to your account to continue
        </p>
      </div>

      {/* Form */}
      <LoginForm />
    </main>
  )
}
