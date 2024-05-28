import { useState } from "react";
import Title from "./Title";
import {
  IoIosArrowDropdownCircle,
  IoIosArrowDropupCircle,
} from "react-icons/io";

//InputItem.tsx
type Props = {
  type: "title";
};

const InputItem = ({ type }: Props) => {
  const initialState = {
    title: { inputAry: [""] },
  };

  const title = {
    title: "카드뉴스 문구",
  };

  const [isDropDown, setIsDropDown] = useState(true);
  const [itemState, setItemState] = useState(initialState[type]);

  const items = {
    title: <Title {...itemState} setItemState={setItemState} />,
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
