import React from "react";
import './Stars.scss'
const Stars = ({ rate }) => {
    return (
        <div className="stars">
            {Array.apply(0, Array(rate)).map((x, i) => {
                return <img key={i} src="/images/star.png" alt="" />
            })}
            <span>{rate}</span>
        </div>
    );
};

export default Stars;
