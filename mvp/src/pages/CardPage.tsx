import SlideImg from "@components/SlideImg.tsx";
import Sample1 from "@assets/sample1.png";
import InstagramTemplate from "@components/InstagramTemplate.tsx";
import Sample2 from "@assets/sample2.png";
import Sample3 from "@assets/sample3.png";
import Sample4 from "@assets/sample4.png";
import Footer from "@components/Footer.tsx";

const CardPage = () => {
    return(
        <>
        <div className="flex justify-center border-2 items-center h-[100px] relative w-full" style={{ marginTop: '20px' }}>
                <a href="/" className="text-center">
                    <img src="src/assets/logo-cardcapture.png" alt="Logo" width={100} height={50} />
                </a>
        </div>
            <div className='flex flex-col p-7 gap-10'>
                <div className='text-xl mb-5 font-bold'>다른 사람이 만든 템플릿</div>
                <div className='flex flex-row justify-center gap-20 px-10'>
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
                                imgUrl={Sample2}
                                text={"Let's Gift"}
                                purpose="선물 펀딩 서비스 페이지 홍보"
                            />
                        }
                    />
                </div>
                <div className='flex flex-row justify-center gap-20 px-10'>
                    <InstagramTemplate
                        width={500}
                        Content={
                            <SlideImg
                                width={500}
                                imgUrl={Sample3}
                                text={"한번씩은 다 해본 발표 어떻게 준비 하셨나요?"}
                                purpose="선물 펀딩 서비스 페이지 홍보"
                            />
                        }
                    />
                    <InstagramTemplate
                        width={500}
                        Content={
                            <SlideImg
                                width={500}
                                imgUrl={Sample4}
                                text={"가족과 간단한 챌린지를 통해 소통온도를 올려봐요!"}
                                purpose="선물 펀딩 서비스 페이지 홍보"
                            />
                        }
                    />
                </div>
                <div className='flex flex-row justify-center gap-20 px-10'>
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
                                imgUrl={Sample2}
                                text={"Let's Gift"}
                                purpose="선물 펀딩 서비스 페이지 홍보"
                            />
                        }
                    />
                </div>

            </div>
            <Footer/>
        </>
    )

}

export default CardPage;