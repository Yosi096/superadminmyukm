import React from 'react'
import { Link } from 'react-router-dom'

function UkmItem({ukms}) {
  return (
    <div className="ukm_card">
      <img src={ukms.logo_ukm} alt=""/>
      <div className="ukm_box">
        <h2 title={ukms.nama_ukm}>{ukms.nama_ukm}</h2>
        <h6>{ukms.jml_anggota_aktif} anggota</h6>
      </div>
        
      <div className="row_btn">
        <Link id="btn_buy" to={`/more/${ukms._id}`}>
          Detail
        </Link>
        <Link id="btn_view" to={`/delete/${ukms._id}`}>
          Hapus
        </Link>
      </div>
    </div>
  )
}

export default UkmItem
