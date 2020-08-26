import React from 'react'

export default class Register extends React.Component {
    constructor(props) {
      super(props);
      this.state = { 
          username:'',
          password:'',
          email:''
        };

        this.onSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event) {
        // const name = event.target.name;
        // const value = event.target.value;
    
        // this.setState({
        //   [name]: value
        // })
        this.setState({value: event.target.value});
      }

    handleSubmit(event) {
      event.preventDefault();
      // On submit of the form, send a POST request with the data to the server.
      fetch('/register', { 
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            username: this.state.username,
            password: this.state.password
          })
        })
        .then(res =>  res.json())
        .then(body => console.log(body));
    }
    render() {
      return (
        <main class= 'loginMain'>
            <div class="loginBox">
                <h1>Sign Up</h1>
                <form onSubmit={this.handleSubmit}>
                    <p>Username</p>
                    <input type="text" name="username" ref = 'username' placeholder="Enter Username" value={this.state.username} onChange={e => this.setState({ username: e.target.value })}/>
                    <p>Password</p>
                    <input type="text" name="password" ref = 'password' placeholder="Enter Password" value={this.state.password} onChange={e => this.setState({ password: e.target.value })}/>
                    <p>Enter Email</p>
                    <input type="text" name="email" placeholder="Enter Email" value={this.state.email} onChange={e => this.setState({ email: e.target.value })}/>
                    <input type="submit" name="submit" value="Sign Up" />
                </form>
            </div>
            
        </main>
        
      );
    }
  }


  
// export default function Register() {
//     return (
//         <main class= 'loginMain'>
//             <div class="loginBox">
//                 <h1>Sign Up</h1>
//                 <form>
//                     <p>Username</p>
//                     <input type="text" name="username" placeholder="Enter Username" />
//                     <p>Password</p>
//                     <input type="text" name="password" placeholder="Enter Password" />
//                     <p>Enter Password Again</p>
//                     <input type="text" name="password" placeholder="Enter Password" />
//                     <input type="submit" name="submit" value="Register" />
                
//                 </form>
//             </div>
        
//       </main>
//     )
// }