import React from 'react'
import MovieList from './MovieList'
import {useSelector} from 'react-redux'
const SecondaryContainer = () => {

const movies = useSelector(store => store.movies)

  return (

      movies?.NowPlayingMovies && (
        <div className='-mt-48 relative z-20'>
      <MovieList title={"Now Playing"} movies={movies.NowPlayingMovies} />
      <MovieList title={"Trending"} movies={movies.NowPlayingMovies} />
      <MovieList title={"Popular"} movies={movies.PopularMovies} />
      <MovieList title={"Upcoming Movies"} movies={movies.NowPlayingMovies} />
      <MovieList title={"Horror"} movies={movies.NowPlayingMovies} />
    </div>
      )
    
  )
}

export default SecondaryContainer