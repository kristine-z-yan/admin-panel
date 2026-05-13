import { ButtonHTMLAttributes } from 'react'

type ButtonVariant = 'primary' | 'outline'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant
}

const baseClasses =
  'rounded-lg px-4 py-2.5 text-sm font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--primary-main)] focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-70'

const variantClasses: Record<ButtonVariant, string> = {
  primary: 'bg-primary-main text-white hover:opacity-90',
  outline: 'border border-slate-200 bg-white text-slate-500 hover:bg-slate-50',
}

export const Button = ({ variant = 'primary', className, type = 'button', ...props }: ButtonProps) => {
  const composedClassName = `${baseClasses} ${variantClasses[variant]} ${className ?? ''}`.trim()

  return <button type={type} className={composedClassName} {...props} />
}
