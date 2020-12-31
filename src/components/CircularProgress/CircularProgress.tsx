import React from 'react';
import { useTheme } from 'styled-components/macro';
import { useAnimationFrame } from '../../hooks';


export default function CircularProgress({
  width = 350,
  height = 350,
  thickness = 8,
  ratio = 0,
  startAngle = -Math.PI / 2
}) {
  const theme = useTheme();
  const canvasRef = React.useRef<HTMLCanvasElement>(null);
  const actualRatioRef = React.useRef(ratio);

  useAnimationFrame((timeDelta: number) => {
    const ctx = canvasRef.current?.getContext('2d');
    if (!ctx) return;

    const actualRatio = actualRatioRef.current;
    const diff = ratio - actualRatio;
    const ratioDelta = Math.abs(diff) < 0.001 
      ? diff 
      : diff * timeDelta * 0.01;

    const drawRatio = actualRatio + ratioDelta;

    const center = { x: width / 2, y: height / 2 };
    const radius = Math.floor(Math.min(width / 2, height / 2) - (thickness / 2));
    const endAngle = startAngle - (2 * Math.PI * drawRatio);

    // Clear the drawing area each time
    ctx.clearRect(0, 0, width, height);

    // Draw the background circle
    ctx.beginPath();
    ctx.strokeStyle = theme.palette.overlay;
    ctx.lineWidth = thickness;
    ctx.arc(center.x, center.y, radius, 0, 2 * Math.PI);
    ctx.stroke();

    // Draw the progress arc
    ctx.beginPath();
    ctx.strokeStyle = theme.palette.primary.main;
    ctx.lineWidth = thickness;
    ctx.lineCap = 'round';
    ctx.arc(center.x, center.y, radius, startAngle, endAngle, true);
    ctx.stroke();

    // Update refs
    actualRatioRef.current = drawRatio;

    const shouldContinueAnimating = drawRatio !== ratio;
    return shouldContinueAnimating;
  }, [theme, width, height, thickness, startAngle, ratio]);

  return (
    <canvas 
      width={width}
      height={height}
      ref={canvasRef}
    />
  );
}

function clamp(min: number, value: number, max: number) {
  return Math.max(min, Math.min(max, value));
}