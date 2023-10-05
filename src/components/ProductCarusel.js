import React from 'react'
import { useState } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import '../App.css'

const ProductCarousel = () => {
    const [transitionIn, setTransitionIn] = useState(true);

    const toggleTransition = () => {
      setTransitionIn(!transitionIn);
    };
    const handleBeforeChange = (previousSlide, currentSlide, ref) => {
      console.log(`Before Change: Previous Slide ${previousSlide}, Current Slide ${currentSlide}`);
      // You can perform actions before the slide changes here if needed
    };
  
    const handleAfterChange = (currentSlide) => {
      console.log(`After Change: Current Slide ${currentSlide}`);
      // You can perform actions after the slide changes here if needed
    };
    // Sample product data (you can replace this with your own data)
    const products = [
      { id: 1, name: 'Product 1', image: 'product1.jpg' },
      { id: 2, name: 'Product 2', image: 'product2.jpg' },
      { id: 3, name: 'Product 3', image: 'product3.jpg' },
      { id: 4, name: 'Product 3', image: 'product3.jpg' },
      { id: 5, name: 'Product 3', image: 'product3.jpg' },
      { id: 6, name: 'Product 3', image: 'product3.jpg' },
      // Add more product objects as needed
    ];
  
    // Customize your carousel settings here
    const responsive = {
      desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 6,
        slidesToSlide: 3,
      },
      tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 4,
        slidesToSlide: 2,
      },
      mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
        slidesToSlide: 1,
      },
    };
  
    return (
      <div className=' text-white ' >
        <h2>Featured Products</h2>
        <Carousel
          swipeable={true}
          centerMode={true}
          afterChange={true}
          beforeChange={handleBeforeChange}
          focusOnSelect={handleAfterChange}
          draggable={false}
          showDots={true}
          responsive={responsive}
          ssr={true} // Server Side Rendering support
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={2000}
          keyBoardControl={true}
          transitionDuration={500}
          containerClass="carousel-container"
          removeArrowOnDeviceType={['tablet', 'mobile']}
          deviceType={'desktop'}
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-40-px"
          customTransition={transitionIn ? 'all .5' : 'none'} // Toggle transition
          customTransitionDuration={500} // Set the duration for the custom transition
        >
          {products.map((product) => (
            <div key={product.id} className=" w-[150px] h-[250px] rounded-[20px] bg-white items-center space-x-20 mb-10 text-black">
              <img src={product.image} alt={product.name} />
              <h3>{product.name}</h3>
            </div>
          ))}
        </Carousel>
      </div>
    );
  };
  
  export default ProductCarousel;  