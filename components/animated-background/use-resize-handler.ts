import { useCallback, useRef } from 'react';

import { generateDots, Dot } from './generate-dots';

interface Dimensions {
  width: number;
  height: number;
}

interface UseResizeHandlerProps {
  containerRef: React.RefObject<HTMLDivElement | null>;
  gridCanvasRef: React.RefObject<HTMLCanvasElement | null>;
  dotCanvasRef: React.RefObject<HTMLCanvasElement | null>;
  gridSize: number;
  dotDensity: number;
  drawGrid: () => void;
  dimensions: Dimensions;
  setDots: React.Dispatch<React.SetStateAction<Dot[]>>;
  setDimensions: React.Dispatch<React.SetStateAction<Dimensions>>;
}

export const useResizeHandler = ({
  containerRef,
  gridCanvasRef,
  dotCanvasRef,
  gridSize,
  dotDensity,
  drawGrid,
  dimensions,
  setDots,
  setDimensions
}: UseResizeHandlerProps) => {
  const lastSize = useRef<{ width: number; height: number }>({ width: 0, height: 0 });

  return useCallback(() => {
    const container = containerRef.current;
    if (!container) return;

    const width = container.offsetWidth;
    const height = container.offsetHeight;

    const updateCanvas = (canvas: HTMLCanvasElement | null) => {
      if (!canvas) return;
      const ctx = canvas.getContext('2d');
      if (!ctx) return;

      const dpr = window.devicePixelRatio || 1;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    updateCanvas(gridCanvasRef.current);
    updateCanvas(dotCanvasRef.current);

    const hasSizeChanged = lastSize.current.width !== width || lastSize.current.height !== height;

    if (hasSizeChanged || dimensions.width === 0 || dimensions.height === 0) {
      lastSize.current = { width, height };
      setDots(generateDots({ width, height, gridSize, dotDensity }));
      setDimensions({ width, height });
    }

    drawGrid();
  }, [containerRef, gridCanvasRef, dotCanvasRef, gridSize, dotDensity, drawGrid, dimensions, setDots, setDimensions]);
};
