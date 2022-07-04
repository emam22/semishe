import React, { useContext, useState, useEffect } from 'react';
import './ItemDetail.css';
import ItemCount from '../itemCount';
import {Link} from 'react-router-dom';
import { CartContext } from '../Context/CartContext';


function ItemDetail ({id, title, price, image, description, stock, count, productInCart}) {
    const { addCart, cartItems } = useContext(CartContext);
    const [hasProduct, setHasProduct] = useState(false);
    
    useEffect(() => {
        setHasProduct(hasProductInCart());
    }, [cartItems])

    const getStock = (count) => {
        const quantity = count;
        addCart({id, title, price, image, description, stock, quantity})
    }
    
    const hasProductInCart = () => {
        const hasProduct = cartItems.find(item => item.id === id);

        if(hasProduct) return true;
        return false;
    }

    return (
        <div key={id} className="cardFlex">
            <img src={image} alt={title}/>
            <p className="price"> -  ${price}  -</p>
            <p className="description"> {description} </p>
            {
            !hasProduct
                ? <ItemCount className="itemCount" initial={0} stock={stock} getStock={getStock} onClick={() => addCart({id, title, price, image, description, stock, count})}/>    
                :<>                    
                <Link to="/cart" className='add-end'>
                <button className='add-end'>Terminar Compra</button>
                </Link>
                <p className='quantity'> Has elegido {count} unidades de semillas</p>
            </>
            }
        </div>       
        )
}
export default ItemDetail;