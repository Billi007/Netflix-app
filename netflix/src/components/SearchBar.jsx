import { useSelector } from 'react-redux'
import { lang } from '../utils/LanguageConstants'
import { useRef } from 'react';

const SearchBar = () => {
  const langKey = useSelector(store => store.config.lang);
  const searchText= useRef(null);

  
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
        className='py-[12px] font-light  px-6 text-white bg-red-800 hover:bg-opacity-90 rounded-r-sm'>{lang[langKey].search} </button>
      </form>
    </div>
  )
}
export default SearchBar