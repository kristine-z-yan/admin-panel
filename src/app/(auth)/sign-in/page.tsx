'use client'

import { SignInForm } from '@/modules/auth/components/sign-in-form'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import type { SubmitEvent } from 'react'

const SignInPage = () => {
  const router = useRouter()

  const handleSubmit = (event: SubmitEvent<HTMLFormElement>) => {
    event.preventDefault()
    router.push('/dashboard')
  }

  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden px-4 py-8">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgb(var(--primary-main-rgb)/0.25),_transparent_55%),linear-gradient(180deg,_#eef1ff_0%,_#f8f9ff_55%,_#ffffff_100%)]" />

      <section className="relative w-full max-w-md rounded-2xl border border-slate-200 bg-white p-8 shadow-xl shadow-slate-900/10">
        <h1 className="text-center text-2xl font-semibold tracking-tight text-slate-900">Welcome back</h1>
        <p className="mt-2 text-center text-sm text-slate-500">Sign in to continue to your dashboard.</p>

        <div className="mt-6">
          <SignInForm onSubmit={handleSubmit} />
        </div>

        <p className="mt-6 text-center text-sm text-slate-500">
          Don&apos;t have an account?{' '}
          <Link href="/sign-up" className="font-semibold text-[var(--primary-main)] hover:opacity-85">
            Sign Up
          </Link>
        </p>
      </section>
    </main>
  )
}

export default SignInPage
