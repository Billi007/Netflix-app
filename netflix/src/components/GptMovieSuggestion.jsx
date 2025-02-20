import { useState } from 'react';
import { useSelector } from 'react-redux'
import MovieList from './MovieList';

const GptMovieSuggestion = () => {
  const [movieSuggetion, setMovieSuggetion] = useState([])
  const movies = useSelector(store => store.movies?.NowPlayingMovies);
  console.log(movies);

  if(!movies) return;

  return (
    // <div className="p-4 flex justify-center items-center bg-black text-white bg-opacity-90">
    //  {movies.map((movie) => (
    //   <MovieList 
    //   key={movie.id}
    //   title={movie.original_title}
    //    />
    //  ))}
    // </div>
  )
}

export default GptMovieSuggestion