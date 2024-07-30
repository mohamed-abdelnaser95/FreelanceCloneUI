import React from 'react'
import './Features.scss'
const Features = () => {
    return (
        <div className='features'>
            <div className="container">
                <div className="item">
                    <h1>A whole world of freelance talent at your fingertips</h1>
                    <div className="title">
                        <img src="/images/check.png" alt="" />
                        <span>The best for every budget</span>
                    </div>
                        <p>Find high quality services at every price point</p>
                    <div className="title">
                        <img src="/images/check.png" alt="" />
                        <span>The best for every budget</span>
                    </div>
                        <p>Find high quality services as no hourly rates</p>
                    <div className="title">
                        <img src="/images/check.png" alt="" />
                        <span>The best for every budget</span>
                    </div>
                        <p>Find high quality services just project based pricing</p>
                </div>
                <div className="vedio">
                    <iframe 
                        src="https://www.youtube.com/embed/_pfdiFgqV8M?si=4GNqlozpz5fsP4rj"
                        frameBorder='0'
                        allow='autoplay; encrypted-media'
                        allowFullScreen
                        title='video'
                    />
                </div>
            </div>
        </div>
    )
}

export default Features