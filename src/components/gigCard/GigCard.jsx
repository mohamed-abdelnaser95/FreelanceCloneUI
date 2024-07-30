import React from 'react'
import './GigCard.scss'
import { Link } from 'react-router-dom'

const GigCard = ({ item }) => {
    return (
        <Link to='/gig/123' className='link'>
            <div className='gigCard'>
                <img src={item.img} alt="" />
                <div className="info">
                    <div className="user">
                        <img src={item.pp} alt="" />
                        <span>{item.user}</span>
                    </div>
                    <p>{item.desc}</p>
                    <div className="star">
                        <img src='/images/star.png' alt="" />
                        <span>{item.star}</span>
                    </div>
                </div>
                <hr />
                <div className="details">
                    <img src="/images/heart.png" alt="" />
                    <div className="price">
                        <span>Starting At</span>
                        <h2>${item.price}</h2>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default GigCard