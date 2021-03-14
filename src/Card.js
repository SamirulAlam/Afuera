import React from 'react';
import "./Card.css";
import { Button } from '@material-ui/core';

function Card({image,name,description,isBlue}) {
    return (
        <div className="card">
            <div className="card__image">
                <img src={image} alt=""/>
            </div>
            <div className="card__info">
                <div className={`card__name ${isBlue && "name__blue"}`}>
                    <h3>{name}</h3>
                </div>
                <div className="card__description">
                    <p>{description}</p>
                </div>
                <div className={`card__button ${isBlue && "button__blue"}`}>
                    <Button>Request</Button>
                </div>
            </div>
            
        </div>
    )
}

export default Card
