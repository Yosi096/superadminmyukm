import React from 'react'
import { Link } from 'react-router-dom'

function BtnRender({berita}) {
  return (
    <div className="row_btn">
        <Link id="load_more" to={`/detail/${berita._id}`}>
          Selengkapnya >>>
        </Link>
      </div>
  )
}

export default BtnRender
