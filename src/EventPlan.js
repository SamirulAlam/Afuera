import React from 'react';
import "./EventPlan.css"

function EventPlan() {
    return (
        <div className="eventPlan">
            <div className="eventPlan__title">
                <h1>Plan A Field Trip</h1>
            </div>
            <div className="eventPlan__left">
                <img src="https://cdn.discordapp.com/attachments/820174431895814154/820246078967906324/clay-banks-pFW3wm4YFjM-unsplash.jpg" alt=""/>
            </div>
            <div className="eventPlan__center">
                <img src="https://cdn.discordapp.com/attachments/820174431895814154/820245991269597204/thomas-de-luze-7xDfU-htISs-unsplash.jpg" alt=""/>
            </div>
            <div className="eventPlan__right">
                <img src="https://cdn.discordapp.com/attachments/820174431895814154/820244730859487252/raychan-yk7F8bdD0eU-unsplash.jpg" alt=""/>
            </div>
        </div>
    )
}

export default EventPlan
