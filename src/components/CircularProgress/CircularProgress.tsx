import React from 'react';
import { useTheme } from 'styled-components/macro';


export default function CircularProgress({
  width = 350,
  height = 350,
  thickness = 8,
  ratio = 0.75
}) {
  const theme = useTheme();
  const canvasRef = React.useRef<HTMLCanvasElement>(null);
  const canvas = canvasRef.current;
  
  React.useLayoutEffect(
    () => {
      const ctx = canvas && canvas.getContext('2d');
      if (!ctx) return;

      const center = { x: width / 2, y: height / 2 };
      const radius = Math.floor(Math.min(width / 2, height / 2) - (thickness / 2));
      const startAngle = -Math.PI / 2;
      const endAngle = startAngle - (2 * Math.PI * ratio);

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
    },
    [canvas, theme, width, height, thickness, ratio]
  );

  return (
    <canvas 
      width={width}
      height={height}
      ref={canvasRef}
    />
  );
}