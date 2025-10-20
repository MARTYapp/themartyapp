import {
  motion as framerMotion,
  AnimatePresence,
  useReducedMotion,
  MotionProps,
} from "framer-motion";
import { ComponentType } from "react";

function motion<T extends ComponentType<any>>(Component: T) {
  const MotionComponent = framerMotion(Component);

  return function SafeMotion(props: MotionProps & React.ComponentProps<T>) {
    const shouldReduce = useReducedMotion();

    if (shouldReduce) {
      const {
        animate,
        initial,
        exit,
        whileHover,
        whileTap,
        ...rest
      } = props as any;
      return <MotionComponent {...rest} />;
    }

    return <MotionComponent {...props} />;
  };
}

export { motion, AnimatePresence, useReducedMotion };