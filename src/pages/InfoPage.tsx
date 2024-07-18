import PromptImg from '../../public/prompt.png';
import logoCardcapture from '../../public/logo-cardcapture.png';
import Footer from "@components/Footer.tsx";
import {Link} from "react-router-dom";

const InfoPage = () => {
    return(
        <>
        <div className="flex justify-center border-2 items-center h-[100px] relative w-full" style={{ marginTop: '20px' }}>
                <Link to="/" className="text-center">
                <img src={logoCardcapture} alt="Logo" width={100} height={50} />
                </Link>
        </div>
        <div className='flex flex-col p-7 gap-10'>
            <div className='text-xl mb-5 font-bold'>Card Capture 서비스 상세 설명</div>
            <div className='flex flex-col gap-3'>
                <div className='text-lg font-bold'>팀 소개</div>
                <div>"Card Capture"는 과학기술정보통신부가 주최하고 정보통신기획평가원, 한국정보산업연합회가 주관하는 SW Maestro 과정에서 개발된 서비스입니다.
                    <br />
                    <a className='text-blue-600' href='https://swmaestro.org/sw/main/contents.do?menuNo=200002' >소프트웨어 마에스트로(SW Maestro) 이동 링크</a>
                </div>
            </div>
            <div className='flex flex-col gap-3'>
                <div className='text-lg font-bold'>서비스 소개</div>
                <div>
                    <strong>Card Capture</strong>는 최신 인공지능 LLM 기술을 활용하여 누구나 쉽게 고품질의 카드뉴스를 제작할 수 있는 서비스입니다.<br />
                    사용자가 원하는 텍스트를 입력하기만 하면, AI가 배경 이미지부터 디자인 요소까지 자동으로 생성해줍니다.<br />
                    이후, 사용자는 직관적인 에디터를 통해 손쉬운 후편집을 할 수 있어, 디자인에 대한 부담 없이 개성 있는 콘텐츠를 완성할 수 있습니다.<br />
                </div>
            </div>
            <div className='flex flex-col gap-3'>
                <div className='text-lg font-bold'>핵심 기능</div>
                <div>
                    - <strong>AI 디자인 자동 생성</strong>: LLM 기술을 활용하여 사용자의 입력에 기반한 맞춤형 배경 이미지 및 디자인 요소를 제공합니다.<br />
                    - <strong>편리한 에디터</strong>: 누구나 쉽게 사용할 수 있는 사용자 친화적인 에디터로 후편집이 가능합니다.<br />
                    - <strong>시간 절약</strong>: 전통적인 카드뉴스 제작 시간을 평균 28.9분에서 5분 이내로 대폭 단축시킵니다.<br />
                    - <strong>비용 절감</strong>: 고품질 디자인을 저렴한 가격에 제공하여, 기존 대비 경제적 부담을 줄입니다.<br />
                    - <strong>다양한 접근성</strong>: 웹과 앱에서 모두 접근 가능하며, 음성 입력을 통한 카드뉴스 제작도 지원합니다.<br />
                </div>
            </div>
            <div className='flex flex-col gap-3'>
                <div className='text-lg font-bold'>서비스 이용 방법</div>
                <div>
                    <img src={PromptImg} width={500} />
                    1. <strong>텍스트 입력</strong>: 원하는 카드뉴스의 내용을 입력합니다.<br />
                    2. <strong>AI 생성</strong>: 입력된 데이터를 기반으로 AI가 자동으로 카드뉴스를 생성합니다.<br />
                    3. <strong>편집과 수정</strong>: 생성된 카드뉴스를 사용자의 취향에 맞게 쉽게 편집할 수 있습니다.<br />
                    4. <strong>완성 및 공유</strong>: 완성된 카드뉴스를 소셜 미디어, 블로그 등에서 쉽게 공유할 수 있습니다.<br />
                </div>
            </div>
            <div className='flex flex-col gap-3'>
                <div className='text-lg font-bold'>기대 효과</div>
                <div>
                    - <strong>디자인 부담 감소</strong>: 사용자는 디자인 과정에서 발생할 수 있는 시각적 부담을 덜 수 있습니다.<br />
                    - <strong>효율적인 작업 과정</strong>: 짧은 시간에 고품질의 결과물을 생성할 수 있어, 생산성이 향상됩니다.<br />
                    - <strong>경제적 이득</strong>: 구독료나 기타 비용 대비 훨씬 저렴한 가격으로 서비스를 제공함으로써, 많은 유료 사용자를 유치할 수 있습니다.<br />
                    - <strong>확장 가능성</strong>: 교육 플랫폼으로의 확장 가능성을 제공하여, 더 넓은 시장에 접근할 수 있습니다.<br />
                </div>
            </div>
            <div className='flex flex-col gap-3'>
                <div className='text-lg font-bold'>저작권 및 AI 생성물 안내</div>
                <div>
                    - <strong>AI 생성물의 저작권</strong>: 문화체육관광부는 ‘2024 생성형 AI 저작권 가이드라인’에서 AI 생성물은 저작권이 없다고 발표하였습니다. <br />
                    그럼에도 Card Capture는 AI 생성물에 대해 자체 구현한 내부 시스템을 운영하며 미연에 발생할 수 있는 저작권 침해를 방지하고자 노력합니다.<br />
                    - <strong>AI 생성물 활용</strong>: AI 생성물은 사용자가 자유롭게 활용할 수 있으며, 상업적 이용도 가능합니다.<br />
                    더 자세한 방침은 <a href="/terms" className="text-blue-600">이용약관(개인정보 처리방침, 환불 정책 포함)</a> 에서 확인하실 수 있습니다<div className=""></div>
                </div>
            </div>
        </div>


            <Footer />
            </>
    )
}

export default InfoPage;