import React from "react"
import { useState } from 'react';

function Header(){
    const [myStyle, setMyStyle] = useState({
        color: "green",
        fontSize: 18+"px"
        })
        const [myLikes, setMyLikes] = useState({
            likes: 0
          })

    return (<div className="header">
    <h1>Nagłówek</h1><p>Aktualny rozmiar czcionki: <strong>{myStyle.color}</strong></p>
    <p>Aktualny kolor czcionki: <strong>{myStyle.fontSize}</strong></p>
    <p>
    Liczba lajków: <strong>{myLikes.likes}</strong>
    </p>
    </div>)
}

export default Header