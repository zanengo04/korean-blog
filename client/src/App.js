import React from 'react';
import Footer from './components/Footer.js';
import Aside from './components/Aside.js';
import Main from './components/Main.js';
import Header from './components/Header.js';
function App() {
  return (
    <div class="grid-container">
      <Header />
      <Main />
      <Aside />
      <Footer />
    </div>
    
  );
}

export default App;
