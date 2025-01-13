import { useDispatch } from 'react-redux';
import { addMovieTrailer} from '../redux/MovieSlice'
import {options} from '../utils/Constants'
import { useEffect } from 'react';

const useGetMovieTrailer = ({movieId}) => {
    const dispatch = useDispatch();

   const getMovieVideos = async () => {
    const data = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos`, options);
    const json = await data.json();
 
    const trailer = json.results.filter(video => video.type == 'Trailer');
    const firstTrailer = trailer.length ? trailer[0] : json.results[0];
    dispatch(addMovieTrailer(firstTrailer))
   }

   useEffect(() => {
    getMovieVideos();
   },[])
}

export default useGetMovieTrailer