import React, {useState, useEffect} from 'react'

import axios from 'axios';

const fetchData = async () => {
  try {
      const result = await axios.get('/login')
      return result
  } catch (error) {
      
  }
}
export default function Login() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [isLoggedIn, setIsLoggedIn] = useState(false)

    
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
          
      </main>
      
    );
}