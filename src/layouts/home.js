import React from 'react'
import '../App.css'
import Navbar from '../components/Navbar/navbar';
import SneakerFeed from '../components/SneakerFeed';
import ProductCarousel from '../components/Product slider/ProductCarusel';
import Herobg from '../components/images/davidbg.png'

function Home() {
  // const products = [
  //   {
  //     name: 'Product 1',
  //     image: 'product1.jpg',
  //     description: 'Description for Product 1',
  //     price: 19.99,
  //   },
  //   {
  //     name: 'Product 2',
  //     image: 'product2.jpg',
  //     description: 'Description for Product 2',
  //     price: 29.99,
  //   },
  //   // Add more product data
  // ];
  return (
    <div>
      <section id='hero' className=' container ' >
        <Navbar />
        <SneakerFeed />
        {/* <img src={Herobg} alt='hero' className='' /> */}
      </section>
      <ProductCarousel />
    </div>
  )
}

export default Home