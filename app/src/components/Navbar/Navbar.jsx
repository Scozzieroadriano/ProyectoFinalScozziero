import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
            <nav>
                <h1>
                    <Link to="/">Tiendita</Link>
                </h1>

                <ul>
                    <li>
                        <NavLink to="/category/telefonos">Teléfonos</NavLink>
                    </li>
                    <li>
                        <NavLink to="/category/tablets">Tablets</NavLink>
                    </li>
                    <li>
                        <NavLink to="/category/notebooks">Notebooks</NavLink>
                    </li>
                    
                </ul>

                <div>
                    CartWidget
                </div>
            </nav>
        </div>
    )
}
export default Navbar;