import BarSVG from "../assets/Bars.svg?react";
import BookmarkSVG from "../assets/Bookmark-minus.svg?react";
import CubeSVG from "../assets/Cube-magnifying-glass.svg?react";
import ArrowSVG from "../assets/Arrow-right.svg?react";

interface PromptBoxProps {
    width : number;
    text : string;
    purpose : string;
}


const PromptBox = ({width, text, purpose}: PromptBoxProps) => {

    return(
        <div className='flex flex-col justify-between bg-white md:rounded-xl rounded-md md:p-5 p-2 text-primary-default' style={{width: `${width}px`, height: `${width}px`}}>
            <div className='flex flex-col md:gap-2 gap-1' >
                <p className='md:text-xl text-[11px] font-bold'>문구</p>
                <div className='flex flex-col border-2 md:p-3 p-1.5 rounded-xl md:gap-3 justify-between' style={{height : `${width/3}px`}}>
                    <p className='md:text-lg text-[10px] md:leading-7 font-medium'>{text}</p>
                    <div className='flex flex-row justify-between items-center'>
                        <div className='flex gap-2 items-start'>
                            <BarSVG className='md:w-5 w-3'/>
                            <BookmarkSVG className='md:w-5 w-3'/>
                            <CubeSVG className='md:w-5 w-3'/>
                        </div>
                        <ArrowSVG className='md:w-7 w-3 md:h-7 h-3'/>
                    </div>
                </div>
            </div>

            <div className='flex flex-col md:gap-2 gap-1' >
                <p className='md:text-xl text-[11px] font-bold'>목적</p>
                <div className='flex flex-col border-2 md:p-3 p-1.5 rounded-xl md:gap-3 justify-between' style={{height : `${width/3}px`}}>
                    <p className='md:text-lg text-[10px] md:leading-7 font-medium'>{purpose}</p>
                    <div className='flex flex-row justify-between items-center'>
                        <div className='flex gap-2 items-start'>
                            <BarSVG className='md:w-5 w-3'/>
                            <BookmarkSVG className='md:w-5 w-3'/>
                            <CubeSVG className='md:w-5 w-3'/>
                        </div>
                        <ArrowSVG className='md:w-7 w-3 md:h-7 h-3'/>
                    </div>
                </div>
            </div>



        </div>
    )
}

export default PromptBox;