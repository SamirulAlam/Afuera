import React from 'react';
import "./Header.css";
import LocalFloristIcon from '@material-ui/icons/LocalFlorist';
import SearchIcon from '@material-ui/icons/Search';

function Header() {
    return (
        <div className="header">
            <div className="header__left">
                <LocalFloristIcon />
            </div>
            <div className="header__center">
                <h1>Wellness</h1>
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
