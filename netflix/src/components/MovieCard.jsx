import {IMG_CDN} from '../utils/Constants'


const MovieCard = ({posterPath}) => {

  return (
    <>
    <div
    className='w-[150px] cursor-pointer'>
    <img 
    className='w-36 h-48'
    src={IMG_CDN + posterPath}
    //'https://image.tmdb.org/t/p/w500/zOpe0eHsq0A2NvNyBbtT6sj53qV.jpg'
    alt="Movie Card" 
    />
    </div>
    </>
  )
}

export default MovieCard