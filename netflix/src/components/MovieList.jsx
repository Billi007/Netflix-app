import MovieCard from './MovieCard'

const MovieList = ({ title, movies }) => {//+

  return (
    <div className='p-6'>
      <h1 className='text-white text-2xl font-semibold'>{title}</h1>
      <div className='flex overflow-x-scroll'>

       <div className='flex my-2'>
       {movies?.map(movie => <MovieCard posterPath={movie.poster_path} key={movie.id}/>)}
       </div>
      </div>
    </div>
  )
}


export default MovieList
