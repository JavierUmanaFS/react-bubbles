import React, { useState } from "react";
import { useHistory } from 'react-router-dom';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import '../App.css';

const Login = () => {
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
  const [credentials, setCredentials] = useState({
    username:'',
    password:''
  }) 

  const history = useHistory();

  const handleChange = e => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value
    })
  };

  const login = e => {
    e.preventDefault();

    axiosWithAuth()
    .post('/api/login', credentials)
    .then(res => {
      localStorage.setItem('token', JSON.stringify(res.data.payload));
      history.push('/protected');
    })
    .catch(err => console.log(err))
  }
  return (
    <>
      <h1>Welcome to the Bubble App!</h1>
      <h2>Build a login page here</h2>
      <div>
        <form onSubmit={login}>
          <label>Username:{' '}
            <input 
            type="text"
            name='username'
            value={credentials.username}
            onChange={handleChange}
            />
          </label>
          <label>Password:{' '}
            <input 
            type="password"
            name='password'
            value={credentials.password}
            onChange={handleChange}
            />
          </label>
          <button>Log In</button>
        </form>
      </div>
    </>
  );
};

export default Login;
