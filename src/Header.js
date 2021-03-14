import React from 'react';
import "./Header.css";
import LocalFloristIcon from '@material-ui/icons/LocalFlorist';
import SearchIcon from '@material-ui/icons/Search';
import {Link} from "react-router-dom"

function Header() {
    return (
        <div className="header">
            <div className="header__left">
                <Link to="/">
                <LocalFloristIcon />
                </Link>
            </div>
            <div className="header__center">
                <h1>Discover Flow</h1>
            </div>
            <div className="header__right">
                <p>ABOUT</p>
                <p>CONTACT</p>
                <p>SIGN IN</p>
                <SearchIcon />
            </div>
        </div>
    )
}

export default Header
