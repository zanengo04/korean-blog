import React from 'react';
import Footer from './components/Footer.js';
import Aside from './components/Aside.js';
import Main from './components/Main.js';
import Header from './components/Header.js';
import About from './components/About'
import Hangeul from './components/Hangeul'
import Typing from './components/Typing'
import Register from './components/Register'
import Login from './components/Login'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import { withRouter } from 'react-router-dom';
function App() {
  return (
    <Router>
      <div class="grid-container">
        <Header />
        <Switch>
          <Route exact path="/" component={Main} />
          <Route path="/about" component={About} />
          <Route path="/typing-hangeul" component={Hangeul} />
          <Route path="/typing" component={Typing} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          
        </Switch>
        <Aside />
        <Footer />
      </div>
    </Router>
  )
}

export default App;
