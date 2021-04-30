import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { API_URL } from "../components/mainpages/utils/constants";

function Ukm() {
  const [ukm, setUkm] = useState([])

  const getAnnoun = async () => {
    const res = await axios.get(`${API_URL}/api/v1/ukm/profileUkm/getProfileUkmForUser`)
    setUkm(res.data.data)
  }

  useEffect(()=>{
    getAnnoun()
  },[])
  
  return {
    ukm: [ukm, setUkm]
  }
}

export default Ukm