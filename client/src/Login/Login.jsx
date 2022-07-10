
import TextField from '@mui/material/TextField';
import React, { useState } from 'react';
import { Form, Body, Main, Logo } from './../SignUp/signupcss'
import './../SignUp/signup.css'
import Utils from '../utils';
import loginUtils from './index';
import Checkbox from '@mui/material/Checkbox';
import { Link } from 'react-router-dom';
import { useUsers } from '../Messages/contexts/userContext'
import { setCookie } from '../contexts/RequireAuth';

const Login = () => {
  const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
  const [data, setData] = useState({email: '', password: ''});
  // const { setIsLoggedIn } = useUsers() 

  const [values, setValues] = useState({
    password: "",
    showPassword: false,
  });
  const handleShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };


  const handleMouseDownPassword = (e) => {
    e.preventDefault();
  };

  const handlePasswordChange = (prop) => (e) => {
    setData({...data, password: e.target.value})
    setValues({ ...values, [prop]: e.target.value });
  };

  const onloginsubmit = e => {
    e.preventDefault()
    fetch("https://photocorner33.herokuapp.com/user/login", {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            email: data.email,
            password: data.password
        })
    }).then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.message === "Can continue"){
                // localStorage.setItem('token',JSON.stringify(data.token))
                setCookie('token', data.token, 3)
                window.location.replace('http://localhost:3030/home')
            }
            else if(data.message === "No token generated try logging in again"){
                window.alert("No token generated try logging in again")
            }
            else if(data.message === "Wrong login info"){
                window.alert("Login info incorrect")
            }
            
        })

}

  return (
    <>
      <Body className='loback text-black'>
        <Main>
          <Form className=' bg-slate-200 text-black' onLoad={Utils.onload} onSubmit={onloginsubmit}>
            <Logo><img src="./src/Home/Images/logo.png" alt="logo" /></Logo>
            <h1 className='text-black'>Log into Photo Corner</h1>
            <div className="w-full flex items-center justify-center">
              <TextField
                sx={{marginTop: 2, width: '100%', maxWidth: 300}}
                size="small"
                className="" label="Email"
                id="standard-input" variant="outlined"
                onChange={(e)=> setData({...data, email: e.target.value})}
                 type="email" placeholder="Enter your email" autoComplete="off" required/>
            </div>
            <div className="w-full flex items-center justify-center">
              <TextField className="mt-4"
              size="small" sx={{marginTop: 2, width: '100%', maxWidth: 300}}
               name='email' placeholder="Enter your passoward"
              id="standard-password-input" variant="outlined"
               label="Password" type={values.showPassword ? "text" : "password"}
                onChange={handlePasswordChange("password")}
                value={values.password} required />
            </div>
            <div className="label">
            <Checkbox {...label} onClick={handleShowPassword}
                onMouseDown={handleMouseDownPassword} type="checkbox" />
              <label className='text-black'>Show password</label>
            </div>
            <div className="bg-blue-600 p-2 px-5 cursor-pointer">
              <input type='submit' value='Login' />
            </div>

            <div className="text-black ">
              <a href="./">Forgot your password?</a>
            </div>
            <div className="flex w-full text-black items-center justify-center">
              <p>Don't have an account?</p>
              <Link to='/signup' className='text-blue-600 ml-2'>Sign Up</Link>
            </div>
          </Form>
        </Main>
      </Body>
    </>
  );
}

export default Login;
