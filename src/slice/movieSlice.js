import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getMovies } from "../api";

const initialState = {
  movies: [],
  status: 'idle',
};


export const getMoviesAsync = createAsyncThunk(
  'movies/fetchAllMovies',
  async () => {
    const response = await getMovies();
    console.log("response", response)
    return response;
  }
);

export const moviesSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    like: (state, action) => {
      state.movies.map((movie) => { if(movie.id === action.payload)  movie.likes += 1; console.log("liked  ",movie.likes); return});
    },
    dislike: (state, action) => {
      state.movies.map((movie) => { if(movie.id === action.payload)  movie.dislikes += 1; return});
    },
    deleteMovie: (state, action) => {
      state.movies.filter((movie) => movie.id !== action.payload);
    },
    toggleStatus: (state) => {
      if(state.status === "idle") state.status = "loading";
      else { state.status = "idle" }
    },
    getAllMovies: (state) => {
      return state.movies;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(getMoviesAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getMoviesAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        console.log("payload in fulfilled", action.payload)
        state.movies = action.payload;
        console.log("state after fulfilled", state.movies)
      });
  },
});


export const { like, dislike, deleteMovie, toggleStatus, getAllMovies } = moviesSlice.actions;

export const selectMovies = (state) => state.movies.movies;

export const getStatus = (state) => state.movies.status;

// Trying writing thunk by hand
export const incrementIfOdd = (amount) => (dispatch, getState) => {
  const currentMovie = selectMovies(getState());
  console.log("this is the current movie picked ",currentMovie)
};

export default moviesSlice.reducer;
