import { useState, useEffect } from 'react'
import "./App.css"
function App() {
 const [temperature, setTemperature] = useState(0)
 const [stateMatter, setStateMatter] = useState("")
 const [color, setColor] = useState(null)
 const handleChange = (event) => {
 setTemperature(event.target.value)
 }
 useEffect(() => {
 if (temperature <= 0) {
 setStateMatter("stały")
 setColor("black")
 } else if (temperature >= 100) {
 setStateMatter("gazowy")
 setColor("lightgray")
 } else {
 setStateMatter("ciekły")
 setColor("blue")
 }
 }, [temperature])
 return (
 <div className="temperature">
 <label>Temperatura:&nbsp;
 <input
 type="text"
 onChange={handleChange}
 value={temperature}
 placeholder="Wprowadź temperaturę wody"
 />&nbsp;°C
 </label>
 <div className={stateMatter}>
 <p style={{ backgroundColor: color, padding: '10px' }}>
 W temperaturze {temperature} °C woda jest w stanie
 <span > {stateMatter}m.</span>
 </p>
 </div>
 </div>
 )
}
export default App