import { useSelector } from 'react-redux'
import { lang } from '../utils/LanguageConstants'

const SearchBar = () => {
  const langKey = useSelector(store => store.config.lang);

  return (
    <div className='-mt-60'>
      <form className='p-6'>
        <input 
        className='py-3 px-5 text-white text-sm placeholder:text-gray-400 w-[600px] border-slate-400 border-[.5px] bg-transparent rounded-sm'
        type="text" 
         placeholder={lang[langKey].gptSearchPlaceholder}
         />
        <button className='py-[12px] font-light  px-6 text-white bg-red-800 hover:bg-opacity-90 rounded-r-sm'>{lang[langKey].search} </button>
      </form>
    </div>
  )
}

export default SearchBar