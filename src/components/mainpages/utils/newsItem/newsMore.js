import React from 'react'
import { Link } from 'react-router-dom'

function NewsItem({berita}) {
  return (
    <div className="product_card">
      <img src={berita.foto_berita} alt=""/>
        <h2 title={berita.jdl_berita}>{berita.jdl_berita}</h2>
        <h4>{berita.deskripsi}</h4>

      <div className="product_box">
        <Link id="load_more" to={`detail/${berita._id}`}>
          <text>Selengkapnya</text>
        </Link>
      </div>

    </div>
  )
}

export default NewsItem