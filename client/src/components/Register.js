import React from 'react'

export default function Register() {
    return (
        <main class= 'loginMain'>
            <div class="loginBox">
                <h1>Sign Up</h1>
                <form>
                    <p>Username</p>
                    <input type="text" name="username" placeholder="Enter Username" />
                    <p>Password</p>
                    <input type="text" name="password" placeholder="Enter Password" />
                    <p>Enter Password Again</p>
                    <input type="text" name="password" placeholder="Enter Password" />
                    <input type="submit" name="submit" value="Login" />
                
                </form>
            </div>
        
      </main>
    )
}
