import Header from './Header'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies';
import MainContainer from './MainContainer'
import SecondartContainer from './SecondaryContainer'
import useGetPopularMovies from '../hooks/useGetPopularMovies';
import useGetUpcomingMovies from '../hooks/useGetUpcomingMovies'
import useGetTrendingMovies from '../hooks/useGetTrendingMovies';
import useGetLatestMovies from '../hooks/useGetLatestMovies';

const Browse = () => {
  useNowPlayingMovies();
  useGetPopularMovies(); 
  useGetUpcomingMovies(); 
  useGetTrendingMovies();
  useGetLatestMovies();

  return (
   <>
   <div className='bg-black'>
  <Header/>
  <MainContainer/>
  {/* videoBackground
  VideoTitle */}
  <SecondartContainer/>
  {/* 
  Movie List * n
  Movie Cards * n
   /}




   
  {/* <header
   style={{
    backgroundImage: `url('https://images.pexels.com/photos/109669/pexels-photo-109669.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')`,
    backgroundPosition: 'center',
   // backgroundColor: "black",
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    height: '90vh',
    
  }}
  className='bg-black text-white'>
    <div className='space-y-5 relative top-44 p-8'>
      <h1 className=' text-5xl font-extrabold w-28'> Stranger Things</h1>
       <h1 className='w-64 text-sm'>DISCLAIMER: This Video is made for informational and educational purposes only. We do not own or affiliate with Netflix and its subsidiaries in any form. Copyright Disclaimer Under section 107 of the Copyright Act 1976, allowance 
          is made for “fair use” of this video for educational purposes.
       </h1>
        
       
           
         
    </div>
  </header> */}

   </div>
 </>
  )
}

export default Browse