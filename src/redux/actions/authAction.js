import ACTIONS from './index'
import axios from 'axios'
import { postDataAPI } from "../../api/authApi";
import { API_URL } from "../../components/mainpages/utils/constants";
const baseUrl =  "https://myukm.herokuapp.com/api/v1/users/infor"

export const dispatchLogin = () => {
    return {
        type: ACTIONS.LOGIN,
    }
}

export const fetchUser = async (token) => {
    const res = await axios.get(baseUrl, {
        headers: {Authorization: token}
    })
    return res
}

export const dispatchGetUser = (res) => {
    return {
        type: ACTIONS.GET_USER,
        payload: {
            user: res.data,
            isAdmin: res.data.role === "admin" ? true : false
        }
    }
}

export const login = (data) => async (dispatch) =>{
    try {
      const res = await postDataAPI("login-superadmin", data)
  
      dispatch({
        type: ACTIONS.LOGIN,
        payload: {
          token: res.data.token,
          user: res.data.user
        }
      })
  
      console.log(res.data.user)
      
      localStorage.setItem("firstLogin", true)
  
      dispatch({
        type: ACTIONS.LOGIN,
        payload: {
          success: res.data.message
        }
      })
  
    } catch (err) {
      dispatch({
        type: ACTIONS.LOGIN,
        payload: {
          // error: err.response.data.message
        }
      })
    }
  }

export const refreshToken = () => async (dispatch) => {
    const firstLogin = localStorage.getItem("firstLogin")
    if (firstLogin) {      
      try {
        const res = await postDataAPI('refresh_token')
        dispatch({
          type: ACTIONS.AUTH,
          payload: {
            token: res.data.token,
            user: res.data.user
          }
        })
  
        dispatch({type: ACTIONS.ALERT, payload: {}})
        
      } catch (err) {
        dispatch({
          type: ACTIONS.ALERT,
          payload: {
            error: err.response.data.message
          }
        })
      }
    }
  }