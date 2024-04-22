import './App.css';
import React from "react"
import { useState } from 'react';
import Header from './components/Header'
import Sidebar from './components/Sidebar';
import MainArea from './components/MainArea';
import Footer from './components/Footer'

function App() {
  const [myStyle, setMyStyle] = useState({
    color: "green",
    fontSize: 18+"px"
    })
    const [myLikes, setMyLikes] = useState({
      likes: 0
    })

function handleColorChange(e) {
  setMyStyle({
  ...myStyle,
  color: e.target.value
  })
  }{
  function handleSizeChange(e) {
    setMyStyle({
    ...myStyle,
    fontSize: e.target.value
    })
    }

return (
  
<div className="grid-parent">
  <Header myLikes={myLikes} myStyle={myStyle}/>
  <Sidebar myStyle={myStyle} setMyStyle={setMyStyle} handleColorChange={handleColorChange} handleSizeChange={handleSizeChange}/>
<MainArea myStyle={myStyle}/>
<Footer setMyStyle={setMyStyle} myStyle={myStyle} setMyLikes={setMyLikes} myLikes={myLikes}/>
</div>
)
}
}
export default App