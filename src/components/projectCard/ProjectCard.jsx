import React from "react";
import './ProjectCard.scss'
import { Link } from "react-router-dom";
import Slider from 'infinite-react-carousel';
import { projects } from "../../data";

const ProjectCard = ({ slidesToShow, arrowsScroll }) => (
    <div className="project-slider">
        <div className="container">
            <Slider slidesPerRow={1} slidesToShow={slidesToShow} arrowsScroll={arrowsScroll}>
                {projects.map(item => (
                    <Link to='/' className="link" key={item.id}>
                        <div className="projectCard">
                            <img src={item.img} alt="" />
                            <div className="info">
                                <img src={item.pp} alt="" />
                                <div className="texts">
                                    <h2>{item.cat}</h2>
                                    <span>{item.username}</span>
                                </div>
                            </div>
                        </div>
                    </Link>
                ))
                }
            </Slider>
        </div>
    </div>
);

export default ProjectCard;
