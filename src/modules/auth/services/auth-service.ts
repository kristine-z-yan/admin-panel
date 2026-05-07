import { supabase } from '@/shared/lib/supabase/client'
import { useAuthStore } from '@/shared/stores/auth-store'

export const initAuthListener = () => {
  const {
    data: { subscription },
  } = supabase.auth.onAuthStateChange((_event, session) => {
    useAuthStore.getState().setUser(session?.user ?? null)
  })

  return () => {
    subscription.unsubscribe()
  }
}

export const signIn = async (email: string, password: string) => {
  return supabase.auth.signInWithPassword({
    email,
    password,
  })
}

export const signOut = async () => {
  return supabase.auth.signOut()
}

export const getSession = async () => {
  return supabase.auth.getSession()
}
