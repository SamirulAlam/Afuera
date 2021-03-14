import { Button } from '@material-ui/core';
import React from 'react';
import "./EventPlan.css";
import {Link} from "react-router-dom";

function EventPlan() {
    return (
        <div className="eventPlan">
            <div className="eventPlan__title">
                <h1>Plan A Field Trip</h1>
            </div>
            <div className="eventPlan__paragraph">
                <p>This is a group session with other members hosted by volunteers! We provide transportation from and to your home after the event. Food and services are provided. You are able to join different events such as a trip to the museum, park, and other fun places as well as make new friends and experience more of life!</p>
            </div>
            <div className="eventPlan__button">
                <Link to="/event">
                <Button>Plan A Trip Today</Button>
                </Link>
            </div>
            <div className="eventPlan__images">
            <div className="eventPlan__left">
                <img src="https://cdn.discordapp.com/attachments/820174431895814154/820598979268050944/photo-1533128361669-69c065857a13.webp" alt=""/>
            </div>
            <div className="eventPlan__center">
                <img src="https://cdn.discordapp.com/attachments/820174431895814154/820599141611601930/IMG_5018_2.jpg" alt=""/>
            </div>
            <div className="eventPlan__right">
                <img src="https://cdn.discordapp.com/attachments/820174431895814154/820599033180848148/fred-kearney-o-ioeoATbIM-unsplash.jpg" alt=""/>
            </div>
            </div>
        </div>
    )
}

export default EventPlan
