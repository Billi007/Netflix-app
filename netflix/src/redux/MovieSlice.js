import { createSlice } from "@reduxjs/toolkit"


const movieSlice = createSlice({
    name: "movies",
    initialState: {
        NowPlayingMovies : null,
        TrailerVideo : null,
        PopularMovies: null,
        UpcomingMovies: null,
        TrendingMovies: null,
        LatestMovies: null,
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
        },
        addUpcomingMovies: (state, action) => {
            state.UpcomingMovies = action.payload
        },
        addTrendingMovies: (state, action) => {
            state.TrendingMovies = action.payload
        },
        addLatestMovies: (state, action) => {
            state.LatestMovies = action.payload
        },
    }
})

export const {addNowPlayingMovies, addMovieTrailer, addPopularMovies, addUpcomingMovies, addTrendingMovies, addLatestMovies} = movieSlice.actions;
export default movieSlice.reducer;