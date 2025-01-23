import { useSelector } from 'react-redux'
import { lang } from '../utils/LanguageConstants'
import { useRef } from 'react';

const SearchBar = () => {
  const langKey = useSelector(store => store.config.lang);
  const searchText= useRef(null);

  
  return (
    <div className='pt-[10%] md:pt-0 '>
      <form
      onClick={(e) => e.preventDefault()}
       className='md:p-6'>
        <input 
        ref={searchText}
        className='md:py-3 md:px-5 placeholder:text-xs py-1.5 px-2 text-white text-sm placeholder:text-gray-400 w-[250px] md:w-[700px] border-r-0 border-r-red-900 border-slate-400 border-[.5px] bg-transparent rounded-sm'
        type="text" 
         placeholder={lang[langKey].gptSearchPlaceholder}
         />
        <button 
        className='md:py-[12px] py-1.5 px-2 text-[15px] font-light  md:px-6 text-white bg-red-800 hover:bg-opacity-90 rounded-r-sm'>{lang[langKey].search} </button>
      </form>
    </div>
  )
}
export default SearchBar