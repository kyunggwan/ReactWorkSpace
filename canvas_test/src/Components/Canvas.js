import React from "react";
import { useOnDraw } from "./Hooks";

export default function Canvas({ width, height }) {
  const canvasStyle = {
    border: "1px solid black",
  };

  const setCanvasRef = useOnDraw(onDraw);
  function onDraw(ctx, point, prevPoint) {
    drawLine(prevPoint, point, ctx, "#000000", 5);
  }
  
  function drawLine(start, end, ctx, color, width) {
    start = start ?? end;
    ctx.beginPath();
    ctx.lineWidth = width;
    ctx.strokeStyle = color;
    ctx.moveTo(start.x, start.y);
    ctx.lineTo(end.x, end.y);
    ctx.stroke();
  }

  return (
    <div>
      <canvas
        width={width}
        height={height}
        style={canvasStyle}
        ref={setCanvasRef}
      />
    </div>
  );
}
