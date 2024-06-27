import LogoSvg from "@assets/logo.svg?react";

const Navigation = () => {
  return (
    <div className="flex w-full items-center justify-between gap-2 py-5 md:px-14 px-7 border-b-2">
      <div className="flex flex-row gap-4">
        <LogoSvg className="md:w-10 w-7" />
        <p className="md:text-xl text-md">로켓단</p>
      </div>

      <ul className="flex flex-row gap-4">
        <li>로그인</li>
        <li>회원가입</li>
        <li>요금제</li>
        <li>마이페이지</li>
      </ul>
    </div>
  );
};

export default Navigation;
