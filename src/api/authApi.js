import axios from 'axios'
import { API_URL } from "../components/mainpages/utils/constants"

export const postDataAPI = async (url, post, token) => {
  const res = await axios.post(`${API_URL}/api/v1/users/${url}`, post, {
    headers: { Authorization: token }
  })
  return res;
}