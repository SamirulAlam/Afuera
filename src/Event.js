import { Button } from '@material-ui/core';
import React from 'react';
import "./Event.css"

function Event() {
    return (
        <div className="event">
            <div className="event__left">
                <div className="event__title">
                    <h1>Museum</h1>
                </div>
                <div className="left__image">
                    <img src="https://cdn.discordapp.com/attachments/820174431895814154/820610612056686602/Screen_Shot_2021-03-13_at_6.32.17_PM.png" alt=""/>
                </div>
                <div className="left__paragraph">
                 <p>Time: 8 AM- 11 AM</p>
                    <p>Date: 3/30/21</p>
                    <p>Details: We will be visiting the San Francisco Museum of Modern Art! We will discuss and talk about the different arts in history and their significance. Please join us if you’re interested!</p>
                </div>
                <div className="event__button">
                    <Button>Join Now</Button>
                </div>
            </div>
            <div className="event__right">
            <div className="event__title">
                <h1>Park</h1>
                </div>
                <div className="right__image">
                    <img src="https://cdn.discordapp.com/attachments/820174431895814154/820610693987958804/Screen_Shot_2021-03-13_at_6.36.27_PM.png" alt=""/>
                </div>
                <div className="right__paragraph">
                    <p>Time: 12 PM - 3 PM</p>
                    <p>Date: 3/14/21</p>
                    <p>Details: We will be visiting the San Francisco Mission Dolores Park! We will have a picnic and be able to enjoy our walks around a beautiful scenery. Please join us if you’re interested!</p>
                </div>
                <div className="event__button">
                    <Button>Join Now</Button>
                </div>
            </div>
        </div>
    )
}

export default Event
