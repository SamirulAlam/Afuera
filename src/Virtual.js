import React from 'react';
import "./Virtual.css"

function Virtual() {
    return (
        <div className="virtual">
            <div className="virtual__left">
                <img src="https://cdn.discordapp.com/attachments/820174431895814154/820490177360298004/92546c_ef4c2dd861f547ed9e88d54258ac147bmv2.png" alt="" className="virtual__img1"/>
                <img src="https://cdn.discordapp.com/attachments/820174431895814154/820491098283573259/Screen_Shot_2021-03-13_at_2.32.44_PM.png" alt="" className="virtual__img2"/>
            </div>
            <div className="virtual__right">
                <div className="virtual__first">
                    <h1>We will use virtual reality headsets such as Oculus Quest to give you the best interactive experience with minimal set up and space. </h1>
                </div>
                <div className="virtual__second">
                    <h1>We provide virtual technologies for people to experience the outdoors and other adventures in the comfort of your own home!</h1>
                </div>
            </div>
        </div>
    )
}

export default Virtual
