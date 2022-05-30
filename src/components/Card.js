import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import {
  like,
  dislike,
  deleteMovie,
  getStatus,
  selectMovies,
  toggleStatus
} from '../slice/movieSlice';

const Card = ({ id, title, category, likes, dislikes}) => {
  // const movies = useSelector(selectMovies);
  const status = useSelector(getStatus);
  const dispatch = useDispatch();

  return (
    <div className="card" >
      <p>id: {id}</p>
      <p>title: {title}</p>
      <p>category: {category}</p>
      <p>likes: {likes}</p>
      <p>dislikes: {dislikes}</p>
      <button onClick={() => console.log(id)}>
        test
      </button>
      <button 
        aria-label="Like movie"
        onClick={() => dispatch(like(id))}
      >
        like, {status}
      </button>
      <button onClick={() => dispatch(toggleStatus())}>
        {status}
      </button>
    </div>
  )
}

export default Card