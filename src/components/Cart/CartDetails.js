import React, { useContext } from 'react';
import './CartDetails.css';
import { CartContext } from '../Context/CartContext';
import portal from '../Error/img24.png';
import { Link } from 'react-router-dom';
import { BsCartX, BsCashCoin, BsCurrencyBitcoin } from "react-icons/bs";
import { MdOutlinePayment, MdOutlineQrCode2 } from "react-icons/md";
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { db } from '../../firebase/firebaseConfig';
import { CartItemList } from './CartItemList';

export const CartDetails = () => {
    
    const {cartItems, vaciarCarrito, total} = useContext(CartContext);

    const handleClick = () => { 
        const orden = {
            buyer : {
                nombre : "Berlin",
                telefono : "4545454545",
                email : "berlin@gmail.com"
            },
            items : cartItems,
            date : serverTimestamp(),
            total : total            
        }    
        const ordenesCollection = collection(db, "ordenes")
        const pedido = addDoc(ordenesCollection,orden)

        pedido
        .then(res=>{
            console.log(res.id)
        })
    }
    
    console.log(cartItems)

    return (
    <section className="order-list">     
            {
            cartItems
            ?<>
                <CartItemList/>
                <section className="finished">            
                <button className="empty" onClick={vaciarCarrito}><BsCartX/></button>
                <p>Total : ${total}</p>
                <button className="btn420, send" onClick={handleClick}><MdOutlinePayment/><BsCashCoin/><BsCurrencyBitcoin/><MdOutlineQrCode2/></button>
                </section>
             </>      
            :<section className="order-empty">
                <h2>No has selecionado ningun producto</h2>
                <p>Vuelve por el portal</p>
                <Link to={`/`}><img className="img-portal" src={portal} alt="portal" /></Link>
            </section>
            }
        
    </section>
    )
}
