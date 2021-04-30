import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { API_URL } from "../components/mainpages/utils/constants";

function AnnounApi() {
  const [announ, setAnnoun] = useState([])

  const getAnnoun = async () => {
    const res = await axios.get(`${API_URL}/api/v1/ukm/announcement/getAllAnnoun`)
    setAnnoun(res.data.data)
  }

  useEffect(()=>{
    getAnnoun()
  },[])
  
  return {
    announ: [announ, setAnnoun]
  }
}

export default AnnounApi