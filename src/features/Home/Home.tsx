/* eslint-disable @next/next/no-img-element */
import { Button } from '@/components/Button/Button';
import { Reveal } from '@/components/Reveal/Reveal';
import {
  clinic,
  experiencePillars,
  faqItems,
  patientJourney,
  serviceCategories,
  services,
  testimonials,
} from '@/content/site';
import { InteractiveHero } from '@/features/Home/InteractiveHero';
import { MotionServiceGrid } from '@/features/Home/MotionServiceGrid';

const heroImage = 'https://framerusercontent.com/images/nzLcI2gIko5jP7H7JHhs97DQ0.jpg?width=1820&height=960';
const clinicImage = 'https://framerusercontent.com/images/4gRqLtjxPBtwZmePma4I5n97gcI.jpg?width=1820&height=961';
const resultsImage = 'https://framerusercontent.com/images/SV9XvJdFCKU2hh7d9ZjHtolDCw.jpg?width=810&height=504';

const orbitServices = [
  { label: 'Skin Rejuvenation', image: services[0]?.image },
  { label: 'Botox & Fillers', image: services[4]?.image },
  { label: 'Laser Treatments', image: services[1]?.image },
  { label: 'Chemical Peels', image: services[2]?.image },
  { label: 'Acne & Skin Health', image: services[0]?.image },
  { label: 'Scar Reduction', image: services[1]?.image },
  { label: 'PRP Therapy', image: services[3]?.image },
];

