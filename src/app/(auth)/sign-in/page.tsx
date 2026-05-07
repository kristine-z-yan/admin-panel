'use client'

import { SignInForm } from '@/modules/auth/components/sign-in-form'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { useState } from 'react'
import type { SubmitEvent } from 'react'
import { signIn } from '@/modules/auth/services/auth-service'

const SignInPage = () => {
  const router = useRouter()
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (event: SubmitEvent<HTMLFormElement>) => {
    event.preventDefault()

    if (isSubmitting) {
      return
    }

    const formData = new FormData(event.currentTarget)
    const email = String(formData.get('email') ?? '').trim()
    const password = String(formData.get('password') ?? '')

    if (!email || !password) {
      return
    }

    try {
      setIsSubmitting(true)
      const { error } = await signIn(email, password)

      if (error) {
        return
      }

      router.push('/dashboard')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[var(--primary-main)]/90 px-4 py-8">
      <section className="relative w-full max-w-md rounded-3xl border border-white/60 bg-white/90 p-8 shadow-2xl shadow-[rgb(var(--primary-main-rgb)/0.15)] backdrop-blur-xl">
        <h1 className="text-center text-2xl font-semibold tracking-tight text-slate-900">
          Welcome back
        </h1>
        <p className="mt-2 text-center text-sm text-slate-600">
          Sign in to continue to your dashboard.
        </p>

        <div className="mt-6">
          <SignInForm onSubmit={handleSubmit} isSubmitting={isSubmitting} />
        </div>

        <p className="mt-7 text-center text-sm text-slate-500">
          Don&apos;t have an account?{' '}
          <Link
            href="/sign-up"
            className="font-semibold text-[var(--primary-main)] transition hover:opacity-85"
          >
            Sign Up
          </Link>
        </p>
      </section>
    </main>
  )
}

export default SignInPage
