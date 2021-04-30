import React from 'react'

const Photo = ({src, size}) => {
  return (
      <img src={src} alt="photo_profile" className={size}/>
  )
}

export default Photo