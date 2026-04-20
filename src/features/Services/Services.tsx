/* eslint-disable @next/next/no-img-element */
import { Button } from '@/components/Button/Button';
import { Reveal } from '@/components/Reveal/Reveal';
import { JsonLd } from '@/components/Seo/JsonLd';
import { clinic, patientJourney, services } from '@/content/site';
import { getBreadcrumbSchema, getServicesSchema } from '@/lib/seo';

export function ServicesPage() {
  return (
    <main className="section-space page-hero-space">
      <JsonLd
        data={getBreadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'Services', path: '/services' },
        ])}
      />
      <JsonLd data={getServicesSchema()} />
      <section>
        <div className="container-shell flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <Reveal>
            <p className="eyebrow">Our Services</p>
            <h1 className="mt-4 max-w-4xl display-font text-[46px] font-semibold leading-[0.9] tracking-[-0.05em] md:text-[78px]">
              Skin, laser, hair, and cosmetic treatments in DHA Lahore.
            </h1>
          </Reveal>
          <Reveal delay={120}>
            <Button href={clinic.whatsapp}>Book Consultation</Button>
          </Reveal>
        </div>
      </section>

      <section className="section-space">
        <div className="container-shell grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service, index) => (
            <Reveal key={service.title} delay={index * 80}>
              <article className="group overflow-hidden rounded-[32px] border border-white/55 bg-[rgba(255,251,247,0.8)] p-3 shadow-[var(--shadow-soft)]">
                <div className="relative h-56 overflow-hidden rounded-[24px]">
                  <img src={service.image} alt={service.title} className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(18,10,7,0.04)_0%,rgba(18,10,7,0.34)_100%)]" />
                </div>
                <div className="px-3 pb-4 pt-6">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.26em] text-[color:var(--accent-strong)]">0{index + 1}</p>
                  <h2 className="mt-3 display-font text-[34px] font-semibold leading-[0.94] tracking-[-0.05em]">{service.title}</h2>
                  <p className="mt-4 text-[15px] leading-7 text-[color:var(--muted)]">{service.short}</p>
                  <p className="mt-3 text-[14px] leading-7 text-[color:var(--muted)]/85">{service.detail}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {service.highlights.map((highlight) => (
                      <span key={highlight} className="rounded-full bg-[color:var(--surface-2)] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-[color:var(--accent-strong)]">
                        {highlight}
                      </span>
                    ))}
                  </div>
                  <Button href={clinic.whatsapp} variant="secondary" className="mt-6">
                    Ask on WhatsApp
                  </Button>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section-space pt-0">
        <div className="container-shell grid gap-8 lg:grid-cols-[0.82fr_1.18fr]">
          <Reveal>
            <p className="eyebrow">How It Works</p>
            <h2 className="mt-4 display-font text-[42px] font-semibold leading-[0.92] tracking-[-0.05em] md:text-[68px]">
              A consultation-led path from first question to next step.
            </h2>
            <p className="mt-6 max-w-xl text-[16px] leading-8 text-[color:var(--muted)]">
              Each category is written to help visitors understand what the clinic covers, how the journey is paced, and how
              to contact the clinic without extra friction.
            </p>
          </Reveal>

          <div className="grid gap-4">
            {patientJourney.map((item, index) => (
              <Reveal key={item.step} delay={index * 70}>
                <article className="rounded-[28px] border border-white/55 bg-[rgba(255,250,245,0.78)] p-6 shadow-[0_16px_34px_rgba(64,40,17,0.04)]">
                  <div className="flex items-start gap-5">
                    <p className="display-font text-[40px] font-semibold leading-none tracking-[-0.05em] text-[color:var(--accent-deep)]">
                      {item.step}
                    </p>
                    <div>
                      <h3 className="display-font text-[30px] font-semibold tracking-[-0.04em]">{item.title}</h3>
                      <p className="mt-3 leading-7 text-[color:var(--muted)]">{item.text}</p>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
