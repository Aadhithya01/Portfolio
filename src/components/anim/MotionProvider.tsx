import { LazyMotion, domAnimation } from 'framer-motion';
import React from 'react';

/**
 * Loads only the DOM-animation subset of framer-motion.
 * All components must use `m.*` instead of `motion.*` so the
 * full runtime is never pulled into the bundle.
 */
export function MotionProvider({ children }: { children: React.ReactNode }) {
  return <LazyMotion features={domAnimation}>{children}</LazyMotion>;
}
