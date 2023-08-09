import React, {useState} from 'react';
import {registerUrl} from '../../api/Api';
import axios from 'axios';
import {Box,TextField,Button,Typography} from '@mui/material';
import styles from "./styles/signUp.module.css";
import {LoginStyles} from './styles/Styling'

const SignUp = () => {
  const initialValue = {
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    password: '',
    userName: '',
  };

  const [data, setData] = useState (initialValue);

  const handleChange = async e => {
    e.preventDefault ();
    setData (prevState => ({
        ...prevState,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async e => {
        e.preventDefault ();
        const userData = {
            userName: data.userName,
            firstName: data.firstName,
            lastName: data.lastName,
            email: data.email,
            phoneNumber: data.phoneNumber,
            password: data.password
        }

        const response = await axios.post(registerUrl, userData)

        if(response.status === 200){
            console.log('BC res --> ',response.data)
        }
    }

  return (
    <Box className={styles.SignUp}>
      <Typography sx={LoginStyles.WelcText}Register></Typography>
      <form className={styles.SignUpForm} onSubmit={handleSubmit}>
        <div className={styles.SignUpDiv1}>
        <TextField
        sx={LoginStyles.InputStyles}
          label="FirstName"
          value={data.firstName}
          name='FirstName'
          onChange={handleChange}
          type='text'
          variant='outlined'
          />
        </div>

        <div>

        <TextField
        sx={LoginStyles.InputStyles}
          label="lastName"
          value={data.lastName}
          name='lastName'
          onChange={handleChange}
          type='text'
          variant='outlined'
          />

        {/* <label htmlFor="">
        lastName: 
        <input value={data.lastName} 
        name="lastName"
         onChange={handleChange}
          type="text" />
        </label> */}
        </div>

        <div>
        <TextField
        sx={LoginStyles.InputStyles}
          label="email"
          value={data.email}
          name='email'
          onChange={handleChange}
          type='email'
          variant='outlined'
          />
        </div>

        <div>
        {/* <label htmlFor="">
            userName: 
            <input value={data.userName} 
            name="userName"
             onChange={handleChange} 
             type="text" />
        </label> */}

        <TextField
        sx={LoginStyles.InputStyles}
          label="userName"
          value={data.userName}
          name='userName'
          onChange={handleChange}
          type='text'
          variant='outlined'
          />
        </div>

        <div>
        <TextField
        sx={LoginStyles.InputStyles}
          label="phoneNumber"
          value={data.phoneNumber}
          name='phoneNumber'
          onChange={handleChange}
          type='text'
          variant='outlined'
          />
        </div>

        <div>
        <TextField
        sx={LoginStyles.InputStyles}
          label="password"
          value={data.password}
          name='password'
          onChange={handleChange}
          type='text'
          variant='outlined'
          />
        </div>

        <div>
          <Button variant='contained' sx={LoginStyles.ButtonStyles}
          type="submit">Submit</Button></div>
      </form>
    </Box>
  );
};

export default SignUp;
