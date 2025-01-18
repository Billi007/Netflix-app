import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {options} from '../utils/Constants';
import  { addUpcomingMovies } from '../redux/MovieSlice'

const useUpcomingMovies = () => {
    const dispatch = useDispatch();
    const UpcomingMovies = useSelector((store) => store.movies?.UpcomingMoviess);


    const getUpcomingMovies = async () => {
      try {
        const data = await fetch('https://api.themoviedb.org/3/movie/upcoming?page=1', options)
        const json = await data.json();
        dispatch(addUpcomingMovies(json.results))
    
      } catch (error) {
        console.error(error);
      }
    }
  
    useEffect(() => {
      if(!UpcomingMovies) getUpcomingMovies();
    }, [])
  
}

export default useUpcomingMovies