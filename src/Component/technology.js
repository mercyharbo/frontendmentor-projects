import React from "react";
import { useState } from 'react'

function Technology() {
    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index)
    }

    return (
        <div className="technology" style={{ backgroundImage: "url(/background-technology-desktop.jpg)", 
        backgroundPosition: 'center', 
        backgroundSize: 'cover', 
        minHeight: '100vh',
        marginTop: '-106px'
    }}>
            
        <h3> <span> 03 </span> Space launch 101 </h3>
        <div className="tech_container">
            <div className="content_wrapper">
                <div className="num_slide">
                    <div className= { toggleState === 1 ? 'num active_num' : 'num'}
                            onClick={() => toggleTab(1)} > 1 </div>

                    <div className= { toggleState === 2 ? 'num active_num' : 'num'}
                            onClick={() => toggleTab(2)} > 2 </div>

                    <div className= { toggleState === 3 ? 'num active_num' : 'num'}
                            onClick={() => toggleTab(3)} > 3 </div>   
                </div>
                    
                <div className= { toggleState === 1 ? 'content active_content' : 'content'} >
                    <span> The terminology... </span>
                    <h1> Launch vehicle </h1>
                    <p>
                        A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a 
                        payload from Earth's surface to space, usually to Earth orbit or beyond. Our 
                        WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, 
                        it's quite an awe-inspiring sight on the launch pad!
                    </p>    
                </div>
                    
                <div className= { toggleState === 2 ? 'content active_content' : 'content'} >
                    <span> The terminology... </span>
                    <h1> Spaceport </h1>
                    <p>
                        A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, 
                        by analogy to the seaport for ships or airport for aircraft. Based in the 
                        famous Cape Canaveral, our spaceport is ideally situated to take advantage 
                        of the Earth’s rotation for launch.
                    </p>    
                </div>

                <div className= { toggleState === 3 ? 'content active_content' : 'content'} >
                    <span> The terminology... </span>
                    <h1> Space capsule </h1>
                    <p>
                        A space capsule is an often-crewed spacecraft that uses a blunt-body reentry 
                        capsule to reenter the Earth's atmosphere without wings. Our capsule is where 
                        you'll spend your time during the flight. It includes a space gym, cinema, 
                        and plenty of other activities to keep you entertained.
                    </p>    
                </div>
            </div> 

            <div className="content_image">
                <img src="image-launch-vehicle-portrait.jpg" alt="" 
                className= { toggleState === 1 ? 'tech_image active_image' : 'tech_image'} />

                <img src="image-spaceport-portrait.jpg" alt="" 
                className= { toggleState === 2 ? 'tech_image active_image' : 'tech_image'} />

                <img src="image-space-capsule-portrait.jpg" alt="" 
                className= { toggleState === 3 ? 'tech_image active_image' : 'tech_image'} />
            </div>
        </div>
        </div>
    )
}

export default Technology;