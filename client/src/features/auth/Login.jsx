import React, {useState} from 'react';
import {loginUrl} from '../../api/Api';
import axios from 'axios';
import {Link, useNavigate} from 'react-router-dom';
import {TextField, Button,Typography,Box} from '@mui/material'

const Login = () => {
  const navigate = useNavigate();
  const initialValue = {
    email:  'favzy@gmail.com',
    password:  '',
  };

  const [data, setData] = useState (initialValue);

  const handleChange = async e => {
    e.preventDefault ();
    setData (prevState => ({
      ...prevState,
      [e.target.name]:  e.target.value,
    }));
  };

  const handleSubmit = async e => {
    e.preventDefault ();
    const userData = {
      email:  data.email,
      password:  data.password,
    };

    const response = await axios.post(loginUrl, userData);
    console.log ('BC res 1--> ', response);
    if (response.status === 200) {
      console.log ('BC res --> ', response.data);
    }
  };

  const handleNavigate = () => {
    navigate('/forgot-password', {state: {email:  data.email}})
  }

  const Styles ={
    FormStyle: {
      width: '70%',
      height: '30%',
      justifyContent:  'space-between',
      display:  'flex',
      alignItems:  'center',
      flexDirection: 'column',

    },
    InputStyles: {
      width: '80%',
    },
    TextFieldStyles: {
      width: '70%'
    },
    LoginMainStyle: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
      height: 'inherit',
      flexDirection: 'column',
      backgroundImage:'linear-gradient(to right,rgba(255,108,0,0),rgba(255,188,0,0.5))',

    },
    WelcText: {
      fontWeight: '700',
      fontSize: '25px',
      color: '#000',
      mb: '50px',
    },
    SpanStyles: {
      color: 'red'

    }
  }

  return (
    <Box sx={Styles.LoginMainStyle}>
      <Typography sx={Styles.WelcText}>Welcome Back <Box component='span'
      sx={Styles.SpanStyles}>Favour</Box></Typography>
      <Box component={'form'} onSubmit={handleSubmit} sx={Styles.FormStyle}>
        <Box sx={Styles.InputStyles}>
          <TextField
          sx={Styles.TextFieldStyles}
          value={data.email}
          name='email'
          onChange={handleChange}
          type='email'
          id='email'
          label='Email'
          variant='outlined'/>
          {/* <label htmlFor="">
            email: 
            <input
              value={data.email}
              name="email"
              onChange={handleChange}
              type="email"
              id='email'
              label='Email'
              variant = "outlined"
            />
          </label> */}

        </Box>
        <Box sx={Styles.InputStyles}>
          {/* <label htmlFor="">
            password: 
            <input
              value={data.password}
              name="password"
              onChange={handleChange}
              type="password"
            />
          </label> */}
           <TextField
           sx={Styles.TextFieldStyles}
          value={data.password}
          name='password'
          onChange={handleChange}
          type='password'
          id='password'
          label='Password'
          variant='outlined'/>
        </Box>
        <Box style={{width: '50%'}}>
          <Button sx={{fontSize: '20px',fontWeight: '700',color: 'black',
          backgroundColor: 'red',textTransfrom: 'none',width: '170px'}}
           variant="contained" type='submit'>Submit</Button>
          </Box>
      </Box>
      <Typography sx={{fontWeight: '700',fontSize: '18px',color: 'gray'}} 
      onClick={handleNavigate}>Forgot Password</Typography>
    </Box>
  );
}

export default Login;
