'use client'

import { AuthPageShell } from '@/modules/auth/components/auth-page-shell'
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
    <AuthPageShell
      title="Welcome back"
      description="Sign in to continue to your dashboard."
      footer={
        <p className="text-center text-sm text-slate-500">
          Don&apos;t have an account?{' '}
          <Link
            href="/sign-up"
            className="font-semibold text-[var(--primary-main)] transition hover:opacity-85"
          >
            Sign Up
          </Link>
        </p>
      }
    >
      <SignInForm onSubmit={handleSubmit} isSubmitting={isSubmitting} />
    </AuthPageShell>
  )
}

export default SignInPage
