import Editor from "@components/editor/Editor";
import Navigation from "@components/editor/Navigation";
import Tab from "@components/editor/Tab";

const EditorPage = () => {
  return (
    <div className="flex w-ful h-screen flex-col">
      <Navigation />
      <div className="flex flex-row h-full w-full">
        <Tab />
        <Editor />
      </div>
    </div>
  );
};

export default EditorPage;
