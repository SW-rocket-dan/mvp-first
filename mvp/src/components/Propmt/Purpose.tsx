//Purpose.tsx

type Props = {
  text: string;
  setText: React.Dispatch<React.SetStateAction<string>>;
};
const Purpose = ({ text, setText }: Props) => {
  const handleTextArea = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.currentTarget.value);
  };

  return (
    <div>
      <textarea
        className="w-full resize-none"
        name=""
        id=""
        value={text}
        onChange={handleTextArea}
      ></textarea>
    </div>
  );
};

export default Purpose;
