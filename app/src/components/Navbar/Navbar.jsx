import { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import CartWidget from './CartWidget';
import CartContext from "../../context/CartContext";
import styles from "./NavBar.module.css";
import { getCartQuantity } from "../../utils";

const Navbar = () => {
    const { cart } = useContext(CartContext);
    const quantity = getCartQuantity(cart)
    return (
        <nav className={` ${styles.navbar} navbar navbar-expand-lg navbar-dark p-3`}>
            <div className="container-fluid">
                <h1 className="navbar-brand">
                    <Link className="nav-link" to="/">Tecno Gamer </Link>
                </h1>

                <ul className="navbar-nav me-middle">
                    <li className="nav-item me-2">
                        <NavLink className={`nav-link ${styles.navlink}`} to="/category/teclados">Teclados</NavLink>
                    </li>
                    <li className="nav-item me-2">
                        <NavLink className={`nav-link ${styles.navlink}`} to="/category/pcs">PCS Armadas</NavLink>
                    </li>
                    <li className="nav-item me-2">
                        <NavLink className={`nav-link ${styles.navlink}`} to="/category/monitores">Monitores</NavLink>
                    </li>
                </ul>
                <NavLink to={quantity ? "/cart" : "#"} className={`nav-link ${styles.navlink}`}>
                    <CartWidget />
                </NavLink>
            </div>
        </nav>
    )
}
export default Navbar;