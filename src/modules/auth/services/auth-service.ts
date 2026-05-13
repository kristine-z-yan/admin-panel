import { getSupabaseClient } from '@/shared/lib/supabase/client'
import { useAuthStore } from '@/shared/stores/auth-store'

const getClientOrError = () => {
  try {
    return { client: getSupabaseClient(), error: null }
  } catch (error) {
    return { client: null, error: error instanceof Error ? error : new Error('Failed to initialize auth client.') }
  }
}

export const initAuthListener = () => {
  const { client, error } = getClientOrError()

  if (!client) {
    if (error) {
      console.error(error.message)
    }
    return () => {}
  }

  const {
    data: { subscription },
  } = client.auth.onAuthStateChange((_event, session) => {
    useAuthStore.getState().setUser(session?.user ?? null)
  })

  return () => {
    subscription.unsubscribe()
  }
}

export const signIn = async (email: string, password: string) => {
  const { client, error } = getClientOrError()

  if (!client) {
    return { data: { user: null, session: null }, error }
  }

  return client.auth.signInWithPassword({
    email,
    password,
  })
}

export const signUp = async (email: string, password: string) => {
  const { client, error } = getClientOrError()

  if (!client) {
    return { data: { user: null, session: null }, error }
  }

  return client.auth.signUp({
    email,
    password,
  })
}

export const signOut = async () => {
  const { client, error } = getClientOrError()

  if (!client) {
    return { error }
  }

  return client.auth.signOut()
}

export const getSession = async () => {
  const { client, error } = getClientOrError()

  if (!client) {
    return { data: { session: null }, error }
  }

  return client.auth.getSession()
}
