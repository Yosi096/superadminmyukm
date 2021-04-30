import React, {useContext, useState, useEffect} from 'react'
import { useParams, Link } from 'react-router-dom'
import { GlobalState } from "../../../GlobalState";
import NewsItem from '../utils/newsItem/NewsItem'

function DetailNews() {
  const params = useParams()
  const state = useContext(GlobalState)
  const [news] = state.newsApi.news
  const [detailNews, setDetailNews] = useState([])

  useEffect(() => {
    if (params) {
      news.forEach(berita => {
        if(berita._id === params.id) setDetailNews(berita)
      })
    }
  },[params, news])

  console.log(detailNews)
  if(detailNews.length === 0) return null;
  return (
    <>
      <div className='detail'>
        <h2>{detailNews.jdl_berita}</h2>
        <img src={detailNews.foto_berita} alt=""/>
        <div className="box-detail">
          <h4>{detailNews.deskripsi}</h4>
        </div>
      </div>

      <div>
        <h2 id="pengumuman">Berita Lainnya</h2>
        <div className="news">
          {
            news.map(berita => {
              return berita.tipe === detailNews.tipe
              ? <NewsItem key={berita._id} berita={berita}/> : null
            })
          }
        </div>
      </div>
    </>
  )
}

export default DetailNews
