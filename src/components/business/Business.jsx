import React from 'react'
import './Business.scss'

const Business = () => {
    return (
        <div className='business-dark'>
            <div className="container">
                <div className="item">
                    <h1>Freelance business</h1>
                    <h1>A business solutions designed for teams</h1>
                    <p>Upgrade to a curated experience packed with tools and 
                        benefits dedcated to businesses
                    </p>
                    <div className="title">
                        <img src="/images/check.png" alt="" />
                        <span>Connected to freelancers with proven business experience</span>
                    </div>
                    <div className="title">
                        <img src="/images/check.png" alt="" />
                        <span>Get matched with the perfect talent by a csutomer success manager</span>
                    </div>
                    <div className="title">
                        <img src="/images/check.png" alt="" />
                        <span>Manage teamwork and boost productivity with one powerful workspace</span>
                    </div>
                    <button>Expolre Freelance Business</button>
                </div>
                <div className="right">
                    <img src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_870,dpr_2.0/v1/attachments/generic_asset/asset/d9c17ceebda44764b591a8074a898e63-1599597624768/business-desktop-870-x2.png" alt="" />
                </div>
            </div>
        </div>
    )
}

export default Business