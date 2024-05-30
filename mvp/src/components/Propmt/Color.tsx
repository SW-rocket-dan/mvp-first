//Color.tsx

type Props = {
  color: string;
  setColor: React.Dispatch<React.SetStateAction<string>>;
};
const Color = ({ color, setColor }: Props) => {
  const handleColorInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.currentTarget.value);
    setColor(e.currentTarget.value);
  };

  return (
    <div>
      <input type="color" onChange={handleColorInput} value={color} />
    </div>
  );
};

export default Color;
