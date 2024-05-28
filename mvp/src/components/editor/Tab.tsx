import { FaRegEdit } from "react-icons/fa";
import { FaCode } from "react-icons/fa6";

const Tab = () => {
  return (
    <div className="flex flex-row w-[430px] bg-slate-50 border-r-2">
      <div className="flex flex-col w-24 bg-slate-100 justify-start items-center pt-5 border-r-2 gap-7">
        <FaRegEdit size={30} />
        <FaCode size={30} />
      </div>
    </div>
  );
};

export default Tab;
