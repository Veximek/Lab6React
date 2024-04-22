function Footer({setMyStyle, myStyle, setMyLikes, myLikes}){
    return (<footer className="footer">
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
    </footer>)
}

export default Footer