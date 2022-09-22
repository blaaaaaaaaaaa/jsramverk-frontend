// React
import React from "react";
import { Link } from "react-router-dom";

// Styles
import '../App.css';

function Header() {

    return (
        <div className="container">
            <Link className="nav-btn" to="docs/create"> New document</Link>
            <Link className="nav-btn" to="docs/update"> Edit document</Link>
        </div>
    );
}

export default Header;
