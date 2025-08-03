import { Link, useLocation } from "react-router-dom";

import { FaLaptopMedical } from "react-icons/fa";

import NavItemLink from './styled-component.js';
import './index.css';

export default function Header() {
    const location = useLocation();
    const matchedPage = location.pathname;

    return (
        <nav className="d-flex justify-content-between align-items-center px-2 px-md-3 px-xl-5 py-1 py-md-2">
            <Link to="/" className="website-logo d-flex align-items-center gap-1">
                <FaLaptopMedical className="website-icon"/>
                <h3 className="website-logo-title m-0">NirogGyan</h3>
            </Link>
            <ul className="nav-items-container d-flex gap-2 gap-md-3 gap-lg-4 m-0 p-0">
                <li className="header-nav-item">
                    <NavItemLink to="/" className="header-nav-item-link" $matchedPage={matchedPage === '/'}>HOME</NavItemLink>
                </li>
                <li className="header-nav-item">
                    <NavItemLink to="/doctors" className="header-nav-item-link" $matchedPage={matchedPage.includes('/doc')}>DOCTORS</NavItemLink>
                </li>
                <li className="header-nav-item">
                    <NavItemLink to="/about" className="header-nav-item-link" $matchedPage={matchedPage === '/about'}>ABOUT</NavItemLink>
                </li>
            </ul>
        </nav>  
    );
};