export function HomePage() {
  const marqueeItems = [...serviceCategories, ...serviceCategories];
  const testimonialTrack = [...testimonials, ...testimonials];

  return (
    <main className="overflow-hidden pb-20">
      <InteractiveHero heroImage={heroImage} clinicName={clinic.name} whatsapp={clinic.whatsapp} orbitServices={orbitServices} />

      <section className="section-space py-10">
        <div className="container-shell overflow-hidden rounded-[28px] border border-white/55 bg-[rgba(255,250,244,0.66)] px-5 py-4 shadow-[0_14px_34px_rgba(73,44,23,0.05)] backdrop-blur-xl md:px-8">
          <div className="marquee-track flex w-max gap-5">
            {marqueeItems.map((item, index) => (
              <span
                key={`${item}-${index}`}
                className="display-font flex items-center gap-5 whitespace-nowrap text-[28px] font-semibold leading-none tracking-[-0.05em] text-[color:var(--accent-deep)] md:text-[44px]"
              >
                {item}
                <span className="text-[18px] text-[color:var(--accent)]">✤</span>
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space pb-8">
        <div className="container-shell grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <Reveal>
            <p className="eyebrow">Our Treatments</p>
            <h2 className="mt-4 max-w-3xl display-font text-[40px] font-semibold leading-[0.92] tracking-[-0.05em] sm:text-[54px] md:text-[80px]">
              Designed to feel clearer, calmer, and naturally refined.
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <p className="max-w-2xl text-[16px] leading-8 text-[color:var(--muted)] lg:justify-self-end">
              This section leans closer to the Dermato-style reference with larger serif hierarchy, softer beige surfaces,
              rounded premium cards, and a more directed path toward consultation.
            </p>
          </Reveal>
        </div>

        <MotionServiceGrid services={services.slice(0, 4)} />
      </section>

      <section className="section-space">
        <div className="container-shell grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <Reveal>
            <div className="relative min-h-[610px] overflow-hidden rounded-[44px] border border-white/50 bg-[#e8d8c4] shadow-[var(--shadow-strong)]">
              <img src={clinicImage} alt="Calm aesthetic clinic treatment room" className="absolute inset-0 h-full w-full object-cover" />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(25,15,10,0.05),rgba(25,15,10,0.35))]" />
              <div className="absolute bottom-5 left-5 right-5 rounded-[30px] bg-[#fffaf3]/88 p-6 backdrop-blur-xl">
                <p className="eyebrow">Clinic Standard</p>
                <h3 className="mt-3 display-font text-[38px] font-semibold leading-[0.95] tracking-[-0.04em]">Soft luxury with clinical control</h3>
              </div>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <p className="eyebrow">Why Choose Us</p>
            <h2 className="mt-4 display-font text-[40px] font-semibold leading-[0.92] tracking-[-0.05em] sm:text-[54px] md:text-[82px]">
              Treatment plans made around your actual skin.
            </h2>
            <p className="mt-6 max-w-2xl text-[16px] leading-8 text-[color:var(--muted)]">
              We lead with skin analysis and expectation-setting before recommending laser, injectables, peels, or maintenance
              care. The layout now mirrors the reference more closely while staying tailored to your clinic.
            </p>

            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {patientJourney.map((item, index) => (
                <Reveal key={item.step} delay={index * 80}>
                  <div className="rounded-[28px] border border-[color:var(--line)] bg-white/58 p-6">
                    <span className="text-sm font-semibold text-[color:var(--accent-strong)]">0{index + 1}</span>
                    <h3 className="mt-8 display-font text-[28px] font-semibold tracking-[-0.04em]">{item.title}</h3>
                    <p className="mt-3 text-[14px] leading-7 text-[color:var(--muted)]">{item.text}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-space pt-4">
        <div className="container-shell rounded-[48px] bg-[color:var(--dark)] p-5 text-white shadow-[var(--shadow-strong)] md:p-10">
          <div className="grid gap-6 lg:grid-cols-[1fr_0.85fr] lg:items-center">
            <Reveal>
              <div className="p-4 md:p-8">
                <p className="text-sm uppercase tracking-[0.3em] text-white/45">Visible Care</p>
                <h2 className="mt-4 max-w-3xl display-font text-[40px] font-semibold leading-[0.92] tracking-[-0.055em] sm:text-[54px] md:text-[88px]">
                  Clearer skin without a hard-sell experience.
                </h2>
                <p className="mt-6 max-w-xl text-[16px] leading-8 text-white/62">
                  This darker section keeps the reference’s luxury contrast moment while positioning the clinic around clarity,
                  restraint, and consultation-first confidence.
                </p>
                <Button href={clinic.whatsapp} className="mt-9 bg-white text-[color:var(--text)] hover:bg-[#fff4e8]">
                  Book Appointment
                </Button>
              </div>
            </Reveal>

            <div className="grid gap-4 sm:grid-cols-2">
              {experiencePillars.map((item, index) => (
                <Reveal key={item.title} delay={index * 90}>
                  <div className="rounded-[30px] border border-white/10 bg-white/8 p-7 backdrop-blur-md">
                    <p className="display-font text-[42px] font-semibold leading-none tracking-[-0.05em]">
                      0{index + 1}
                    </p>
                    <p className="mt-4 text-base leading-6 text-white">{item.title}</p>
                    <p className="mt-3 text-sm leading-6 text-white/58">{item.description}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-space">
        <div className="container-shell grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <Reveal>
            <p className="eyebrow">Before / After Feeling</p>
            <h2 className="mt-4 display-font text-[42px] font-semibold leading-[0.92] tracking-[-0.05em] sm:text-[56px] md:text-[76px]">
              From uncertainty and clutter to clarity, confidence, and a more elevated booking path.
            </h2>
            <p className="mt-6 max-w-xl text-[16px] leading-8 text-[color:var(--muted)]">
              Without authentic patient assets, the redesign still creates a believable before-and-after story through layout:
              first the concern, then the plan, then the refined outcome.
            </p>
          </Reveal>

          <Reveal delay={120}>
            <div className="grid gap-5 md:grid-cols-2">
              <article className="overflow-hidden rounded-[34px] border border-white/55 bg-[rgba(255,250,245,0.76)] p-3 shadow-[var(--shadow-soft)]">
                <div className="relative h-[230px] overflow-hidden rounded-[26px]">
                  <img src={resultsImage} alt="Clinical skin care detail" className="h-full w-full object-cover saturate-[0.82]" />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(28,17,12,0.02)_0%,rgba(28,17,12,0.36)_100%)]" />
                </div>
                <div className="px-3 pb-4 pt-6">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[color:var(--accent-strong)]">Before</p>
                  <h3 className="mt-3 display-font text-[34px] font-semibold leading-[0.95] tracking-[-0.04em]">Questions, hesitation, mixed priorities.</h3>
                  <p className="mt-4 text-[15px] leading-7 text-[color:var(--muted)]">
                    The current website does not create enough atmosphere, movement, or confidence around the clinic’s standard of care.
                  </p>
                </div>
              </article>

              <article className="overflow-hidden rounded-[34px] border border-[color:var(--accent-soft)]/65 bg-[linear-gradient(180deg,rgba(255,248,240,0.92)_0%,rgba(243,228,212,0.96)_100%)] p-3 shadow-[0_26px_60px_rgba(101,63,37,0.1)]">
                <div className="relative h-[230px] overflow-hidden rounded-[26px]">
                  <img src={heroImage} alt="Refined clinic website atmosphere" className="h-full w-full object-cover" />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(28,17,12,0.02)_0%,rgba(28,17,12,0.28)_100%)]" />
                </div>
                <div className="px-3 pb-4 pt-6">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[color:var(--accent-strong)]">After</p>
                  <h3 className="mt-3 display-font text-[34px] font-semibold leading-[0.95] tracking-[-0.04em]">
                    An editorial clinic presence that feels premium instantly.
                  </h3>
                  <p className="mt-4 text-[15px] leading-7 text-[color:var(--muted)]">
                    Strong hierarchy, elegant reveal motion, and a luxury palette create a much more memorable digital arrival
                    without overcomplicating the site.
                  </p>
                </div>
              </article>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-space">
        <div className="container-shell flex flex-col gap-7 md:flex-row md:items-end md:justify-between">
          <Reveal>
            <p className="eyebrow">Patient Words</p>
            <h2 className="mt-4 max-w-3xl display-font text-[42px] font-semibold leading-[0.92] tracking-[-0.05em] sm:text-[56px] md:text-[76px]">
              Trust rises faster when the entire website feels composed.
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <Button href="/contact" variant="secondary">
              Contact Clinic
            </Button>
          </Reveal>
        </div>

        <div className="container-shell mt-12 overflow-hidden rounded-[34px] border border-white/55 bg-[rgba(255,250,245,0.74)] px-5 py-5 shadow-[var(--shadow-soft)] md:px-6">
          <div className="testimonial-track flex w-max gap-5">
            {testimonialTrack.map((testimonial, index) => (
              <article
                key={`${testimonial.name}-${index}`}
                className="w-[320px] rounded-[28px] border border-white/70 bg-white/72 p-6 shadow-[0_18px_36px_rgba(73,44,23,0.05)] md:w-[380px]"
              >
                <p className="text-[20px] leading-none text-[color:var(--accent-strong)]">✤ ✤ ✤</p>
                <blockquote className="mt-6 text-[19px] leading-8 tracking-[-0.03em] text-[color:var(--text)]">
                  “{testimonial.quote}”
                </blockquote>
                <p className="mt-6 text-[11px] font-semibold uppercase tracking-[0.26em] text-[color:var(--muted)]">{testimonial.name}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space pt-0">
        <div className="container-shell grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <Reveal>
            <p className="eyebrow">FAQ</p>
            <h2 className="mt-4 display-font text-[42px] font-semibold leading-[0.92] tracking-[-0.05em] sm:text-[56px] md:text-[72px]">
              Clear answers before the first visit.
            </h2>
          </Reveal>

          <div className="space-y-4">
            {faqItems.map((item, index) => (
              <Reveal key={item.question} delay={index * 80}>
                <details className="group rounded-[28px] border border-white/55 bg-[rgba(255,251,247,0.78)] p-6 open:shadow-[var(--shadow-soft)]">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-[23px] font-semibold tracking-[-0.035em] text-[color:var(--text)]">
                    {item.question}
                    <span className="grid size-9 place-items-center rounded-full bg-[color:var(--surface-2)] text-[18px] transition group-open:rotate-45">+</span>
                  </summary>
                  <p className="mt-4 max-w-2xl text-[15px] leading-7 text-[color:var(--muted)]">{item.answer}</p>
                </details>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space pt-0">
        <div className="container-shell overflow-hidden rounded-[48px] bg-[linear-gradient(180deg,#f6e6d7_0%,#edd8c6_100%)] p-8 text-center shadow-[var(--shadow-soft)] md:p-16">
          <Reveal>
            <p className="eyebrow justify-center">Ready When You Are</p>
            <h2 className="mx-auto mt-4 max-w-4xl display-font text-[42px] font-semibold leading-[0.9] tracking-[-0.055em] sm:text-[56px] md:text-[88px]">
              Start with a skin consultation, not a rushed decision.
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-[16px] leading-8 text-[color:var(--muted)]">
              The site stays static and fast for now, while keeping the conversion path premium and simple: WhatsApp, phone,
              or a polished contact page.
            </p>
            <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
              <Button href={clinic.whatsapp}>Book Appointment</Button>
              <Button href="/services" variant="secondary">
                View Services
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
