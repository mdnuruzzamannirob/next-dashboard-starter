'use client'

import { verifyEmailSchema, type VerifyEmailFormData } from '@/lib/schemas'
import { zodResolver } from '@hookform/resolvers/zod'
import { RefreshCw } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { useRef, useState } from 'react'
import { useForm } from 'react-hook-form'

export function VerifyEmailForm() {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)
  const [isResending, setIsResending] = useState(false)
  const inputRefs = useRef<(HTMLInputElement | null)[]>([])

  const {
    watch,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm<VerifyEmailFormData>({
    resolver: zodResolver(verifyEmailSchema),
    mode: 'onChange',
  })

  // eslint-disable-next-line react-hooks/incompatible-library
  const code = watch('code') || ''

  const handleChange = (index: number, value: string) => {
    // Only allow digits
    const digit = value.replace(/\D/g, '').slice(-1)

    // Update the code string
    const codeArray = code.split('')
    codeArray[index] = digit
    const newCode = codeArray.slice(0, 6).join('')

    setValue('code', newCode)

    // Auto focus to next input
    if (digit && index < 5) {
      inputRefs.current[index + 1]?.focus()
    }
  }

  const handleKeyDown = (
    index: number,
    e: React.KeyboardEvent<HTMLInputElement>,
  ) => {
    if (e.key === 'Backspace') {
      const codeArray = code.split('')
      if (codeArray[index]) {
        codeArray[index] = ''
        setValue('code', codeArray.slice(0, 6).join(''))
      } else if (index > 0) {
        inputRefs.current[index - 1]?.focus()
      }
    } else if (e.key === 'ArrowLeft' && index > 0) {
      inputRefs.current[index - 1]?.focus()
    } else if (e.key === 'ArrowRight' && index < 5) {
      inputRefs.current[index + 1]?.focus()
    }
  }

  const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    e.preventDefault()
    const pastedData = e.clipboardData.getData('text').replace(/\D/g, '')
    const digits = pastedData.slice(0, 6)

    setValue('code', digits)

    // Focus on the next empty field or last field
    const focusIndex = Math.min(digits.length, 5)
    setTimeout(() => {
      inputRefs.current[focusIndex]?.focus()
    }, 0)
  }

  const onSubmit = async (data: VerifyEmailFormData) => {
    setIsLoading(true)
    try {
      // TODO: Implement email verification API call
      console.log('Verify email data:', data)
      // await verifyEmailApi(data)
      router.push('/reset-password')
    } catch (error) {
      console.error('Email verification error:', error)
    } finally {
      setIsLoading(false)
    }
  }

  const handleResendCode = async () => {
    setIsResending(true)
    try {
      // TODO: Implement resend code API call
      console.log('Resending verification code...')
      // await resendVerificationCodeApi()
      setValue('code', '')
      inputRefs.current[0]?.focus()
    } catch (error) {
      console.error('Resend error:', error)
    } finally {
      setIsResending(false)
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      {/* OTP Input Fields */}
      <div className="space-y-2">
        <label className="block text-sm font-medium text-gray-700">
          Verification Code
        </label>
        <div className="flex justify-center gap-2">
          {Array.from({ length: 6 }).map((_, index) => (
            <input
              key={index}
              ref={(el) => {
                inputRefs.current[index] = el
              }}
              type="text"
              inputMode="numeric"
              maxLength={1}
              value={code[index] || ''}
              onChange={(e) => handleChange(index, e.target.value)}
              onKeyDown={(e) => handleKeyDown(index, e)}
              onPaste={handlePaste}
              className={`
                h-12 w-12 rounded-lg border px-3 py-2 text-center text-xl font-semibold
                ${errors.code ? 'border-red-500' : 'border-gray-300'}
                focus:outline-none focus:ring-2 focus:border-transparent ${errors.code ? 'focus:ring-red-500' : 'focus:ring-primary'}
                transition-all
              `}
            />
          ))}
        </div>
        {errors.code && (
          <p className="text-center text-sm text-red-500">
            {errors.code.message}
          </p>
        )}
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isLoading || code.length < 6}
        className="w-full rounded-lg bg-primary py-2 font-medium text-white hover:bg-primary/90 disabled:opacity-50 transition-colors"
      >
        {isLoading ? 'Verifying...' : 'Verify Code'}
      </button>

      {/* Resend Code */}
      <div className="text-center">
        <p className="text-sm text-gray-600">Didn&apos;t receive the code?</p>
        <button
          type="button"
          onClick={handleResendCode}
          disabled={isResending}
          className="mt-2 inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:text-primary/90 disabled:opacity-50"
        >
          <RefreshCw size={16} className={isResending ? 'animate-spin' : ''} />
          <span>{isResending ? 'Sending...' : 'Resend Code'}</span>
        </button>
      </div>
    </form>
  )
}
