import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react";

let gridType = ""
if (window.location.pathname === '/home'){
  gridType ="grid-container-other"
} else{
  gridType ="grid-container"
}

//NEED TO DO THIS LATER
const domain = process.env.domain
const clientId = process.env.clientID
ReactDOM.render(
  <Auth0Provider
    domain="dev-07bi53dk.us.auth0.com"
    clientId="mLEgGmNjO25kTGShMww36qu2rz1iYSKK"
    redirectUri={window.location.origin}
  >
    <App className ={gridType}/>
  </Auth0Provider>,
  document.getElementById("root")
);
