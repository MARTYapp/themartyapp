import { motion as _motion, AnimatePresence, useReducedMotion } from "framer-motion";

type MotionProps = Record<string, unknown>;

function motion(Component: any) {
  return function (props: MotionProps) {
    const shouldReduce = useReducedMotion();
    if (shouldReduce) {
      const { animate: _animate, initial: _initial, exit: _exit, whileHover: _whileHover, whileTap: _whileTap, ...rest } = props;
      return _motion(Component)(rest);
    }
    return _motion(Component)(props);
  };
}

export { motion, AnimatePresence, useReducedMotion };