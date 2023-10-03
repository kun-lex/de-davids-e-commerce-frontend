import React from 'react'
import sneakerImage from './images/sheomallimgbg 1.png'
import ImageSlider from './ImageSlider';

function SneakerFeed() {
  const images = [
    sneakerImage,
  ]
  return (
    <div className='flex items-center justify-center space-x-24 mt-24 ' >
        {/* <img src={sneakerImage} className=' w-[400px] h-[200px] ' alt="Sneakers" /> */}
        <ImageSlider
          className='object-contain h-[200px] w-[400px]  '
          images={images}
          interval={4000}
        />
        <div className='text-white' >
            <h1 className=' mb-5 text-[20px] font-inter ' >
                Yuto Horigome x Nike SB Dunk <br/>
                Low White Grey Brown
            </h1>
            <p className=' mb-5 font-jomo '> Size 41-45 </p><button className='font-koushon' type="submit">Shop Now!</button>
        </div>
    </div>
  )
}

export default SneakerFeed;