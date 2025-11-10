import { useEffect, useRef } from 'react';

// Canvas-based particle network with cyan/blue glow
export default function ParticlesBackground() {
  const canvasRef = useRef(null);
  const rafRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const DPR = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = width * DPR;
    canvas.height = height * DPR;
    canvas.style.width = width + 'px';
    canvas.style.height = height + 'px';
    ctx.scale(DPR, DPR);

    const PARTICLE_COUNT = Math.min(120, Math.floor((width * height) / 15000));

    const particles = Array.from({ length: PARTICLE_COUNT }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.6,
      vy: (Math.random() - 0.5) * 0.6,
      r: 1.2 + Math.random() * 1.8,
    }));

    function draw() {
      ctx.clearRect(0, 0, width, height);

      // soft vignette
      const grd = ctx.createRadialGradient(
        width * 0.5,
        height * 0.3,
        Math.min(width, height) * 0.1,
        width * 0.5,
        height * 0.3,
        Math.max(width, height)
      );
      grd.addColorStop(0, 'rgba(0,0,0,0.0)');
      grd.addColorStop(1, 'rgba(0,0,0,0.35)');
      ctx.fillStyle = grd;
      ctx.fillRect(0, 0, width, height);

      // animate particles
      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(34,211,238,0.55)'; // cyan
        ctx.shadowColor = 'rgba(34,211,238,0.6)';
        ctx.shadowBlur = 6;
        ctx.fill();
      }

      // connect lines
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const a = particles[i];
          const b = particles[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const dist = Math.hypot(dx, dy);
          if (dist < 110) {
            const t = 1 - dist / 110;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.strokeStyle = `rgba(59,130,246,${0.15 * t})`; // blue
            ctx.lineWidth = 1;
            ctx.shadowColor = 'rgba(34,211,238,0.35)';
            ctx.shadowBlur = 8;
            ctx.stroke();
          }
        }
      }

      rafRef.current = requestAnimationFrame(draw);
    }

    function onResize() {
      width = window.innerWidth;
      height = window.innerHeight;
      const DPR2 = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = width * DPR2;
      canvas.height = height * DPR2;
      canvas.style.width = width + 'px';
      canvas.style.height = height + 'px';
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.scale(DPR2, DPR2);
    }

    window.addEventListener('resize', onResize);
    rafRef.current = requestAnimationFrame(draw);

    return () => {
      window.removeEventListener('resize', onResize);
      cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-0 mix-blend-screen pointer-events-none"
      aria-hidden="true"
    />
  );
}
