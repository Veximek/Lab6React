import './Card.css'
import Card1 from "./Card1"
import Card2 from './Card2'
import Card3 from './Card3'
import Card4 from './Card4'
import Card from './Card'


function App() {


return (
<div>
<h1>Słynni informatycy</h1>

<Card name="Alan" surname="Turing" birth="1912" death="1954" duty="Matematyk" country="Anglia" />
<Card name="Nicolas" surname="Wirth" birth="1934" death="?" duty="Elektronik i Informatyk" country="Szwajcaria" />
<Card name="Dennis" surname="Ritchie" birth="1941" death="2011" duty="Matematyk, fizyk, informatyk" country="USA" />
<Card name="Bjarne" surname="Stroustrup" birth="1950" death="?" duty="Informatyk" country="Dania" />

{/* <Card1/>
<Card2/>
<Card3/>
<Card4/> */}
</div>
)
}
export default App