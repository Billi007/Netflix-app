import { IoMdPlay } from "react-icons/io";
import { PiListPlus } from "react-icons/pi";

const VideoTitle = ({title, overview}) => {
  return (
    <>
    <div className='w-screen aspect-video pt-[30%] md:pt-[18%] px-10 md:px-20 absolute text-white bg-gradient-to-r from-black'>
    <h1 className='text-[30px] leading-tight w-44 md:w-80 md:text-[50px] font-bold'>{title} </h1>
    <p className='py-6 md:inline-block hidden md:text-sm w-80'>{overview}</p>
    
    <div className='flex items-center gap-3 mt-4'>
        <button className='bg-white text-xs md:text-sm py-1.5 px-2.5 md:py-1.5 md:px-5 rounded-sm hover:bg-gray-300 text-black flex items-center gap-2'> 
          <div><IoMdPlay/></div>
           Play</button>

           
           <button className='bg-gray-700 text-xs md:text-sm py-1.5 px-2.5 md:py-1.5 md:px-5 rounded-sm  hover:bg-opacity-85 text-white flex items-center gap-2'>
           <div><PiListPlus /></div>
             My List</button>
        </div>
    </div>
    </>
  )
}

export default VideoTitle