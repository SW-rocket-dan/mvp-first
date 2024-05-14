import LogoSvg from "../src/assets/logo.svg?react";
import StarSvg from "../src/assets/star.svg?react";
import MainPng from "../src/assets/main.png";
import GroupSVG from "../src/assets/Group.svg?react";
import "./App.css";
import PromptBox from "./components/PromptBox.tsx";
import InstagramTemplate from "./components/InstagramTemplate";
import Sample1 from "./assets/sample1.png";
import SlideImg from "./components/SlideImg.tsx";

function App() {
  const handleClick = () => {
    window.open("https://forms.gle/1SZsPLbhtRu9mUDX8");
  };

  return (
    <div className="flex flex-col w-full h-full gap-7">
      <div className="flex justify-start gap-3 pt-10 px-14">
        <LogoSvg />
        <p className="text-xl">로켓단</p>
      </div>

      <div className="flex items-center justify-center h-full">
        <div className="w-10/12 bg-primary-background rounded-xl">
          <div className="flex flex-col items-center justify-center gap-5 px-12 py-24">
            <p className="font-extrabold text-7xl">FAST, EASY, SIMPLE</p>
            <p className="text-3xl">
              AI와 카드뉴스가 만나 더욱 편리하고 효율적으로
            </p>
            <button
              className="flex flex-row items-center gap-2 py-4 bg-black rounded-lg shadow-md px-7 mt-7"
              onClick={handleClick}
            >
              <StarSvg width={25} />
              <span className="font-medium text-white">
                AI로 카드뉴스 만들기
              </span>
            </button>
            <div className="flex flex-row items-center gap-16 mt-10">
              <PromptBox
                width={440}
                text="아프리카 농민들이 따온 원두로 눈 앞에서 착즙하는 커피 자판기 체인점이 아닌, 깔끔하고 친숙, 저렴한 일상적인 커피"
                purpose="커피 자판기 홍보"
              />
              <GroupSVG />
              <img alt="main" src={MainPng} width={440} />
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center my-20 gap-14">
        <p className="text-4xl font-bold">쉽고 간단하게, AI로 만들었습니다.</p>
        <p className="text-2xl">카드뉴스를 눌러보세요!</p>
        <div className="flex gap-10 mb-20">
          <InstagramTemplate
            width={500}
            Content={
              <SlideImg
                width={500}
                imgUrl={Sample1}
                text={
                  "모아서 주는 마음이 더 기억에 남는 법! 다른 사람들과 함께 선물을 준비해보세요"
                }
                purpose="선물 펀딩 서비스 페이지 홍보"
              />
            }
          />
          <InstagramTemplate
            width={500}
            Content={
              <SlideImg
                width={500}
                imgUrl={Sample1}
                text={
                  "모아서 주는 마음이 더 기억에 남는 법! 다른 사람들과 함께 선물을 준비해보세요"
                }
                purpose="선물 펀딩 서비스 페이지 홍보"
              />
            }
          />
          <InstagramTemplate
            width={500}
            Content={
              <SlideImg
                width={500}
                imgUrl={Sample1}
                text={
                  "모아서 주는 마음이 더 기억에 남는 법! 다른 사람들과 함께 선물을 준비해보세요"
                }
                purpose="선물 펀딩 서비스 페이지 홍보"
              />
            }
          />
        </div>
      </div>
    </div>
  );
}

export default App;
