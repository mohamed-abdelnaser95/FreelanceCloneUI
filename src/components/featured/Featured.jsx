import React from 'react'
import './Featured.scss'
const Featured = () => {
    return (
        <div>
            <div className="featured">
                <div className="container">
                    <div className="left">
                        <h1>Find The perfect <i>freelance</i> services for your Business</h1>
                        <div className="search">
                            <img src="/images/search.png" alt="" />
                            <input type="text" placeholder='Try build your website'/>
                        <button>Search</button>
                        </div>
                        <div className="popular">
                            <span>Popular :</span>
                            <button>Web Design</button>
                            <button>Wordpress</button>
                            <button>Logo Design</button>
                            <button>AI Services</button>
                        </div>
                    </div>
                    <div className="right">
                        <img src="/images/man.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Featured