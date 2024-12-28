import { useDispatch } from 'react-redux';
import {addNowPlayingMovies} from '../redux/MovieSlice'
import { useEffect } from "react";
import {API_OPTIONS} from '../utils/Constants'

const useNowPlayingMovies = () => {
    const dispatch = useDispatch()
 
    const getNowPlayingMovies = async () => {
     try {
      const response = await fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', API_OPTIONS)
     const data = await response.json();
     dispatch(addNowPlayingMovies(data))
     console.log("api response: " + data)
     } catch (error) {
      console.log("error: " + error)
     }
    }
  
    useEffect(() => {
      getNowPlayingMovies();
    },[])
}

export default useNowPlayingMovies