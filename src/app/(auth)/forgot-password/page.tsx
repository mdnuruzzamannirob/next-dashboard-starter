import { ForgotPasswordForm } from '@/components/modules/auth/ForgotPasswordForm'
import { Logo } from '@/components/shared/Logo'
import { ArrowLeft } from 'lucide-react'
import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Reset Password - Administrator Dashboard',
  description:
    'Forgot your password? Reset it by entering your email address to receive a verification code.',
  keywords: 'forgot password, reset password, recovery, email verification',
}

export default function ForgotPasswordPage() {
  return (
    <main className="w-full max-w-md space-y-6 rounded-lg border border-gray-200 bg-white p-6">
      {/* Header */}
      <div className="space-y-2 text-center">
        <Logo />
        <h1 className="text-2xl font-bold text-gray-900">Reset Password</h1>
        <p className="text-sm text-gray-600">
          Enter your email address and we&apos;ll send you a verification code
        </p>
      </div>

      {/* Form */}
      <ForgotPasswordForm />

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
