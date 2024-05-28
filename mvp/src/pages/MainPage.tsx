import LogoSvg from "@assets/logo.svg?react";
import StarSvg from "@assets/star.svg?react";
import MainPng from "@assets/main.png";
import GroupSVG from "@assets/Group.svg?react";

import PromptBox from "@components/PromptBox";

import InstagramTemplate from "@components/InstagramTemplate";
import Sample1 from "@assets/sample1.png";
import Sample2 from "@assets/sample2.png";
import Sample3 from "@assets/sample3.png";
import Sample4 from "@assets/sample4.png";
import SlideImg from "@components/SlideImg";
import { useEffect, useState } from "react";
const MainPage = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const [templateSize, setTemplateSize] = useState(window.innerWidth);
  const limitWidth = 786;

  const handleClick = () => {
    window.open("https://forms.gle/1SZsPLbhtRu9mUDX8");
  };

  ``;

  useEffect(() => {
    setTemplateSize(width > limitWidth ? width / 4 : width * 0.8);
  }, [width]);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="flex flex-col w-full h-full gap-4 md:gap-7">
      <div className="flex items-center justify-start gap-2 pt-5 md:px-14 px-7 md:pt-10 md:gap-3 ">
        <LogoSvg className="md:w-10 w-7" />
        <p className="md:text-xl text-md">로켓단</p>
      </div>

      <div className="flex items-center justify-center h-full">
        <div className="flex items-center justify-center px-3 mx-3 md:px-52 md:py-24 py-7 bg-primary-background rounded-xl">
          <div className="flex flex-col items-center justify-center gap-2 px-6 md:px-12 md:gap-5">
            <p className="text-3xl font-extrabold md:text-7xl">
              FAST, EASY, SIMPLE
            </p>
            <p className="tracking-tighter md:text-3xl text-md">
              AI와 카드뉴스가 만나 더욱 편리하고 효율적으로
            </p>
            <button
              className="flex flex-row items-center gap-2 px-4 py-2 mt-2 bg-black rounded-lg shadow-md md:py-4 md:px-7 md:mt-7"
              onClick={handleClick}
            >
              <StarSvg className="md:w-[25px] w-[18px]" />
              <span className="text-xs font-medium text-white md:text-lg">
                AI로 카드뉴스 만들기
              </span>
            </button>
            <div className="flex flex-col items-center gap-5 mt-10 md:flex-row md:gap-16">
              <PromptBox
                width={width <= limitWidth ? 220 : 440}
                text="아프리카 농민들이 따온 원두로 눈 앞에서 착즙하는 커피 자판기 체인점이 아닌, 깔끔하고 친숙, 저렴한 일상적인 커피"
                purpose="커피 자판기 홍보"
              />
              <GroupSVG width={30} height={30} />
              <img
                alt="main"
                src={MainPng}
                width={width <= limitWidth ? 220 : 440}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center gap-5 px-3 mt-16 md:mt-32 md:gap-16">
        <div className="flex flex-col items-center gap-1 text-xl font-bold md:text-4xl md:gap-2">
          <p>현재는 베타 테스트로</p>
          <p>선착순 20명을 한정으로 받고 있어요!</p>
        </div>
        <p className="text-sm text-center md:text-2xl">
          베타테스터 분께는 추후 서비스 오픈 시 {width <= limitWidth && <br />}
          <span className="font-bold">유료</span> 서비스를{" "}
          <span className="font-bold text-green-600">무료</span>로 제공해 드릴
          예정이에요
        </p>
      </div>

      <div className="flex flex-col items-center justify-center gap-5 mt-16 md:mt-40 md:gap-16">
        <div className="flex flex-col items-center gap-5 text-xl font-bold md:text-4xl md:gap-14">
          <p>
            "이런 <span className="font-bold text-green-600">사람</span>에게
            도움이 돼요"
          </p>

          <div className="flex flex-col items-center justify-center gap-1 text-sm md:gap-4 md:text-4xl ">
            <p>
              블로그에 <span className="font-bold text-green-600">썸네일</span>
              을 빠르고 편하게 넣고 싶은 분
            </p>
            <p>
              학생회,서포터즈 등{" "}
              <span className="font-bold text-green-600">과제</span>로
              카드뉴스를 제작해야 하는 분
            </p>
            <p>
              포토샵 등의 디자인 툴이{" "}
              <span className="font-bold text-green-600">어려운</span> 분
            </p>
            <p>
              인스타 등 SNS{" "}
              <span className="font-bold text-green-600">홍보</span>를 위해
              카드뉴스가 필요한 분
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center gap-8 mt-32 md:gap-14">
        <p className="text-xl font-bold text-center md:text-4xl ">
          쉽고 간단하게, AI로 만들었습니다.
        </p>
        <p className="text-lg md:text-2xl animate-bounce">
          카드뉴스를 눌러보세요!
        </p>
        <div
          className="flex gap-10 mb-10"
          style={{ flexDirection: `${width > limitWidth ? "row" : "column"}` }}
        >
          <InstagramTemplate
            width={templateSize}
            Content={
              <SlideImg
                width={templateSize}
                imgUrl={Sample1}
                text={
                  "모아서 주는 마음이 더 기억에 남는 법! 다른 사람들과 함께 선물을 준비해보세요"
                }
                purpose="선물 펀딩 서비스 페이지 홍보"
              />
            }
          />

          <InstagramTemplate
            width={templateSize}
            Content={
              <SlideImg
                width={templateSize}
                imgUrl={Sample2}
                text={"Let's Gift"}
                purpose="선물 펀딩 서비스 페이지 홍보"
              />
            }
          />
        </div>
        <div
          className="flex gap-10 mb-10"
          style={{ flexDirection: `${width > limitWidth ? "row" : "column"}` }}
        >
          <InstagramTemplate
            width={templateSize}
            Content={
              <SlideImg
                width={templateSize}
                imgUrl={Sample3}
                text={"한번씩은 다 해본 발표 어떻게 준비 하셨나요?"}
                purpose="선물 펀딩 서비스 페이지 홍보"
              />
            }
          />
          <InstagramTemplate
            width={templateSize}
            Content={
              <SlideImg
                width={templateSize}
                imgUrl={Sample4}
                text={"가족과 간단한 챌린지를 통해 소통온도를 올려봐요!"}
                purpose="선물 펀딩 서비스 페이지 홍보"
              />
            }
          />
        </div>
      </div>
    </div>
  );
};

/* STYLE */

export default MainPage;
