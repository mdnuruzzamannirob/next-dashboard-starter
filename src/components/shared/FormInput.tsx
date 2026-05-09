'use client'

import { AlertCircle } from 'lucide-react'
import { forwardRef, InputHTMLAttributes, ReactNode } from 'react'
import { FieldError } from 'react-hook-form'

interface FormInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string
  error?: FieldError
  icon?: ReactNode
  endAdornment?: ReactNode
}

export const FormInput = forwardRef<HTMLInputElement, FormInputProps>(
  ({ label, error, icon, endAdornment, className = '', ...props }, ref) => {
    return (
      <div className="w-full space-y-2">
        <label
          htmlFor={props.id}
          className="block text-sm font-medium text-gray-700"
        >
          {label}
        </label>
        <div className="relative">
          {icon && (
            <div className="pointer-events-none absolute left-0 top-0 h-full flex items-center justify-center w-10 text-gray-400">
              {icon}
            </div>
          )}
          <input
            ref={ref}
            className={`
              w-full px-3 py-2 border rounded-lg
              ${icon ? 'pl-10' : ''}
              ${endAdornment ? 'pr-10' : ''}
              ${error ? 'border-red-500' : 'border-gray-300'}
              focus:outline-none focus:ring-2 ${error ? 'focus:ring-red-500' : 'focus:ring-blue-500'} focus:border-transparent
              disabled:bg-gray-50 disabled:text-gray-500
              transition-all
              ${className}
            `}
            {...props}
          />
          {endAdornment && (
            <div className="absolute right-0 top-0 h-full flex items-center justify-center w-10">
              {endAdornment}
            </div>
          )}
        </div>
        {error && (
          <div className="flex items-center gap-1 text-xs text-red-500">
            <AlertCircle size={16} />
            <span>{error.message}</span>
          </div>
        )}
      </div>
    )
  },
)

FormInput.displayName = 'FormInput'
