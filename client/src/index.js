import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

let gridType = ""
if (window.location.pathname === '/typing' || window.location.pathname === '/typing-hangeul'){
  gridType ="grid-container-other"
} else{
  gridType ="grid-container"
}

ReactDOM.render(
  <App className ={gridType}/>,
  document.getElementById('root')
);

