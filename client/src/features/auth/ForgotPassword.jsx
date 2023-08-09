import React, { useState } from 'react';
import { forgotPassUrl } from '../../api/Api';
import axios from 'axios';
import { LoginStyles } from './styles/Styling';
import {Box,Button,TextField,Typography} from '@mui/material';
import Styles from './styles/signUp.module.css';

const ForgotPassword = () => {
  const [email, setEmail] = useState();

  const handleSubmit = async () => {
    try {
      const response = await axios.post(forgotPassUrl(email));
      console.log('Forgot pass data --> ', response.data);
    } catch (error) {
      console.error('Forgot pass error --> ', error.response.data);

    }
  }

  return (
    <div Styles={LoginStyles.LoginMainStyle}>
      <Typography sx={LoginStyles.WelcText}>Enter your Email to Reset Password</Typography>
      <Box component="form" sx={Styles.SignUpForm}>
        <TextField
        sx={LoginStyles.InputStyles}
        label="Email"
        type='email'
        value={email}
        onChange={e => setEmail(e.target.value)}
        />

        <Button 
        variant='contained'
        sx={LoginStyles.ButtonStyles}
        onClick={handleSubmit}
        type='submit'
        
        >
        </Button>
      </Box>
    </div>
  )
}

export default ForgotPassword
