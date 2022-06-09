import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
// import Banner from './components/Banner';
// import AboutUs from './components/AboutUs'
import "./i18n";
import "./assets/sass/common.scss"
// import Header from "./components/Header";
// import Home from "./components/HomePage";

ReactDOM.render(
  // <Suspense fallback="loading">
  //   <App />
  // </Suspense>,
  <React.StrictMode>
    
    <BrowserRouter>
    {/* <Header /> */}
    <App />
    {/* <Home /> */}
  </BrowserRouter>
</React.StrictMode>,
document.getElementById('root')
);
