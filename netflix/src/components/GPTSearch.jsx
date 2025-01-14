import SearchBar from './SearchBar'
import GptMovieSuggestion from './GptMovieSuggestion'

const GPTSearch = () => {
  return (
    <div className=' bg-black w-full h-screen flex items-center justify-center'>
      <SearchBar/>
      <GptMovieSuggestion/>
    </div>
  )
}

export default GPTSearch