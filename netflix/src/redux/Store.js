import { configureStore } from "@reduxjs/toolkit";
import userReducer from './userSlice'
import movieReducer from './MovieSlice'
import GPTReducer from './SearchSlice'
import configReducer from './configSlice'

const appStore = configureStore({
    reducer: {
    user: userReducer,
    movies: movieReducer,
    gpt: GPTReducer,
    config: configReducer
    }
})

export default appStore;