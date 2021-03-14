import React from 'react';
import "./Volunteer.css"
import Card from './Card'

function Volunteer() {
    return (
        <div className="volunteer">
            <div className="volunteer__title">
                <h1>Request A Volunteer</h1>
            </div>
            <div className="volunteer__cards">
               <div className="volunteers__right">
               <Card
                    
                    name="Samir"
                    description="DonCIndy is a Sophomore at UCR pursuing a major in Biology"
                    image="https://avatars.githubusercontent.com/u/50224886?s=460&u=643672c880852e2f093b0fcc35c0c3f7dc834e6a&v=4"
                />
                <Card
                    isBlue
                    name="Nathan Fontanilla"
                    description="Nathan is a sophomore at Berkeley City and majors in Computer Science. He is an Eagle Scout and loves the outdoors"
                    image="https://cdn.discordapp.com/attachments/820174431895814154/820478587701297162/IMG_1255.JPG"
                />
               </div>
                <div className="volunteers__right">
                <Card
                    isBlue
                    name="Johhny Xian"
                    description="Nathan is a sophomore at Berkeley City and majors in Computer Science. He is an Eagle Scout and loves the outdoors"
                    image="https://cdn.discordapp.com/attachments/820174431895814154/820479758231666698/image0.jpg"
                />
                <Card
                    name="Cindy Lee"
                    description="CIndy is a Sophomore at UCR pursuing a major in Biology. "
                    image="https://avatars.githubusercontent.com/u/50224886?s=460&u=643672c880852e2f093b0fcc35c0c3f7dc834e6a&v=4"
                />
                </div>
            </div>
        </div>
    )
}

export default Volunteer
