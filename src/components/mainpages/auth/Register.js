import React, {useState} from 'react'
import { API_URL } from "../utils/constants";
import logo from '../../../styles/logo.svg'
import axios from 'axios'
import { showErrMsg, showSuccessMsg } from '../utils/notification/Notification'
import {isEmpty, isEmail, isLength, isMatch} from '../utils/validation/Validation'

const initialState = {
    name: "",
    username: '',
    email: '',
    password: '',
    cf_password: '',
    err: '',
    success: ''
}

function Register() {
    const [user, setUser] = useState(initialState)

    const {name, email, username, password, cf_password, err, success} = user

    const handleChangeInput = e => {
        const {name, value} = e.target
        setUser({...user, [name]:value, err: '', success: ''})
    }

    const handleSubmit = async e => {
      e.preventDefault()
      if(isEmpty(name) || isEmpty(password) || isEmpty(username))
          return setUser({...user, err: "TIDAK BOLEH ADA YANG KOSONG.", success: ''})

      if(!isEmail(email))
          return setUser({...user, err: "FORMAT EMAIL TIDAK SESUAI.", success: ''})

      if(isLength(password))
          return setUser({...user, err: "jUMLAH KARAKTER PASSWORD HARUS >6.", success: ''})
      
      if(!isMatch(password, cf_password))
          return setUser({...user, err: "PASSWORD TIDAK SAMA.", success: ''})

      try {
          const res = await axios.post(`${API_URL}/api/v1/users/register-admin`, {
              name, email, password, username
          })

          setUser({...user, err: '', success: res.data.message})
      } catch (err) {
          err.response.data.message && 
          setUser({...user, err: err.response.data.message, success: ''})
      }
  }
    
    return (
        <div className="login_page">
            {err && showErrMsg(err)}
        {success && showSuccessMsg(success)}
        <div className="img">
             <img src={logo} alt=""/>
        </div>
        

        <form onSubmit={handleSubmit}>
            <div>
                <input type="text" placeholder="Nama" id="name"
                value={name} name="name" onChange={handleChangeInput} />
            </div>

            <div>
                <input type="text" placeholder="Username" id="username"
                value={username} name="username" onChange={handleChangeInput} />
            </div>

            <div>
                <input type="email" placeholder="Email" id="email"
                value={email} name="email" onChange={handleChangeInput} />
            </div>

            <div>
                <input type="password" placeholder="Kata Sandi" id="password"
                value={password} name="password" onChange={handleChangeInput} />
            </div>

            <div>
                <input type="password" placeholder="Kata Sandi" id="cf_password"
                value={cf_password} name="cf_password" onChange={handleChangeInput} />
            </div>

            <div>
                <button className="btn btn-dark w-100" type="submit" disabled={username && password ? false : true}>Daftar</button>
            </div>
        </form>
    </div>
    )
}

export default Register
