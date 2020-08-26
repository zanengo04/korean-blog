import React from 'react'

export default function Login() {
    return (
        <main class= 'loginMain'>
            <div class="loginBox">
                <h1>Login Here</h1>
                <form>
                    <p>Username</p>
                    <input type="text" name="username" placeholder="Enter Username" />
                    <p>Password</p>
                    <input type="text" name="password" placeholder="Enter Password" />
                    <input type="submit" name="submit" value="Login" />
                    <a href="#">Forgot your password?</a><br />
                    <a href="signup.html">Sign up</a>
                </form>
            </div>
            
        </main>
    )
}