import {Link} from "react-router-dom";
import CardImg from '../../public/cards.png';
import Footer from "@components/Footer.tsx";

const Prompt = () => {
  return <>
    <div className="flex justify-center border-2 items-center h-[100px] relative w-full" style={{ marginTop: '20px' }}>
                <a href="/" className="text-center">
                    <img src="src/assets/logo-cardcapture.png" alt="Logo" width={100} height={50} />
                </a>
    </div>
    <div className='flex flex-col p-7 gap-7 justify-center items-center'>
      <div className='text-xl mb-5 font-bold'>프롬프트 입력하기</div>
      <div className='flex flex-col bg-gray-100 p-10 rounded-md w-[800px] gap-10' >
        <div className='flex flex-col bg-white border-2 p-5 gap-5'>
          <p className='text-lg font-bold'>카드뉴스에 작성할 문구를 입력해주세요</p>
          <input className='p-3 border-2 w-full' type='text' placeholder='예) 눈앞에서 착즙하는 커피 자판기' />
          <input className='p-3 border-2 w-full' type='text' />
        </div>

        <div className='flex flex-col bg-white border-2 p-5 gap-5'>
          <p className='text-lg font-bold'>제작 목적을 입력해주세요</p>
          <input className='p-3 border-2 w-full' type='text' placeholder='예) 커피 자판기 홍보' />
        </div>
        <Link to='/payment'>
        <button className='p-5 bg-blue-200 font-bold'>

            결제하여 생성하기

          </button>
        </Link>
      </div>
      <div className='flex flex-col gap-10 justify-center items-center'>
        <div className='text-lg font-bold text-blue-600'>결제하면 다음과 같이 AI가 카드뉴스를 만들어줘요!</div>
        <img src={CardImg} width={800} />
      </div>
    </div>
    <Footer />
    </>
};


export default Prompt;
