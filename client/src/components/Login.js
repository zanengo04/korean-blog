import React, {useState, useEffect} from 'react'

import axios from 'axios';
import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';

const fetchData = async () => {
  try {
      const {data} = await axios.get('/login')
      return data
  } catch (error) {
      
  }
}
export default function Login() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    
    useEffect(()=>{
        const fetchAPI = async ()=>{
          setIsLoggedIn(await fetchData())
        }
        fetchAPI()
    },[])
    
    const handleSubmit = (e) => {
      e.preventDefault();
      fetch('/login', { 
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            username: username,
            password: password,
          })
        })
        .then(res => res.json())
        .then(body => console.log(body))
        .then(data =>console.log(data))
        ;
      }
      console.log(isLoggedIn)    
    return (
      <main class= 'loginMain'>
          <div class="loginBox">
              <h1>Login</h1>
              <form onSubmit={handleSubmit}>
                  <p>Username</p>
                  <input type="text" name="username"
                    placeholder="Enter Username" value={username} 
                    onChange={e => setUsername(e.target.value)}/>
                  <p>Password</p>
                  <input type="text" name="password"
                  placeholder="Enter Password" value={password} 
                  onChange={e => setPassword(e.target.value)}/>
                  <input type="submit" name="submit" value="Login" />
                  <a href="#">Forgot your password?</a><br />
                  <a href="signup.html">Sign up</a>
              </form>
          </div>
        <LoginButton />
        <LogoutButton />
      </main>
      
    );
}