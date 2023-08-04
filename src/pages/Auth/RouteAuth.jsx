import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'
import Login from './Login/Login'
import Register from './Register/Register'
import cl from './RouteAuth.module.scss'
import { Box } from '@mui/material'

import { instance } from '../../utils/axios'


const RouteAuth = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const location = useLocation();

  const handleSubmit = async (e) => {
    e.preventDefault()
    const userData = {
      email,
      password
    }
    const user = await instance.post('/auth/login', userData)
    console.log(user.data)
  }

  return (

    <div className={cl.routeAuth}>
      <div className='container'>
        <form className={cl.form} onSubmit={handleSubmit}>
          <Box
            display='flex'
            justifyContent='center'
            alignItems='center'
            flexDirection='column'
            maxWidth={640}
            margin='auto'
            padding={5}

            borderRadius={5}
            boxShadow={'5px 5px 10px rgba(157, 213, 88, 0.75)'}
          >
            {location.pathname === '/Login' ? <Login setEmail={setEmail} setPassword={setPassword} /> : location.pathname === '/Register' ? <Register /> : null}
          </Box>
        </form>
      </div>
    </div>
  )
}

export default RouteAuth