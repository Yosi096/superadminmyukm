import React, { useEffect } from 'react';
import {BrowserRouter as Router} from 'react-router-dom'
import {DataProvider} from './GlobalState'

// import { useDispatch, useSelector } from "react-redux";
// import { dispatchLogin } from "./redux/actions/authAction";
// import axios from 'axios';
// import { API_URL } from "./components/mainpages/utils/constants";

import Header from './components/headers/Header'
import MainPages from "./components/mainpages/Pages";

function App() {
  // const dispatch = useDispatch()
  // const token = useSelector(state => state.token)
  // const auth = useSelector(state => state.auth)


  // useEffect(() => {
  //   const firstLogin = localStorage.getItem('firstLogin')
  //   if (firstLogin) {
  //     const getToken = async () => {
  //       const res = await axios.post(`${API_URL}/api/v1/users/refresh_token`, null)
  //       console.log(res)
  //       dispatch({type: 'GET_TOKEN', payload: res.data.token})
  //     }
  //     getToken()
  //   }
  // },[auth.isLogged, dispatch])

  // useEffect(() => {
  //   if (token) {
  //     const getUser = () => {
  //       dispatch(dispatchLogin())
  //     }
  //     getUser()
  //   }
  // },[token])

  return (
    <DataProvider>
      <Router>
      <div className="App">
        <Header/>
        <MainPages/>
      </div>
      </Router>
      </DataProvider>
  );
}

export default App;
