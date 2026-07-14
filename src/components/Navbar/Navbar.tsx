'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { Button } from '@/components/Button/Button';
import { clinic, navigation } from '@/content/site';

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 px-4 pt-4 md:px-6">
      <div className="container-shell">
        <div className="rounded-[28px] border border-white/55 bg-[rgba(248,255,255,0.78)] px-4 py-3 shadow-[0_24px_60px_rgba(17,88,96,0.1)] backdrop-blur-xl md:px-5">
          <div className="grid items-center gap-4 lg:grid-cols-[1fr_auto_1fr]">
            <nav className="hidden items-center gap-2 lg:flex" aria-label="Primary navigation">
              {navigation.map((link) => {
                const active = pathname === link.href;

                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`rounded-full px-4 py-2.5 text-[14px] font-semibold tracking-[-0.02em] transition duration-300 ${
                      active
                        ? 'bg-[color:var(--surface-2)] text-[color:var(--accent-deep)] shadow-[inset_0_1px_0_rgba(255,255,255,0.8)]'
                        : 'text-[color:var(--text)] hover:bg-[rgba(255,255,255,0.76)] hover:text-[color:var(--accent-deep)]'
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>

            <div className="flex items-center justify-between gap-4 lg:contents">
              <Link
                href="/"
                className="min-w-0 rounded-[20px] px-1 py-1 text-center transition hover:bg-white/40 lg:justify-self-center"
                aria-label={`${clinic.name} home`}
              >
                <Image
                  src="/nees-logo.png"
                  alt={clinic.name}
                  width={651}
                  height={331}
                  className="h-auto w-[150px] md:w-[178px]"
                  priority
                />
              </Link>

              <button
                type="button"
                onClick={() => setOpen((value) => !value)}
                className="inline-flex size-12 items-center justify-center rounded-full border border-[color:var(--line)] bg-white/72 text-[color:var(--text)] transition hover:bg-white lg:hidden"
                aria-expanded={open}
                aria-label="Toggle navigation menu"
              >
                <span className="relative block h-4 w-5">
                  <span
                    className={`absolute left-0 top-0 h-[2px] w-5 rounded-full bg-current transition ${open ? 'translate-y-[7px] rotate-45' : ''}`}
                  />
                  <span className={`absolute left-0 top-[7px] h-[2px] w-5 rounded-full bg-current transition ${open ? 'opacity-0' : ''}`} />
                  <span
                    className={`absolute left-0 top-[14px] h-[2px] w-5 rounded-full bg-current transition ${open ? '-translate-y-[7px] -rotate-45' : ''}`}
                  />
                </span>
              </button>
            </div>

            <div className="hidden items-center justify-end gap-3 lg:flex">
              <a href={clinic.phoneHref} className="text-sm font-medium text-[color:var(--muted)] transition hover:text-[color:var(--text)]">
                {clinic.phone}
              </a>
              <Button href={clinic.whatsapp} size="sm">
                Book Appointment
              </Button>
            </div>
          </div>

          <div
            className={`grid overflow-hidden transition-[grid-template-rows,opacity,margin] duration-300 lg:hidden ${
              open ? 'mt-4 grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
            }`}
          >
            <div className="min-h-0">
              <div className="rounded-[22px] border border-[color:var(--line)] bg-white/62 p-4">
                <nav className="flex flex-col gap-2" aria-label="Mobile navigation">
                  {navigation.map((link) => {
                    const active = pathname === link.href;

                    return (
                      <Link
                        key={link.href}
                        href={link.href}
                        onClick={() => setOpen(false)}
                        className={`rounded-[18px] px-4 py-3 text-[15px] font-semibold transition ${
                          active ? 'bg-[color:var(--surface-2)] text-[color:var(--accent-deep)]' : 'text-[color:var(--text)] hover:bg-[color:var(--surface)]'
                        }`}
                      >
                        {link.label}
                      </Link>
                    );
                  })}
                </nav>

                <div className="mt-4 grid gap-3 border-t border-[color:var(--line)] pt-4">
                  <a href={clinic.phoneHref} className="text-sm text-[color:var(--muted)] transition hover:text-[color:var(--text)]">
                    {clinic.phone}
                  </a>
                  <Button href={clinic.whatsapp} className="justify-center">
                    Book Appointment
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
