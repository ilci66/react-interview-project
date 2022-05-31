import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getMovies } from "../api";

const initialState = {
  movies: [],
  status: 'idle',
  filterCategory: "",
  iPP: 12,
  page: 1,
};


export const getMoviesAsync = createAsyncThunk(
  'movies/fetchAllMovies',
  async () => {
    const response = await getMovies();
    return response;
  }
);

export const moviesSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    like: (state, action) => {
      state.movies.map((movie) => { 
        if(movie.id === action.payload) {
          movie.likes += 1;
        }
      });
    },
    dislike: (state, action) => {
      state.movies.map((movie) => { 
        if(movie.id === action.payload) { 
          movie.dislikes += 1;
        }
      });
    },
    deleteMovie: (state, action) => {
      state.movies = state.movies.filter((movie) => movie.id !== action.payload);
    },
    toggleStatus: (state) => {
      if(state.status === "idle") state.status = "loading";
      else { state.status = "idle" }
    },
    getAllMovies: (state) => {
      return state.movies;
    },
    setFilter: (state, action) => {
      if(state.filterCategory !== action.payload) {
        state.filterCategory = action.payload;
        state.page = 1;
        // console.log("filter in state ==> ", state.filterCategory)
      } else {
        return;
      }
    },
    setItemPerPage: (state, action) => {
      state.iPP = action.payload;
      console.log("ipp in state =>", state.ipp)
    },
    nextPage: (state) => {
      const { movies, page, iPP, filterCategory } = state;
      
      if(filterCategory === "") {
        if(movies.length - page*iPP <= 0) {
          return
        }
      } else {
        if(movies.filter(m => m.category === filterCategory).length - page*iPP <= 0) {
          return
        }
      }
      state.page += 1;
      console.log("page in state ==> ",state.page)
    },
    previousPage: (state) => {
      if(state.page === 1) {
        return
      } else {
        state.page -= 1;
        console.log("page in state ==> ",state.page)
      }
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(getMoviesAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getMoviesAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        // console.log("payload in fulfilled", action.payload)
        state.movies = action.payload;
        // console.log("state after fulfilled", state.movies)
      });
  },
});


export const { 
  like, 
  dislike, 
  deleteMovie, 
  toggleStatus, 
  getAllMovies, 
  setFilter, 
  setItemPerPage, 
  setPage,
  nextPage,
  previousPage 
} = moviesSlice.actions;

export const selectMovies = (state) => state.movies.movies;
export const selectFilter = (state) => state.movies.filterCategory;
export const selectPage = (state) => state.movies.page;
export const selectIPP = (state) => state.movies.iPP;

export const getStatus = (state) => state.movies.status;

// // Trying writing thunk by hand
// export const incrementIfOdd = (amount) => (dispatch, getState) => {
//   const currentMovie = selectMovies(getState());
//   console.log("this is the current movie picked ",currentMovie)
// };

export default moviesSlice.reducer;
