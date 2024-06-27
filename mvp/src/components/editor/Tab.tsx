import { useState } from "react";
import { FaRegEdit } from "react-icons/fa";
import { FaCode } from "react-icons/fa6";
import EditorTab from "./innerTab/EditorTab";
import PromptTab from "./innerTab/PromptTab";

const Tab = () => {
  const [current, setCurrent] = useState("edit");

  return (
    <div className="flex flex-row w-[460px] bg-slate-50 border-r-2">
      <div className="flex flex-col w-24 bg-slate-100 justify-start items-center pt-5 border-r-2 gap-7">
        <button onClick={() => setCurrent("edit")}>
          <FaRegEdit size={30} />
        </button>
        <button onClick={() => setCurrent("prompt")}>
          <FaCode size={30} />
        </button>
      </div>
      <div className="flex-1">
        {current === "edit" && <EditorTab />}
        {current === "prompt" && <PromptTab />}
      </div>
    </div>
  );
};

export default Tab;
