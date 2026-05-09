import { ResetPasswordForm } from '@/components/modules/auth/ResetPasswordForm'
import { Logo } from '@/components/shared/Logo'
import { ArrowLeft } from 'lucide-react'
import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Create New Password - Administrator Dashboard',
  description:
    'Create a new secure password for your administrator dashboard account. Password must contain uppercase, numbers, and special characters.',
  keywords: 'reset password, create password, security, password change',
}

export default function ResetPasswordPage() {
  return (
    <main className="w-full max-w-md space-y-6 rounded-lg border border-gray-200 bg-white p-8 shadow-sm">
      {/* Header */}
      <div className="space-y-2 text-center">
        <Logo />
        <h1 className="text-2xl font-bold text-gray-900">
          Create New Password
        </h1>
        <p className="text-sm text-gray-600">Enter your new password below</p>
      </div>

      {/* Form */}
      <ResetPasswordForm />

      {/* Back to Login */}
      <Link
        href="/login"
        className="flex items-center justify-center gap-2 text-sm text-gray-600 hover:text-gray-900"
      >
        <ArrowLeft size={16} />
        Back to login
      </Link>
    </main>
  )
}
