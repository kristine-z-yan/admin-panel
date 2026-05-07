'use client'

import Link from 'next/link'
import { Button } from '@/shared/components/ui/Button'
import { Input } from '@/shared/components/ui/Input'
import type { SubmitEvent } from 'react'

type SignInFormProps = {
  onSubmit: (event: SubmitEvent<HTMLFormElement>) => void
}

export const SignInForm = ({ onSubmit }: SignInFormProps) => {
  return (
    <div>
      <div className="grid grid-cols-2 gap-3">
        <Button type="button" variant="outline" disabled className="font-medium">
          Sign in with Facebook
        </Button>
        <Button type="button" variant="outline" disabled className="font-medium">
          Sign in with Google
        </Button>
      </div>

      <div className="my-6 flex items-center gap-3">
        <div className="h-px flex-1 bg-slate-200" />
        <span className="text-xs font-medium uppercase tracking-wide text-slate-400">
          Or, sign in with your email
        </span>
        <div className="h-px flex-1 bg-slate-200" />
      </div>

      <form onSubmit={onSubmit} className="space-y-4">
        <div>
          <label htmlFor="email" className="mb-1 block text-sm font-medium text-slate-700">
            Email
          </label>
          <Input
            id="email"
            name="email"
            type="email"
            required
            placeholder="you@example.com"
          />
        </div>

        <div>
          <label htmlFor="password" className="mb-1 block text-sm font-medium text-slate-700">
            Password
          </label>
          <Input
            id="password"
            name="password"
            type="password"
            required
            placeholder="Enter your password"
          />
        </div>

        <div className="flex items-center justify-between text-sm">
          <label htmlFor="remember" className="flex cursor-pointer items-center gap-2 text-slate-600">
            <input
              id="remember"
              name="remember"
              type="checkbox"
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

        <Button type="submit" className="w-full">
          Sign In
        </Button>
      </form>
    </div>
  )
}
