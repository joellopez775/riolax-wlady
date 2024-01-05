import React , { useState } from 'react'
import { Link } from 'react-router-dom'
import BGImg from "../../assets/img/slider/slider_bg_01.png";  
import BGImg1 from "../../assets/img/slider/slider_bg_01.png";
import BGTest from "../../assets/img/bg/testimonial-bg.png";
import BGVideo from "../../assets/img/bg/video-bg.png"
import Slider from "react-slick"
import FsLightbox from 'fslightbox-react';
import Headerfour from '../Menhomefour/Headerfour';
import Sliderfour from '../Menhomefour/Sliderfour';
import Rooms from '../Menhome/Rooms'
import Luxury from '../Menhome/Luxury'
import Safe from '../Menhomefour/Safe';
import Explore from '../Menhome/Explore'
import Prices from '../Menhome/Prices'
import Testimonial from '../Menhome/Testimonial'
import Book from '../Menhome/Book';
import Take from '../Menhome/Take';
import Latest from '../Menhome/Latest';
import Brand from '../Menhome/Brand';

const Main = () => {
   
  return (
    <>
        <main>
            <Headerfour/>
            <Sliderfour/>
            <Rooms/>
            <Luxury/>
            <Safe/>
            <Explore/>
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