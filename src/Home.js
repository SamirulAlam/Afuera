import { Button } from '@material-ui/core';
import React from 'react';
import "./Home.css";
import MenuIcon from '@material-ui/icons/Menu';

function Home() {
    return (
        <div className="home">
            <div className="home__icon">
                <MenuIcon fontSize="large" />
            </div>
            <div className="home__info">
                <h1>Tomorrow Belongs to You</h1>
                <Button>Discover Now</Button>
            </div>
        </div>
    )
}

export default Home
