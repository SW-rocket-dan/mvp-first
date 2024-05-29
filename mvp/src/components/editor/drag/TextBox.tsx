import React, { useImperativeHandle, useRef, useState } from "react";

const TextBox = React.forwardRef<HTMLTextAreaElement>((props, ref) => {
  const [text, setText] = useState("");
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

  const handleChangeText = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
  };

  return (
    <textarea
      value={text}
      ref={textRef}
      rows={1}
      placeholder="Text"
      onChange={handleChangeText}
      onKeyUp={handleResizeHeight}
      onKeyDown={handleResizeHeight}
      className="w cursor-auto bg-transparent resize-none overflow-hidden transition-[shadow,transform] active:scale-98 active:shadow-md outline-none rounded-sm focus:border-gray-600 focus:border-[1px] p-1"
    />
  );
});

export default TextBox;
