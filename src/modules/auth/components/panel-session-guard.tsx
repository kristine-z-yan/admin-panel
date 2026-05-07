'use client'

import { getSession, initAuthListener } from '@/modules/auth/services/auth-service'
import { useAuthStore } from '@/shared/stores/auth-store'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

type PanelSessionGuardProps = {
  children: React.ReactNode
}

export const PanelSessionGuard = ({ children }: PanelSessionGuardProps) => {
  const router = useRouter()
  const user = useAuthStore((state) => state.user)
  const setUser = useAuthStore((state) => state.setUser)
  const [isRestoring, setIsRestoring] = useState(true)

  useEffect(() => {
    let isMounted = true
    const unsubscribe = initAuthListener()

    const restoreSession = async () => {
      const {
        data: { session },
      } = await getSession()

      if (!isMounted) {
        return
      }

      setUser(session?.user ?? null)
      setIsRestoring(false)
    }

    void restoreSession()

    return () => {
      isMounted = false
      unsubscribe()
    }
  }, [setUser])

  useEffect(() => {
    if (!isRestoring && !user) {
      router.replace('/sign-in')
    }
  }, [isRestoring, router, user])

  if (isRestoring || !user) {
    return <div className="min-h-screen bg-slate-50" />
  }

  return <>{children}</>
}
