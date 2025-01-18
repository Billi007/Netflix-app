import { useDispatch, useSelector } from 'react-redux';
import { addMovieTrailer} from '../redux/MovieSlice'
import {options} from '../utils/Constants'
import { useEffect } from 'react';

const useGetMovieTrailer = ({movieId}) => {
    const dispatch = useDispatch();
    const TrailerVideo = useSelector((store) => store.movies?.TrailerVideo);

   const getMovieVideos = async () => {
    const data = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos`, options);
    const json = await data.json();
 
    const trailer = json.results.filter(video => video.type == 'Trailer');
    const firstTrailer = trailer.length ? trailer[0] : json.results[0];
    dispatch(addMovieTrailer(firstTrailer))
   }

   useEffect(() => {
    if(!TrailerVideo) getMovieVideos();
   },[])
}

export default useGetMovieTrailer