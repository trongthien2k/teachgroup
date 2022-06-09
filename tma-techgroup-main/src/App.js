import React, {useState}  from 'react';
import Home from "./components/Home";
import Header from "./components/Header";
import "./App.css"

function App() {
  const [ message, setMessage ] = useState('')
  const [ status, setStatus ] = useState('')
  const [ classPage, setClassPage ] = useState('')
  const callbackFunction = (childData) => { 
    setMessage(childData)
  }
  const callbackclassPage = (data) => { 
    setClassPage(data)
  }
  const dataStatus = (data) => { 
    setStatus(data)
  }

  return (
    <div className="App">
      <div className={
      classPage === "about-us" || 
      classPage === "technologies" || 
      classPage === "experiencedInLarge"
      ? "backgroud-about-us" 
      : "backgroud-none"}>
        <img className="backgroud-image" src={require("./assets/images/AboutUs/backgroud-frame-overview.webp")} alt="image" />
      </div>

      <div className={
      classPage === "researchCenter" ||
      classPage === "TMASolutionsBinhDinh" ||
      classPage === "membersTwo" ||
      classPage === "dataScienceLab"
      ? "backgroud-about-us" 
      : "backgroud-none"}>
        <img className="backgroud-image" src={require("./assets/images/AboutUs/backgroud-frame-big.webp")} alt="image" />
      </div>

      <div className={classPage === "membersOne" ? "backgroud-members" : "backgroud-none"}>
        <img className="backgroud-image" src={require("./assets/images/Members/backgroud-members-one-frame.webp")} alt="image" />
      </div>
      <Header dataUrl={message} status={status}/>
      <Home parentCallback={callbackFunction} classPage={callbackclassPage} StatusCall={dataStatus}/>
    </div>
  );
}

export default App;