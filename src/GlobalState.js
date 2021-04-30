import React, { createContext, useState , useEffect} from 'react'
import NewsApi from './api/NewsApi'
import AnnounApi from './api/AnnounApi'
import axios from 'axios'


import { API_URL } from "./components/mainpages/utils/constants";
import UkmApi from './api/Ukm';

export const GlobalState = createContext()


export const DataProvider = ({children}) =>{
    const [token, setToken] = useState(false)
    useEffect(() =>{
        const firstLogin = localStorage.getItem('firstLogin')
        if(firstLogin){
            const refreshToken = async () =>{
                const res = await axios.post(`${API_URL}/api/v1/users/refresh_token`)
        
                setToken(res.data.token)
    
                setTimeout(() => {
                    refreshToken()
                }, 10 * 60 * 1000)
            }
            refreshToken()
        }
    },[])
   
    const state = {
        token: [token, setToken],
        newsApi: NewsApi(),
        announApi: AnnounApi(),
        ukmApi: UkmApi()
    }

    return (
        <GlobalState.Provider value={state}>
            {children}
        </GlobalState.Provider>
    )
}