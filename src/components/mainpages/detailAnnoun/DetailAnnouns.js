import React, {useContext, useState, useEffect} from 'react'
import { useParams, Link } from 'react-router-dom'
import { GlobalState } from "../../../GlobalState";
import AnnounItem from '../utils/announItem/AnnounItem'

function DetailAnnouns() {
  const params = useParams()
  const state = useContext(GlobalState)
  const [announ] = state.announApi.announ
  const [detailAnnoun, setDetailAnnoun] = useState([])

  useEffect(() => {
    if (params.id) {
      announ.forEach(announs => {
        if(announs._id === params.id) setDetailAnnoun(announs)
      })
    }
  },[params.id, announ])

  console.log(detailAnnoun)
  if(detailAnnoun.length === 0) return null;
  return (
    <>
      <div className='detail'>
          <h2>{detailAnnoun.jdl_pengumuman}</h2>
        <img src={detailAnnoun.foto_pengumuman} alt=""/>
        <div className="box-detail">
          <h4>{detailAnnoun.deskripsi_pn}</h4>
        </div>
      </div>

      <div>
        <h2 id="pengumuman">Pengumuman Lainnya</h2>
        <div className="news">
          {
            announ.map(announs => {
              return announs.tipe === detailAnnoun.tipe
              ? <AnnounItem key={announs._id} announs={announs}/> : null
            })
          }
        </div>
      </div>
    </>
  )
}

export default DetailAnnouns
