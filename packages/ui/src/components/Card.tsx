'use client';

import React from 'react';
import { motion } from 'framer-motion';

export interface CardProps {
  children: React.ReactNode;
  className?: string;
  glass?: boolean;
}

export const Card: React.FC<CardProps> = ({ children, className = '', glass = false }) => {
  const baseClasses = 'rounded-lg p-6';
  const glassClasses = glass
    ? 'bg-bg-surface/60 backdrop-blur-md border border-text-muted/10'
    : 'bg-bg-surface shadow-soft';

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.4 }}
      className={`${baseClasses} ${glassClasses} ${className}`}
    >
      {children}
    </motion.div>
  );
};
