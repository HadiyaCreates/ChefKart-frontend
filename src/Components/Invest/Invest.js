import React from 'react'
import BanIn from './BanIn'
import ConIn from './ConIn'
import Start2 from './Start2'
import InvCard from './InvCard'
import Press from './Press'
import OurMission from './OurMission'
import CategoryIn from './CategoryIn'
// import Card from './Card'

const Invest = () => {
  return (
    <div>
      {/* <Card/> */}
      <CategoryIn/>
      <OurMission/>
      <Press/>
      <InvCard/>
      <Start2 className="min-h-screen bg-gray-100 py-10"/>
      <ConIn/>
      <BanIn/>
    </div>
  )
}

export default Invest
