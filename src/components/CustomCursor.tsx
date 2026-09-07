"use client";

import { useEffect, useRef, useSyncExternalStore } from "react";
import { createPortal } from "react-dom";
import { useCursorAccent } from "@/lib/cursor";

const FINE_POINTER_QUERY = "(hover: hover) and (pointer: fine)";
const HOVER_SCALE = 1.8;

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
  const pos = useRef({ x: 0, y: 0 });
  const hoveringRef = useRef(false);
  const enabled = useSyncExternalStore(subscribeFinePointer, getFinePointerSnapshot, () => false);
  const { accent } = useCursorAccent();

  const applyTransform = () => {
    if (!dotRef.current) return;
    const scale = hoveringRef.current ? HOVER_SCALE : 1;
    // translate and scale baked into one `transform` string on purpose --
    // see the comment on .custom-cursor in globals.css for why.
    dotRef.current.style.transform = `translate(${pos.current.x}px, ${pos.current.y}px) scale(${scale})`;
  };

  useEffect(() => {
    if (!enabled) return;

    const move = (e: MouseEvent) => {
      pos.current = { x: e.clientX, y: e.clientY };
      applyTransform();
    };
    window.addEventListener("mousemove", move);

    return () => window.removeEventListener("mousemove", move);
  }, [enabled]);

  // Re-apply as soon as the hover accent changes (not just on the next
  // mousemove), so the scale updates the instant a hover target is entered.
  useEffect(() => {
    hoveringRef.current = accent !== null;
    applyTransform();
  }, [accent]);

  if (!enabled) return null;

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
