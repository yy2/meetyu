import React from "react";
import { Link } from "react-router-dom";
import "../css/NavBar.css";

function NavBar() {
    return (
        <header className="NavBar">
            <nav className="Nav">
                    <Link to="/" className="home">Yu Yuan</Link>
                <ul className="nav-list">
                    <li><Link to="/about" className="about">About</Link></li>
                    <li><Link to="/works" className="works">Works</Link></li>
                    <li><Link to="/contact" className="contact">Contact Me</Link></li>
                </ul>
            </nav>
        </header>
    );
}

export default NavBar;