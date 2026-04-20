'use client';

import { Button } from '@/components/Button/Button';
import { Magnetic } from '@/components/Magnetic/Magnetic';
import { TreatmentFan } from '@/components/TreatmentFan/TreatmentFan';
import { motion, useMotionTemplate, useMotionValue, useReducedMotion, useScroll, useSpring, useTransform } from 'motion/react';
import { useRef } from 'react';

type OrbitService = {
  label: string;
  image?: string;
};

type InteractiveHeroProps = {
  heroImage: string;
  clinicName: string;
  whatsapp: string;
  orbitServices: OrbitService[];
};

const floatingCards = [
  { label: 'Laser Treatments', top: '20%', left: '6%', rotate: -8 },
  { label: 'Skin Care', top: '18%', right: '7%', rotate: 7 },
  { label: 'Calm Consultations', top: '56%', left: '8%', rotate: -11 },
  { label: 'Natural Finish', top: '52%', right: '9%', rotate: 10 },
];

export function InteractiveHero({ heroImage, clinicName, whatsapp, orbitServices }: InteractiveHeroProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const reduceMotion = useReducedMotion();
  const pointerX = useMotionValue(50);
  const pointerY = useMotionValue(32);
  const smoothX = useSpring(pointerX, { stiffness: 120, damping: 24 });
  const smoothY = useSpring(pointerY, { stiffness: 120, damping: 24 });
  const glow = useMotionTemplate`radial-gradient(circle at ${smoothX}% ${smoothY}%, rgba(255, 241, 226, 0.28), rgba(255, 241, 226, 0.08) 22%, transparent 48%)`;
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const imageY = useTransform(scrollYProgress, [0, 1], ['0%', reduceMotion ? '4%' : '8%']);
  const imageScale = useTransform(scrollYProgress, [0, 1], [1.02, reduceMotion ? 1.05 : 1.1]);
  const contentY = useTransform(scrollYProgress, [0, 1], [0, reduceMotion ? 80 : 110]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.78], [1, reduceMotion ? 0.55 : 0.28]);
  const fanY = useTransform(scrollYProgress, [0, 1], [0, reduceMotion ? 48 : 66]);
  const fanScale = useTransform(scrollYProgress, [0, 1], [1, reduceMotion ? 0.92 : 0.9]);

  return (
    <section className="page-hero-space">
      <div className="container-shell">
        <motion.div
          ref={ref}
          data-hero-stage
          className="hero-frame relative min-h-[780px] overflow-hidden rounded-[34px] bg-[color:var(--dark)] shadow-[var(--shadow-strong)] md:min-h-[960px] md:rounded-[50px]"
          onPointerMove={(event) => {
            if (window.innerWidth < 1024 || reduceMotion) {
              return;
            }

            const rect = event.currentTarget.getBoundingClientRect();
            pointerX.set(((event.clientX - rect.left) / rect.width) * 100);
            pointerY.set(((event.clientY - rect.top) / rect.height) * 100);
          }}
        >
          <motion.div
            className="absolute inset-0 bg-cover bg-center opacity-95"
            style={{ backgroundImage: `url(${heroImage})`, y: imageY, scale: imageScale }}
            aria-hidden="true"
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(22,12,8,0.26)_0%,rgba(25,14,9,0.18)_28%,rgba(22,12,9,0.62)_100%)]" />
          {!reduceMotion ? <motion.div className="absolute inset-0" style={{ background: glow }} /> : null}
          <div className="absolute inset-x-0 top-0 h-1/2 bg-[radial-gradient(circle_at_center,rgba(255,247,236,0.2),transparent_58%)]" />

          {floatingCards.map((card, index) => (
            <motion.div
              key={card.label}
              className="pointer-events-none absolute hidden rounded-full border border-white/16 bg-white/8 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-white/72 backdrop-blur-md lg:block"
              style={{
                top: card.top,
                left: card.left,
                right: card.right,
              }}
              initial={{ opacity: 0, y: 30, rotate: card.rotate * 1.4 }}
              animate={{ opacity: 1, y: 0, rotate: card.rotate }}
              transition={{ delay: 0.55 + index * 0.12, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            >
              {card.label}
            </motion.div>
          ))}

          <motion.div className="relative z-10 flex min-h-[780px] flex-col items-center px-5 pb-6 pt-24 text-center md:min-h-[960px] md:px-10 md:pt-30" style={{ y: contentY, opacity: contentOpacity }}>
            <motion.p
              className="mx-auto mb-7 max-w-[300px] rounded-full border border-white/20 bg-white/10 px-3 py-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-white/80 backdrop-blur-md md:max-w-none md:px-4 md:text-[12px] md:tracking-[0.26em]"
              initial={{ opacity: 0, y: 26, filter: 'blur(10px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
            >
              DHA Lahore • Luxury Aesthetic Clinic
            </motion.p>

            <div className="overflow-hidden">
              <motion.h1
                className="max-w-[920px] display-font text-[44px] font-semibold leading-[0.88] tracking-[-0.06em] text-[#fffdf9] drop-shadow-[0_12px_42px_rgba(21,12,8,0.28)] sm:text-[60px] md:text-[102px] lg:text-[118px]"
                initial={{ opacity: 0, y: 90, rotateX: -16 }}
                animate={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{ duration: 1.05, delay: 0.08, ease: [0.19, 1, 0.22, 1] }}
              >
                Skin confidence
                <br />
                starts here
              </motion.h1>
            </div>

            <motion.p
              className="mt-6 max-w-[340px] text-[14px] font-medium leading-7 text-[#f7ecdf] sm:max-w-[560px] sm:text-[15px] md:text-[17px]"
              initial={{ opacity: 0, y: 34 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.28, ease: [0.22, 1, 0.36, 1] }}
            >
              {clinicName} is a luxury skin aesthetic clinic in DHA Lahore for consultation-led laser, skin, hair, and
              cosmetic care.
            </motion.p>

            <motion.div
              className="mt-8 flex flex-col justify-center gap-4 sm:flex-row"
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.85, delay: 0.42, ease: [0.22, 1, 0.36, 1] }}
            >
              <Magnetic>
                <Button href={whatsapp} size="lg" className="bg-white text-[color:var(--text)] hover:bg-[#fff4e8]">
                  Book Appointment
                </Button>
              </Magnetic>
              <Magnetic>
                <Button href="/services" variant="secondary" size="lg" className="border-white/20 bg-white/10 text-white hover:bg-white/16 hover:text-white">
                  Explore Treatments
                </Button>
              </Magnetic>
            </motion.div>

            <motion.div className="relative mt-auto flex h-[500px] w-full items-end justify-center md:h-[640px]" style={{ y: fanY, scale: fanScale }}>
              <motion.div
                className="w-full"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.54, ease: [0.22, 1, 0.36, 1] }}
              >
                <TreatmentFan items={orbitServices} />
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
