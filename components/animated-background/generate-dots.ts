export interface GenerateDotsProps {
  width: number;
  height: number;
  gridSize: number;
  dotDensity: number;
}

export interface Dot {
  x: number;
  y: number;
}

export const generateDots = ({ width, height, gridSize, dotDensity }: GenerateDotsProps): Dot[] => {
  const dots: Dot[] = [];
  const cols = Math.ceil(width / gridSize);
  const rows = Math.ceil(height / gridSize);

  for (let i = 0; i <= cols; i++) {
    for (let j = 0; j <= rows; j++) {
      if (Math.random() > 1 - dotDensity) {
        dots.push({ x: i * gridSize, y: j * gridSize });
      }
    }
  }

  return dots;
};
