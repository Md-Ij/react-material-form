// import React from 'react'
// import { Box, Button, TextField, Typography } from '@mui/material'
// import { useState } from 'react'
// import Login from '@mui/icons-material/Login';
// import Register from '@mui/icons-material/HowToReg';
// const Auth = () => {
//   const [isSignup, setIsSignup] = useState(false)
//   const [input, setinput] = useState({
//     named: "",
//     email: '',
//     password:''
//   })
//   console.log(isSignup);
//   const onhandleChange = (e) => {
//     setinput((value) => ({
//       ...value,
//       [e.target.name]: e.target.value
//     }))
//   }
//   const handleSubmit = (e) => {
//     e.preventDefault()
//     console.log(input);
//   }
//   const resetState = (e) => {
//     setIsSignup(isSignup)
//     setinput({ named: "", email: "", password: '' })
//   }
//   return (
//     <>
//       <form action="#" onSubmit={handleSubmit} style={{cursor:'pointer'}}>
//         <Box display='flex' flexDirection={'column'} justifyContent='center' alignItems={'center'} margin='auto' marginTop={5} borderRadius={3} boxShadow='2px 2px 10px #ffb703' maxWidth={350} padding={3}  sx={{
//           ":hover": {
//             boxShadow:'1px 1px 20px #e63946',
//           },
//           transition: 'all .3s linear',
//           bgcolor: '#fff',
//           color:'#333',
//       }}>
//           <Typography variant='h3' py={2} textAlign='center'>{isSignup?"Register":"Login"}</Typography>

//           {isSignup&&<TextField  style={{outline:'none'}} variant='outlined' type='text' placeholder='Enter Your Name:' required margin='normal' label='Name' name='named' value={input.named} onChange={onhandleChange}/>}

//           <TextField variant='outlined' type='email' placeholder='Enter Your Email:' required margin='normal' label='Email' name='email' value={input.email} onChange={onhandleChange}/>

//           <TextField  variant='outlined' type='password' placeholder='Enter Your Password:' required  margin='normal' label='Password' name='password' value={input.password} onChange={onhandleChange}/>
//           <Button type='submit' variant='contained' color='info' onClick={resetState} sx={{ borderRadius: 1, marginTop: 2, }}  endIcon={!isSignup?<Login/>:<Register/>}> {isSignup?"Register":"Login"}</Button>

//           <Button color='info' endIcon={isSignup?<Login/>:<Register/>} onClick={()=>setIsSignup(!isSignup)} sx={{borderRadius:1,marginTop:2,}}>Change To {isSignup?"Login":"Register"}</Button>
//         </Box>
//         </form>
//     </>
//   )
// }

// export default Auth