import { ReactNode } from 'react';

type CardProps = {
  title: string;
  description?: string;
  eyebrow?: string;
  children?: ReactNode;
  className?: string;
};

export function Card({ title, description, eyebrow, children, className = '' }: CardProps) {
  return (
    <article className={`rounded-[30px] border border-[color:var(--line)] bg-[color:var(--surface)] p-8 shadow-[0_12px_40px_rgba(64,40,17,0.05)] ${className}`.trim()}>
      {eyebrow ? <p className="text-sm uppercase tracking-[0.24em] text-[color:var(--accent)]">{eyebrow}</p> : null}
      <h3 className="mt-3 text-2xl font-semibold tracking-[-0.02em]">{title}</h3>
      {description ? <p className="mt-3 leading-7 text-[color:var(--muted)]">{description}</p> : null}
      {children}
    </article>
  );
}
