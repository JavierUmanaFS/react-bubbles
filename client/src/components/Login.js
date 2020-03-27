import React, { useState } from "react";
import { useHistory } from 'react-router-dom';
import { axiosWithAuth } from "../utils/axiosWithAuth";
import {
  Welcome,
  WelTitle,
  MainText,
  FormDiv
} from '../styled/styledComponents';


const Login = () => {
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route

  const [credentials, setCredentials] = useState({
    username: '',
    password: ''
  });

  const history = useHistory();
  
  const handleChange = e => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value
    });
  };

  const login = e => {
    e.preventDefault();

    axiosWithAuth()
    .post('/api/login', credentials)
    .then(res => {
      console.log('Looking for this', res);
      localStorage.setItem('token', JSON.stringify(res.data.payload));
      history.push('/protected');
    })
    .catch(err => console.log(err.response));
  };

  console.log(credentials)

  const {username, password } = credentials;

  return (
    <Welcome>
      <WelTitle>Welcome to the Bubble App!</WelTitle>
      <FormDiv>
         <form onSubmit={login} >
         <div>
         <label><MainText>Username: {' '}</MainText></label>
          <input 
          type="text"
          name='username'
          value={username}
          onChange={handleChange}
          />
          </div>
          <div>
          <label><MainText>Password: {' '}</MainText></label>
          <input 
          type="password"
          name='password'
          value={password}     
          onChange={handleChange}
          />
          </div>
          <div>
          <button>Login</button>
          </div>
        </form> 
      </FormDiv>
    </Welcome>
  );
};

export default Login;
