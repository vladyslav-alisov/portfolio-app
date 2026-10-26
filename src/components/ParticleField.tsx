import { useEffect, useRef } from 'react';
export type Shape = 'Orbit' | 'Sphere' | 'Wave';

export default function ParticleField({ motion, shape }: { motion: boolean; shape: Shape }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const shapeRef = useRef(shape);
  const redrawRef = useRef<() => void>(() => {});
  useEffect(() => { shapeRef.current = shape; if (!motion) redrawRef.current(); }, [shape, motion]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext('2d', { alpha: true });
    if (!canvas || !context) return;
    let width = 1, height = 1, frame = 0, time = 0, previousTime = 0;
    let visible = true;
    const pointer = { x: 0, y: 0, targetX: 0, targetY: 0 };
    const count = window.innerWidth < 700 ? 1800 : 3400;
    const points = Array.from({ length: count }, (_, i) => {
      const u = i / count * Math.PI * 2;
      const v = i * 2.399963229728653;
      const major = 1.4 + 0.22 * Math.cos(u * 3);
      const radius = 0.48;
      const orbit = [(major + radius * Math.cos(v)) * Math.cos(u), (major + radius * Math.cos(v)) * Math.sin(u), radius * Math.sin(v) + 0.2 * Math.sin(u * 3)];
      const phi = Math.acos(1 - 2 * (i + 0.5) / count);
      const sphere = [Math.sin(phi) * Math.cos(v) * 1.7, Math.sin(phi) * Math.sin(v) * 1.7, Math.cos(phi) * 1.7];
      const wave = [((i % 68) / 67 - 0.5) * 3.8, (Math.floor(i / 68) / Math.ceil(count / 68) - 0.5) * 3.2, 0];
      return { orbit, sphere, wave, x: orbit[0], y: orbit[1], z: orbit[2], size: 0.65 + (Math.sin(i * 7.13) + 1) * 0.35 };
    });

    function draw(timestamp: number) {
      if (!context) return;
      const delta = previousTime ? Math.min(timestamp - previousTime, 40) : 16;
      previousTime = timestamp;
      if (motion) time += delta * 0.00016;
      context.clearRect(0, 0, width, height);
      pointer.x += (pointer.targetX - pointer.x) * 0.04;
      pointer.y += (pointer.targetY - pointer.y) * 0.04;
      const angleX = 0.83 + pointer.y * 0.3;
      const angleY = time * 0.7 + pointer.x * 0.4;
      const angleZ = -0.48 + Math.sin(time * 0.65) * 0.13;
      const cosX = Math.cos(angleX), sinX = Math.sin(angleX);
      const cosY = Math.cos(angleY), sinY = Math.sin(angleY);
      const cosZ = Math.cos(angleZ), sinZ = Math.sin(angleZ);
      const scale = Math.min(width, height) * 0.19;
      const currentShape = shapeRef.current;
      for (const point of points) {
        const target = currentShape === 'Orbit' ? point.orbit : currentShape === 'Sphere' ? point.sphere : point.wave;
        const targetZ = currentShape === 'Wave' ? Math.sin(target[0] * 2 + time * 3) * 0.36 + Math.cos(target[1] * 2 + time * 2) * 0.32 : target[2];
        const blend = motion ? 0.045 : 1;
        point.x += (target[0] - point.x) * blend;
        point.y += (target[1] - point.y) * blend;
        point.z += (targetZ - point.z) * blend;
        const y1 = point.y * cosX - point.z * sinX;
        const z1 = point.y * sinX + point.z * cosX;
        const x2 = point.x * cosY + z1 * sinY;
        const z2 = -point.x * sinY + z1 * cosY;
        const x3 = x2 * cosZ - y1 * sinZ;
        const y3 = x2 * sinZ + y1 * cosZ;
        const perspective = 5 / (5 - z2);
        const alpha = Math.max(0.13, Math.min(1, (z2 + 2.2) / 4));
        context.fillStyle = `rgba(205,242,105,${alpha.toFixed(2)})`;
        context.beginPath();
        context.arc(width / 2 + x3 * scale * perspective, (height - 120) / 2 + y3 * scale * perspective, point.size * perspective * (width < 400 ? 0.8 : 1), 0, Math.PI * 2);
        context.fill();
      }
      if (motion && visible && !document.hidden) frame = requestAnimationFrame(draw);
    }
    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      width = rect.width; height = rect.height;
      const ratio = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.round(width * ratio); canvas.height = Math.round(height * ratio);
      context.setTransform(ratio, 0, 0, ratio, 0, 0);
      if (!motion) draw(0);
    };
    const move = (event: PointerEvent) => {
      const rect = canvas.getBoundingClientRect();
      pointer.targetX = (event.clientX - rect.left) / width - 0.5;
      pointer.targetY = (event.clientY - rect.top) / height - 0.5;
    };
    const leave = () => { pointer.targetX = 0; pointer.targetY = 0; };
    const restart = () => { cancelAnimationFrame(frame); previousTime = 0; if (visible && !document.hidden) frame = requestAnimationFrame(draw); };
    redrawRef.current = () => draw(0);
    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(canvas);
    const observer = new IntersectionObserver(([entry]) => { visible = entry.isIntersecting; restart(); });
    observer.observe(canvas);
    canvas.addEventListener('pointermove', move);
    canvas.addEventListener('pointerleave', leave);
    document.addEventListener('visibilitychange', restart);
    resize(); restart();
    return () => {
      cancelAnimationFrame(frame);
      redrawRef.current = () => {};
      resizeObserver.disconnect(); observer.disconnect();
      canvas.removeEventListener('pointermove', move); canvas.removeEventListener('pointerleave', leave);
      document.removeEventListener('visibilitychange', restart);
    };
  }, [motion]);
  return <canvas ref={canvasRef} className="particle-canvas" aria-hidden="true" />;
}
