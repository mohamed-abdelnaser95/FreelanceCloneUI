import React from 'react'
import './Slider.scss'
import Slider from 'infinite-react-carousel';
import CatCard from '../catCard/CatCard';

const SimpleSlider  = ({data, slidesToShow, arrowsScroll}) => {
    return (
        <div className='slider'>
            <div className="container">
                <Slider  slidesPerRow ={1} slidesToShow ={slidesToShow} arrowsScroll ={arrowsScroll}>
                    {data?.map(card => (
                        <CatCard item = {card} key={card.id}/>
                    ))}
                </Slider>
            </div>
        </div>
    )
}

export default SimpleSlider 