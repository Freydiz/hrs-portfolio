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
    gridColor = '--color-secondary/20',
    dotColor = '--color-accent',
    dotSize = 6,
    dotDensity = 0.03,
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
      <div className='from-primary via-background to-primary animate-gradient absolute inset-0 bg-gradient-to-br' />
      <canvas ref={gridCanvasRef} className='pointer-events-none absolute inset-0 h-full w-full bg-transparent' />
      <canvas ref={dotCanvasRef} className='pointer-events-none absolute inset-0 h-full w-full bg-transparent' />
    </div>
  );
});

AnimatedBackground.displayName = 'GridBackground';

export default AnimatedBackground;
