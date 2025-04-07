import { useEffect, useRef } from 'react';

import { getCssVariable } from '@/lib';

import { Dot } from './generate-dots';

interface UseDotAnimationProps {
  canvasRef: React.RefObject<HTMLCanvasElement | null>;
  containerRef: React.RefObject<HTMLDivElement | null>;
  dots: Dot[];
  dotColor: string;
  dotSize: number;
}

export const useDotAnimation = ({ canvasRef, containerRef, dots, dotColor, dotSize }: UseDotAnimationProps) => {
  const animationRef = useRef<number | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const width = container.offsetWidth;
    const height = container.offsetHeight;
    const resolvedDotColor = getCssVariable(dotColor, 'rgba(169, 16, 121, 0.5)');

    const animate = () => {
      const time = performance.now() * 0.001;
      ctx.clearRect(0, 0, width, height);

      dots.forEach(({ x, y }) => {
        const pulse = 0.5 + Math.sin((time + x * y * 0.001) * 2) * 0.25;
        const dotRadius = dotSize * pulse;
        const glowRadius = dotSize * 2 * pulse;

        const gradient = ctx.createRadialGradient(x, y, 0, x, y, glowRadius);
        gradient.addColorStop(0, resolvedDotColor);
        gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(x, y, dotRadius, 0, Math.PI * 2);
        ctx.fill();
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, [canvasRef, containerRef, dots, dotColor, dotSize]);
};
