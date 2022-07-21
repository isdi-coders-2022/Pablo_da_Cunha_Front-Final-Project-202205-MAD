// import { Link } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { iRouterItem } from '../interfaces/iRouterItem';
import './header.module.css';

export function Header({ menuOptions }: { menuOptions: Array<iRouterItem> }) {
    return (
        <header id="header">
            <nav id="navbar" className="navbar">
                <ul>
                    <li>
                    <Link to={'/'} className="navItem">
                        Home
                    </Link>
                    </li>
                    
                    <li>
                    <Link to={'/bars'} className="navItem">
                        Bars
                    </Link>
                    </li>

                    <li>
                    <Link to={'/brews'} className="navItem">
                        Brews
                    </Link>
                    </li>

                    <li>
                    <Link to={'/mybrews'} className="nav-link">
                        MyBrews
                    </Link>
                    </li>

                    <li>
                    <Link to={'/login'} className="nav-link">
                        Login
                    </Link>
                    </li>

                    <li>
                    <Link to={'/register'} className="nav-link">
                        Register
                    </Link>
                    </li>

                    <li>
                    <Link to={'/update'} className="nav-link">
                        Update
                    </Link>
                    </li>
                                        
                </ul>

                <i className="bi bi-list mobile-nav-toggle"></i>
            </nav>
        </header>
    );
}
