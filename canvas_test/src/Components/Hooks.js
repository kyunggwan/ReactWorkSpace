import { useEffect, useRef } from "react";

export function useOnDraw(onDraw) {
  const canvasRef = useRef(null);

  const isDrawingRef = useRef(false); // Drawing 상태인지

  const mouseMoveListenerRef = useRef(null);
  const mouseDownListenerRef = useRef(null);
  const mouseUpListenerRef = useRef(null);

  const prevPointRef = useRef(null);

  useEffect(() => {
    return () => {
      if (mouseMoveListenerRef.current) {
        window.removeEventListener("mousemove", mouseMoveListenerRef.current);
      }
      if (mouseUpListenerRef.current) {
        window.removeEventListener("mouseup", mouseUpListenerRef.current);
      }
    };
  }, []);

  function setCanvasRef(ref) {
    if (!ref) return;
    if (canvasRef.current) {
      canvasRef.current.removeEventListener(
        "mousedown",
        mouseDownListenerRef.current
      );
    }
    canvasRef.current = ref;
    initMouseMoveListener(); // 등록
    initMouseDownListener(); // 등록
    initMouseUpListener(); // 등록
  }

  // 1. 마우스를 따라서 그림 그려짐
  function initMouseMoveListener() {
    const mouseMoveListener = (e) => {
      if (isDrawingRef.current) {
        // Drawing 상태인 경우 그려라!
        const point = computePointInCanvas(e.clientX, e.clientY);
        const ctx = canvasRef.current.getContext("2d"); // 2d로 그림 그릴 것
        if (onDraw) onDraw(ctx, point, prevPointRef.current);
        prevPointRef.current = point;
        console.log(point);
      }
    };
    mouseMoveListenerRef.current = mouseMoveListener;
    window.addEventListener("mousemove", mouseMoveListener);
  }

  // 2. Mouse를 클릭했을때 그림
  function initMouseDownListener() {
    if (!canvasRef.current) return;
    const listener = () => {
      isDrawingRef.current = true;
    };
    mouseDownListenerRef.current = listener;
    canvasRef.current.addEventListener("mousedown", listener);
  }

  // 3, Mouse를 땠을때 그리기 상태 false
  function initMouseUpListener() {
    const listener = () => {
      isDrawingRef.current = false;
    };
    mouseUpListenerRef.current = listener;
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
