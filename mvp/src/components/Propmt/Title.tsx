import { useState } from "react";
import { AiFillDelete } from "react-icons/ai";
import { FaArrowRotateLeft } from "react-icons/fa6";
import { IoCheckbox } from "react-icons/io5";

//Title.tsx

type Props = {
  inputAry: string[];
  setItemState: React.Dispatch<
    React.SetStateAction<{
      inputAry: string[];
    }>
  >;
};

const Title = ({ inputAry, setItemState }: Props) => {
  const [isCheck, setIsCheck] = useState(false);

  const handlePlusBtn = () => {
    setItemState((prev) => {
      return { ...prev, inputAry: [...prev.inputAry, ""] };
    });
  };

  const handleDeleteTitle = (idx: number) => {
    setItemState((prev) => {
      if (prev.inputAry.length === 1) return { ...prev };
      return {
        ...prev,
        inputAry: prev.inputAry.filter((_: string, i: number) => i !== idx),
      };
    });
  };

  const handleCheckBtn = () => {
    setIsCheck((prev) => !prev);
  };

  const handleInputValue = (
    e: React.ChangeEvent<HTMLInputElement>,
    idx: number
  ) => {
    setItemState((prev) => {
      const nxAry = [...prev.inputAry];
      nxAry[idx] = e.target.value;
      return { ...prev, inputAry: nxAry };
    });
  };

  const emphasisText = (e: React.MouseEvent<HTMLSpanElement, MouseEvent>) => {
    if (e.currentTarget.style.color === "green")
      e.currentTarget.style.color = "black";
    else e.currentTarget.style.color = "green";
  };

  return (
    <div className="flex flex-col gap-2">
      {isCheck
        ? inputAry.map((v) => {
            const strs = v.split(" ");
            return (
              <p>
                {strs.map((text) => (
                  <>
                    <span className="cursor-pointer" onClick={emphasisText}>
                      {text}
                    </span>
                    <span> </span>
                  </>
                ))}
              </p>
            );
          })
        : inputAry.map((_, idx) => (
            <div className="flex items-center justify-between w-full gap-2 p-1 border-2">
              <input
                key={idx}
                className="w-full"
                type="text"
                value={inputAry[idx]}
                onChange={(e) => {
                  handleInputValue(e, idx);
                }}
              />
              <AiFillDelete
                className="text-red-400 cursor-pointer"
                size="20"
                onClick={() => handleDeleteTitle(idx)}
              />
            </div>
          ))}

      <div className="flex items-center gap-2 m-auto">
        {isCheck ? (
          <div className="p-2 text-white bg-red-400 rounded-md cursor-pointer hover:bg-red-300">
            <FaArrowRotateLeft
              size="15"
              className=""
              onClick={handleCheckBtn}
            />
          </div>
        ) : (
          <IoCheckbox
            size="40"
            className="text-green-400 cursor-pointer hover:text-green-300"
            onClick={handleCheckBtn}
          />
        )}

        {isCheck ? null : (
          <button
            onClick={handlePlusBtn}
            className="w-8 h-8 text-white bg-blue-400 rounded-md hover:bg-blue-300"
          >
            +
          </button>
        )}
      </div>
    </div>
  );
};

export default Title;
