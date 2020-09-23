import React, {useState} from 'react'

export default function Register() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')

    const handleSubmit= (e) => {
      e.preventDefault();
      fetch('/register', { 
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            username: username,
            password: password,
            email: email,
          })
        })
        .then(res =>  res.json())
        .then(body => console.log(body));
    }
    return (
      <main class= 'loginMain'>
          <div class="loginBox">
              <h1>Sign Up</h1>
              <form onSubmit={handleSubmit}>
                  <p>Username</p>
                  <input type="text" name="username"
                    placeholder="Enter Username" value={username} 
                    onChange={e => setUsername(e.target.value)}/>
                  <p>Password</p>
                  <input type="text" name="password"
                  placeholder="Enter Password" value={password} 
                  onChange={e => setPassword(e.target.value)}/>
                  <p>Enter Email</p>
                  <input type="text" name="email" placeholder="Enter Email" 
                  value={email} 
                  onChange={e => setEmail(e.target.value)}/>
                  <input type="submit" name="submit" value="Sign Up" />
              </form>
          </div>
          
      </main>
      
    );
  }
