import React from 'react'
import Faq2 from './Faq2'
import Lower from './Lower'
import Lower1 from './Lower1'
import Testimonial from './Testimonial'
import Heart from './Heart'
import Cater from './Cater'
import NCVETSlider from './Slider'
import Start from './Start'
import Slider2 from './Slider2'

const ChefConnection = () => {
  return (
    <div>
      <Slider2/>
      <Start/>
    <NCVETSlider className="min-h-screen bg-gray-100 py-10"/>
      <Cater/>
      <Heart/>
      <Testimonial/>
      <Lower1/>
      <Lower/>
  <Faq2/>
    </div>
  )
}

export default ChefConnection
