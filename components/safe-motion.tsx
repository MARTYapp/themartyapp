/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";

// We keep types minimal to avoid pulling framer-motion types if it's not installed.
let motion: any;
let AnimatePresence: any;
let rawUseReducedMotion: (() => boolean | null) | undefined;

try {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const fm = require("framer-motion");
  motion = fm.motion;
  AnimatePresence = fm.AnimatePresence;
  // In some versions, this can be () => boolean | null — keep it flexible
  rawUseReducedMotion = fm.useReducedMotion as () => boolean | null;
} catch {
  // Minimal shims so builds don’t break without the lib
  motion = new Proxy(
    {},
    {
      get:
        () =>
        ({ children, ...rest }: any) => <div {...rest}>{children}</div>,
    }
  );
  AnimatePresence = ({ children }: { children: React.ReactNode }) => <>{children}</>;
  rawUseReducedMotion = () => true;
}

// Stable wrapper that always returns a boolean
function useReducedMotion(): boolean {
  try {
    const v = rawUseReducedMotion ? rawUseReducedMotion() : true;
    return v == null ? true : !!v;
  } catch {
    return true;
  }
}

export { motion, AnimatePresence, useReducedMotion };