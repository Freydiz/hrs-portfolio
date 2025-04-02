"use client";

import React, { useEffect, useRef } from "react";

export const GridBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      drawGrid();
    };

    const drawGrid = () => {
      if (!ctx || !canvas) return;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Grid settings
      const gridSize = 40;
      const gridColor = "rgba(87, 10, 87, 0.2)"; // Secondary color with opacity

      // Draw vertical lines
      for (let x = 0; x <= canvas.width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.strokeStyle = gridColor;
        ctx.lineWidth = 1;
        ctx.stroke();
      }

      // Draw horizontal lines
      for (let y = 0; y <= canvas.height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.strokeStyle = gridColor;
        ctx.lineWidth = 1;
        ctx.stroke();
      }

      // Add some glowing dots at intersections (randomly)
      ctx.fillStyle = "rgba(169, 16, 121, 0.5)"; // Accent color with opacity
      for (let x = 0; x <= canvas.width; x += gridSize) {
        for (let y = 0; y <= canvas.height; y += gridSize) {
          if (Math.random() > 0.97) {
            // Only draw some dots
            ctx.beginPath();
            ctx.arc(x, y, 2, 0, Math.PI * 2);
            ctx.fill();
          }
        }
      }
    };

    window.addEventListener("resize", resizeCanvas);
    resizeCanvas();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  return (
    <div className="fixed inset-0 z-0 h-full w-full">
      {/* Gradient background with animation */}
      <div className="bg-gradient-animate from-primary via-background to-primary absolute inset-0 bg-gradient-to-br" />

      {/* Grid overlay */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 h-full w-full bg-transparent"
      />
    </div>
  );
};
