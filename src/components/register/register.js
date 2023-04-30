import React from 'react'
import { useState } from 'react'
import "./register.css"
import axios from "axios"
import { useNavigate } from 'react-router-dom'

const Register = () => {
    const navigate=useNavigate()
    const[user, setUser]=useState({
        name :"",
        email:"",
        password:"",
        reEnterPassword:"",

    })
const handleChange=(e)=>{
    // console.log(e.target)
    const{name,value}=e.target
    // console.log(name)
    // console.log(value)
    setUser({
        ...user,
        [name]:value
    })
}

const register=()=>{
    const {name,email,password,reEnterPassword}=user;
    if(name && email && (password === reEnterPassword)){

        axios.post("http://localhost:9002/register",user)
        .then(res => {
            alert(res.data.message)
            
            navigate("/login")
        })
    }
    else{
        alert("invalid input")
    }
}
  return (
    <div className='register'>
        {/* {console.log("User",user)} */}
        <h2>Register</h2>
        <input type='text' name="name" value={user.name} onChange={handleChange} placeholder='enter your name'></input>
        <input type='text' name="email" value={user.email} onChange={handleChange} placeholder='enter your email'></input>
        <input type='text' name="password" value={user.password} onChange={handleChange} placeholder='enter your password'></input>
        <input type='text' name="reEnterPassword" value={user.reEnterPassword} onChange={handleChange} placeholder='Re-enter password'></input>
        <div className='button' onClick={register}>Registration</div>
        <div>or</div>
        <div className='button' onClick={
            ()=> navigate("/login")

        }>Login</div>
    </div>
  )
}

export default Register