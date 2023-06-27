import { useRef } from "react";

export function useOnDraw() {
  const canvasRef = useRef(null);

  function setCanvasRef(ref) {
    if (!ref) return;
    canvasRef.current = ref;
    initMouseMoveListner();
  }

  function initMouseMoveListner() {
    const mouseMoveListner = (e) => {
      const point = computePointInCanvas(e.clientX, e.clientY);
      console.log(point);
    };
    window.addEventListener("mousemove", mouseMoveListner);
  }

  function computePointInCanvas(clientX, clientY) {
    if (canvasRef.current) {
      const boundingRect = canvasRef.current.getBoundingClientRect();
      return {
        x: clientX - boundingRect.left, // 사각형으로 좌표 다시 생성
        y: clientY - boundingRect.top,
      };
    } else {
      return null;
    }
  }
  return setCanvasRef;
}
