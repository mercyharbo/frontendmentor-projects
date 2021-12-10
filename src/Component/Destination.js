import React from "react";
import { useState } from 'react'

function Destination() {
    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index)
    }

    return (
        <div className="destination" style={{
            backgroundImage: "url(/background-destination-desktop.jpg)",
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            minHeight: '100vh',
            maxWidth: '100%',
            marginTop: '-106px'
        }}>
            
            <h3> <span> 01 </span> Pick your destination </h3>

            <div className="tabs_container">
                <div className="image_container">
                    <div className= { toggleState === 4 ? 'tabs_images active_image' : 'tabs_images'} >
                        <img src="image-moon.png" alt="Mars" />
                    </div>

                    <div className= { toggleState === 1 ? 'tabs_images active_image' : 'tabs_images'}>
                        <img src="image-mars.png" alt="Mars" />
                    </div>

                    <div className= { toggleState === 2 ? 'tabs_images active_image' : 'tabs_images'}>
                        <img src="image-europa.png" alt="Mars" />
                    </div>

                    <div className= { toggleState === 3 ? 'tabs_images active_image' : 'tabs_images'}>
                        <img src="image-titan.png" alt="Mars" />
                    </div>
                </div>
                

                <div className="content">
                    <div className="tabs_bloc">
                        <div className= { toggleState === 4 ? 'tabs active_tabs' : 'tabs'}
                            onClick={() => toggleTab(4)} > Moon
                        </div>

                        <div className= { toggleState === 1 ? 'tabs active_tabs' : 'tabs'}
                            onClick={() => toggleTab(1)}> Mars
                        </div>
                        
                        <div className= { toggleState === 2 ? 'tabs active_tabs' : 'tabs'} 
                            onClick={() => toggleTab(2)} > Europa
                        </div>
                        
                        <div className= { toggleState === 3 ? 'tabs active_tabs' : 'tabs'} 
                            onClick={() => toggleTab(3)} > Titan
                        </div>
                    </div>
                    

                    <div className= { toggleState === 4 ? 'content_tabs active_content' : 'content_tabs'}>
                        <h1> Moon </h1>
                        <p>
                            See our planet as you’ve never seen it before. A perfect relaxing trip away to help 
                            regain perspective and come back refreshed. While you’re there, take in some history 
                            by visiting the Luna 2 and Apollo 11 landing sites.
                        </p>
                        <hr />
                        <div className="footer">
                            <p> <span> Avg. distance </span> 384,400 km </p>
                            <p> <span> Est. travel time </span> 3 days </p>
                        </div>
                    </div>

                    <div className= { toggleState === 1 ? 'content_tabs active_content' : 'content_tabs'}>
                        <h1> Mars </h1>
                        <p>
                            Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, 
                            the tallest planetary mountain in our solar system. It’s two and a half times 
                            the size of Everest!
                        </p>
                        <hr />
                        <div className="footer">
                            <p> <span> Avg. distance </span> 115 mil. km </p>
                            <p> <span> Est. travel time </span> 9 months </p>
                        </div>
                    </div>

                    <div className= { toggleState === 2 ? 'content_tabs active_content' : 'content_tabs'}>
                        <h1> Europa </h1>
                        <p>
                            The smallest of the four Galilean moons orbiting Jupiter, Europa is a 
                            winter lover’s dream. With an icy surface, it’s perfect for a bit of 
                            ice skating, curling, hockey, or simple relaxation in your snug 
                            wintery cabin.
                        </p>
                        <hr />
                        <div className="footer">
                            <p> <span> Avg. distance </span> 628 mil. km </p>
                            <p> <span> Est. travel time </span> 3 years </p>
                        </div>
                    </div>

                    <div className= { toggleState === 3 ? 'content_tabs active_content' : 'content_tabs'}>
                        <h1> Titan </h1>
                        <p>
                            The only moon known to have a dense atmosphere other than Earth, Titan 
                            is a home away from home (just a few hundred degrees colder!). As a 
                            bonus, you get striking views of the Rings of Saturn.
                        </p>
                        <hr />
                        <div className="footer">
                            <p> <span> Avg. distance </span> 1.6 bil. km </p>
                            <p> <span> Est. travel time </span> 7 years </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Destination;