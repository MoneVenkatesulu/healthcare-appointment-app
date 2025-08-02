import { Link } from "react-router-dom";

import { FaLaptopMedical } from "react-icons/fa";

import './index.css';

export default function Header() {
    return (
        <div className="header-container flex-shrink-0 bg-white p-3 pt-2 pb-2 p-md-5 pt-md-3 pb-md-3">
            <nav className="d-flex justify-content-between align-items-center">
                <Link to="/" className="react-link-element d-flex align-items-center gap-1">
                    <FaLaptopMedical className="website-logo"/>
                    <h3 className="website-logo-title m-0">NirogGyan</h3>
                </Link>
                <ul className="nav-items-container d-flex gap-2 gap-md-3 gap-lg-4 m-0 p-0">
                    <li className="header-nav-item">
                        <Link to="/" className="react-link-element header-nav-item-link">HOME</Link>
                    </li>
                    <li className="header-nav-item">
                        <Link to="/doctors" className="react-link-element header-nav-item-link">DOCTORS</Link>
                    </li>
                    <li className="header-nav-item">
                        <Link to="" className="react-link-element header-nav-item-link">ABOUT</Link>
                    </li>
                </ul>
            </nav>
        </div>
        
    );
};