import React from 'react'
import { TextField, Button, Typography } from '@mui/material'
import cl from './Register.module.scss'

const Register = () => {
  return (
    <div className={cl.register}>
      <div className='container'>

        <div className={cl.form}>
          <Typography variant="h2" marginBottom={3} textAlign='center' fontFamily='Montserrat' >
            Регистрация
          </Typography>
          <Typography variant="body1" marginBottom={3} textAlign='center' fontFamily='Montserrat' >
            Введите данные для регистрации
          </Typography>
          <TextField fullWidth={true} margin='normal' id="outlined-basic" label="Name" variant="outlined" placeholder='Введите ваш Имя' />
          <TextField fullWidth={true} margin='normal' id="outlined-basic" label="Username" variant="outlined" placeholder='Введите ваш Username' />
          <TextField fullWidth={true} margin='normal' id="outlined-basic" label="Email" variant="outlined" placeholder='Введите ваш Email' />
          <TextField type='password' fullWidth={true} margin='normal' id="outlined-basic" label="Password" variant="outlined" placeholder='Введите ваш password' />
          <TextField type='password' fullWidth={true} margin='normal' id="outlined-basic" label="Repeat Password" variant="outlined" placeholder='Повторите ваш password' />
          <Button sx={{ fontFamily: 'Montserrat', width: '60%', marginBottom: 2, marginTop: 2 }} variant="contained" >Зарегестрироваться</Button>
          <Typography variant="body1" sx={{ fontFamily: 'Montserrat' }}  >У вас есть аккаунт?
            <span className={cl.span__register}>Войти</span>
          </Typography>
        </div>




      </div>
    </div>
  )
}

export default Register