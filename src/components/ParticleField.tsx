"use client";

import { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  r: number;
  hue: string;
  drift: number;
}

const COLORS = ["#e2542b", "#b7d33a", "#4a5fd9", "#e8b23d"];

export default function ParticleField() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const pointer = useRef({ x: 0, y: 0, active: false });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    let width = 0;
    let height = 0;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    window.addEventListener("resize", resize);

    pointer.current.x = width / 2;
    pointer.current.y = height / 2;

    const count = reduceMotion ? 0 : 46;
    const particles: Particle[] = Array.from({ length: count }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: 0,
      vy: 0,
      r: 30 + Math.random() * 70,
      hue: COLORS[Math.floor(Math.random() * COLORS.length)],
      drift: 0.15 + Math.random() * 0.35,
    }));

    const onMove = (clientX: number, clientY: number) => {
      const rect = canvas.getBoundingClientRect();
      pointer.current.x = clientX - rect.left;
      pointer.current.y = clientY - rect.top;
      pointer.current.active = true;
    };

    const handleMouse = (e: MouseEvent) => onMove(e.clientX, e.clientY);
    const handleTouch = (e: TouchEvent) => {
      const t = e.touches[0];
      if (t) onMove(t.clientX, t.clientY);
    };
    const handleLeave = () => {
      pointer.current.active = false;
    };

    canvas.addEventListener("mousemove", handleMouse);
    canvas.addEventListener("touchmove", handleTouch, { passive: true });
    canvas.addEventListener("mouseleave", handleLeave);

    let raf = 0;
    let t = 0;

    const render = () => {
      t += 0.008;
      ctx.clearRect(0, 0, width, height);

      const px = pointer.current.x;
      const py = pointer.current.y;

      particles.forEach((p, i) => {
        const targetX = pointer.current.active
          ? px + Math.cos(t * p.drift + i) * 40
          : width / 2 + Math.cos(t * p.drift + i) * width * 0.35;
        const targetY = pointer.current.active
          ? py + Math.sin(t * p.drift + i) * 40
          : height / 2 + Math.sin(t * p.drift * 1.3 + i) * height * 0.3;

        p.vx += (targetX - p.x) * 0.0025;
        p.vy += (targetY - p.y) * 0.0025;
        p.vx *= 0.94;
        p.vy *= 0.94;
        p.x += p.vx;
        p.y += p.vy;

        const grad = ctx.createRadialGradient(
          p.x,
          p.y,
          0,
          p.x,
          p.y,
          p.r
        );
        grad.addColorStop(0, `${p.hue}55`);
        grad.addColorStop(1, `${p.hue}00`);
        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fill();
      });

      raf = requestAnimationFrame(render);
    };

    if (!reduceMotion) {
      raf = requestAnimationFrame(render);
    }

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      canvas.removeEventListener("mousemove", handleMouse);
      canvas.removeEventListener("touchmove", handleTouch);
      canvas.removeEventListener("mouseleave", handleLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 h-full w-full"
      aria-hidden="true"
    />
  );
}
