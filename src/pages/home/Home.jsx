import ProjectCard from '../../components/projectCard/ProjectCard'
import TrustedBy from '../../components/trustedBy/TrustedBy'
import Features from '../../components/features/Features'
import Featured from '../../components/featured/Featured'
import Business from '../../components/business/Business'
import SimpleSlider from '../../components/slide/Slider'
import { cards, gigs } from '../../data';
import React from 'react'
import './Home.scss'

const Home = () => {
  return (
    <div className='home'>
      <Featured />
      <TrustedBy />
      <SimpleSlider data={cards} slidesToShow={5} arrowsScroll={1} />
      <Features />
      <Business />
      <ProjectCard slidesToShow={4} arrowsScroll={1} />
    </div>
  )
}

export default Home