// components/safe-motion.tsx
"use client";

import {
  motion as framerMotion,
  AnimatePresence,
  useReducedMotion,
  MotionProps,
} from "framer-motion";
import { ComponentType, ElementType } from "react";

/**
 * A safer motion wrapper that respects prefers-reduced-motion.
 * Works with both React components and intrinsic elements like "li" or "div".
 */
function motion<T extends ElementType>(Component: T) {
  const MotionComponent = framerMotion(Component);

  return function SafeMotion(
    props: MotionProps & React.ComponentPropsWithoutRef<T>
  ) {
    const shouldReduce = useReducedMotion();

    if (shouldReduce) {
      const { animate, initial, exit, whileHover, whileTap, ...rest } = props;
      return <MotionComponent {...(rest as any)} />;
    }

    return <MotionComponent {...props} />;
  };
}

export { motion, AnimatePresence, useReducedMotion };