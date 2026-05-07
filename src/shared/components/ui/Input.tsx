import { InputHTMLAttributes } from 'react'

type InputProps = InputHTMLAttributes<HTMLInputElement>

const baseClasses =
  'w-full rounded-lg border border-slate-300 px-3 py-2 text-sm text-slate-900 outline-none ring-0 transition focus:border-[var(--primary-main)] focus:shadow-[0_0_0_3px_rgb(var(--primary-main-rgb)/0.15)]'

export const Input = ({ className, ...props }: InputProps) => {
  const composedClassName = `${baseClasses} ${className ?? ''}`.trim()

  return <input className={composedClassName} {...props} />
}
