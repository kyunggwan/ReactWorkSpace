import { useRef } from "react";

export function useOnDraw(onDraw) {
  const canvasRef = useRef(null);

  const isDrawingRef = useRef(false); // Drawing 상태인지

  function setCanvasRef(ref) {
    if (!ref) return;
    canvasRef.current = ref;
    initMouseMoveListener(); // 등록
    initMouseDownListener(); // 등록
    initMouseUpListener();  // 등록
  }

  // 1. 마우스를 따라서 그림 그려짐
  function initMouseMoveListener() {
    const mouseMoveListener = (e) => {
      if (isDrawingRef.current) {
        // Drawing 상태인 경우 그려라!
        const point = computePointInCanvas(e.clientX, e.clientY);
        const ctx = canvasRef.current.getContext("2d"); // 2d로 그림 그릴 것
        if (onDraw) onDraw(ctx, point);
        console.log(point);
      }
    };
    window.addEventListener("mousemove", mouseMoveListener);
  }

  // 2. Mouse를 클릭했을때 그림
  function initMouseDownListener() {
    if (!canvasRef.current) return;
    const listener = () => {
      isDrawingRef.current = true;
    };
    canvasRef.current.addEventListener("mousedown", listener);
  }

  function initMouseUpListener() {
    const listener = () => {
      isDrawingRef.current = false;
    };
    window.addEventListener("mouseup", listener);
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
