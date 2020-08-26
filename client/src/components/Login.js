import React from 'react'

export default class Login extends React.Component {
    constructor(props) {
      super(props);
      this.state = { 
          username:'',
          password:'',
          email:''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event) {
        this.setState({value: event.target.value});
      }

    handleSubmit(event) {
      event.preventDefault();
      // On submit of the form, send a POST request with the data to the server.
      fetch('/login', { 
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            username: this.state.username,
            password: this.state.password,
            email: this.state.email
          })
        })
        .then(res =>  res.json())
        .then(body => console.log(body));
    }
    render() {
      return (
        <main class= 'loginMain'>
            <div class="loginBox">
                <h1>Login</h1>
                <form onSubmit={this.handleSubmit}>
                    <p>Username</p>
                    <input type="text" name="username" ref = 'username'
                     placeholder="Enter Username" value={this.state.username} 
                     onChange={e => this.setState({ username: e.target.value })}/>
                    <p>Password</p>
                    <input type="text" name="password" ref = 'password' 
                    placeholder="Enter Password" value={this.state.password} 
                    onChange={e => this.setState({ password: e.target.value })}/>
                    <input type="submit" name="submit" value="Login" />
                    <a href="#">Forgot your password?</a><br />
                    <a href="signup.html">Sign up</a>
                </form>
            </div>
            
        </main>
        
      );
    }
  }

// export default function Login() {
//     return (
//         <main class= 'loginMain'>
//             <div class="loginBox">
//                 <h1>Login Here</h1>
//                 <form>
//                     <p>Username</p>
//                     <input type="text" name="username" placeholder="Enter Username" />
//                     <p>Password</p>
//                     <input type="text" name="password" placeholder="Enter Password" />
//                     <input type="submit" name="submit" value="Login" />
//                     <a href="#">Forgot your password?</a><br />
//                     <a href="signup.html">Sign up</a>
//                 </form>
//             </div>
            
//         </main>
//     )
// }