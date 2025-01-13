import { createSlice } from "@reduxjs/toolkit"


const movieSlice = createSlice({
    name: "movies",
    initialState: {
        NowPlayingMovies : null,
        TrailerVideo : null,
        PopularMovies: null,
    },

    reducers: {
        addNowPlayingMovies: (state, action) => {
            state.NowPlayingMovies = action.payload
        },
        addPopularMovies: (state, action) => {
            state.PopularMovies = action.payload
        },
        addMovieTrailer: (state, action) => {
            state.TrailerVideo = action.payload
        }
      
    }
})

export const {addNowPlayingMovies, addMovieTrailer, addPopularMovies} = movieSlice.actions;
export default movieSlice.reducer;