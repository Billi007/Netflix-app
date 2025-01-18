import { useDispatch, useSelector } from 'react-redux';
import { addPopularMovies } from '../redux/MovieSlice'
import {options} from '../utils/Constants'
import { useEffect } from 'react';

const useGetPopularMovies = () => {
    const dispatch = useDispatch();
    const PopularMovies = useSelector((store) => store.movies?.PopularMovies);

   const getPopularMovies = async () => {
    const data = await fetch(`https://api.themoviedb.org/3/movie/popular?page=1`, options);
    const json = await data.json();

    dispatch(addPopularMovies(json.results))
   }

   useEffect(() => {
    if(!PopularMovies) getPopularMovies();
   },[])
}

export default useGetPopularMovies