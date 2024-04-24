import { useState } from "react"
import './App.css'

function App() {
  const [result, setResult] = useState(null)
  const [input1, setInput1] = useState(null)
  const [input2, setInput2] = useState(null)
  const [action, setAction] = useState(null)
  const calculate = (e) => {
  let res = eval(`${input1} ${e.target.innerHTML} ${input2}`).toFixed(2)
  setResult(res)
  setAction(e.target.value)
  }
  const firstInput = (e) => {
  let value1 = e.target.value
  setInput1(value1)
  }
  const secondInput = (e) => {
  let value2 = e.target.value
  setInput2(value2)
  }
  return (
  <div className="App">
  <h1>Kalkulator czterodziałaniowy</h1>
  <div>
  <span>
  <input
  type="number"
  onChange={firstInput}
  style={{ width: "5rem", height: "2rem", margin: "0.5rem" }}
  />
  </span>
  <span>
  <input
  type="number"
  onChange={secondInput}
  style={{ width: "5rem", height: "2rem", margin: "0.5rem" }}
  />
  </span>
  </div>
  <div style={{ margin: "2rem" }}>
  <button onClick={calculate} value="Suma" style={{ margin: "0.3rem", width: "3rem", height: "2rem" }}>
  +
  </button>
  <button onClick={calculate} value="Różnica" style={{ margin: "0.3rem", width: "3rem", height: "2rem" }}>
  -
  </button>
  <button onClick={calculate} value="Iloraz" style={{ margin: "0.3rem", width: "3rem", height: "2rem" }}>
  *</button>
 <button onClick={calculate} value="Iloczyn" style={{ margin: "0.3rem", width: "3rem", height: "2rem" }}>
 /
 </button>
 </div>
 <h4>{action}: {result}</h4>
 </div>
 )
}
export default App