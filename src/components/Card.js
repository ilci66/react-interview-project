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
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp, faThumbsDown} from '@fortawesome/free-solid-svg-icons';

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
      <div className='like-dislike-container'>
        <div className='thumb-wrapper'>
          <FontAwesomeIcon className='thumb-icon' icon={faThumbsUp}></FontAwesomeIcon> 
          <p className='thumb-text'>{likes}</p>
        </div>
        <div className='thumb-wrapper'>
          <FontAwesomeIcon className='thumb-icon' icon={faThumbsDown}></FontAwesomeIcon> 
          <p  className='thumb-text'>{dislikes}</p>
        </div>
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
      {/* <button className='like-dislike-button' onClick={() => handleLikeDislike()}>
        {likeStatus}, <img src={thumb} className={`thumbs-up-svg ${likeStatus}-button`} alt="logo" />
      </button> */}
      <button className='delete-button' onClick={() => dispatch(deleteMovie(id))}>
        SUPPRIMER
      </button>
    </div>
  )
}

export default Card 