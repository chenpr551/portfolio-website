"use client";

import { useEffect, useRef, useSyncExternalStore } from "react";
import { useCursorAccent } from "@/lib/cursor";

const FINE_POINTER_QUERY = "(hover: hover) and (pointer: fine)";

function subscribeFinePointer(onChange: () => void) {
  const mql = window.matchMedia(FINE_POINTER_QUERY);
  mql.addEventListener("change", onChange);
  return () => mql.removeEventListener("change", onChange);
}

function getFinePointerSnapshot() {
  return window.matchMedia(FINE_POINTER_QUERY).matches;
}

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const enabled = useSyncExternalStore(subscribeFinePointer, getFinePointerSnapshot, () => false);
  const { accent } = useCursorAccent();

  useEffect(() => {
    if (!enabled) return;

    const move = (e: MouseEvent) => {
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
      }
    };
    window.addEventListener("mousemove", move);

    return () => window.removeEventListener("mousemove", move);
  }, [enabled]);

  if (!enabled) return null;

  return (
    <div
      ref={dotRef}
      className={`custom-cursor${accent ? " is-hovering" : ""}`}
      style={accent ? ({ "--hover-accent": accent } as React.CSSProperties) : undefined}
      aria-hidden="true"
    />
  );
}
