import React from 'react';
import "./Contact.css";

function Contact() {
    return (
        <div className="contact">
            <div className="contact__container">
                <div className="contact__left">
                    <img src="https://cdn.discordapp.com/attachments/820174431895814154/820507342344945694/thomas-de-luze-7xDfU-htISs-unsplash.jpg" alt=""/>
                </div>
                <div className="contact__right">
                    <div className="contact__title">
                        <h1>CONTACT US</h1>
                    </div>
                    <div className="contact__paragraph">
                        <p>Please contact us if you have any question and concerns, or to set up an appointment to join Discover Flow!
                        </p>
                    </div>
                    <div className="contact__info">
                        <p>Phone Number: 1-510-555-5555</p>
                        <p>Email: discoverflow@gmail.com</p>
                        <p>Address: 123 Meadow Lane Oakland, CA 94607</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact
