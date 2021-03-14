import React from 'react';
import "./About.css"

function About() {
    return (
        <div className="about">
            <div className="about__container">
                <div className="about__left">
                    <img src="https://cdn.discordapp.com/attachments/820174431895814154/820507380449673276/raychan-yk7F8bdD0eU-unsplash.jpg" alt=""/>
                </div>
                <div className="about__right">
                    <div className="about__title">
                        <h1>ABOUT US</h1>
                    </div>
                    <div className="about__paragraph">
                        <p>We are Discover Flow! We are a non-profit aimed to help our elderly by providing different services such as Virtual Experience, Event Planning, and Requesting a Volunteer. We are passionate about providing a community for the elderly and enable them to spend time with volunteers and other members. We want to bring more joy into their lives with our services, as well as convenience.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
