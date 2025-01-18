import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {options} from '../utils/Constants';
import  { addNowPlayingMovies} from '../redux/MovieSlice'

const useNowPlayingMovies = () => {
    const dispatch = useDispatch();
    const NowPlayingMovies = useSelector((store) => store.movies?.NowPlayingMovies);

    const getNowPlayingMovies = async () => {
      try {
        const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', options)
        const json = await data.json();
        dispatch(addNowPlayingMovies(json.results))
    
      } catch (error) {
        console.error(error);
      }
    }
  
    useEffect(() => {
      if(!NowPlayingMovies) getNowPlayingMovies();
    }, [])
  
}

export default useNowPlayingMovies