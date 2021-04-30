import React from 'react'
import { Link } from 'react-router-dom'

function NewsItem({berita}) {
  return (
    <div className="news_card">
      <img src={berita.foto_berita} alt=""/>
        <h2 title={berita.jdl_berita}>{berita.jdl_berita}</h2>
        <h4>{berita.deskripsi}</h4>

      <div className="rowbtn">
        <Link id="load_more" to={`/detail/${berita._id}`}>
          Selengkapnya >>>
        </Link>
      </div>

    </div>
  )
}

export default NewsItem
