import React, {useState} from 'react'

export default function Login() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')



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
        .then(res =>  res.json())
        .then(body => console.log(body));
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