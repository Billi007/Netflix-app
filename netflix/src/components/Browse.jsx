import Header from './Header'
//import { Link } from "react-router-dom";
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'

const Browse = () => {
useNowPlayingMovies() 

  return (
 <>
 <Header/>
 {
  /*main-conatiner
    - VideoBg
    - video-title

  Secondary-Container
     - Movie list * n
     - cards * n
     */
 }

 </>
  )
}

export default Browse