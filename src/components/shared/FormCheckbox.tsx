'use client'

import { forwardRef, InputHTMLAttributes } from 'react'
import { FieldError } from 'react-hook-form'

interface FormCheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string
  error?: FieldError
}

export const FormCheckbox = forwardRef<HTMLInputElement, FormCheckboxProps>(
  ({ label, error, className = '', ...props }, ref) => {
    return (
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <input
            ref={ref}
            type="checkbox"
            className={`
              w-4 h-4 rounded border-gray-300
              cursor-pointer
              ${className}
            `}
            {...props}
          />
          <label
            htmlFor={props.id}
            className="text-sm text-gray-700 cursor-pointer"
          >
            {label}
          </label>
        </div>
        {error && <span className="text-sm text-red-500">{error.message}</span>}
      </div>
    )
  },
)

FormCheckbox.displayName = 'FormCheckbox'
