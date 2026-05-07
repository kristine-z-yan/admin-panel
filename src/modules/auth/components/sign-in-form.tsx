'use client'

import Link from 'next/link'
import { Button } from '@/shared/components/ui/Button'
import { Input } from '@/shared/components/ui/Input'
import type { SubmitEvent } from 'react'

type SignInFormProps = {
  onSubmit: (event: SubmitEvent<HTMLFormElement>) => void
  isSubmitting?: boolean
}

export const SignInForm = ({ onSubmit, isSubmitting = false }: SignInFormProps) => {
  return (
    <div>
      <div className="grid grid-cols-2 gap-3">
        <Button
          type="button"
          variant="outline"
          disabled
          className="border-slate-200/80 bg-slate-50/70 font-medium text-slate-500"
        >
          Sign in with Facebook
        </Button>
        <Button
          type="button"
          variant="outline"
          disabled
          className="border-slate-200/80 bg-slate-50/70 font-medium text-slate-500"
        >
          Sign in with Google
        </Button>
      </div>

      <div className="my-6 flex items-center gap-3">
        <div className="h-px flex-1 bg-slate-200/90" />
        <span className="text-[11px] font-medium uppercase tracking-[0.14em] text-slate-400">
          Or, sign in with your email
        </span>
        <div className="h-px flex-1 bg-slate-200/90" />
      </div>

      <form onSubmit={onSubmit} className="space-y-4">
        <div>
          <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-slate-700">
            Email
          </label>
          <Input
            id="email"
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
          <label htmlFor="password" className="mb-1.5 block text-sm font-medium text-slate-700">
            Password
          </label>
          <Input
            id="password"
            name="password"
            type="password"
            required
            autoComplete="current-password"
            placeholder="Enter your password"
            disabled={isSubmitting}
            className="h-11 rounded-xl border-slate-200 bg-white/90 placeholder:text-slate-400"
          />
        </div>

        <div className="flex items-center justify-between text-sm">
          <label htmlFor="remember" className="flex cursor-pointer items-center gap-2 text-slate-600">
            <input
              id="remember"
              name="remember"
              type="checkbox"
              disabled={isSubmitting}
              className="h-4 w-4 rounded border-slate-300 text-[var(--primary-main)] focus:ring-[var(--primary-main)]"
            />
            Remember me
          </label>
          <Link
            href="/forgot-password"
            className="font-medium text-[var(--primary-main)] transition hover:opacity-85"
          >
            Forgot password?
          </Link>
        </div>

        <Button
          type="submit"
          className="mt-1 h-11 w-full rounded-xl bg-[var(--primary-main)] shadow-lg shadow-[rgb(var(--primary-main-rgb)/0.25)] hover:opacity-95"
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Signing in...' : 'Sign In'}
        </Button>
      </form>
    </div>
  )
}
