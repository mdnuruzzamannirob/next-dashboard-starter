import { VerifyEmailForm } from '@/components/modules/auth/VerifyEmailForm'
import { Logo } from '@/components/shared/Logo'
import { ArrowLeft } from 'lucide-react'
import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Verify Email - Administrator Dashboard',
  description:
    'Verify your email address by entering the 6-digit code sent to you. Secure email verification for account recovery.',
  keywords: 'verify email, email verification, otp, two factor authentication',
}

export default function VerifyEmailPage() {
  return (
    <main className="w-full max-w-md space-y-6 rounded-lg border border-gray-200 bg-white p-8 shadow-sm">
      {/* Header */}
      <div className="space-y-2 text-center">
        <Logo />
        <h1 className="text-2xl font-bold text-gray-900">Verify Email</h1>
        <p className="text-sm text-gray-600">
          Enter the 6-digit code sent to your email
        </p>
      </div>

      {/* Form */}
      <VerifyEmailForm />

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
