'use client';

import { motion, useMotionValue, useSpring } from 'motion/react';
import { ReactNode } from 'react';

type MagneticProps = {
  children: ReactNode;
  className?: string;
  strength?: number;
};

export function Magnetic({ children, className = '', strength = 28 }: MagneticProps) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 240, damping: 20, mass: 0.5 });
  const springY = useSpring(y, { stiffness: 240, damping: 20, mass: 0.5 });

  return (
    <motion.div
      className={className}
      style={{ x: springX, y: springY }}
      onPointerMove={(event) => {
        const rect = event.currentTarget.getBoundingClientRect();
        const offsetX = event.clientX - (rect.left + rect.width / 2);
        const offsetY = event.clientY - (rect.top + rect.height / 2);

        x.set((offsetX / rect.width) * strength);
        y.set((offsetY / rect.height) * strength);
      }}
      onPointerLeave={() => {
        x.set(0);
        y.set(0);
      }}
    >
      {children}
    </motion.div>
  );
}
