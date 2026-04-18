/* eslint-disable @next/next/no-img-element */
'use client';

import Link from 'next/link';
import { CSSProperties, useEffect, useRef } from 'react';

type TreatmentFanItem = {
  label: string;
  image?: string;
};

type TreatmentFanProps = {
  items: TreatmentFanItem[];
};

export function TreatmentFan({ items }: TreatmentFanProps) {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const node = ref.current;

    if (!node) {
      return;
    }

    const spokes = Array.from(node.querySelectorAll<HTMLElement>('[data-spoke]'));
    const media = window.matchMedia('(prefers-reduced-motion: reduce)');

    if (media.matches) {
      spokes.forEach((spoke) => {
        const rotation = Number(spoke.dataset.rotation ?? '0');
        spoke.style.transform = `translateX(-50%) rotate(${rotation}deg) translateY(0px) scale(1)`;
        spoke.style.opacity = '1';
      });
      return;
    }

    const stage = node.closest<HTMLElement>('[data-hero-stage]');

    const clamp = (value: number, min: number, max: number) => Math.min(Math.max(value, min), max);

    const applyStyles = (progress: number, compression: number) => {
      const centerIndex = (spokes.length - 1) / 2;
      const desktop = window.innerWidth >= 768;
      const radiusX = desktop ? 338 : 214;
      const radiusY = desktop ? 132 : 94;
      const collapseY = desktop ? 160 : 122;
      const compressionScale = 1 - compression * 0.18;

      spokes.forEach((spoke, index) => {
        const rotation = Number(spoke.dataset.rotation ?? '0');
        const angle = (rotation * Math.PI) / 180;
        const distanceFromCenter = Math.abs(index - centerIndex);
        const openness = 0.72 + progress * 0.28;
        const x = Math.sin(angle) * radiusX * openness * compressionScale;
        const y =
          -Math.cos(angle) * radiusY * openness +
          (1 - progress) * (collapseY * 0.46 + distanceFromCenter * 8) -
          compression * 18;
        const scale = 0.88 + progress * 0.12 - distanceFromCenter * 0.012;
        const opacity = 0.34 + progress * 0.66;

        spoke.style.transform =
          `translateX(-50%) translate(${x.toFixed(2)}px, ${y.toFixed(2)}px) rotate(${rotation.toFixed(2)}deg) scale(${scale.toFixed(3)})`;
        spoke.style.opacity = opacity.toFixed(3);
      });
    };

    let frame = 0;
    const syncWithScroll = () => {
      frame = 0;
      const rect = (stage ?? node).getBoundingClientRect();
      const viewportHeight = window.innerHeight || 1;
      const exposure = clamp((viewportHeight - rect.top) / (viewportHeight * 0.9), 0, 1);
      const compression = clamp(Math.abs(Math.min(rect.top, 0)) / Math.max(rect.height * 0.62, 1), 0, 1);
      const target = clamp(1 + exposure * 0.04 - compression * 0.44, 0.54, 1);

      applyStyles(target, compression);
    };

    const onScrollOrResize = () => {
      if (frame) {
        return;
      }

      frame = window.requestAnimationFrame(syncWithScroll);
    };

    syncWithScroll();
    window.addEventListener('scroll', onScrollOrResize, { passive: true });
    window.addEventListener('resize', onScrollOrResize);

    return () => {
      if (frame) {
        window.cancelAnimationFrame(frame);
      }

      window.removeEventListener('scroll', onScrollOrResize);
      window.removeEventListener('resize', onScrollOrResize);
    };
  }, []);

  return (
    <div ref={ref} className="treatment-fan relative mx-auto h-[430px] w-[min(1120px,100%)] md:h-[560px]">
      {items.map((item, index) => {
        const rotation = items.length === 1 ? 0 : -72 + index * (144 / (items.length - 1));
        const angle = (rotation * Math.PI) / 180;
        const fallbackRadiusX = 152;
        const fallbackRadiusY = 86;
        const fallbackX = Math.sin(angle) * fallbackRadiusX;
        const fallbackY = -Math.cos(angle) * fallbackRadiusY - Math.abs(index - (items.length - 1) / 2) * 3;
        const fallbackScale = 0.92 - Math.abs(index - (items.length - 1) / 2) * 0.025;

        return (
          <div
            key={item.label}
            data-spoke
            data-rotation={rotation}
            className="treatment-fan-spoke absolute left-1/2 bottom-[86px] origin-bottom md:bottom-[104px]"
            style={
              {
                '--fan-delay': `${index * 70}ms`,
                transform: `translateX(-50%) translate(${fallbackX.toFixed(2)}px, ${fallbackY.toFixed(2)}px) rotate(${rotation.toFixed(2)}deg) scale(${fallbackScale.toFixed(3)})`,
                opacity: 1,
              } as CSSProperties
            }
          >
            <Link
              href="/services"
              className="group flex h-[180px] w-[76px] cursor-pointer flex-col items-center justify-start gap-4 rounded-[999px] border border-white/28 bg-[linear-gradient(180deg,rgba(214,191,171,0.88)_0%,rgba(184,156,134,0.88)_100%)] px-2 py-3 text-[color:var(--text)] shadow-[inset_0_1px_0_rgba(255,255,255,0.42),0_24px_48px_rgba(30,16,8,0.16)] backdrop-blur-md transition duration-300 hover:-translate-y-2 hover:bg-[linear-gradient(180deg,rgba(226,203,184,0.95)_0%,rgba(194,164,141,0.94)_100%)] md:h-[228px] md:w-[90px]"
            >
              <span className="block size-10 overflow-hidden rounded-full border border-white/40 bg-white/28 shadow-[0_10px_24px_rgba(40,22,12,0.12)] md:size-11">
                {item.image ? <img src={item.image} alt="" className="h-full w-full object-cover" loading="lazy" /> : null}
              </span>
              <span className="text-[12px] font-medium leading-tight tracking-[-0.02em] [writing-mode:vertical-rl] md:text-[14px]">
                {item.label}
              </span>
            </Link>
          </div>
        );
      })}

      <div className="absolute bottom-0 left-1/2 h-[168px] w-[312px] -translate-x-1/2 rounded-t-[190px] border border-[#f2e2d4] bg-[radial-gradient(circle_at_top,#fffdf9_0%,#fef9f4_46%,#f7ede2_100%)] shadow-[0_28px_70px_rgba(44,24,12,0.25)] md:h-[208px] md:w-[420px]">
        <div className="flex h-full flex-col items-center justify-center px-7 pt-4 text-center md:px-10">
          <span className="text-[24px] leading-none text-[color:var(--accent-strong)]">✤</span>
          <p className="mt-3 display-font text-[34px] font-semibold tracking-[-0.04em] text-[color:var(--text)] md:text-[52px]">
            Explore treatments
          </p>
          <p className="mt-2 max-w-[220px] text-[13px] leading-6 text-[color:var(--muted)] md:max-w-none md:text-[15px]">
            Clinical care, softer finish
          </p>
        </div>
      </div>
    </div>
  );
}
