import React from 'react'
import '../App.css'
import Navbar from '../components/navbar';
import SneakerFeed from '../components/SneakerFeed';
import ProductCarusel from '../components/ProductCarusel';

function Home() {
  return (
    <div>
        <Navbar />
        <SneakerFeed />

        {/* product carusel */}
        <ProductCarusel />
        

    </div>
  )
}

export default Home