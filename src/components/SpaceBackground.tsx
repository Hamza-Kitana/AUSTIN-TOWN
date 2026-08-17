import { useEffect, useRef } from "react";

/**
 * Animated 3D star-warp background rendered on a canvas.
 * Stars are projected from 3D space with parallax reacting to the pointer.
 */
export function SpaceBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = 0;
    let height = 0;
    let dpr = 1;
    const STAR_COUNT = 520;
    type Star = { x: number; y: number; z: number };
    const stars: Star[] = [];

    const reset = (s: Star) => {
      s.x = (Math.random() - 0.5) * 2200;
      s.y = (Math.random() - 0.5) * 2200;
      s.z = Math.random() * 1400 + 120;
    };

    for (let i = 0; i < STAR_COUNT; i++) {
      const s = { x: 0, y: 0, z: 0 };
      reset(s);
      stars.push(s);
    }

    const resize = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = canvas.clientWidth;
      height = canvas.clientHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    window.addEventListener("resize", resize);

    let px = 0;
    let py = 0;
    let tx = 0;
    let ty = 0;
    const onPointer = (e: PointerEvent) => {
      tx = (e.clientX / window.innerWidth - 0.5) * 120;
      ty = (e.clientY / window.innerHeight - 0.5) * 120;
    };
    window.addEventListener("pointermove", onPointer);

    let raf = 0;
    let t = 0;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const draw = () => {
      t += 0.006;
      px += (tx - px) * 0.04;
      py += (ty - py) * 0.04;

      ctx.clearRect(0, 0, width, height);

      // nebula blobs
      const blobs = [
        { x: 0.22, y: 0.3, r: 0.55, c: "rgba(60,110,255,0.20)" },
        { x: 0.82, y: 0.22, r: 0.45, c: "rgba(0,190,255,0.16)" },
        { x: 0.6, y: 0.85, r: 0.5, c: "rgba(90,60,255,0.14)" },
      ];
      let i = -1;
      for (const b of blobs) {
        i++;
        const wob = reduce ? 0 : Math.sin(t + i) * 26;
        const cx = b.x * width + px * (0.4 + i * 0.2) + wob;
        const cy = b.y * height + py * (0.4 + i * 0.2) - wob;
        const rad = b.r * Math.max(width, height) * 0.6;
        const g = ctx.createRadialGradient(cx, cy, 0, cx, cy, rad);
        g.addColorStop(0, b.c);
        g.addColorStop(1, "rgba(0,0,0,0)");
        ctx.fillStyle = g;
        ctx.fillRect(0, 0, width, height);
      }

      const cx = width / 2 + px;
      const cy = height / 2 + py;
      const focal = 520;

      for (const s of stars) {
        if (!reduce) s.z -= 2.6;
        if (s.z <= 20) reset(s);
        const k = focal / s.z;
        const x = cx + s.x * k;
        const y = cy + s.y * k;
        if (x < -50 || x > width + 50 || y < -50 || y > height + 50) continue;
        const size = Math.max(0.4, (1 - s.z / 1550) * 2.4);
        const alpha = Math.min(1, (1 - s.z / 1600) * 1.1);
        ctx.beginPath();
        ctx.arc(x, y, size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${170 + size * 30},${215 + size * 12},255,${alpha})`;
        ctx.fill();
        if (size > 1.7) {
          ctx.beginPath();
          ctx.arc(x, y, size * 4, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(90,170,255,${alpha * 0.09})`;
          ctx.fill();
        }
      }

      raf = requestAnimationFrame(draw);
    };
    raf = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", onPointer);
    };
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-background">
      <canvas ref={canvasRef} className="h-full w-full" />
      <div className="neon-grid absolute inset-x-0 bottom-0 h-[45vh] opacity-30 [mask-image:linear-gradient(to_top,black,transparent)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_35%,oklch(0.1_0.05_265/0.85)_100%)]" />
    </div>
  );
}
