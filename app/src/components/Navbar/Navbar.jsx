import { Link, NavLink } from 'react-router-dom';
import CartWidget from './CartWidget';
import styles from "./NavBar.module.css";
const Navbar = () => {
    return (
        <nav className={` ${styles.navbar} navbar navbar-expand-lg navbar-dark p-3`}>
            <div className="container-fluid">
                <h1 className="navbar-brand">
                    <Link className="nav-link" to="/">Tiendita</Link>
                </h1>

                <ul className="navbar-nav me-middle">
                    <li className="nav-item me-2">
                        <NavLink className={`nav-link ${styles.navlink}`} to="/category/teclados">Teclados</NavLink>
                    </li>
                    <li className="nav-item me-2">
                        <NavLink className={`nav-link ${styles.navlink}`} to="/category/pcs">PCS Armadas</NavLink>
                    </li>
                    <li className="nav-item me-2">
                        <NavLink  className={`nav-link ${styles.navlink}`} to="/category/monitores">Monitores</NavLink>
                    </li>
                    
                </ul>

                <CartWidget/>
            </div>
        </nav>
    )
}
export default Navbar;