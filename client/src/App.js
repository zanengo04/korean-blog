import React from 'react';
import Footer from './components/Footer.js';
import Aside from './components/Aside.js';
import Main from './components/Main.js';
import Header from './components/Header.js';
import Hangeul from './components/Hangeul'
import Typing from './components/Typing'
import Register from './components/Register'
import Login from './components/Login'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import SignIn from './components/SignIn.js';
import KoreanAlphabet from './components/Pages/Alphabet';

function HideAside(){
  if (window.location.pathname === '/register' || window.location.pathname === '/login'
  || window.location.pathname === '/typing' || window.location.pathname === '/typing-hangeul'
  || window.location.pathname === '/blog'){
    return null
  } else{
    return <Aside />
  }
}

function App({className}) {
  return (
    <Router>
      <div className={className}>
        <Header />
        <Switch>
          <Route exact path="/" component={Main} />
          <Route path="/about" component={SignIn} />
          <Route path="/typing-hangeul" component={Hangeul} />
          <Route path="/typing" component={Typing} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/alphabet" component={KoreanAlphabet} />
          
        </Switch>
        {HideAside()}
        
        <Footer />
      </div>
      
    </Router>
    
  )
}

export default App;
