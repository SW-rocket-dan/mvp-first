import Footer from "@components/Footer.tsx";

const TermOfUsePage = () => {
    return(
        <>
            <div className='flex flex-col p-7 gap-10'>
                <div className='text-xl mb-5 font-bold'>이용약관</div>
                <div className='text-xl mb-5 font-bold'>개인정보 처리방침</div>
                <div className='text-xl mb-5 font-bold'>환불정책</div>
                <div className='text-xl mb-5 font-bold'>저작권 처리 방침</div>
            </div>
            <Footer />
        </>
    )
}

export default TermOfUsePage;