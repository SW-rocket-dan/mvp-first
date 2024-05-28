import { cloneElement, forwardRef, useEffect, useRef, useState } from "react";
import React from "react";
import TextBox from "./TextBox";

export const inrange = (v: number, min: number, max: number) => {
  if (v < min) return min;
  if (v > max) return max;
  return v;
};

type DragBlockType = {
  children: React.ReactNode;
  id: number;
  zIndex: number;
};

const DragBlock = forwardRef<HTMLDivElement, DragBlockType>(({ children, id, zIndex }, ref) => {
  // const boundaryRef = ref as React.MutableRefObject<HTMLDivElement>;
  const boxRef = useRef<HTMLTextAreaElement>(null);

  const [{ x, y }, setPosition] = useState({ x: 0, y: 0 });

  return (
    <div
      className="bg-transparent absolute"
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

        const mouseUpHandler = (e: MouseEvent) => {
          document.removeEventListener("mousemove", mouseMoveHandler);
        };

        document.addEventListener("mousemove", mouseMoveHandler);
        document.addEventListener("mouseup", mouseUpHandler, { once: true });
      }}
    >
      {children}
    </div>
  );
});

export default DragBlock;
