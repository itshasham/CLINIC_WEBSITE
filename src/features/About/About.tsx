/* eslint-disable @next/next/no-img-element */
import { Button } from '@/components/Button/Button';
import { Reveal } from '@/components/Reveal/Reveal';
import { clinic, experiencePillars, patientJourney } from '@/content/site';

export function AboutPage() {
  return (
    <main className="section-space page-hero-space">
      <section>
        <div className="container-shell grid gap-10 lg:grid-cols-[1fr_0.95fr] lg:items-center">
          <Reveal>
            <p className="eyebrow">About The Clinic</p>
            <h1 className="mt-4 display-font text-[46px] font-semibold leading-[0.9] tracking-[-0.05em] md:text-[78px]">
              Luxury skin care only works when the experience feels considered at every step.
            </h1>
            <p className="mt-6 max-w-2xl text-[17px] leading-8 text-[color:var(--muted)]">
              {clinic.name} is positioned as a calmer, more refined clinic destination in DHA Lahore. This redesign reframes
              the brand around consultation-first care, premium atmosphere, and elegant trust signals rather than dated layouts
              or overcrowded pages.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Button href={clinic.whatsapp}>Book via WhatsApp</Button>
              <Button href="/contact" variant="secondary">
                View contact details
              </Button>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="relative min-h-[520px] overflow-hidden rounded-[38px] border border-white/55 bg-[color:var(--dark)] shadow-[var(--shadow-strong)]">
              <img
                src="https://framerusercontent.com/images/4gRqLtjxPBtwZmePma4I5n97gcI.jpg?width=1820&height=961"
                alt="Clinic atmosphere"
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(27,16,10,0.08)_0%,rgba(27,16,10,0.54)_100%)]" />
              <div className="absolute bottom-5 left-5 right-5 rounded-[28px] border border-white/12 bg-[rgba(22,12,9,0.48)] p-6 text-white backdrop-blur-xl">
                <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-white/55">Clinic Positioning</p>
                <h2 className="mt-3 display-font text-[36px] font-semibold leading-[0.95] tracking-[-0.04em]">
                  Warm luxury, clinical clarity, and a quieter kind of confidence.
                </h2>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-space">
        <div className="container-shell grid gap-6 md:grid-cols-3">
          {experiencePillars.map((item, index) => (
            <Reveal key={item.title} delay={index * 80}>
              <article className="rounded-[30px] border border-white/55 bg-[rgba(255,251,247,0.8)] p-8 shadow-[0_16px_40px_rgba(64,40,17,0.05)]">
                <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[color:var(--accent-strong)]">0{index + 1}</p>
                <h3 className="mt-4 display-font text-[34px] font-semibold tracking-[-0.04em]">{item.title}</h3>
                <p className="mt-4 leading-7 text-[color:var(--muted)]">{item.description}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section-space">
        <div className="container-shell grid gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
          <Reveal>
            <p className="eyebrow">Patient Journey</p>
            <h2 className="mt-4 display-font text-[42px] font-semibold leading-[0.92] tracking-[-0.05em] md:text-[68px]">
              The site now explains how the clinic works instead of simply listing treatments.
            </h2>
          </Reveal>

          <div className="grid gap-4">
            {patientJourney.map((item, index) => (
              <Reveal key={item.step} delay={index * 70}>
                <article className="rounded-[28px] border border-white/55 bg-[rgba(255,250,245,0.76)] p-6 shadow-[0_14px_34px_rgba(64,40,17,0.04)]">
                  <div className="grid gap-3 md:grid-cols-[86px_1fr] md:items-start">
                    <p className="display-font text-[40px] font-semibold leading-none tracking-[-0.05em] text-[color:var(--accent-deep)]">
                      {item.step}
                    </p>
                    <div>
                      <h3 className="display-font text-[31px] font-semibold tracking-[-0.04em]">{item.title}</h3>
                      <p className="mt-3 leading-7 text-[color:var(--muted)]">{item.text}</p>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space pt-0">
        <div className="container-shell rounded-[36px] bg-[color:var(--surface)] p-8 shadow-[var(--shadow-soft)] md:p-12">
          <Reveal>
            <p className="eyebrow">Our Philosophy</p>
            <h2 className="mt-4 display-font text-[40px] font-semibold tracking-[-0.04em] md:text-[62px]">
              Every treatment starts with understanding your skin before selling a solution.
            </h2>
            <p className="mt-6 max-w-3xl leading-8 text-[color:var(--muted)]">
              That principle shapes the copy, page hierarchy, and motion throughout the new site. It keeps the digital
              experience aligned with the premium, patient-first tone the clinic should communicate from the first scroll.
            </p>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
