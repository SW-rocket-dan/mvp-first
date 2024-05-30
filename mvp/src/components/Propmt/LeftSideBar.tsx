import { useState } from "react";
import InputItem from "./InputItem";
import PropmptModal from "./PropmptModal";
import Title from "./Title";
import Color from "./Color";
import Purpose from "./Purpose";

//LeftSideBar.tsx

type items = "title" | "purpose" | "color" | "person" | "mood" | "question";

const LeftSideBar = () => {
  const INITIALSTATE = {
    title: { inputAry: [""], isCheck: false },
    color: "",
    purpose: "",
  };

  const TITLES = {
    title: "카드뉴스 문구",
    color: "색상 테마 입력",
    purpose: "목적 입력",
    person: "사람 유무",
    mood: "분위기",
    question: "???",
  };

  const [itemState, setItemState] = useState<items[]>(["title", "color"]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [title, setTitle] = useState<{
    inputAry: string[];
    isCheck: boolean;
  }>(INITIALSTATE.title);
  const [color, setColor] = useState(INITIALSTATE.color);
  const [purposeText, setPurposeText] = useState<string>(INITIALSTATE.purpose);

  //아이템 컴포넌트 정보들
  const components = {
    title: <Title {...title} setItemState={setTitle} />,
    purpose: <Purpose text={purposeText} setText={setPurposeText} />,
    color: <Color color={color} setColor={setColor} />,
    person: <div></div>,
    mood: <div></div>,
    question: <div></div>,
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  return (
    <div className="flex flex-col items-center w-1/3 h-screen gap-4 p-4 border-r-2">
      {itemState.map((item) => (
        <InputItem
          title={TITLES[item]}
          component={components[item]}
        ></InputItem>
      ))}

      <button
        className="w-10 h-10 text-white bg-blue-400 rounded-md hover:bg-blue-300"
        onClick={openModal}
      >
        +
      </button>
      {isModalOpen ? (
        <PropmptModal
          closeModal={closeModal}
          itemState={itemState}
          setItemState={setItemState}
        />
      ) : null}
    </div>
  );
};

export default LeftSideBar;
