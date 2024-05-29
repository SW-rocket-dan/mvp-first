import { FaQuestion, FaRegSmile } from "react-icons/fa";
import { IoIosColorPalette } from "react-icons/io";
import { IoPersonCircleSharp } from "react-icons/io5";
import { MdSubject, MdTitle } from "react-icons/md";

//PropmptModal.tsx

type Props = {
  closeModal: () => void;
};

const PropmptModal = ({ closeModal }: Props) => {
  const handleItemBtn = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.stopPropagation();
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
            className="flex flex-col items-center justify-center w-32 h-32 gap-2 p-2 border-2 rounded-md cursor-pointer"
            onClick={handleItemBtn}
          >
            <MdTitle size="50" />
            <p>카드뉴스 문구</p>
          </div>
          <div
            className="flex flex-col items-center justify-center w-32 h-32 gap-2 p-2 border-2 rounded-md cursor-pointer"
            onClick={handleItemBtn}
          >
            <IoIosColorPalette size="50" />
            <p>색상 입력</p>
          </div>
          <div
            className="flex flex-col items-center justify-center w-32 h-32 gap-2 p-2 border-2 rounded-md cursor-pointer"
            onClick={handleItemBtn}
          >
            <MdSubject size="50" />
            <p>목적 입력</p>
          </div>
        </div>
        <div className="flex justify-between w-full ">
          <div
            className="flex flex-col items-center justify-center w-32 h-32 gap-2 p-2 border-2 rounded-md cursor-pointer"
            onClick={handleItemBtn}
          >
            <IoPersonCircleSharp size="50" />
            <p>사람 유무</p>
          </div>
          <div
            className="flex flex-col items-center justify-center w-32 h-32 gap-2 p-2 border-2 rounded-md cursor-pointer"
            onClick={handleItemBtn}
          >
            <FaRegSmile size="50" />
            <p>분위기</p>
          </div>
          <div
            className="flex flex-col items-center justify-center w-32 h-32 gap-2 p-2 border-2 rounded-md cursor-pointer"
            onClick={handleItemBtn}
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
