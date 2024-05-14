import LogoSvg from "../src/assets/logo.svg?react";
import StarSvg from "../src/assets/star.svg?react";
import MainPng from "../src/assets/main.png";
import GroupSVG from "../src/assets/Group.svg?react";
import "./App.css";
import PromptBox from "./components/PromptBox.tsx";
import HoverBox from "./components/HoverBox.tsx";
import {useEffect, useState} from "react";

function App() {
    const [width, setWidth] = useState(window.innerWidth);
    const limitWidth = 786;

    useEffect(() => {
        const handleResize = () => setWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);


    const handleClick = () => {
        window.open('https://forms.gle/1SZsPLbhtRu9mUDX8');
    }

  return (
    <div className='flex w-full h-full flex-col md:gap-7 gap-4'>
      <div className='flex justify-start items-center md:px-14 px-7 md:pt-10 pt-5 md:gap-3 gap-2  '>
          <LogoSvg className='md:w-10 w-7' />
          <p className='md:text-xl text-md'>로켓단</p>
      </div>

        <div className='flex h-full justify-center items-center'>
            <div className='flex justify-center items-center md:px-52 md:py-24 px-3 py-7 bg-primary-background rounded-xl mx-3'>
                <div className='flex flex-col justify-center items-center md:px-12 px-6 md:gap-5 gap-2'>
                    <p className='md:text-7xl text-3xl font-extrabold'>FAST, EASY, SIMPLE</p>
                    <p className='md:text-3xl text-md tracking-tighter'>AI와 카드뉴스가 만나 더욱 편리하고 효율적으로</p>
                    <button className='flex flex-row items-center bg-black md:py-4 md:px-7 py-2 px-4 rounded-lg gap-2 md:mt-7 mt-2 shadow-md' onClick={handleClick}>
                        <StarSvg className='md:w-[25px] w-[18px]'/>
                        <span className='text-white font-medium md:text-lg text-xs'>AI로 카드뉴스 만들기</span>
                    </button>
                    <div className='flex md:flex-row flex-col mt-10 md:gap-16 gap-5 items-center'>
                        <PromptBox width={width <= limitWidth ? 220 : 440 } text='아프리카 농민들이 따온 원두로 눈 앞에서 착즙하는 커피 자판기 체인점이 아닌, 깔끔하고 친숙, 저렴한 일상적인 커피' purpose='커피 자판기 홍보' />
                        <GroupSVG width={30} height={30} />
                        <img alt='main' src={MainPng} width={width <= limitWidth ? 220 : 440 }/>
                    </div>
                </div>
            </div>
        </div>

        <div className='flex flex-col justify-center items-center md:mt-32 mt-16 px-3 md:gap-16 gap-5'>
            <div className='flex flex-col items-center md:text-4xl text-xl font-bold md:gap-2 gap-1'>
                <p>현재는 베타 테스트로</p>
                <p>선착순 20명을 한정으로 받고 있어요!</p>
            </div>
            <p className='md:text-2xl text-sm text-center'>
                베타테스터 분께는 추후 서비스 오픈 시
                {width <= limitWidth && <br />}
                <span className='font-bold'>유료</span> 서비스를 <span className='font-bold text-green-600'>무료</span>로 제공해 드릴 예정이에요</p>
        </div>

        <div className='flex flex-col justify-center items-center md:mt-40 mt-16 md:gap-16 gap-5'>
            <div className='flex flex-col items-center md:text-4xl text-xl font-bold md:gap-14 gap-5'>
                <p>"이런 <span className='text-green-600 font-bold'>사람</span>에게 도움이 돼요"</p>

                <div className='flex flex-col md:gap-4 gap-1 justify-center items-center md:text-4xl text-sm'>
                    <p>블로그에 썸네일을 빠르고 편하게 넣고 싶은 분</p>
                    <p>학생회,서포터즈 등 과제로 카드뉴스를 제작해야 하는 분</p>
                    <p>포토샵 등의 디자인 툴이 어려운 분</p>
                    <p>인스타 등 SNS 홍보를 위해 카드뉴스가 필요한 분</p>
                </div>
            </div>

        </div>

        <div className='flex flex-col justify-center items-center my-20 gap-14 mt-52'>
            <p className='text-4xl font-bold'>쉽고 간단하게, AI로 만들었습니다.</p>
            <div className='flex gap-10'>
                <HoverBox/>
                <HoverBox/>
                <HoverBox/>
                <HoverBox/>
            </div>

        </div>
    </div>
  );
}

export default App;
