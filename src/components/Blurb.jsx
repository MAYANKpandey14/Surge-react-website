import React from 'react'
import '/src/styles/Blurb.css'

function Blurb() {
  return (
    <div>
        <div className='blurb'>
        <div className='blurb-main'>
            <div className='blurb-text'>
                <h1>How to Join us</h1>
                <p>Just 3 simple steps to optimize your brand reach and increase growth</p>
                <button className='getstarted-btn'>Get Started Now</button>
            </div>
            <div className='blurb-steps'>
                <div className='blurb-step'>
                    <h1>Step 1</h1>
                    <p>Reach out to one of our specialists, and have short introduction session.</p><hr/>
                </div>
                <div className='blurb-step'>
                    <h1>Step 2</h1>
                    <p>Our specialist will prepare personalized package suitable for your needs.</p><hr/>
                </div>
                <div className='blurb-step'>
                    <h1>Step 3</h1>
                    <p>Poof! You are ready to work smart with optimized operations.</p><hr/>
                </div>
            </div>
        </div>
        <div className="blurb-bg">
        </div>
        </div>
    </div>
  )
}

export default Blurb
