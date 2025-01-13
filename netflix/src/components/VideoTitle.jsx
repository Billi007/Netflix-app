import { IoMdPlay } from "react-icons/io";
import { PiListPlus } from "react-icons/pi";

const VideoTitle = ({title, overview}) => {
  return (
    <>
    <div className='w-screen aspect-video pt-[20%] px-12 absolute text-white bg-gradient-to-r from-black'>
    <h1 className='text-[45px] font-bold'>{title} </h1>
    <p className='py-6 text-sm w-80'>{overview}</p>
    
    <div className='flex items-center gap-3'>
        <button className='bg-white py-1.5 px-5 rounded-sm hover:bg-gray-300 text-black flex items-center gap-2'> 
          <div><IoMdPlay/></div>
           Play</button>

           
           <button className='bg-gray-700 py-1.5 px-5 rounded-sm  hover:bg-opacity-85 text-white flex items-center gap-2'>
           <div><PiListPlus /></div>
             My List</button>
        </div>
    </div>
    </>
  )
}

export default VideoTitle