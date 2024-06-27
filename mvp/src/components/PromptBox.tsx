import BarSVG from "../assets/Bars.svg?react";
import BookmarkSVG from "../assets/Bookmark-minus.svg?react";
import CubeSVG from "../assets/Cube-magnifying-glass.svg?react";
import ArrowSVG from "../assets/Arrow-right.svg?react";

interface PromptBoxProps {
  width: number;
  text: string;
  purpose: string;
}

const PromptBox = ({ width, text }: PromptBoxProps) => {
  return (
    <div
      className="flex flex-col justify-between p-2 bg-white rounded-md md:rounded-xl md:p-5 text-primary-default"
      style={{ width: `${width}px`, height: `${width}px` }}
    >
      <div className="flex flex-col gap-1 md:gap-2">
        <p className="text-base font-bold md:text-xl">문구</p>
        <div
          className="flex flex-col justify-between p-3 border-2 md:p-5 rounded-xl md:gap-3"
          style={{ height: `${width * 0.8}px` }}
        >
          <p className="text-base font-medium md:text-lg md:leading-7">
            {text}
          </p>
          <div className="flex flex-row items-center justify-between">
            <div className="flex items-start gap-2">
              <BarSVG className="w-5 md:w-7" />
              <BookmarkSVG className="w-5 md:w-7" />
              <CubeSVG className="w-5 md:w-7" />
            </div>
            <ArrowSVG className="w-5 h-5 md:w-7 md:h-7" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PromptBox;
