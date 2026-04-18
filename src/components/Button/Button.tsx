import Link from 'next/link';
import { ReactNode } from 'react';

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'ghost' | 'dark';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
};

const EXTERNAL_LINK = /^(https?:|mailto:|tel:)/i;

export function Button({
  href,
  children,
  variant = 'primary',
  size = 'md',
  className = '',
}: ButtonProps) {
  const base =
    'group inline-flex cursor-pointer items-center justify-center gap-3 rounded-full font-medium tracking-[-0.01em] transition duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--accent)]/55 focus-visible:ring-offset-2 focus-visible:ring-offset-[color:var(--background)]';
  const sizes = {
    sm: 'px-4 py-2 text-[13px]',
    md: 'px-6 py-3 text-[14px]',
    lg: 'px-7 py-3.5 text-[15px]',
  };
  const variants = {
    primary:
      'bg-[color:var(--accent-strong)] text-white shadow-[0_18px_34px_rgba(93,58,34,0.18)] hover:-translate-y-0.5 hover:bg-[color:var(--accent-deep)]',
    secondary:
      'border border-[color:var(--line)] bg-white/70 text-[color:var(--text)] shadow-[0_10px_24px_rgba(62,37,18,0.04)] hover:-translate-y-0.5 hover:border-[color:var(--accent-soft)] hover:bg-white',
    dark:
      'bg-[color:var(--dark)] text-white shadow-[0_18px_34px_rgba(17,10,8,0.22)] hover:-translate-y-0.5 hover:bg-[color:var(--dark-soft)]',
    ghost: 'text-[color:var(--accent-strong)] underline-offset-4 hover:underline',
  };
  const content = (
    <>
      <span>{children}</span>
      {variant !== 'ghost' ? (
        <span aria-hidden="true" className="text-[16px] transition duration-300 group-hover:translate-x-0.5">
          ↗
        </span>
      ) : null}
    </>
  );
  const classes = `${base} ${sizes[size]} ${variants[variant]} ${className}`.trim();

  if (EXTERNAL_LINK.test(href)) {
    const isHttp = /^https?:/i.test(href);

    return (
      <a href={href} className={classes} target={isHttp ? '_blank' : undefined} rel={isHttp ? 'noreferrer' : undefined}>
        {content}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {content}
    </Link>
  );
}
