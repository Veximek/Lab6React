

const Card = (props)=>{
    const link = props.name.toLowerCase() + "_" + props.surname.toLowerCase()

    return     (
    <div className="Card">
    <h2>{props.name} {props.surname}</h2>
    <img src={`https://mdz.cs.pollub.pl/ai/${link}.jpg`} alt={`${props.name} ${props.surname}`} />
    <p>{props.birthday} - {props.death}</p>
    <p>{props.duty}</p>
    <p>{props.country}</p>
    </div>);
    }
    
    export default Card