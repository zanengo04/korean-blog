import React from 'react';
import Footer from './components/Footer.js';
import Aside from './components/Aside.js';
import Main from './components/Main.js';
import Header from './components/Header.js';
import About from './components/About'
import Hangeul from './components/Hangeul'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
function App() {
  return (
    <Router>
      <div class="grid-container">
        <Header />
        <Route path="/" component={Main} />
        <Route path="/about" component={About} />
        <Route path="/typing-1" component={Hangeul} />
        <Aside />
        <Footer />
      </div>
    </Router>
    
    
  );
}

export default App;
