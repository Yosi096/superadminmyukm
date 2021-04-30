import React, {useContext, useState, useEffect} from 'react'
import { useParams, Link } from 'react-router-dom'
import { GlobalState } from "../../../GlobalState";
import UkmItem from '../utils/ukmItems/UkmItem'

function DetailUkm() {
  const params = useParams()
  const state = useContext(GlobalState)
  const [ukm] = state.ukmApi.ukm
  const [detailUkm, setDetailUkm] = useState([])

  useEffect(() => {
    if (params.id) {
      ukm.forEach(ukms => {
        if(ukms._id === params.id) setDetailUkm(ukms)
      })
    }
  },[params.id, ukm])

  console.log(detailUkm)
  if(detailUkm.length === 0) return null;
  return (
    <>
      <div className='detailUKM'>
          <h2>{detailUkm.nama_ukm}</h2>
        <img src={detailUkm.logo_ukm} alt=""/>
        <div className="row-btn">
          <p id="data">Tahun Berdiri : {detailUkm.thn_berdiri}</p>
          <p id="data1">Kategori : {detailUkm.kategori_ukm}</p>
        </div>
        <div className="row-btn">
          <p id="data">Jumlah Anggota : {detailUkm.jml_anggota_alumni}</p>
          <p id="data1">Jumlah Alumni : {detailUkm.jml_anggota_aktif}</p>
        </div>
        
        <div>
        <h4>Ketua UKM :{detailUkm.pj_ukm}</h4>
          <h4>Pembimbing UKM : {detailUkm.pembimbing_ukm}</h4>
          <h4>Penanggung Jawab : {detailUkm.nama_pelatih}</h4>
          <h4>Pelatih : {detailUkm.nama_pelatih}</h4>
          <h3>Sejarah</h3>
          <h5>{detailUkm.isiSejarah}</h5>
          <h3>Prestasi</h3>
          <h5>{detailUkm.isiPrestasi}</h5>
          <h3>Jadwal Rutin</h3>
          <h5>{detailUkm.isiKegiatan}</h5>
        </div>
      </div>

      <div className="datas">
        <h2>UKM Lainnya</h2>
        <div className="ukm">
          {
            ukm.map(ukms => {
              return ukms.tipe === detailUkm.tipe
              ? <UkmItem key={ukms._id} ukms={ukms}/> : null
            })
          }
        </div>
      </div>
    </>
  )
}

export default DetailUkm
