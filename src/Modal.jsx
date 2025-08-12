import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
//children becomes like props. but here its destructured so we can just write children
const Modal = ({ children }) => {
  const elementRef = useRef(null);
  //you can only modify the current. its a pointer and points to the same thing
  // we are goint to create one div, and were goint to reference the same div every single render
  if (!elementRef.current) {
    //in other words elementRef its the same div every single render
    elementRef = document.createElement("div");
  }

  useEffect(
    () => {
      const modalRoot = document.getElementById("modal");
      modalRoot.appendChild(elementRef.current);
      //Right now (before this line) the children never disapears so theres a memory leak
      // in here you can return a fucntion here and do all your cleanup
      return () => modalRoot.removeChild(elementRef.current);
      //this funcion you run or you return from your effect will be run once after it gets unmounted, and this will solve our memory leak
    },
    // ask how many times this should re-render. this case only the first (when the array is empty)
    []
  );

  return createPortal(<div>{children}</div>, elementRef.current);
};

export default Modal;
