import React from 'react'
import { useState } from 'react';



export const Rocket = () => {
    const [launch, setLaunchRocket] = useState(false);

    const launchRocket = () => {
        if(window.scrollY >= 300) {
            setLaunchRocket(true);
        }
    }

    window.addEventListener('scroll', launchRocket);
  return (
    <>
    {/* <div className="draw animated"> */}
    <div className={launch ? ' draw z-[2] animated' : 'draw z-[2]'}>
   
		<div className="rocket">
			<div className="window"></div>
            <div className="smoke-rocket"></div>
		</div>
    
		<div className="smoke">
			<div className="one"></div>
			<div className="two"></div>
		</div>

	</div>
    </>
  )
}
