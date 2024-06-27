import { FaBold, FaItalic, FaUnderline } from "react-icons/fa6";
import { IoIosArrowDown } from "react-icons/io";

const TabBox = () => {
  return (
    <div className="flex flex-col w-full">
      <div className="flex flex-row w-full justify-between items-center py-3 px-4 border-b-[1px] shadow-sm">
        <p className="text-lg">Text</p>
        <IoIosArrowDown size={20} />
      </div>
      <div className="bg-white ">
        <div className="border-b-[1px] p-4 w-fit">
          <div className="flex border-[1px] rounded-sm ">
            <button className="border-r-[1px] p-2">
              <FaBold size={23} />
            </button>
            <button className="border-r-[1px] p-2">
              <FaItalic size={23} />
            </button>
            <button className="p-2">
              <FaUnderline size={23} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TabBox;
