import type { Metadata } from 'next';
import { Button } from '@/components/Button/Button';
import { Reveal } from '@/components/Reveal/Reveal';
import { JsonLd } from '@/components/Seo/JsonLd';
import { clinic, contactHighlights } from '@/content/site';
import { buildPageMetadata, getBreadcrumbSchema } from '@/lib/seo';

const contactDetails = [
  { label: 'Phone', value: clinic.phone, href: clinic.phoneHref },
  { label: 'Phone', value: clinic.alternatePhone, href: clinic.alternatePhoneHref },
  { label: 'Cell', value: clinic.mobile, href: clinic.mobileHref },
  { label: 'Email', value: clinic.email, href: `mailto:${clinic.email}` },
  { label: 'Address', value: clinic.addressLines.join(', '), href: clinic.mapHref },
];

export const contactMetadata: Metadata = buildPageMetadata({
  title: 'Contact Nees Aesthetics',
  description:
    'Contact Nees Aesthetics in DHA Lahore for skin consultations, treatment questions, and clinic support by WhatsApp, phone, or email.',
  path: '/contact',
  keywords: [
    'Nees Aesthetics contact',
    'skin clinic Lahore contact',
    'aesthetic clinic DHA Lahore contact',
    'WhatsApp skin clinic Lahore',
  ],
});

