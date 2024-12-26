import { IoIosPlay } from "react-icons/io";
import { BsExclamationCircle } from "react-icons/bs";
import Header from './Header'
//import axios from 'axios'
//import { useState } from "react";
const Browse = () => {
  //const [movies, setMovies] = useState([]);

  return (
 <>
 <Header/>
 <div
 style={{
  height: '650px',
  backgroundImage: `url('http://www.omdbapi.com`,
  backgroundSize: "cover",
  backgroundRepeat: 'no-repeat',
  backgroundBlendMode: 'overlay',
  backgroundPosition: 'center center',}}>
 movies
  <div className="flex flex-col p-8 relative top-40 space-y-5">
    <div className="text-white ">
    <h1 className="text-white font-medium text-4xl">movies </h1>
   <p>movies </p>
   <p>movies </p>

   <p>movies </p>
   <p>movies </p>
   <p>movies </p>
   <p>movies </p>

    </div>

   <h1 className="text-white w-96">
     </h1>
    <div className="flex items-center gap-3">
      <button className="py-0.5 px-4 flex gap-1 items-center font-semibold bg-white hover:bg-slate-200 rounded-sm">
      <IoIosPlay className="text-2xl" />
        Play</button>
      <button className="py-[3px] px-4 flex gap-3 items-center font-semibold bg-slate-600 hover:bg-slate-700 text-white rounded-sm"> <BsExclamationCircle />
        My list</button>
    </div>

  </div>

 </div>
 </>
  )
}

export default Browse