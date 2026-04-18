import Link from 'next/link';
import { Button } from '@/components/Button/Button';
import { clinic, navigation } from '@/content/site';

export function Footer() {
  return (
    <footer className="mt-10 px-4 pb-6 md:px-6">
      <div className="container-shell overflow-hidden rounded-[36px] bg-[linear-gradient(180deg,#261710_0%,#160d09_100%)] text-white shadow-[0_34px_90px_rgba(20,10,7,0.26)]">
        <div className="grid gap-10 p-8 md:p-10 lg:grid-cols-[1.1fr_0.9fr] lg:p-14">
          <div>
            <p className="text-sm uppercase tracking-[0.32em] text-white/45">Nees Aesthetics</p>
            <h2 className="mt-4 display-font text-[40px] font-semibold leading-[0.92] tracking-[-0.05em] sm:text-[56px]">
              A clinic website designed to feel as refined as the experience inside it.
            </h2>
            <p className="mt-5 max-w-2xl text-[15px] leading-8 text-white/65">{clinic.description}</p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Button href={clinic.whatsapp} variant="secondary" className="border-white/14 bg-white/12 text-white hover:bg-white/18">
                WhatsApp the clinic
              </Button>
              <Button href="/contact" variant="ghost" className="text-white/78 hover:text-white">
                Contact details
              </Button>
            </div>
          </div>

          <div className="grid gap-8 sm:grid-cols-2">
            <div>
              <p className="text-xs uppercase tracking-[0.32em] text-white/40">Navigation</p>
              <div className="mt-5 grid gap-3">
                {navigation.map((item) => (
                  <Link key={item.href} href={item.href} className="text-[15px] text-white/78 transition hover:text-white">
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <p className="text-xs uppercase tracking-[0.32em] text-white/40">Clinic contact</p>
              <div className="mt-5 space-y-3 text-[15px] text-white/72">
                <a href={clinic.phoneHref} className="block transition hover:text-white">
                  {clinic.phone}
                </a>
                <a href={clinic.alternatePhoneHref} className="block transition hover:text-white">
                  {clinic.alternatePhone}
                </a>
                <a href={`mailto:${clinic.email}`} className="block transition hover:text-white">
                  {clinic.email}
                </a>
                <a href={clinic.mapHref} target="_blank" rel="noreferrer" className="block transition hover:text-white">
                  {clinic.addressLines.join(', ')}
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/8 px-8 py-5 text-sm text-white/45 md:px-14">
          © 2026 {clinic.legalName}. Crafted for a calmer, more premium digital first impression.
        </div>
      </div>
    </footer>
  );
}
