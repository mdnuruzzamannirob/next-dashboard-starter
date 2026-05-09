'use client'

import { FormInput } from '@/components/shared/FormInput'
import { resetPasswordSchema, type ResetPasswordFormData } from '@/lib/schemas'
import { zodResolver } from '@hookform/resolvers/zod'
import { Eye, EyeOff, Lock } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { useForm } from 'react-hook-form'

export function ResetPasswordForm() {
  const router = useRouter()
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<ResetPasswordFormData>({
    resolver: zodResolver(resetPasswordSchema),
  })

  // eslint-disable-next-line react-hooks/incompatible-library
  const password = watch('password')

  // Check password requirements
  const requirements = {
    length: password?.length >= 8,
    uppercase: /[A-Z]/.test(password || ''),
    number: /[0-9]/.test(password || ''),
    special: /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>/?]/.test(password || ''),
  }

  const onSubmit = async (data: ResetPasswordFormData) => {
    setIsLoading(true)
    try {
      // TODO: Implement reset password API call with token from URL
      console.log('Reset password data:', data)
      // await resetPasswordApi(data, token)
      router.push('/login')
    } catch (error) {
      console.error('Reset password error:', error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <FormInput
        id="password"
        label="New Password"
        type={showPassword ? 'text' : 'password'}
        placeholder="Enter new password"
        icon={<Lock size={18} />}
        error={errors.password}
        autoComplete="new-password"
        endAdornment={
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="text-gray-400 hover:text-gray-600 transition-colors"
            aria-label={showPassword ? 'Hide password' : 'Show password'}
          >
            {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
          </button>
        }
        {...register('password')}
      />

      <FormInput
        id="confirmPassword"
        label="Confirm Password"
        type={showConfirmPassword ? 'text' : 'password'}
        placeholder="Confirm new password"
        icon={<Lock size={18} />}
        error={errors.confirmPassword}
        autoComplete="new-password"
        endAdornment={
          <button
            type="button"
            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            className="text-gray-400 hover:text-gray-600 transition-colors"
            aria-label={showConfirmPassword ? 'Hide password' : 'Show password'}
          >
            {showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
          </button>
        }
        {...register('confirmPassword')}
      />

      {/* Password Requirements */}
      <div
        className="rounded-lg bg-gray-50 p-4"
        role="region"
        aria-label="Password requirements"
      >
        <p className="mb-2 text-xs font-medium text-gray-700">
          Password must contain:
        </p>
        <ul className="space-y-1 text-xs">
          <li
            className={requirements.length ? 'text-green-600' : 'text-gray-600'}
          >
            ✓ At least 8 characters
          </li>
          <li
            className={
              requirements.uppercase ? 'text-green-600' : 'text-gray-600'
            }
          >
            ✓ One uppercase letter
          </li>
          <li
            className={requirements.number ? 'text-green-600' : 'text-gray-600'}
          >
            ✓ One number
          </li>
          <li
            className={
              requirements.special ? 'text-green-600' : 'text-gray-600'
            }
          >
            ✓ One special character (!@#$%^&*)
          </li>
        </ul>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isLoading}
        className="w-full rounded-lg bg-blue-600 py-2 font-medium text-white hover:bg-blue-700 disabled:opacity-50 transition-colors"
      >
        {isLoading ? 'Resetting...' : 'Reset Password'}
      </button>
    </form>
  )
}
