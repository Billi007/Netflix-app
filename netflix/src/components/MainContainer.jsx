import { useSelector } from 'react-redux'
import VideoTitle from './VideoTitle'
import VideoBackground from './VideoBackground'

const MainContainer = () => {
  const movies = useSelector(store => store.movies?.NowPlayingMovies )

  if(!movies) return;

  const mainMovieBackground = movies[0];
  const {overview, original_title, id} = mainMovieBackground;
  //console.log(mainMovieBackground)

  return (
    
   <>
     <div className=' bg-black'> 
     <VideoTitle title={original_title} overview={overview} />
     <VideoBackground movieId={id}/>
     </div>
    
   </>
  )
}

export default MainContainer