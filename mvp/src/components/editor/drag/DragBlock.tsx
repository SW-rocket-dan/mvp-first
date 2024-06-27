import { ReactElement, forwardRef, useEffect, useLayoutEffect, useRef, useState } from "react";
import React from "react";

type DragBlockType = {
  children: ReactElement;
  id: number;
  zIndex: number;
};

const DragBlock = forwardRef<HTMLDivElement, DragBlockType>(({ children, zIndex }, ref) => {
  // const boundaryRef = ref as React.MutableRefObject<HTMLDivElement>;
  const boxRef = useRef<HTMLTextAreaElement>(null);
  const [{ x, y }, setPosition] = useState({ x: 300, y: 0 });

  useLayoutEffect(() => {
    if (boxRef.current) {
      const boxSize = Math.floor(boxRef.current.getBoundingClientRect().width / 2);
      setPosition({ x: 300 - boxSize, y });
    }
  }, []);

  return (
    <div
      className="bg-transparent absolute w-fit"
      style={{ transform: `translateX(${x}px) translateY(${y}px)`, zIndex: zIndex }}
      onMouseDown={(e) => {
        const initX = e.pageX;
        const initY = e.pageY;

        const mouseMoveHandler = (e: MouseEvent) => {
          const deltaX = e.pageX - initX;
          const deltaY = e.pageY - initY;

          setPosition({
            x: x + deltaX,
            y: y + deltaY,
          });
        };

        const mouseUpHandler = () => {
          document.removeEventListener("mousemove", mouseMoveHandler);
        };

        document.addEventListener("mousemove", mouseMoveHandler);
        document.addEventListener("mouseup", mouseUpHandler, { once: true });
      }}
    >
      {React.isValidElement(children) && React.cloneElement(children as ReactElement, { ref: boxRef })}
    </div>
  );
});

export default DragBlock;
