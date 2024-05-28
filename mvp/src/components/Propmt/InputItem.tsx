import { useState } from "react";
import Title from "./Title";
import {
  IoIosArrowDropdownCircle,
  IoIosArrowDropupCircle,
} from "react-icons/io";
import Color from "./Color";

//InputItem.tsx
type Props = {
  type: "title" | "color";
};

const InputItem = ({ type }: Props) => {
  const initialState = {
    title: { inputAry: [""], isCheck: false },
    color: { color: "" },
  };

  const title = {
    title: "카드뉴스 문구",
    color: "색상 테마 선택",
  };

  const [isDropDown, setIsDropDown] = useState(true);
  const [itemState, setItemState] = useState<
    | {
        inputAry: string[];
        isCheck: boolean;
      }
    | {
        color: string;
      }
  >(initialState[type]);

  const items = {
    title: <Title {...itemState} setItemState={setItemState} />,
    color: <Color />,
  };

  const handleDropDownBtn = () => {
    setIsDropDown((prev) => !prev);
  };

  return (
    <div className="w-full p-4 border-2 rounded-md">
      <div className="flex justify-between">
        <p className="mb-2">{title[type]}</p>
        {isDropDown ? (
          <IoIosArrowDropdownCircle
            size="20"
            className="cursor-pointer"
            onClick={handleDropDownBtn}
          />
        ) : (
          <IoIosArrowDropupCircle
            size="20"
            className="cursor-pointer"
            onClick={handleDropDownBtn}
          />
        )}
      </div>
      {isDropDown ? items[type] : null}
    </div>
  );
};

export default InputItem;
