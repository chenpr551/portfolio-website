"use client";

import { useEffect, useRef, useSyncExternalStore } from "react";
import { createPortal } from "react-dom";
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

  // Rendered via a portal straight onto <body> so this stays a sibling of
  // every other top-level element, never a descendant of anything that
  // might animate its own `transform` (e.g. a hovered nav row scaling up).
  // A `transform` (or filter/will-change: transform) on an ancestor creates
  // a new containing block for `position: fixed` descendants, which would
  // reposition the cursor relative to that ancestor instead of the viewport.
  return createPortal(
    <div
      ref={dotRef}
      className={`custom-cursor${accent ? " is-hovering" : ""}`}
      style={accent ? ({ "--hover-accent": accent } as React.CSSProperties) : undefined}
      aria-hidden="true"
    />,
    document.body
  );
}
