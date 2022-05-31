import React from 'react'
import { useDispatch } from 'react-redux';
import {
  like,
  dislike,
  deleteMovie,
} from '../slice/movieSlice';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp, faThumbsDown} from '@fortawesome/free-solid-svg-icons';

const Card = ({ id, title, category, likes, dislikes, liked, disliked}) => {
  const dispatch = useDispatch();


  return (
    <div className={`card ${category}`} >
      <p className='movie-title'>{title}</p>
      <p className='movie-category'>{category}</p>
      <div className='like-dislike-container'>
        <div className='thumb-wrapper'>
          <FontAwesomeIcon 
            onClick={() => dispatch(like(id))}
            className={`thumb-icon ${liked && "active-icon"}`} 
            icon={faThumbsUp} 
          />
          <p className='thumb-text'>{likes}</p>
        </div>
        <div className='thumb-wrapper'>
          <FontAwesomeIcon 
            onClick={() => dispatch(dislike(id))} 
            className={`thumb-icon ${disliked && "active-icon"}`} 
            icon={faThumbsDown} 
          /> 
          <p className='thumb-text'>{dislikes}</p>
        </div>
      </div>
      <button className='delete-button' onClick={() => dispatch(deleteMovie(id))}>
        SUPPRIMER
      </button>
    </div>
  )
}

export default Card 