import Footer from "@components/Footer.tsx";

const PaymentPage = () => {
    return(
        <>
        <script src="https://cdn.portone.io/v2/browser-sdk.js" />
        <div className="flex justify-center border-2 items-center h-[100px] relative w-full" style={{ marginTop: '20px' }}>
                <a href="/" className="text-center">
                    <img src="src/assets/logo-cardcapture.png" alt="Logo" width={100} height={50} />
                </a>
        </div>
        <div className='flex flex-col p-7 '>
            <div className='text-xl mb-5 font-bold'>결제 플랜</div>
            <div className='flex flex-col gap-5' >
                <div className='text-lg'>이용권 단건 결제</div>
                <div className='flex flex-row gap-10'>
                    <div className='flex flex-col gap-5 w-[500px] p-7 border-md bg-gray-50 border-2'>
                        <div>다른 사람이 만든 템플릿 10장 구매하기</div>
                        <div>₩ 2000원 / 10장</div>
                        <div>
                            - 다른 사람이 만든 포스터 10장을 구매할 수 있는 가격이에요. 포스터는 1장씩 나눠 다운로드 받을 수 있어요.<br />
                            - 유효기간: 구매일로부터 365일
                        </div>
                        <button className='p-3 bg-gray-200'>구매하기</button>
                    </div>
                    <div className='flex flex-col gap-5 w-[500px] p-7 border-md bg-gray-50 border-2'>
                        <div>AI 포스터 생성 10장 이용권</div>
                        <div>₩ 5000원 / 10장</div>
                        <div>
                            - AI로 포스터 완성본을 10번 생성할 수 있는 가격이에요. AI 포스터는 1장씩 생성할 수 있어요.<br />
                            - 유효기간: 구매일로부터 365일
                        </div>
                        <button className='p-3 bg-gray-200'>구매하기</button>
                    </div>
                </div>
                <div className='flex flex-row gap-10'>
                    <div className='flex flex-col gap-5 w-[500px] p-7 border-md '>
                        <p className='font-bold text-lg'>다른 사람이 만든 포스터 구매란?</p>
                        - 다른 사람이 만들어 놓은 포스터 이미지를 상업적으로 이용할 수 있어요 <br />
                        - 다른 사람이 만든 포스터는 재판매가 불가능해요<br />
                    </div>
                    <div className='flex flex-col gap-5 w-[500px] p-7 border-md '>
                        <p className='font-bold text-lg'>AI가 만드는 포스터 완성본이란?</p>
                        v 프롬프트만 입력하면 AI가 포스터 완성본을 생성해요<br />
                        v AI가 만든 포스터를 에디터로 수정할 수 있어요 <br />
                        v AI가 주제에 맞는 고퀄리티 일러스트 이미지를 생성해요 <br />
                        v 포스터 저작권 획득 및 상업적 사용 가능 <br />
                        v 포스터 판매 가능 <br />
                    </div>
                </div>
            </div>

            <div className='flex flex-col gap-5 mt-10' >
                <div className='text-lg'>정기 구독</div>
                <div className='flex flex-row gap-10'>
                    <div className='flex flex-col gap-5 w-[500px] p-7 border-md bg-gray-50 border-2'>
                        <div>Credit 1개월</div>
                        <div>₩ 7,900원/1개월(Credit 900개)</div>
                        <div>
                            - 다른 사람이 만든 포스터 및 AI 포스터 생성을 자유롭게 Credit으로 이용할 수 있어요.<br />
                            - 타인의 포스터 구매 = Credit 10<br />
                            - AI 포스터 생성 = Credit 25<br />
                            - 단건 결제 대비 약 56% 할인!<br />
                        </div>
                        <button className='p-3 bg-gray-200'>구매하기</button>
                    </div>
                </div>
            </div>

        </div>
            <Footer/>
            </>
    )
}

export default PaymentPage