import { LuMilk } from "react-icons/lu";
import {FiX} from "react-icons/fi";
import {useState} from "react"
const Product = ({ product, onDelete }) => {
    const [zakupione,setZakupione] = useState(false)
    const textStyle = {
        'text-decoration': 'line-through'
      };

    return (
    <div className='product'>
    <div className='product-info'>
    <div className='input-name'>
    <LuMilk />
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