export function ContactPage() {
  return (
    <main className="page-hero-space">
      <JsonLd
        data={getBreadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'Contact', path: '/contact' },
        ])}
      />
      <section className="section-space pb-10">
        <div className="container-shell grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
          <Reveal className="max-w-3xl">
            <p className="eyebrow">Contact Us</p>
            <h1 className="mt-4 display-font text-[46px] font-semibold leading-[0.9] tracking-[-0.05em] md:text-[78px]">
              Contact a skin aesthetic clinic in DHA Lahore without the extra steps.
            </h1>
            <p className="mt-6 max-w-2xl text-[17px] leading-8 text-[color:var(--muted)]">
              Visitors can move straight to WhatsApp, call the clinic, email the team, or use the inquiry form preview to ask
              about consultations, treatment categories, and clinic timing.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Button href={clinic.whatsapp}>Send on WhatsApp</Button>
              <Button href={`mailto:${clinic.email}`} variant="secondary">
                Email the clinic
              </Button>
            </div>

            <div className="mt-12 grid gap-4 sm:grid-cols-3">
              {contactHighlights.map((item, index) => (
                <Reveal key={item} delay={index * 80}>
                  <div className="rounded-[28px] border border-white/55 bg-white/60 p-5 backdrop-blur-sm">
                    <p className="text-sm leading-7 text-[color:var(--muted)]">{item}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="rounded-[36px] border border-[color:var(--line)] bg-[linear-gradient(180deg,rgba(255,250,244,0.96)_0%,rgba(240,230,215,0.92)_100%)] p-6 shadow-[0_28px_80px_rgba(24,17,13,0.08)] md:p-8">
              <div className="rounded-[28px] bg-[color:var(--surface)] p-6 md:p-7">
                <p className="text-sm uppercase tracking-[0.28em] text-[color:var(--accent)]">Contact form preview</p>
                <h2 className="mt-3 display-font text-[40px] font-semibold tracking-[-0.04em]">Tell the clinic what you need</h2>
                <p className="mt-3 text-sm leading-7 text-[color:var(--muted)]">
                  This form is still static for now, but it already supports the right user journey for treatment questions,
                  consultation requests, and follow-up contact.
                </p>

                <form className="mt-8 space-y-4" aria-label="Contact form preview">
                  <Field label="Full name" placeholder="Your name" type="text" required />
                  <Field label="Email address" placeholder="you@example.com" type="email" required />
                  <Field label="Phone number" placeholder="Optional" type="tel" />
                  <label className="block text-sm text-[color:var(--muted)]">
                    <span className="mb-2 block">Message</span>
                    <textarea
                      placeholder="Tell us about the treatment, concern, or consultation you want."
                      rows={5}
                      className="w-full rounded-[22px] border border-[color:var(--line)] bg-white px-4 py-3 text-[color:var(--text)] outline-none transition placeholder:text-[color:var(--muted)]/70 focus:border-[color:var(--accent)] focus:ring-2 focus:ring-[color:var(--surface-2)]"
                    />
                  </label>
                  <div className="rounded-[22px] border border-dashed border-[color:var(--accent)]/40 bg-[color:var(--surface-2)]/45 px-4 py-3 text-sm leading-7 text-[color:var(--muted)]">
                    Form submission can connect later to email, Formspree, or a real backend without changing the visual layout again.
                  </div>
                  <Button href={clinic.whatsapp} className="w-full">
                    Send Message
                  </Button>
                </form>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-space pt-6">
        <div className="container-shell grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <Reveal>
            <div className="rounded-[36px] bg-[linear-gradient(180deg,#2d231d_0%,#18110d_100%)] p-8 text-white md:p-12">
              <p className="text-sm uppercase tracking-[0.28em] text-white/60">Clinic information</p>
              <h2 className="mt-4 display-font text-[42px] font-semibold tracking-[-0.04em] md:text-[56px]">
                Direct details for calls, WhatsApp, email, and directions.
              </h2>
              <div className="mt-8 space-y-5">
                {contactDetails.map((item) => (
                  <div key={`${item.label}-${item.value}`} className="border-b border-white/10 pb-5 last:border-b-0 last:pb-0">
                    <p className="text-xs uppercase tracking-[0.28em] text-white/45">{item.label}</p>
                    <a href={item.href} className="mt-2 inline-block text-lg text-white/85 transition hover:text-white">
                      {item.value}
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <div className="grid gap-6">
            <Reveal delay={120}>
              <div className="rounded-[36px] border border-[color:var(--line)] bg-white/65 p-8 md:p-10">
                <p className="text-sm uppercase tracking-[0.28em] text-[color:var(--accent)]">Hours & response</p>
                <h2 className="mt-4 display-font text-[40px] font-semibold tracking-[-0.04em]">Clear response windows and clinic hours.</h2>
                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  <InfoCard title="Hours" text={`${clinic.hours[0]} · ${clinic.hours[1]}`} />
                  <InfoCard title="Response time" text="Usually within 24 hours for digital inquiries" />
                </div>
              </div>
            </Reveal>

            <Reveal delay={200}>
              <div className="rounded-[36px] border border-[color:var(--line)] bg-[color:var(--surface)] p-8 md:p-10">
                <p className="text-sm uppercase tracking-[0.28em] text-[color:var(--accent)]">Location</p>
                <div className="mt-4 rounded-[28px] border border-dashed border-[color:var(--line)] bg-[linear-gradient(135deg,rgba(255,255,255,0.6)_0%,rgba(240,230,215,0.8)_100%)] p-8">
                  <h3 className="display-font text-[34px] font-semibold tracking-[-0.04em]">DHA Phase 5, Lahore</h3>
                  <p className="mt-3 max-w-2xl leading-8 text-[color:var(--muted)]">
                    {clinic.addressLines.join(', ')}. This makes it easier for visitors searching for a skin clinic in DHA
                    Lahore to confirm the clinic location before reaching out.
                  </p>
                  <Button href={clinic.mapHref} variant="secondary" className="mt-6">
                    Open in Maps
                  </Button>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </main>
  );
}

type FieldProps = {
  label: string;
  placeholder: string;
  type: string;
  required?: boolean;
};

function Field({ label, placeholder, type, required = false }: FieldProps) {
  return (
    <label className="block text-sm text-[color:var(--muted)]">
      <span className="mb-2 block">
        {label}
        {required ? <span className="ml-1 text-[color:var(--accent)]">*</span> : null}
      </span>
      <input
        type={type}
        placeholder={placeholder}
        required={required}
        className="w-full rounded-[22px] border border-[color:var(--line)] bg-white px-4 py-3 text-[color:var(--text)] outline-none transition placeholder:text-[color:var(--muted)]/70 focus:border-[color:var(--accent)] focus:ring-2 focus:ring-[color:var(--surface-2)]"
      />
    </label>
  );
}

type InfoCardProps = {
  title: string;
  text: string;
};

function InfoCard({ title, text }: InfoCardProps) {
  return (
    <div className="rounded-[24px] bg-[color:var(--surface-2)]/55 p-5">
      <p className="text-xs uppercase tracking-[0.24em] text-[color:var(--accent)]">{title}</p>
      <p className="mt-3 text-sm leading-7 text-[color:var(--muted)]">{text}</p>
    </div>
  );
}
