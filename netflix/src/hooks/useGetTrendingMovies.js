import { useDispatch, useSelector } from 'react-redux';
import { addTrendingMovies} from '../redux/MovieSlice'
import {options} from '../utils/Constants'
import { useEffect } from 'react';

const useGetTrendingMovies = () => {
    const dispatch = useDispatch();
    const TrendingMovies= useSelector((store) => store.movies?.TrendingMovies);

   const getTrendingMovies = async () => {
    const data = await fetch(`https://api.themoviedb.org/3/trending/movie/day?language=en-US`, options);
    const json = await data.json();
 
    dispatch(addTrendingMovies(json.results))
   }

   useEffect(() => {
    if(!TrendingMovies) getTrendingMovies();
   },[])
}

export default  useGetTrendingMovies