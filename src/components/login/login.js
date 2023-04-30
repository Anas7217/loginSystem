import React from 'react'
import { useState } from 'react'
import "./login.css"
import axios from "axios"
import { useNavigate } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'



const Login = ({ setLoginUser }) => {

    const navigate = useNavigate()

    const [user, setUser] = useState({

        email: "",
        password: "",


    })

    const handleChange = (e) => {
        // console.log(e.target)
        const { name, value } = e.target
        // console.log(name)
        // console.log(value)
        setUser({
            ...user,
            [name]: value
        })
    }
    const login=()=>{
        axios.post("http://localhost:9002/login",user)
        .then((res)=> {
            alert(res.data.message)
            setLoginUser(res.data.user)
            navigate("/")
        });

    }

    // try {
    //     const login = await axios.post('http://localhost:9002/login', user)
    //     console.log(res.data)
    //   } catch (e) {
    //     alert(e)
    //   }


      // const login = async (e) => {
      //   e.preventDefault()
      //   // const post = { userName: userName }
      //   try {
      //     const res = await axios.post('http://localhost:9002/login', user)
      //     alert(res.data.message)
      //     setLoginUser(res.data.user)
      //     navigate("/")
      //   } catch (e) {
      //     alert(e)
      //   }
      // }
    

    

    

   

    return (
        <div className='login'>
            <h2>Login</h2>
            <input type='text' name="email" value={user.email} onChange={handleChange} placeholder='Enter your email'></input>
            <input type='password' name="password" value={user.password} onChange={handleChange} placeholder='Enter your password'></input>
            <div className='button' onClick={login}>Login</div>
            <div>or</div>
            <div className='button' onClick={
                () => {
                    navigate('/register')
                }
            }>Register</div>
        </div>
    )
}

export default Login