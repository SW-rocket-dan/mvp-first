import { useState } from "react";

import {
  IoIosArrowDropdownCircle,
  IoIosArrowDropupCircle,
} from "react-icons/io";

//InputItem.tsx
type Props = {
  title: string;
  component: JSX.Element;
};

const InputItem = ({ title, component }: Props) => {
  const [isDropDown, setIsDropDown] = useState(true);

  const handleDropDownBtn = () => {
    setIsDropDown((prev) => !prev);
  };

  return (
    <div className="w-full p-4 border-2 rounded-md">
      <div className="flex justify-between">
        <p className="mb-2">{title}</p>
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
      {isDropDown ? component : null}
    </div>
  );
};

export default InputItem;
