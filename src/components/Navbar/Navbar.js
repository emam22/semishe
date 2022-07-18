import React, { useContext, useState, useEffect } from "react";
import './Navbar.css';
import { Link } from 'react-router-dom';
import { CartContext } from "../Context/CartContext";
   

export const Navbar = (props) => {
    const {children} = props;
    const { cartItems } = useContext(CartContext);
    const [cantProductsInCart, setCantProductos] = useState(0);

    useEffect(() => {
        setCantProductos(cartItems);
    }, [cartItems])

    return (
    <>
    <header>
        <div className="contenedor contenido-header">
                <Link className="link" to={`/`}><h1 className="logo__nombre">Semi<span className="logo__bold">SHE</span></h1></Link>
            <nav className="navegacion-principal">
                <Link className="link" to={`/nosotros`}> Nosotros </Link>
                <Link className="link" to={`/category/auto`}> Semillas Auto </Link>
                <Link className="link" to={`/category/mix`}> Semillas MixAuto </Link>
                <div> 
                    <Link className="nav-link" to={`/cart`}> {children} </Link>
                    <h4 className="display">{cantProductsInCart}</h4>               
                </div>                      
            </nav>            
        </div>                
    </header>
        {/* <Footer/>   */}
    </>  
    );
};
// const Footer = () => {
//     return (
//         <footer className="contenedor contenido-header">
//             <h1 className="logo__nombre">Semi<span className="logo__bold">SHE</span></h1>
//             <h2> Emanuel Mendez Dev © 2022.</h2>        
//         </footer>         
//     );
// };
