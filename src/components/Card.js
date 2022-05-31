import thumb from '../assets/thumbs-up.svg'
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
  const [likeStatus, setLikeStatus] = useState("like")
  const dispatch = useDispatch();

  const handleLikeDislike = () => {
    if(likeStatus === "like") {
      dispatch(like(id))
      setLikeStatus("dislike")
    } else if (likeStatus === "dislike") {
      dispatch(dislike(id))
      setLikeStatus("like")
    }
  }

  return (
    <div className={`card ${category}`} >
      {/* <p>id: {id}</p> */}
      <p className='movie-title'>{title}</p>
      <p className='movie-category'>{category}</p>
      <div className='like-dislike-numbers'>
        <img src={thumb} className="like-button" alt="logo" /> <p>{likes}</p>
        <img src={thumb} className="dislike-button" alt="logo" /><p>{dislikes} </p>
      </div>
      {/* <button onClick={() => console.log(id)}>
        test
      </button> */}
      {/* <button 
        aria-label="Like movie"
        onClick={() => dispatch(like(id))}
      >
        like, {status}
      </button> */}
      {/* <button onClick={() => dispatch(toggleStatus())}>
        Toggle Status: {status}
      </button> */}
      <button className='like-dislike-button' onClick={() => handleLikeDislike()}>
        {likeStatus}, <img src={thumb} className={`thumbs-up-svg ${likeStatus}-button`} alt="logo" />
      </button>
      <button className='delete-button' onClick={() => dispatch(deleteMovie(id))}>
        SUPPRIMER
      </button>
    </div>
  )
}

export default Card