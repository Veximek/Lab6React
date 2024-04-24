import {FiX} from "react-icons/fi";
import {useState} from "react"
import { GiMilkCarton, GiSlicedBread, GiShinyApple } from 'react-icons/gi'

const Product = ({ product, onDelete }) => {
    const [zakupione,setZakupione] = useState(false)
    const textStyle = {
        'text-decoration': 'line-through'
      };

    return (
    <div className='product'>
    <div className='product-info'>
    <div className='input-name'>
    {product.category === "diary" && <GiMilkCarton className='category'></GiMilkCarton> }
    {product.category === "bread" && <GiSlicedBread className='category'></GiSlicedBread> }
    {product.category === "fruits&vegetables" && <GiShinyApple className='category'></GiShinyApple> }

    <input type='checkbox' value="" required onChange={e => setZakupione(e.target.checked)} />
    </div>
    {!zakupione ? <p>{product.name}</p> : <p style={textStyle}>{product.name}</p>}
    <p>{product.quantity}</p>
    </div>
    <div className='product-icons'>
    <FiX onClick={() => onDelete(product.id)}></FiX>

    </div>
    </div>
    )
   }
   export default Product