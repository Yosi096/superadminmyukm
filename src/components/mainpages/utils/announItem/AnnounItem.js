import React from 'react'
import { Link } from 'react-router-dom'
import BtnRender from '../newsItem/BtnRender'

function AnnounItem({announs}) {
  return (
    <div className="news_card">
      <img src={announs.foto_pengumuman} alt=""/>
        <h2 title={announs.jdl_pengumuman}>{announs.jdl_pengumuman}</h2>
        <h4>{announs.deskripsi_pn}</h4>

      <div className="rowbtn">
        <Link id="load_more" to={`/details/${announs._id}`}>
          Selengkapnya >>>
        </Link>
      </div>
    </div>
  )
}

export default AnnounItem
