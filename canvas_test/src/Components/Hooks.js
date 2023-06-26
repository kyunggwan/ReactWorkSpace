import { useRef} from "react";

export function useOnDraw() {

  const canvasRef = useRef(null);

  function setCanvasRef(ref){
    if(!ref) return;
    canvasRef.current = ref;
    initMouseMoveListner();
  }

  function initMouseMoveListner(){
    const mouseMoveListner = (e) => {
      console.log({x : e.clientX, y: e.clientY});
    }
    window.addEventListener("mousemove", mouseMoveListner);
  }
  
  return setCanvasRef;
}
