import React from 'react'
import { Box, Button, TextField, Typography } from '@mui/material'
import { useState } from 'react'
import Login from '@mui/icons-material/Login';
import Register from '@mui/icons-material/HowToReg';
const Form = () => {
  const [isSignup, setIsSignup] = useState(false)
  // console.log(isSignup);
  const [input, setinput] = useState({
    named: "",
    email: "",
    password:""
  })
  const handleChange = (e) => {
    setinput((value) => ({
      ...value,
      [e.target.name]:e.target.value
    }))
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    // console.log(input);
  }
  const resetState = () => {
    setIsSignup(isSignup)
    setinput({
      named: "",
      email: "",
      password:""
    })
    // console.log(input);
  }
  return (
    <>
      <form action="#" onSubmit={handleSubmit}>
        <Box display={"flex"} flexDirection="column" justifyContent={"center"} alignItems="center" margin={"auto"} marginTop={5} bgcolor="#fff" maxWidth={350} padding={5} borderRadius={2} boxShadow="2px 2px 5px #ffb703" color={"#14213d"} sx={{
          ":hover": {
            boxShadow:'5px 5px 20px #00b4d8'
          },
          transition: 'all .2s linear',
          cursor:'pointer'
        }}>
          <Typography variant='h3'>{isSignup ? "Login" : "Register"} </Typography>

        {!isSignup&&  <TextField value={input.named} type={'name'} placeholder="Enter Your Name:" label="Name" required variant='outlined' name="named" margin='normal' onChange={handleChange} autoComplete={"off"} />}

          <TextField name='email' type={'email'} placeholder="Enter Your Email:" label="Email" required variant='outlined' margin='normal' value={input.email} onChange={handleChange} autoComplete={"off"} />

          <TextField type={'password'} placeholder="Enter Your Password:" label="Password" required variant='outlined' margin='normal' name='password' value={input.password} onChange={handleChange} />

          <Button endIcon={isSignup ? <Login /> : <Register />} type='submit' variant='contained' color='info' sx={{ mt: 2 }} onClick={resetState}>{isSignup ? "Login" : "Register"} </Button>

          <Button endIcon={!isSignup?<Login/>:<Register/>}  color='info' sx={{mt:2}} onClick={()=>setIsSignup(!isSignup)}>Change to {isSignup?"Register":"Login"} Page</Button>
        </Box>
      </form>
    </>
  )
}

export default Form