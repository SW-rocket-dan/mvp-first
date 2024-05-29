import { useState } from "react";
import InputItem from "./InputItem";
import PropmptModal from "./PropmptModal";

//LeftSideBar.tsx
const LeftSideBar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  return (
    <div className="flex flex-col items-center w-1/3 h-screen gap-4 p-4 border-r-2">
      <InputItem type="title"></InputItem>
      <InputItem type="color"></InputItem>

      <button
        className="w-10 h-10 text-white bg-blue-400 rounded-md hover:bg-blue-300"
        onClick={openModal}
      >
        +
      </button>
      {isModalOpen ? <PropmptModal closeModal={closeModal} /> : null}
    </div>
  );
};

export default LeftSideBar;
