import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

const PROTECTED_PATHS = ['/dashboard']
const AUTH_PATHS = ['/sign-in', '/sign-up']

const hasSupabaseAuthCookie = (request: NextRequest) => {
  return request.cookies.getAll().some((cookie) => {
    const name = cookie.name

    return (
      name === 'sb-access-token' ||
      name === 'sb-refresh-token' ||
      (name.startsWith('sb-') && name.includes('auth-token'))
    )
  })
}

const isPathMatch = (pathname: string, paths: string[]) => {
  return paths.some((path) => pathname === path || pathname.startsWith(`${path}/`))
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl
  const isAuthenticated = hasSupabaseAuthCookie(request)

  if (isPathMatch(pathname, PROTECTED_PATHS) && !isAuthenticated) {
    const signInUrl = new URL('/sign-in', request.url)
    signInUrl.searchParams.set('redirectTo', pathname)

    return NextResponse.redirect(signInUrl)
  }

  if (isPathMatch(pathname, AUTH_PATHS) && isAuthenticated) {
    return NextResponse.redirect(new URL('/dashboard', request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
}
