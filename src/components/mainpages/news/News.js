import React,  { useContext } from 'react'
import { GlobalState } from "../../../GlobalState";
import NewsItem from '../utils/newsItem/NewsItem'
import Loading from '../utils/loading/Loading'

function News() {
  const state = useContext(GlobalState)
  const [news] = state.newsApi.news
  // console.log(news)
  return (
    <>
    <div className="news">
      {
        news.map(berita => {
          return <NewsItem key={berita._id} berita={berita}/>
        })
      }
    </div>
    {news.length === 0 && <Loading/>}
    </>
  )
}

export default News
