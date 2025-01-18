import { useSelector } from 'react-redux'
import { lang } from '../utils/LanguageConstants'
import { useRef } from 'react';
import { GoogleGenerativeAI } from "@google/generative-ai";
import * as fs from 'node:fs';

const SearchBar = () => {
  const langKey = useSelector(store => store.config.lang);
  const searchText= useRef(null);

  const handleSearch = async () => {
    console.log(searchText.current.value)
    const prompt = "Act as a Movie recommndation system and suggest some movies for the query" + searchText.current.value + ". only give me names of 4 movies, comma separated like the example result given ahead. Example Result: Don,Khilauna bana khalnayak, Koi mil gya, Pyar to hona hi tha";
 const genAI = new GoogleGenerativeAI('AIzaSyB8nlsKQfPdGpG7V1M8cZAMWaj_9w5Oev8');
 const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

  
  }
  return (
    <div className='-mt-60'>
      <form
      onClick={(e) => e.preventDefault()}
       className='p-6'>
        <input 
        ref={searchText}
        className='py-3 px-5 text-white text-sm placeholder:text-gray-400 w-[600px] border-slate-400 border-[.5px] bg-transparent rounded-sm'
        type="text" 
         placeholder={lang[langKey].gptSearchPlaceholder}
         />
        <button 
        onClick={handleSearch}
        className='py-[12px] font-light  px-6 text-white bg-red-800 hover:bg-opacity-90 rounded-r-sm'>{lang[langKey].search} </button>
      </form>
    </div>
  )
}
export default SearchBar