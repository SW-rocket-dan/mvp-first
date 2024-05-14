import Sample1 from "../assets/sample1.png";
import PromptBox from "./PromptBox.tsx";

const HoverBox = () => {
  return (
    <div className="flip">
      <div className="card">
        <img className="front" src={Sample1} width={400} height={400} />
        <div className="back">
          <PromptBox
            width={398}
            text="모아서 주는 마음이 더 기억에 남는 법! 다른 사람들과 함께 선물을 준비해보세요"
            purpose="선물 펀딩 서비스 페이지 홍보"
          />
        </div>
      </div>
    </div>
  );
};

export default HoverBox;
