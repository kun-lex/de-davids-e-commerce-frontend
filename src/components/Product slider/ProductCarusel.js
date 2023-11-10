import React from 'react'
import { Component } from 'react';
import './Product.css'
import data from "./data";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

class ProductCarousel extends Component {

  constructor() {
    super();
    this.state = {
      products: []
    };
  }

  componentDidMount() {
    let initialProducts = [];
    initialProducts = data.carouselData.map(product => {
      return product;
    });
    this.setState({
      products: initialProducts
    });
  }

  render() {
    const sliderSettings = {
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 4,
      initialSlide: 0,
      swipeToSlide: true,
      autoPlay: true,
      dots: true,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: false
          }
        }
      ]
    };

    let products = this.state.products;
    return (
      <div className="container">
        <div className='mb-5' >
          <div className=' w-20 h-1 rounded-full bg-white overflow-hidden flex justify-end items-center mb-2' >
            <div className=' w-5 h-5 rounded-full bg-yellow-600  overflow-hidden mr-2' ></div>
          </div>
          <h1 className=' text-xl lg:text-2xl text-white ' > New Arrival </h1>
        </div>
        <Slider {...sliderSettings} >
          {products.length === 0 ? (
            <h1>No Products</h1>
          ) : (
            products.map(product => (
              <div key={product.name} className=' border rounded-md bg-white space-x-1 p-2 ' >
                <a href={product.url}>
                  <img
                    src={product.productImageUrl}
                    alt={product.productImageAltText}
                  />
                </a>
                <a href={product.url}>
                  <h3>{product.name}</h3>
                </a>
                <span>({product.salesUnit})</span>
                <p>
                  {product.price.currency} {product.price.formattedValue}
                </p>
                <a href="#">
                  <button>
                    <faCartShopping className='text-white bg-white' /> Add to cart
                  </button>
                </a>
              </div>
            ))
          )}
        </Slider>
      </div>
    );
  }
    // const [transitionIn, setTransitionIn] = useState(true);

    // const toggleTransition = () => {
    //   setTransitionIn(!transitionIn);
    // };
    // const handleBeforeChange = (previousSlide, currentSlide, ref) => {
    //   console.log(`Before Change: Previous Slide ${previousSlide}, Current Slide ${currentSlide}`);
    //   // You can perform actions before the slide changes here if needed
    // };
  
    // const handleAfterChange = (currentSlide) => {
    //   console.log(`After Change: Current Slide ${currentSlide}`);
    //   // You can perform actions after the slide changes here if needed
    // };
    // // Sample product data (you can replace this with your own data)
    // const products = [
    //   { id: 1, name: 'Product 1', image: 'product1.jpg' },
    //   { id: 2, name: 'Product 2', image: 'product2.jpg' },
    //   { id: 3, name: 'Product 3', image: 'product3.jpg' },
    //   { id: 4, name: 'Product 4', image: 'product4.jpg' },
    //   { id: 5, name: 'Product 5', image: 'product5.jpg' },
    //   { id: 6, name: 'Product 6', image: 'product6.jpg' },
    //   // Add more product objects as needed
    // ];
  
    // // Customize your carousel settings here
    // const responsive = {
    //   desktop: {
    //     breakpoint: { max: 3000, min: 1024 },
    //     items: 6,
    //     slidesToSlide: 3,
    //   },
    //   tablet: {
    //     breakpoint: { max: 1024, min: 464 },
    //     items: 4,
    //     slidesToSlide: 2,
    //   },
    //   mobile: {
    //     breakpoint: { max: 464, min: 0 },
    //     items: 1,
    //     slidesToSlide: 1,
    //   },
    // };
  
    // return (
    //   <div className=' text-white ' >
    //     <h2>Featured Products</h2>
    //     <Carousel
    //       swipeable={true}
    //       centerMode={true}
    //       afterChange={true}
    //       beforeChange={handleBeforeChange}
    //       focusOnSelect={handleAfterChange}
    //       draggable={false}
    //       showDots={true}
    //       responsive={responsive}
    //       ssr={true} // Server Side Rendering support
    //       infinite={true}
    //       autoPlay={true}
    //       autoPlaySpeed={2000}
    //       keyBoardControl={true}
    //       transitionDuration={500}
    //       containerClass="carousel-container"
    //       removeArrowOnDeviceType={['tablet', 'mobile']}
    //       deviceType={'desktop'}
    //       dotListClass="custom-dot-list-style"
    //       itemClass="carousel-item-padding-40-px"
    //       customTransition={transitionIn ? 'all .5' : 'none'} // Toggle transition
    //       customTransitionDuration={500} // Set the duration for the custom transition
    //     >
    //       {products.map((product) => (
    //         <div key={product.id} className=" w-[150px] h-[250px] rounded-[20px] bg-white items-center space-x-20 mb-10 text-black">
    //           <img src={product.image} alt={product.name} />
    //           <h3>{product.name}</h3>
    //         </div>
    //       ))}
    //     </Carousel>
    //   </div>
    // );
    // const settings = {
    //   dots: true,
    //   infinite: true,
    //   centerMode: true,
    //   centerPadding: '0',
    //   slidesToShow: 3, // Adjust the number of visible slides
    //   speed: 500,
    //   autoplay: true,
    //   autoplaySpeed: 3000, // Set the autoplay speed in milliseconds
    // };
  
    // return (
    //   <div>
    //     <Slider {...settings}>
    //       {products.map((product, index) => (
    //         <div key={index} className="p-4">
    //           {/* Your product card/component here */}
    //           <div className="bg-white p-4 rounded shadow-md">
    //             <img src={product.image} alt={product.name} className="w-full h-auto" />
    //             <h3 className="text-lg font-semibold">{product.name}</h3>
    //             <p className="text-gray-600">{product.description}</p>
    //             <span className="text-blue-600">${product.price}</span>
    //           </div>
    //         </div>
    //       ))}
    //     </Slider>
    //   </div>
    // );
  };
  
  export default ProductCarousel;  