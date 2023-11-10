import React from 'react'
import sneakerImage from './images/sheomallimgbg 1.png'
import ImageSlider from './ImageSlider';

function SneakerFeed() {
  const images = [
    sneakerImage,
  ]
  return (
    <div className='flex flex-wrap items-center justify-center space-x-5 mt-24 ' >
        {/* <img src={sneakerImage} className=' w-[400px] h-[200px] ' alt="Sneakers" /> */}
        <ImageSlider
          className='object-contain'
          images={images}
          interval={4000}
        />
        <div className='text-white space-y-2' >
          <h1 className=' text-[20px] font-inter ' >
            Yuto Horigome x Nike SB Dunk<br />
            Low White Grey Brown
          </h1>
          <p className=' font-jomo '> Size 41-45 </p>
          <button className='font-koushon' type="submit">Shop Now!</button>
        </div>
    </div>
  )
}

export default SneakerFeed;