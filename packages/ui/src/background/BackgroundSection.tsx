'use client';

import React, { useMemo } from 'react';
import Image from 'next/image';
import { motion, useReducedMotion } from 'framer-motion';
import { overlayPresets, type OverlayPreset } from './presets';

export interface BackgroundSectionProps {
  children: React.ReactNode;
  imageSrc?: string;
  overlayPreset?: OverlayPreset;
  noise?: boolean;
  priority?: boolean;
  mobileVariant?: string;
  disableOnReducedMotion?: boolean;
  className?: string;
}

export const BackgroundSection: React.FC<BackgroundSectionProps> = ({
  children,
  imageSrc,
  overlayPreset = 'sectionDark',
  noise = false,
  priority = false,
  mobileVariant,
  disableOnReducedMotion = true,
  className = '',
}) => {
  const prefersReducedMotion = useReducedMotion();
  const shouldAnimate = !disableOnReducedMotion || !prefersReducedMotion;

  const overlayStyle = useMemo(
    () => ({
      backgroundImage: overlayPresets[overlayPreset],
    }),
    [overlayPreset]
  );

  return (
    <section className={`relative overflow-hidden ${className}`}>
      {/* Layer 0: Background image */}
      {imageSrc && (
        <>
          {/* Desktop */}
          <div className="absolute inset-0 hidden md:block">
            <motion.div
              className="absolute inset-0"
              initial={shouldAnimate ? { scale: 1.05 } : { scale: 1 }}
              animate={
                shouldAnimate
                  ? {
                      scale: 1,
                      transition: {
                        duration: 20,
                        repeat: Infinity,
                        repeatType: 'reverse',
                        ease: 'linear',
                      },
                    }
                  : { scale: 1 }
              }
            >
              <Image
                src={imageSrc}
                alt=""
                fill
                priority={priority}
                quality={90}
                className="object-cover"
                sizes="100vw"
              />
            </motion.div>
          </div>

          {/* Mobile */}
          <div className="absolute inset-0 md:hidden">
            <Image
              src={mobileVariant || imageSrc}
              alt=""
              fill
              priority={priority}
              quality={85}
              className="object-cover"
              sizes="100vw"
            />
          </div>
        </>
      )}

      {/* Layer 1: Overlay gradient */}
      <div className="absolute inset-0 z-10" style={overlayStyle} />

      {/* Layer 2: Noise (optional) */}
      {noise && (
        <div
          className="absolute inset-0 z-20 opacity-[0.03] mix-blend-overlay pointer-events-none"
          style={{
            backgroundImage: 'url(/backgrounds/noise.webp)',
            backgroundRepeat: 'repeat',
          }}
        />
      )}

      {/* Layer 3: Content */}
      <div className="relative z-30">{children}</div>
    </section>
  );
};
