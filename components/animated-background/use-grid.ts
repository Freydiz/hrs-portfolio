import { useCallback } from 'react';

import { getCssVariable } from '@/lib';

interface UseGridProps {
  canvasRef: React.RefObject<HTMLCanvasElement | null>;
  containerRef: React.RefObject<HTMLDivElement | null>;
  gridSize: number;
  gridColor: string;
}

export const useGrid = ({ canvasRef, containerRef, gridSize, gridColor }: UseGridProps) => {
  return useCallback(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    const { width, height } = container.getBoundingClientRect();
    const color = getCssVariable(gridColor, 'rgba(87, 10, 87, 0.2)');

    ctx.clearRect(0, 0, width, height);
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = 1;

    const cols = Math.ceil(width / gridSize) + 1;
    for (let i = 0; i < cols; i++) {
      const x = i * gridSize;
      ctx.moveTo(x, 0);
      ctx.lineTo(x, height);
    }

    const rows = Math.ceil(height / gridSize) + 1;
    for (let j = 0; j < rows; j++) {
      const y = j * gridSize;
      ctx.moveTo(0, y);
      ctx.lineTo(width, y);
    }

    ctx.stroke();
  }, [canvasRef, containerRef, gridSize, gridColor]);
};
