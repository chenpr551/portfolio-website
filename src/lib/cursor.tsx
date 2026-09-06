"use client";

import { createContext, useContext, useState, type ReactNode } from "react";

interface CursorContextValue {
  accent: string | null;
  setAccent: (accent: string | null) => void;
}

const CursorContext = createContext<CursorContextValue>({
  accent: null,
  setAccent: () => {},
});

export function CursorProvider({ children }: { children: ReactNode }) {
  const [accent, setAccent] = useState<string | null>(null);
  return (
    <CursorContext.Provider value={{ accent, setAccent }}>{children}</CursorContext.Provider>
  );
}

/** Returns the current hover accent plus a setter -- call setAccent(color) on
 * mouseenter and setAccent(null) on mouseleave of any element that should
 * drive the custom cursor's hover state. */
export function useCursorAccent() {
  return useContext(CursorContext);
}
