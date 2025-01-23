import { useRef } from 'react';
import MovieCard from './MovieCard'
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";

const MovieList = ({ title, movies }) => {
  const sliderRef = useRef(null);

  const scroll = (direction) => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({
        left: direction === "left" ? -300 : 300, // Adjust scroll distance
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="relative w-full px-5">
      {/* Heading */}
      <h2 className="text-white text-sm md:text-xl font-normal ml-6 mb-2 mt-8">{title}</h2>

      {/* Carousel Container */}
      <div className="relative">
        {/* Left Arrow */}
        <button
          onClick={() => scroll("left")}
          className="absolute text-lg md:text-3xl -left-5 top-1/2 transform -translate-y-1/2 z-10 bg-black bg-opacity-50 text-white p-2 rounded-full mx-2">
         <FaChevronLeft />
        </button>

        {/* Slider Wrapper */}
        <div
          ref={sliderRef}
          className="flex overflow-x-auto overflow-x-hidden scroll-smooth space-x-2 px-6">
          {movies?.map((movie) => (
            <div
            
            key={movie.id}
            className="flex-shrink-0 transition-transform duration-300 ease-in-out hover:scale-110 rounded-sm shadow-lg">
            <MovieCard posterPath={movie.poster_path}/>
            </div>
          ))}
        </div>

        {/* Right Arrow */}
        <button
          onClick={() => scroll("right")}
          className="absolute -right-5 text-lg md:text-3xl mx-2 top-1/2 transform -translate-y-1/2 z-10 bg-black bg-opacity-50 text-white p-2 rounded-full">
         <FaChevronRight />
        </button>
      </div>
    </div>
  );
};



export default MovieList
