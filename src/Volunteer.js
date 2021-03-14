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
                    description="Samir is from Bangladesh and currently majors in Computer Science and he does not know anything"
                    image="https://avatars.githubusercontent.com/u/50224886?s=460&u=643672c880852e2f093b0fcc35c0c3f7dc834e6a&v=4"
                />
                <Card
                    isBlue
                    name="Nathan Fontanilla"
                    description="Nathan is a sophomore at Berkeley City and majors in Computer Science. He is an Eagle Scout and loves the outdoors"
                    image="https://cdn.discordapp.com/attachments/820174431895814154/820568167574929428/IMG_2972.jpg"
                />
               </div>
               <div className="volunteer__center">
                   <p>You can request a volunteer to help you with shopping, groceries, gardening, for walks and other activities that you request. Choose a volunteer to schedule a time to meet!</p>
               </div>
                <div className="volunteers__right">
                <Card
                    isBlue
                    name="Johhny Xian"
                    description="Johnny is a computer science student. He loves to code using Javascript and enjoys reading, art, and nature. He is passionate about helping the community."
                    image="https://cdn.discordapp.com/attachments/820174431895814154/820568164525932544/johnny.jpg"
                />
                <Card
                    name="Cindy Lee"
                    description="CIndy is a Sophomore at UCR pursuing a major in Biology. "
                    image="https://cdn.discordapp.com/attachments/820174431895814154/820568164433395752/111700539_582264879094245_7599548572860343492_n.jpg"
                />
                </div>
            </div>
        </div>
    )
}

export default Volunteer
