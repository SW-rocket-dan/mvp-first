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
        <div className='flex flex-col justify-between bg-white rounded-xl p-5 text-primary-default' style={{width: `${width}px`, height: `${width}px`}}>
            <div className='flex flex-col gap-2' >
                <p className='text-xl font-bold'>문구</p>
                <div className='flex flex-col border-2 px-3 py-3 rounded-xl gap-3 justify-between' style={{height : `${width/3}px`}}>
                    <p className='text-lg leading-7 font-medium'>{text}</p>
                    <div className='flex flex-row justify-between'>
                        <div className='flex gap-2'>
                            <BarSVG/>
                            <BookmarkSVG/>
                            <CubeSVG/>
                        </div>
                        <ArrowSVG/>
                    </div>

                </div>
            </div>
            <div className='flex flex-col gap-2' >
                <p className='text-xl font-bold'>목적</p>
                <div className='flex flex-col border-2 px-3 py-3 rounded-xl gap-3 justify-between' style={{height : `${width/3}px`}}>
                    <p className='text-lg leading-7 font-medium'>{purpose}</p>
                    <div className='flex flex-row justify-between'>
                        <div className='flex gap-2'>
                            <BarSVG/>
                            <BookmarkSVG/>
                            <CubeSVG/>
                        </div>
                        <ArrowSVG/>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default PromptBox;