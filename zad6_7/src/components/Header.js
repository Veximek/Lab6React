

function Header({myStyle, myLikes}){
    

    return (<div className="header">
    <h1>Nagłówek</h1><p>Aktualny rozmiar czcionki: <strong>{myStyle.color}</strong></p>
    <p>Aktualny kolor czcionki: <strong>{myStyle.fontSize}</strong></p>
    <p>
    Liczba lajków: <strong>{myLikes.likes}</strong>
    </p>
    </div>)
}

export default Header