import MovieList from './MovieList'
import {useSelector} from 'react-redux'
const SecondaryContainer = () => {

const movies = useSelector(store => store.movies)

  return (

      movies?.NowPlayingMovies && (
      <div className='-mt-[190px] md:mt-48 lg:-mt-44 relative z-20'>
      <MovieList title={"Now Playing"} movies={movies.NowPlayingMovies} />
      <MovieList title={"Trending Now"} movies={movies.TrendingMovies} />
      <MovieList title={"Latest"} movies={movies.NowPlayingMovies} />
      <MovieList title={"Upcoming Movies"} movies={movies.UpcomingMovies} />
      <MovieList title={"Popular on Netflix"} movies={movies.PopularMovies} />
    </div>
      )
    
  )
}

export default SecondaryContainer