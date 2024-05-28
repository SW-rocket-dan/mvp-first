import InputItem from "./InputItem";

//LeftSideBar.tsx
const LeftSideBar = () => {
  return (
    <div className="flex flex-col items-center w-1/3 h-screen gap-4 p-4 border-r-2">
      <InputItem type="title"></InputItem>

      <button className="w-10 h-10 text-white bg-blue-400 rounded-md hover:bg-blue-300">
        +
      </button>
    </div>
  );
};

export default LeftSideBar;
