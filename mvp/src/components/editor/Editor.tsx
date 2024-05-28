import { useRef, useState } from "react";
import { FaPlus } from "react-icons/fa6";
import DragBlock from "./drag/DragBlock";
import TextBox from "./drag/TextBox";

const Editor = () => {
  const [itemList, setItemList] = useState<{ id: number; zIndex: number }[]>([]);
  const boundaryRef = useRef<HTMLDivElement>(null);

  const addDragBlock = () => {
    const newDragBlock = {
      id: Date.now(),
      zIndex: itemList.length + 1,
    };

    setItemList((prev) => [...prev, newDragBlock]);
  };

  return (
    <div className="flex flex-col flex-1 justify-center items-center">
      <div className="w-[600px] p-2">
        <button onClick={addDragBlock}>
          <FaPlus size={22} />
        </button>
      </div>
      <div
        ref={boundaryRef}
        className="grid items-center relative justify-center h-[600px] w-[600px] overflow-hidden rounded-xl border-gray-200 border-2 bg-gray-50"
      >
        {itemList.map((data) => (
          <DragBlock key={data.id} ref={boundaryRef} {...data}>
            <TextBox />
          </DragBlock>
        ))}
      </div>
    </div>
  );
};

export default Editor;
