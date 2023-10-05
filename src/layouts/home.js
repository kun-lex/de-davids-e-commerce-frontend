import React from 'react'
import '../App.css'
import Navbar from '../components/navbar';
import SneakerFeed from '../components/SneakerFeed';
import ProductCarousel from '../components/ProductCarusel';

function Home() {
  return (
    <div>
        <Navbar />
        <SneakerFeed />
        <ProductCarousel />
        

    </div>
  )
}

export default Home