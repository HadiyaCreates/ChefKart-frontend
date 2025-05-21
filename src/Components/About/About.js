import React from 'react'
import Social from './Social'
import AboutContact from './AboutContact'
import AboutSlider from './AboutSlider'
import Team from './Team'
import ResAbout from './ResAbout'
import LeftImg from './LeftImg'
import RightImg from './RightImg'
import AboutHero from './AboutHero'

const About = () => {
  return (
    <div>
      <AboutHero/>
      <RightImg/>
      <LeftImg/>
      <ResAbout/>
      <Team/>
      <AboutSlider/>
      <AboutContact/>
      <Social/>
    </div>
  )
}

export default About
