'use client';

import React, { useEffect, useRef, useState, memo } from 'react';

import { useDotAnimation } from './use-dot-animation';
import { useGrid } from './use-grid';
import { useResizeHandler } from './use-resize-handler';

interface Props {
  gridSize?: number;
  gridColor?: string;
  dotColor?: string;
  dotSize?: number;
  dotDensity?: number;
  className?: string;
}

const AnimatedBackground: React.FC<Props> = memo((props) => {
  const {
    gridSize = 40,
    gridColor = 'rgba(104, 70, 125, 0.12)',
    dotColor = 'rgba(211, 128, 255, 0.72)',
    dotSize = 4,
    dotDensity = 0.025,
    className = ''
  } = props;

  const gridCanvasRef = useRef<HTMLCanvasElement>(null);
  const dotCanvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [dots, setDots] = useState<{ x: number; y: number }[]>([]);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  const drawGrid = useGrid({ canvasRef: gridCanvasRef, containerRef, gridSize, gridColor });
  const handleResize = useResizeHandler({
    containerRef,
    gridCanvasRef,
    dotCanvasRef,
    gridSize,
    dotDensity,
    drawGrid,
    dimensions,
    setDots,
    setDimensions
  });

  useDotAnimation({ canvasRef: dotCanvasRef, containerRef, dots, dotColor, dotSize });

  useEffect(() => {
    handleResize();
    const observer = new ResizeObserver(handleResize);
    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, [handleResize]);

  return (
    <div ref={containerRef} className={`pointer-events-none fixed inset-0 z-0 h-full w-full ${className}`}>
      <div className='absolute inset-0 bg-[radial-gradient(circle_at_75%_12%,hsl(var(--primary)/0.34),transparent_34%),radial-gradient(circle_at_8%_72%,hsl(var(--accent)/0.06),transparent_30%),linear-gradient(135deg,hsl(var(--background)),hsl(276_52%_8%))]' />
      <canvas ref={gridCanvasRef} className='pointer-events-none absolute inset-0 h-full w-full bg-transparent' />
      <canvas ref={dotCanvasRef} className='pointer-events-none absolute inset-0 h-full w-full bg-transparent' />
      <div className='absolute inset-0 bg-[linear-gradient(to_bottom,hsl(var(--background)/0.08),hsl(var(--background)/0.32))]' />
    </div>
  );
});

AnimatedBackground.displayName = 'AnimatedBackground';

export default AnimatedBackground;
