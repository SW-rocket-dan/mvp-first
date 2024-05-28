import { useRef, useState } from "react";

export const inrange = (v: number, min: number, max: number) => {
  if (v < min) return min;
  if (v > max) return max;
  return v;
};

const Editor = () => {
  const boundaryRef = useRef<HTMLDivElement>(null);
  const boxRef = useRef<HTMLTextAreaElement>(null);

  const [{ x, y }, setPosition] = useState({
    x: 0,
    y: 0,
  });

  const handleResizeHeight = () => {
    requestAnimationFrame(() => {
      if (boxRef.current) {
        boxRef.current.style.height = "auto";
        boxRef.current.style.height = boxRef.current.scrollHeight + "px";
      }
    });
  };

  return (
    <div className="flex flex-1 justify-center items-center">
      <div
        ref={boundaryRef}
        className="grid items-center justify-center relative h-[600px] w-[600px] overflow-hidden rounded-xl border-gray-200 border-2 bg-gray-50"
      >
        <div
          className="bg-transparent"
          style={{ transform: `translateX(${x}px) translateY(${y}px)` }}
          onMouseDown={(e) => {
            const initX = e.pageX;
            const initY = e.pageY;

            const mouseMoveHandler = (e: MouseEvent) => {
              if (boundaryRef.current && boxRef.current) {
                const boundary = boundaryRef.current.getBoundingClientRect();
                const box = boxRef.current.getBoundingClientRect();
                const BOUNDARY_MARGIN = 12;

                const deltaX = e.pageX - initX;
                const deltaY = e.pageY - initY;

                setPosition({
                  x: inrange(
                    x + deltaX,
                    Math.floor(-boundary.width / 2 + box.width / 2 + BOUNDARY_MARGIN),
                    Math.floor(boundary.width / 2 - box.width / 2 - BOUNDARY_MARGIN)
                  ),
                  y: inrange(
                    y + deltaY,
                    Math.floor(-boundary.height / 2 + box.height / 2 + BOUNDARY_MARGIN),
                    Math.floor(boundary.height / 2 - box.height / 2 - BOUNDARY_MARGIN)
                  ),
                });
              }
            };
            const mouseUpHandler = (e: MouseEvent) => {
              document.removeEventListener("mousemove", mouseMoveHandler);
            };

            document.addEventListener("mousemove", mouseMoveHandler);
            document.addEventListener("mouseup", mouseUpHandler, { once: true });
          }}
        >
          <textarea
            ref={boxRef}
            rows={1}
            onKeyUp={handleResizeHeight}
            onKeyDown={handleResizeHeight}
            className="cursor-auto bg-transparent resize-none overflow-hidden transition-[shadow,transform] active:scale-98 active:shadow-md outline-none focus:border-gray-300 focus:border-[1px] p-1"
          />
        </div>
      </div>
    </div>
  );
};

export default Editor;
