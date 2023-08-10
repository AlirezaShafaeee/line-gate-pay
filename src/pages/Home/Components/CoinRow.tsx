import React from 'react'
import IconCard from './UI/IconCard'
import Slider from 'react-slick'
const settings = {
  dots: true,
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  pauseOnHover: true,
}
const CoinRow = () => {
  
  return (
    <div>
      <Slider {...settings}>
        <div>this is one </div>
        <div>this is two</div>  
      </Slider>
    </div>
  )
}

export default CoinRow