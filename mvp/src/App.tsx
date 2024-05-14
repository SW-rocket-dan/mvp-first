import LogoSvg from "../src/assets/logo.svg?react";
import StarSvg from "../src/assets/star.svg?react";
import MainPng from "../src/assets/main.png";
import GroupSVG from "../src/assets/Group.svg?react";
import "./App.css";
import PromptBox from "./components/PromptBox.tsx";
import HoverBox from "./components/HoverBox.tsx";

function App() {

    const handleClick = () => {
        window.open('https://forms.gle/1SZsPLbhtRu9mUDX8');
    }

  return (
    <div className='flex w-full h-full flex-col gap-7'>
      <div className='flex justify-start px-14 pt-10 gap-3'>
          <LogoSvg />
          <p className='text-xl'>로켓단</p>
      </div>

        <div className='flex h-full justify-center items-center'>
            <div className=' w-10/12 bg-primary-background rounded-xl'>
                <div className='flex flex-col justify-center items-center px-12 py-24 gap-5'>
                    <p className='text-7xl font-extrabold'>FAST, EASY, SIMPLE</p>
                    <p className='text-3xl'>AI와 카드뉴스가 만나 더욱 편리하고 효율적으로</p>
                    <button className='flex flex-row items-center bg-black py-4 px-7 rounded-lg gap-2 mt-7 shadow-md' onClick={handleClick}>
                        <StarSvg width={25}/>
                        <span className='text-white font-medium'>AI로 카드뉴스 만들기</span>
                    </button>
                    <div className='flex flex-row mt-10 gap-16 items-center'>
                        <PromptBox width={440} text='아프리카 농민들이 따온 원두로 눈 앞에서 착즙하는 커피 자판기 체인점이 아닌, 깔끔하고 친숙, 저렴한 일상적인 커피' purpose='커피 자판기 홍보' />
                        <GroupSVG />
                        <img alt='main' src={MainPng} width={440}/>
                    </div>
                </div>
            </div>
        </div>


        <div className='flex flex-col justify-center items-center my-20 gap-14'>
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
