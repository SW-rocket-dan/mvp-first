import React, { useImperativeHandle, useRef } from "react";

const TextBox = React.forwardRef<HTMLTextAreaElement>((props, ref) => {
  const textRef = useRef<HTMLTextAreaElement>(null);

  useImperativeHandle(ref, () => textRef.current as HTMLTextAreaElement);

  const handleResizeHeight = () => {
    requestAnimationFrame(() => {
      if (textRef.current) {
        textRef.current.style.height = "auto";
        textRef.current.style.height = textRef.current.scrollHeight + "px";
      }
    });
  };

  return (
    <textarea
      ref={textRef}
      rows={1}
      onKeyUp={handleResizeHeight}
      onKeyDown={handleResizeHeight}
      className="cursor-auto bg-transparent resize-none overflow-hidden transition-[shadow,transform] active:scale-98 active:shadow-md outline-none rounded-sm focus:border-gray-600 focus:border-[1px] p-1"
    />
  );
});

export default TextBox;
