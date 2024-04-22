

function Sidebar({myStyle, setMyStyle, handleColorChange, handleSizeChange}){

    return (<div className="sidebar">
    <input id='color' defaultValue= {myStyle.color} onChange={handleColorChange} type="text" /> <br/>
    <input id='size' defaultValue={myStyle.fontSize} onChange={handleSizeChange} type="text" /> <br/>
    <button onClick={() =>{
      setMyStyle({
        color: "pink",
        fontSize: 20 + "px"
      })
    }}>Ustaw parametry tekstu na 20px i pink.</button>
    </div>)
}

export default Sidebar