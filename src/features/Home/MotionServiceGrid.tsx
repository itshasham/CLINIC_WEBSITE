'use client';

import { motion } from 'motion/react';

type ServiceItem = {
  title: string;
  short: string;
  image: string;
};

type MotionServiceGridProps = {
  services: ServiceItem[];
};

export function MotionServiceGrid({ services }: MotionServiceGridProps) {
  return (
    <div className="container-shell mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
      {services.map((service, index) => (
        <motion.article
          key={service.title}
          className="group overflow-hidden rounded-[34px] border border-[color:var(--line)] bg-[color:var(--surface-strong)] p-3 shadow-[var(--shadow-soft)]"
          initial={{ opacity: 0, y: 34 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
          whileHover={{ y: -10, rotateX: 3, rotateY: index % 2 === 0 ? -4 : 4 }}
          style={{ transformStyle: 'preserve-3d' }}
        >
          <motion.div
            className="relative h-[250px] overflow-hidden rounded-[26px] bg-[color:var(--surface-2)]"
            whileHover={{ scale: 0.985 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.img
              src={service.image}
              alt={service.title}
              className="h-full w-full object-cover"
              whileHover={{ scale: 1.08 }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            />
            <motion.div
              className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,247,240,0.24),transparent_34%),linear-gradient(180deg,rgba(32,18,12,0.02),rgba(32,18,12,0.22))]"
              whileHover={{ opacity: 0.72 }}
            />
            <div className="absolute left-4 top-4 rounded-full bg-[#fffaf3]/88 px-3 py-1 text-[12px] font-semibold text-[color:var(--accent-strong)] backdrop-blur-md">
              0{index + 1}
            </div>
          </motion.div>
          <div className="px-3 pb-4 pt-6">
            <h3 className="display-font text-[32px] font-semibold leading-[0.95] tracking-[-0.04em]">{service.title}</h3>
            <p className="mt-4 text-[14px] leading-7 text-[color:var(--muted)]">{service.short}</p>
          </div>
        </motion.article>
      ))}
    </div>
  );
}
