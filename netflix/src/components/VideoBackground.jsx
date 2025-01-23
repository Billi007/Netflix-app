import { useSelector } from "react-redux"
import useGetMovieTrailer from "../hooks/useGetMovieTrailer"

const VideoBackground = ({movieId}) => {
const trailerVideo = useSelector(store => store.movies?.TrailerVideo)
useGetMovieTrailer({movieId});

  return (
    <div className="w-screen md:-mt-[110px]">
    <iframe 
    className=" w-screen aspect-video md:w-screen md:aspect-video"
    src={`https://www.youtube.com/embed/${trailerVideo?.key}?autoplay=1&mute=1`}
    title="YouTube video player" 
    referrerPolicy="strict-origin-when-cross-origin"  
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
    allowFullScreen>
    </iframe>
    </div>
  )
} 

export default VideoBackground
