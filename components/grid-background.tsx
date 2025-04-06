'use client';

import React, { useEffect, useRef, useCallback, useState } from 'react';

interface Props {
  gridSize?: number;
  gridColor?: string;
  dotColor?: string;
}

const GridBackground: React.FC<Props> = (props) => {
  const { gridSize = 40, gridColor = '--color-secondary/20', dotColor = '--color-accent' } = props;
  const gridCanvasRef = useRef<HTMLCanvasElement>(null);
  const dotCanvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [dots, setDots] = useState<{ x: number; y: number }[]>([]);

  const getCssVariable = useCallback((variableName: string, fallback: string) => {
    const computedStyles = getComputedStyle(document.documentElement);
    return computedStyles.getPropertyValue(variableName).trim() || fallback;
  }, []);

  const generateDots = useCallback(
    (width: number, height: number) => {
      const newDots: { x: number; y: number }[] = [];
      for (let x = 0; x <= width; x += gridSize) {
        for (let y = 0; y <= height; y += gridSize) {
          if (Math.random() > 0.97) {
            newDots.push({ x, y });
          }
        }
      }
      return newDots;
    },
    [gridSize]
  );

  const drawGrid = useCallback(() => {
    const canvas = gridCanvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const dpr = window.devicePixelRatio || 1;
    const rect = container.getBoundingClientRect();

    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;
    canvas.style.width = `${rect.width}px`;
    canvas.style.height = `${rect.height}px`;

    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

    const resolvedGridColor = getCssVariable(gridColor, 'rgba(87, 10, 87, 0.2)');
    ctx.clearRect(0, 0, rect.width, rect.height);
    ctx.strokeStyle = resolvedGridColor;
    ctx.lineWidth = 1;

    for (let x = 0; x <= rect.width; x += gridSize) {
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, rect.height);
      ctx.stroke();
    }

    for (let y = 0; y <= rect.height; y += gridSize) {
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(rect.width, y);
      ctx.stroke();
    }

    setDots(generateDots(rect.width, rect.height));
  }, [gridSize, generateDots, getCssVariable, gridColor]);

  useEffect(() => {
    drawGrid();

    const observer = new ResizeObserver(() => {
      drawGrid();
    });

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [drawGrid]);

  // Animate glowing dots on separate canvas
  useEffect(() => {
    const canvas = dotCanvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resolvedDotColor = getCssVariable(dotColor, 'rgba(169, 16, 121, 0.5)');

    const animate = () => {
      const dpr = window.devicePixelRatio || 1;
      const width = canvas.width / dpr;
      const height = canvas.height / dpr;

      ctx.clearRect(0, 0, width, height);

      ctx.fillStyle = resolvedDotColor;
      const time = performance.now();

      dots.forEach(({ x, y }) => {
        const glow = 1 + Math.sin((time + x + y) * 0.002) * 0.5;
        ctx.beginPath();
        ctx.arc(x, y, 1.5 * glow, 0, Math.PI * 2);
        ctx.fill();
      });

      requestAnimationFrame(animate);
    };

    const resizeCanvas = () => {
      const container = containerRef.current;
      if (!container) return;
      const rect = container.getBoundingClientRect();
      const dpr = window.devicePixelRatio || 1;

      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      canvas.style.width = `${rect.width}px`;
      canvas.style.height = `${rect.height}px`;

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    resizeCanvas();
    animate();

    window.addEventListener('resize', resizeCanvas);
    return () => window.removeEventListener('resize', resizeCanvas);
  }, [dots, dotColor, getCssVariable]);

  return (
    <div ref={containerRef} className='pointer-events-none fixed inset-0 z-0 h-full w-full'>
      {/* Gradient background layer */}
      <div className='from-primary via-background to-primary animate-gradient bg-gradient-animate absolute inset-0 bg-gradient-to-br' />

      {/* Grid canvas */}
      <canvas ref={gridCanvasRef} className='pointer-events-none absolute inset-0 h-full w-full bg-transparent' />

      {/* Animated dots canvas */}
      <canvas ref={dotCanvasRef} className='pointer-events-none absolute inset-0 h-full w-full bg-transparent' />
    </div>
  );
};

export default GridBackground;
