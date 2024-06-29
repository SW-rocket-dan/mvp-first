import {Link} from "react-router-dom";

const Footer = () => {
    return(
        <div className='flex flex-col mg-10 w-full h-40 bg-blue-50 p-4 gap-7'>
            <div className='text-xl font-extrabold'>만들다람쥐</div>
            <div>만들다람쥐, 728-15-02304, 양홍주, 경기도 부천시 원미구 부흥로315번길 37, 2층 2226호(중동, 대명빌딩) 070-8098-3983</div>
            <div className='flex flex-row font-medium'>
                <Link to='/terms'>이용약관(개인정보 처리방침, 환불 정책, 저작권 처리 방침 포함)</Link>
            </div>
        </div>
    )
}

export default Footer;