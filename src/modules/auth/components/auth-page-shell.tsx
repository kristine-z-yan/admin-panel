import type { ReactNode } from 'react'

type AuthPageShellProps = {
  title: string
  description: string
  children: ReactNode
  footer?: ReactNode
}

export const AuthPageShell = ({ title, description, children, footer }: AuthPageShellProps) => {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[var(--primary-main)]/90 px-4 py-8">
      <section className="relative w-full max-w-md rounded-3xl border border-white/60 bg-white/90 p-8 shadow-2xl shadow-[rgb(var(--primary-main-rgb)/0.15)] backdrop-blur-xl">
        <h1 className="text-center text-2xl font-semibold tracking-tight text-slate-900">{title}</h1>
        <p className="mt-2 text-center text-sm text-slate-600">{description}</p>
        <div className="mt-6">{children}</div>
        {footer ? <div className="mt-7">{footer}</div> : null}
      </section>
    </main>
  )
}
