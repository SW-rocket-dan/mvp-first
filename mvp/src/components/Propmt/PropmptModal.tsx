import { FaQuestion, FaRegSmile } from "react-icons/fa";
import { IoIosColorPalette } from "react-icons/io";
import { IoPersonCircleSharp } from "react-icons/io5";
import { MdSubject, MdTitle } from "react-icons/md";

//PropmptModal.tsx

type items = "title" | "purpose" | "color" | "person" | "mood" | "question";

type Props = {
  closeModal: () => void;
  itemState: items[];
  setItemState: React.Dispatch<React.SetStateAction<items[]>>;
};

const PropmptModal = ({ closeModal, itemState, setItemState }: Props) => {
  const itemKeys = [
    "title",
    "color",
    "purpose",
    "person",
    "mood",
    "question",
  ] as items[];

  const handleItemBtn = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>,
    key: number
  ) => {
    e.stopPropagation();
    setItemState((prev) => {
      if (itemState.includes(itemKeys[key])) return [...prev];
      return [...prev, itemKeys[key]];
    });
    closeModal();
  };

  return (
    <div
      className="absolute top-0 left-0 flex items-center justify-center w-screen h-screen"
      onClick={closeModal}
    >
      <div
        className="flex flex-col justify-around w-1/2 px-10 bg-white border-2 rounded-md h-1/2"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <div className="flex justify-between w-full ">
          <div
            className={`flex flex-col items-center justify-center w-32 h-32 gap-2 p-2 border-2 rounded-md cursor-pointer ${"text-green-400"}`}
            onClick={(e) => {
              handleItemBtn(e, 0);
            }}
          >
            <MdTitle size="50" />
            <p>카드뉴스 문구</p>
          </div>
          <div
            className={`flex flex-col items-center justify-center w-32 h-32 gap-2 p-2 border-2 rounded-md cursor-pointer ${"text-green-400"}`}
            onClick={(e) => {
              handleItemBtn(e, 1);
            }}
          >
            <IoIosColorPalette size="50" />
            <p>색상 입력</p>
          </div>
          <div
            className={`flex flex-col items-center justify-center w-32 h-32 gap-2 p-2 border-2 rounded-md cursor-pointer ${
              itemState.includes("purpose") ? "text-green-400" : ""
            }`}
            onClick={(e) => {
              handleItemBtn(e, 2);
            }}
          >
            <MdSubject size="50" />
            <p>목적 입력</p>
          </div>
        </div>
        <div className="flex justify-between w-full ">
          <div
            className={`flex flex-col items-center justify-center w-32 h-32 gap-2 p-2 border-2 rounded-md cursor-pointer ${
              itemState.includes("person") ? "text-green-400" : ""
            }`}
            onClick={(e) => {
              handleItemBtn(e, 3);
            }}
          >
            <IoPersonCircleSharp size="50" />
            <p>사람 유무</p>
          </div>
          <div
            className={`flex flex-col items-center justify-center w-32 h-32 gap-2 p-2 border-2 rounded-md cursor-pointer ${
              itemState.includes("mood") ? "text-green-400" : ""
            }`}
            onClick={(e) => {
              handleItemBtn(e, 4);
            }}
          >
            <FaRegSmile size="50" />
            <p>분위기</p>
          </div>
          <div
            className={`flex flex-col items-center justify-center w-32 h-32 gap-2 p-2 border-2 rounded-md cursor-pointer ${
              itemState.includes("question") ? "text-green-400" : ""
            }`}
            onClick={(e) => {
              handleItemBtn(e, 5);
            }}
          >
            <FaQuestion size="50" />
            <p>???</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropmptModal;
