import React, {useContext} from 'react'
import { Link } from 'react-router-dom'
import { GlobalState } from '../../../GlobalState'
import Loading from '../utils/loading/Loading'
import UkmItem from '../utils/ukmItems/UkmItem'

function UKM() {
  const state = useContext(GlobalState)
  const [ukm] = state.ukmApi.ukm
  return (
    <>
    <div>
        <Link style={{
          color: '#9F0000',
          fontFamily: 'Calibri',
          fontWeight: 'bold',
          fontSize: 20,
          textAlign: 'right',
          letterSpacing: 2,
          overflow: 'hidden'

        }} to="/register"><p>TAMBAH AKUN UKM</p></Link>

        <div className="ukm">
          {
            ukm.map(ukms => {
              return <UkmItem key={ukms._id} ukms={ukms}/>
            })
          }
        </div>
        {ukm.length === 0 && <Loading/>}
    </div>
    </>
  )
}

export default UKM
