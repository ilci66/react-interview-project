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
      state.movies.forEach((movie) => { 
        if(movie.id === action.payload) {
          if(!movie.liked && movie.disliked) {
            movie.liked = true;
            movie.disliked = false;
            movie.likes += 1;
            movie.dislikes -= 1;
          // } else if(!movie.liked) {
          } else if(!movie.liked && !movie.disliked) {
            movie.liked = true;
            movie.likes += 1;
          } else if (movie.liked) {
            movie.liked = false;
            movie.likes -= 1;
          }
        }
      });
    },
    dislike: (state, action) => {
      state.movies.forEach((movie) => { 
        if(movie.id === action.payload) { 
          if (movie.liked && !movie.disliked) {
            movie.liked = false;
            movie.disliked = true;
            movie.likes -= 1;
            movie.dislikes += 1;
          } else if(!movie.disliked && !movie.liked) {
            movie.disliked = true;
            movie.dislikes += 1;
          } else if (movie.disliked) {
            movie.disliked = false;
            movie.dislikes -= 1;
          }
        }
      });
    },
    deleteMovie: (state, action) => {
      state.movies = state.movies.filter((movie) => movie.id !== action.payload);
    },
    setFilter: (state, action) => {
      if(state.filterCategory !== action.payload) {
        state.filterCategory = action.payload;
        state.page = 1;
      } else {
        return;
      }
    },
    setItemPerPage: (state, action) => {
      if(state.page !== 1) {
        state.page = 1
      }
      state.iPP = action.payload;
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
    },
    previousPage: (state) => {
      if(state.page === 1) {
        return
      } else {
        state.page -= 1;
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
        let toSave = action.payload.map(i => i = {...i,liked: false, disliked: false})

        state.movies = toSave;
      });
  },
});


export const { 
  like, 
  dislike, 
  deleteMovie, 
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

export default moviesSlice.reducer;
