import React,  { useContext } from 'react'
import { GlobalState } from "../../../GlobalState";
import AnnounItem from '../utils/announItem/AnnounItem'

function Announ() {
  const state = useContext(GlobalState)
  const [announ] = state.announApi.announ
  return (
    <div className="news">
      {
        announ.map(announs => {
          return <AnnounItem key={announs._id} announs={announs}/>
        })
      }
    </div>
  )
}

export default Announ