import { BsThreeDotsVertical } from "react-icons/bs";
import { FaCircle, FaRegComment } from "react-icons/fa";
import { IoPaperPlaneOutline } from "react-icons/io5";
import { LuHeart } from "react-icons/lu";
import { RiHeartFill } from "react-icons/ri";
import { VscBookmark } from "react-icons/vsc";
import {Link} from "react-router-dom";

type Props = {
  width: number;
  Content: JSX.Element;
};

/**
 * 인스타 템플릿 컴포넌트
 * @param width : 컴포넌트 길이
 * @param Content : 이미지에 넣을 컴포넌트
 * @returns 컴포넌트를 인스타 템플릿에 감싸서 반환해줌
 */
const InstagramTemplate = ({ width, Content }: Props) => {
  return (
      <Link to='/cards'>
    <div className={`border-[1px] border-slate-200 py-3`}>
      <header className="flex items-center justify-between py-2">
        <div className="flex items-center px-2">
          <FaCircle size={width / 15} />
          <div className="flex flex-col ml-2">
            <p className="text-sm font-bold md:text-base">rocket_dan</p>
            <p className="text-xs text-slate-300 md:text-base">만들다람쥐</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Link to='/payment'>
            <button className=" flex items-center justify-center p-2 text-sm border-2 rounded-lg   border-primary-instabtn text-primary-instabtn">
              이 템플릿 구매하기
            </button>
          </Link>

          <BsThreeDotsVertical size={width / 20} />
        </div>
      </header>
      {/* 이미지 영역 */}
      {Content}

      <div className="p-3">
        <div className="flex justify-between ">
          <div className="flex gap-2">
            <LuHeart size={width / 20} />
            <FaRegComment size={width / 20} />
            <IoPaperPlaneOutline size={width / 20} />
          </div>
          <VscBookmark size={width / 20} />
        </div>
        <div className="flex items-center gap-2 mt-3">
          <RiHeartFill />
          <p className="text-sm font-bold">508 likes</p>
        </div>
        <div className="flex items-center gap-2 mt-2">
          <p className="text-sm font-bold">rocket_dan</p>
          <p className="text-sm text-primary-instabtn">
            카드뉴스 제작 #카드뉴스 #AI
          </p>
        </div>
      </div>
    </div>
      </Link>
  );
};

export default InstagramTemplate;
