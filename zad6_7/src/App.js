import './App.css';
import React from "react"
import { useState } from 'react';
import Header from './components/Header'


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
  <Header/>
<div className="sidebar">
<input id='color' defaultValue= {myStyle.color} onChange={handleColorChange} type="text" /> <br/>
<input id='size' defaultValue={myStyle.fontSize} onChange={handleSizeChange} type="text" /> <br/>
<button onClick={() =>{
  setMyStyle({
    color: "pink",
    fontSize: 20 + "px"
  })
}}>Ustaw parametry tekstu na 20px i pink.</button>
</div>
<div className="main-area" style={myStyle}>
<p>Szkielety programistyczne w aplikacjach internetowych: Node, MongoDB, Express, React.</p>
</div>
<footer className="footer">
<p>
Stopka <button onClick={()=>
{
  setMyStyle({
    ...myStyle,
    fontSize: 30 + "px"
  })
}
}>Ustaw parametry tekstu na 30px, a kolor pozostaw bez zmian.</button>
</p>
<p>
<button onClick={()=>{
  setMyLikes({
    likes: myLikes.likes+1
  })
}}>Polub tę stronę!</button>
</p>
</footer>
</div>
)
}
}
export default App