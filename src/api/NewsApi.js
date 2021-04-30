import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { API_URL } from "../components/mainpages/utils/constants";

function NewsApi() {
  const [news, setNews] = useState([])

  const getNews = async () => {
    const res = await axios.get(`${API_URL}/api/v1/ukm/news/getAllNews`)
    setNews(res.data.data)
  }

  useEffect(()=>{
    getNews()
  },[])
  
  return {
    news: [news, setNews]
  }
}

export default NewsApi