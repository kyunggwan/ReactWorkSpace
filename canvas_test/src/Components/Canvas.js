import React from "react";
import {useOnDraw} from './Hooks';

export default function Canvas({ width, height }) {
  const canvasStyle = {
    border: "1px solid black",
  };

  const setCanvasRef = useOnDraw();
  return (
    <div>
      <canvas 
        width={width} 
        height={height} 
        style={canvasStyle}
        ref={{setCanvasRef}}
      />
    </div>
  );
}
