'use client'

import { Button } from '@/shared/components/ui/Button'
import { Input } from '@/shared/components/ui/Input'
import type { FormEvent } from 'react'

type SignUpFormProps = {
  onSubmit: (event: FormEvent<HTMLFormElement>) => void
  isSubmitting?: boolean
}

export const SignUpForm = ({ onSubmit, isSubmitting = false }: SignUpFormProps) => {
  return (
    <div>
      <form onSubmit={onSubmit} className="space-y-4">
        <div>
          <label htmlFor="sign-up-email" className="mb-1.5 block text-sm font-medium text-slate-700">
            Email
          </label>
          <Input
            id="sign-up-email"
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder="you@example.com"
            disabled={isSubmitting}
            className="h-11 rounded-xl border-slate-200 bg-white/90 placeholder:text-slate-400"
          />
        </div>

        <div>
          <label htmlFor="sign-up-password" className="mb-1.5 block text-sm font-medium text-slate-700">
            Password
          </label>
          <Input
            id="sign-up-password"
            name="password"
            type="password"
            required
            minLength={8}
            autoComplete="new-password"
            placeholder="At least 8 characters"
            disabled={isSubmitting}
            className="h-11 rounded-xl border-slate-200 bg-white/90 placeholder:text-slate-400"
          />
        </div>

        <div>
          <label htmlFor="sign-up-confirm" className="mb-1.5 block text-sm font-medium text-slate-700">
            Confirm password
          </label>
          <Input
            id="sign-up-confirm"
            name="confirmPassword"
            type="password"
            required
            minLength={8}
            autoComplete="new-password"
            placeholder="Re-enter your password"
            disabled={isSubmitting}
            className="h-11 rounded-xl border-slate-200 bg-white/90 placeholder:text-slate-400"
          />
        </div>

        <p className="text-xs text-slate-500">
          If email confirmation is enabled, check your inbox after registering before signing in.
        </p>

        <Button
          type="submit"
          className="mt-1 h-11 w-full rounded-xl bg-[var(--primary-main)] shadow-lg shadow-[rgb(var(--primary-main-rgb)/0.25)] hover:opacity-95"
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Creating account...' : 'Create account'}
        </Button>
      </form>
    </div>
  )
}
