'use client'

import { AuthPageShell } from '@/modules/auth/components/auth-page-shell'
import { SignUpForm } from '@/modules/auth/components/sign-up-form'
import { signUp } from '@/modules/auth/services/auth-service'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import type { FormEvent } from 'react'

const SignUpPage = () => {
  const router = useRouter()
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    if (isSubmitting) {
      return
    }

    const form = event.currentTarget
    const formData = new FormData(form)
    const email = String(formData.get('email') ?? '').trim()
    const password = String(formData.get('password') ?? '')
    const confirmPassword = String(formData.get('confirmPassword') ?? '')

    if (!email || !password || password !== confirmPassword) {
      return
    }

    try {
      setIsSubmitting(true)
      const { error } = await signUp(email, password)

      if (error) {
        return
      }

      router.push('/sign-in')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <AuthPageShell
      title="Create your account"
      description="Set up your credentials to access the admin panel."
      footer={
        <p className="text-center text-sm text-slate-500">
          Already have an account?{' '}
          <Link
            href="/sign-in"
            className="font-semibold text-[var(--primary-main)] transition hover:opacity-85"
          >
            Sign in
          </Link>
        </p>
      }
    >
      <SignUpForm onSubmit={handleSubmit} isSubmitting={isSubmitting} />
    </AuthPageShell>
  )
}

export default SignUpPage
