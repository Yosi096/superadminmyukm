import { API_URL } from "../utils/constants";
import logo from '../../../styles/logo.svg'
import React, {useState, useEffect} from 'react'
import { Link, useHistory } from 'react-router-dom'
import axios from 'axios'
import { showErrMsg, showSuccessMsg } from '../utils/notification/Notification'
import { dispatchLogin } from '../../../redux/actions/authAction'
import {useDispatch, useSelector} from 'react-redux'

const initialState = {
    username: '',
    password: '',
    err: '',
    success: ''
}

function Login() {
    const [user, setUser] = useState(initialState)
    const {username, password, err, success} = user
    const dispatch = useDispatch()
    const history = useHistory()
    const { auth } = useSelector(state => state)

    useEffect(() => {
        if (auth.token) history.push("/")     
      }, [auth.token, history])

    const handleChangeInput = e => {
        const {name, value} = e.target
        setUser({...user, [name]:value, err: '', success: ''})
    }


    const handleSubmit = async e => {
        e.preventDefault()
        try {
            const res = await axios.post(`${API_URL}/api/v1/users/login-superadmin`, {username, password})
            console.log(res)
            setUser({...user, err: '', success: res.data.message})

            localStorage.setItem('firstLogin', true)
            dispatch(dispatchLogin())
            history.push("/")

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
                <input type="text" placeholder="Nama Pengguna" id="username"
                value={username} name="username" onChange={handleChangeInput} />
            </div>

            <div>
                <input type="password" placeholder="Kata Sandi" id="password"
                value={password} name="password" onChange={handleChangeInput} />
            </div>

            <div className="forgot-password text-right">
                <Link to="/user/forgot_password">Lupa kata sandi?</Link>
            </div>

            <div>
                <button className="btn btn-dark w-100" type="submit" disabled={username && password ? false : true}>Masuk</button>
            </div>

            {/* <div className="forgot-password text-right">
                <Link to="/register">Register</Link>
            </div> */}
        </form>
    </div>
    )
}

export default Login
