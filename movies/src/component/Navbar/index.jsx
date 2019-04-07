import React from "react";
import "./style.css";
import {NavLink} from "react-router-dom"
const NavBar = () => (
    <nav className="navbar">
        <NavLink className="nav-brand" to="/">Home</NavLink>
        <div className="nav-collapse">
        <ul className="nav-ul"> 
        <li className="nav-item"><NavLink className="nav-link" to="/search">Search</NavLink></li>
        <li className="nav-item"><NavLink className="nav-link" to="/movie-list">Movie List</NavLink></li>
        </ul>
        </div>
    </nav>
);
export default NavBar;