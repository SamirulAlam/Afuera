import { Button } from '@material-ui/core';
import React, { useState } from 'react';
import "./Home.css";
import MenuIcon from '@material-ui/icons/Menu';
import {Link} from "react-router-dom";


function Home() {

    return (
        <div className="home">
            <div className="home__icon">
                <MenuIcon fontSize="large" />
                <div class="dropdown-content">
                    <Link to="/volunteer">
                    <p>REQUEST A HELPER</p>
                    </Link>
                    <Link to="/eventPlan">
                    <p>EVENT PLANNING</p>
                    </Link>
                    <Link to="/virtual">
                    <p>VIRTUAL SERVICES</p>
                    </Link>
                </div>
            </div>
            <div className="home__info">
                <h1>Tomorrow Belongs to You</h1>
                <Button>Discover Now</Button>
            </div>
        </div>
    )
}

export default Home
