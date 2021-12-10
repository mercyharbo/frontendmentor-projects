import React from "react";
import { useState } from 'react'

function Crew() {
    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index)
    }

    return (
        <div className="crew" style={{
            backgroundImage: "url(/background-crew-desktop.jpg)",
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            minHeight: '100vh',
            marginTop: '-106px'
        }}>
            
            <h3> <span> 02 </span> Meet your crew </h3>

            <div className="crew_container">
                
                <div className= 'content'>
                    <div className= {toggleState === 4 ? 'crew_info active_content' : 'crew_info'} >
                        <h3> Pilot </h3>
                        <h1> Victor Glover </h1>
                        <p>
                            Pilot on the first operational flight of the SpaceX Crew Dragon to the 
                            International Space Station. Glover is a commander in the U.S. Navy where 
                            he pilots an F/A-18.He was a crew member of Expedition 64, and served as a 
                            station systems flight engineer
                        </p>
                    </div>
                    
                    <div className= {toggleState === 3 ? 'crew_info active_content' : 'crew_info'} >
                        <h3> Mission Specialist </h3>
                        <h1> Mark Shuttleworth </h1>
                        <p>
                            Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind 
                            the Linux-based Ubuntu operating system. Shuttleworth became the first South 
                            African to travel to space as a space tourist.
                        </p>
                    </div>

                    <div className= {toggleState === 2 ? 'crew_info active_content' : 'crew_info'} >
                        <h3> Commander </h3>
                        <h1> Douglas Hurley </h1>
                        <p>
                            Douglas Gerald Hurley is an American engineer, former Marine Corps pilot 
                            and former NASA astronaut. He launched into space for the third time as 
                            commander of Crew Dragon Demo-2.
                        </p>
                    </div>

                    <div className= {toggleState === 1 ? 'crew_info active_content' : 'crew_info'} >
                        <h3> Flight Engineer </h3>
                        <h1> Anousheh Ansari </h1>
                        <p>
                            Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. 
                            Ansari was the fourth self-funded space tourist, the first self-funded woman to 
                            fly to the ISS, and the first Iranian in space.
                        </p>
                    </div>

                    <div className="dot_wrapper">
                        <span className=  { toggleState === 4 ? 'dot active_dot ' : 'dot'}
                            onClick={() => toggleTab(4)}></span>
                        
                        <span className=  { toggleState === 3 ? 'dot active_dot ' : 'dot'}
                            onClick={() => toggleTab(3)}></span>
                        
                        <span className=  { toggleState === 2 ? 'dot active_dot ' : 'dot'}
                            onClick={() => toggleTab(2)}></span>
                        
                        <span className=  { toggleState === 1 ? 'dot active_dot ' : 'dot'}
                            onClick={() => toggleTab(1)}></span>
                    </div>
                </div>

                
                <div className="crew_images">
                    <img src="image-victor-glover.png" alt="" 
                    className=  { toggleState === 4 ? 'image active_image' : 'image'} />

                    <img src="image-mark-shuttleworth.png" alt="" 
                    className=  { toggleState === 3 ? 'image active_image' : 'image'} />

                    <img src="image-douglas-hurley.png" alt="" 
                    className=  { toggleState === 2 ? 'image active_image' : 'image'} />

                    <img src="image-anousheh-ansari.png" alt="" 
                    className=  { toggleState === 1 ? 'image active_image' : 'image'} />
                </div>
            </div>

        
        </div>
    )
}

export default Crew;


