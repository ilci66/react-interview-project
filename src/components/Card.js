import React from 'react'

const Card = ({ id,title,category,likes,dislikes}) => {
  return (
    <div>
        <p>id: {id}</p>
        <p>title: {title}</p>
        <p>category: {category}</p>
        <p>likes: {likes}</p>
        <p>dislikes: {dislikes}</p>
    </div>
  )
}

export default Card