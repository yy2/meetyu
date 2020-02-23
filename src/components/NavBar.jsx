import React from "react";
import { Link } from "react-router-dom";
import "../css/NavBar.css";

function NavBar() {
    return (
        <header className="NavBar">
            <h3>Yu Yuan</h3>
            <nav className="Nav">
                <ul className="nav-list">
                    <Link>
                    <li><Link to="/" className="home">Home</Link></li>
                    <li><Link to="/about" className="about">About</Link></li>
                    <li><Link to="/contact" className="contact">Contact Me</Link></li>
                    </Link>
                </ul>
            </nav>
        </header>
    );
}

export default NavBar;