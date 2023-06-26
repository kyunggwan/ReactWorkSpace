import React, { useRef, useEffect, useState } from "react";

const img = new Image(); // 새로운 Image 객체 생성
const INITIAL_POSITION = { x: 0, y: 0 }; // 초기 위치
const MIN_SCALE = 0.1; // 최소 배율
const MAX_SCALE = 10; // 최대 배율

function Practice() {
  const zoomCanvasRef = useRef(null); // canvas 요소에 대한 참조를 저장하는 useRef 훅
  const scaleRef = useRef(1); // 현재 배율을 저장하는 useRef 훅
  const panningRef = useRef(false); // 드래그 동작 상태를 저장하는 useRef 훅
  const viewPosRef = useRef(INITIAL_POSITION); // 현재 이미지 화면의 위치를 저장하는 useRef 훅
  const startPosRef = useRef(INITIAL_POSITION); // 드래그 시작 위치를 저장하는 useRef 훅
  const rectangleStartRef = useRef(INITIAL_POSITION); // 사각형 시작 위치를 저장하는 useRef 훅
  const rectangleEndRef = useRef(INITIAL_POSITION); // 사각형 끝 위치를 저장하는 useRef 훅
  const [isDrawing, setIsDrawing] = useState(false);
  const [isCursorCrosshair, setIsCursorCrosshair] = useState(false);
  const [isRectDrawn, setIsRectDrawn] = useState(false);

  const setTransform = () => {
    const zoomCanvas = zoomCanvasRef.current; // zoomCanvasRef의 현재 값(참조)을 가져옴
    const context = zoomCanvas.getContext("2d"); // canvas의 2D 컨텍스트를 가져옴
    context.setTransform(
      scaleRef.current, // 현재 배율
      0, // y축 변형 없음
      0, // x축 변형 없음
      scaleRef.current, // 현재 배율
      viewPosRef.current.x, // 현재 x 위치
      viewPosRef.current.y // 현재 y 위치
    );
  };

  const draw = () => {
    const zoomCanvas = zoomCanvasRef.current; // zoomCanvasRef의 현재 값(참조)을 가져옴
    const context = zoomCanvas.getContext("2d"); // canvas의 2D 컨텍스트를 가져옴
    zoomCanvas.width = zoomCanvas.width; // canvas를 지우고 초기화
    setTransform(); // 변형 설정
    context.drawImage(img, 0, 0, zoomCanvas.width, zoomCanvas.height); // 이미지 그리기
    if (isDrawing) {
      drawRectangle(context);
    }
  };

  const drawRectangle = (context) => {
    const { x: startX, y: startY } = rectangleStartRef.current;
    const { x: endX, y: endY } = rectangleEndRef.current;
    const width = endX - startX;
    const height = endY - startY;

    context.strokeStyle = "red";
    context.lineWidth = 2;

    if (isDrawing && isRectDrawn) {
      context.strokeRect(startX, startY, width, height);
    }
  };

  useEffect(() => {
    img.src =
      "https://firebasestorage.googleapis.com/v0/b/storege-974dc.appspot.com/o/image%2Frabbit.jpeg?alt=media&token=cc501a63-0258-4aa3-809f-c45b743d2735";
    // 이미지 로드
    img.onload = function () {
      draw(); // 이미지 로드 후 초기 그림 그리기
    };
  }, []); // 컴포넌트가 마운트될 때만 실행되도록 빈 의존성 배열([])을 전달

  const handleMouseDown = (e) => {
    const { offsetX, offsetY } = e.nativeEvent; // 마우스 이벤트에서 offsetX, offsetY 가져오기
    e.preventDefault(); // 기본 동작 방지
    if (isDrawing) {
      rectangleStartRef.current = {
        x: offsetX - viewPosRef.current.x,
        y: offsetY - viewPosRef.current.y,
      };
    } else {
      startPosRef.current = {
        x: offsetX - viewPosRef.current.x,
        y: offsetY - viewPosRef.current.y,
      };
      panningRef.current = true; // 드래그 동작 활성화
    }
  };

  const handleMouseUp = (e) => {
    panningRef.current = false; // 드래그 동작 비활성화
    const { offsetX, offsetY } = e.nativeEvent; // 마우스 이벤트에서 offsetX, offsetY 가져오기
    rectangleEndRef.current = {
      x: offsetX,
      y: offsetY,
    };
    setIsDrawing(true);
    draw();
  };

  const handleMouseMove = (e) => {
    const { offsetX, offsetY } = e.nativeEvent; // 마우스 이벤트에서 offsetX, offsetY 가져오기
    e.preventDefault(); // 기본 동작 방지
    if (!panningRef.current) {
      return; // 드래그 동작이 비활성화된 경우 종료
    }
    viewPosRef.current = {
      x: offsetX - startPosRef.current.x, // offsetX에서 시작 위치의 x 값을 뺀 값
      y: offsetY - startPosRef.current.y, // offsetY에서 시작 위치의 y 값을 뺀 값
    };
    draw(); // 이미지 다시 그리기
  };

  const handleWheel = (e) => {
    const { offsetX, offsetY } = e.nativeEvent; // 마우스 이벤트에서 offsetX, offsetY 가져오기
    e.preventDefault(); // 기본 동작 방지
    const xs = (offsetX - viewPosRef.current.x) / scaleRef.current; // x 스케일 값
    const ys = (offsetY - viewPosRef.current.y) / scaleRef.current; // y 스케일 값
    const delta = -e.deltaY; // 휠 동작의 deltaY 값
    const newScale =
      delta > 0 ? scaleRef.current * 1.2 : scaleRef.current / 1.2; // 새로운 배율 계산

    if (newScale >= MIN_SCALE && newScale <= MAX_SCALE) {
      scaleRef.current = newScale; // 배율 업데이트
      viewPosRef.current = {
        x: offsetX - xs * scaleRef.current, // 새로운 x 위치
        y: offsetY - ys * scaleRef.current, // 새로운 y 위치
      };
    }
    draw(); // 이미지 다시 그리기
  };

  const handleResetZoom = () => {
    scaleRef.current = 1; // 배율 초기화
    viewPosRef.current = INITIAL_POSITION; // 위치 초기화
    draw(); // 이미지 다시 그리기
  };

  const handleAddRectangle = () => {
    setIsDrawing(true);
    setIsCursorCrosshair(true);
  };

  const handleMouseOut = () => {
    setIsCursorCrosshair(false);
  };

  const handleMouseLeave = () => {
    setIsCursorCrosshair(false);
  };

  const handleRemoveRectangle = () => {
    setIsRectDrawn(false);
    draw(); // 사각형을 지우기 위해 캔버스를 다시 그립니다.
  };

  return (
    <div>
      <canvas
        ref={zoomCanvasRef} // canvas 요소에 zoomCanvasRef 참조 설정
        width="500"
        height="500"
        style={{
          border: "1px solid",
          cursor: isCursorCrosshair ? "crosshair" : "auto",
        }}
        onMouseDown={handleMouseDown} // 마우스 이벤트 핸들러 연결
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseOut={handleMouseOut}
        onWheel={handleWheel}
        onMouseLeave={handleMouseLeave}
      />

      <button onClick={handleResetZoom}>Size Reset</button>
      <button onClick={handleAddRectangle}>Add Rectangle</button>
      <button onClick={handleRemoveRectangle}>Remove Rectangle</button>
    </div>
  );
}

export default Practice;
