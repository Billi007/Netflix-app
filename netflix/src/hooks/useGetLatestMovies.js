import { useDispatch, useSelector } from 'react-redux';
import { addLatestMovies } from '../redux/MovieSlice'
import {options} from '../utils/Constants'
import { useEffect } from 'react';

const useGetLatestMovies = () => {
    const dispatch = useDispatch();
    const LatestMovies= useSelector((store) => store.movies.LatestMovies);

   const getLatestMovies = async () => {
    const data = await fetch(`https://example.com/3/movie/latest`, options);
    const json = await data.json();
 
    dispatch(addLatestMovies(json.results))
   }

   useEffect(() => {
    !LatestMovies && getLatestMovies();
   },[])
}

export default useGetLatestMovies