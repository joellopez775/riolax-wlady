import React , { useState } from 'react'
import Sliderone from '../Menhometwo/Sliderone';
import Most from '../Menhome/Most'
import Explore from '../Menhome/Explore'
import Rooms from '../Menhome/Rooms'
import Luxury from '../Menhome/Luxury'
import Prices from '../Menhome/Prices'
import Testimonial from '../Menhome/Testimonial'
import Book from '../Menhome/Book'
import Take from '../Menhome/Take'
import Latest from '../Menhome/Latest'
import Brand from '../Menhome/Brand'


const Main = () => {
    
  return (
    <>
        <main>
            <Sliderone/>
            <Most/>
            <Explore/>
            <Rooms/>
            <Luxury/>
            <Prices/>
            <Testimonial/>
            <Book/>
            <Take/>
            <Latest/>
            <Brand/>
        </main>
    </>
  )
}



export default Main