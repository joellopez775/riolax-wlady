import React , { useState } from 'react'
import { Link } from 'react-router-dom'
import BGImg from "../../assets/img/slider/slider_bg_01.png";  

function Sliderone() {
    return (
        <>
            <section id="home" className="slider-area fix p-relative">
                <div className="slider-active" style={{ background: "#101010" }}>
                    <div className="single-slider slider-bg d-flex align-items-center" style={{ backgroundImage: `url(${BGImg})` }}>
                        <div className="container">
                            <div className="row justify-content-center align-items-center">
                                <div className="col-lg-7 col-md-7">
                                    <div className="slider-content s-slider-content mt-100">
                                        <h2 data-animation="fadeInUp" data-delay=".4s">Enjoy A Luxuary Experience</h2>
                                        <p data-animation="fadeInUp" data-delay=".6s">Donec vitae libero non enim placerat eleifend aliquam erat volutpat. Curabitur diam ex, dapibus purus sapien, cursus sed nisl tristique, commodo gravida lectus non.</p>

                                        <div className="slider-btn mt-30 mb-105">
                                            <Link to="/contact" className="btn ss-btn active" data-animation="fadeInLeft" data-delay=".4s">Visit Our Shop</Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-5 col-md-5 p-relative">
                                    <div className="booking-area booking-area2 p-relative">
                                        <div className="container">
                                            <form action="#" className="contact-form">
                                                <div className="row align-items-center">
                                                    <div className="col-lg-12">
                                                        <div className="section-title center-align mb-30">

                                                            <h2>
                                                                Book A Room
                                                            </h2>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-6 col-md-6">
                                                        <div className="contact-field p-relative c-name mb-30">
                                                            <label><i className="fal fa-badge-check"></i> Check In Date</label>
                                                            <input type="date" id="chackin2" name="date" />
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-6 col-md-6">
                                                        <div className="contact-field p-relative c-name mb-30">
                                                            <label><i className="fal fa-times-octagon"></i> Check Out Date</label>
                                                            <input type="date" id="chackout2" name="date" />
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-12">
                                                        <div className="contact-field p-relative c-name mb-30">
                                                            <label><i className="fal fa-users"></i> Adults</label>
                                                            <select name="adults" id="adu2">
                                                                <option value="sports-massage">Adults</option>
                                                                <option value="1">1</option>
                                                                <option value="2">2</option>
                                                                <option value="3">3</option>
                                                                <option value="4">4</option>
                                                                <option value="5">5</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-6 col-md-6">
                                                        <div className="contact-field p-relative c-name mb-30">
                                                            <label><i className="fal fa-baby"></i> Child</label>
                                                            <select name="child" id="cld">
                                                                <option value="sports-massage">Child</option>
                                                                <option value="1">1</option>
                                                                <option value="2">2</option>
                                                                <option value="3">3</option>
                                                                <option value="4">4</option>
                                                                <option value="5">5</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-6 col-md-6">
                                                        <div className="contact-field p-relative c-name mb-30">
                                                            <label><i className="fal fa-concierge-bell"></i> Room</label>
                                                            <select name="room" id="rm2">
                                                                <option value="sports-massage">Room</option>
                                                                <option value="1">1</option>
                                                                <option value="2">2</option>
                                                                <option value="3">3</option>
                                                                <option value="4">4</option>
                                                                <option value="5">5</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-12">
                                                        <div className="slider-btn mb-20">
                                                            <button className="btn ss-btn" data-animation="fadeInRight" data-delay=".8s">Check Availability</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div id="booking" className="booking-area p-relative">
                <div className="container">
                    <form action="#" className="contact-form" >
                        <div className="row align-items-center">
                            <div className="col-lg-12"> 
                                <ul>
                                    <li> 
                                        <div className="contact-field p-relative c-name">  
                                            <label><i className="fal fa-badge-check"></i> Check In Date</label>
                                            <input type="date" id="chackin" name="date" />
                                        </div>      
                                    </li>
                                    <li> 
                                        <div className="contact-field p-relative c-name">  
                                            <label><i className="fal fa-times-octagon"></i> Check Out Date</label>
                                            <input type="date" id="chackout" name="date" />
                                        </div>      
                                    </li>
                                        <li> 
                                        <div className="contact-field p-relative c-name">  
                                                <label><i className="fal fa-users"></i> Adults</label>
                                            <select name="adults" id="adu">
                                                <option value="sports-massage">Adults</option>
                                                <option value="1">1</option>
                                                <option value="2">2</option>
                                                <option value="3">3</option>
                                                <option value="4">4</option>
                                                <option value="5">5</option>
                                            </select>
                                        </div>      
                                    </li>
                                        <li> 
                                        <div className="contact-field p-relative c-name">  
                                                <label><i className="fal fa-baby"></i> Child</label>
                                            <select name="child" id="cld">
                                                <option value="sports-massage">Child</option>
                                                <option value="1">1</option>
                                                <option value="2">2</option>
                                                <option value="3">3</option>
                                                <option value="4">4</option>
                                                <option value="5">5</option>
                                            </select>
                                        </div>      
                                    </li>
                                        <li> 
                                        <div className="contact-field p-relative c-name">  
                                            <label><i className="fal fa-concierge-bell"></i> Room</label>
                                            <select name="room" id="rm">
                                                <option value="sports-massage">Room</option>
                                                <option value="1">1</option>
                                                <option value="2">2</option>
                                                <option value="3">3</option>
                                                <option value="4">4</option>
                                                <option value="5">5</option>
                                            </select>
                                        </div>      
                                    </li>
                                    
                                    <li>
                                        <div className="slider-btn">    
                                            <label><i className="fal fa-calendar-alt"></i></label>
                                        <button className="btn ss-btn" data-animation="fadeInRight" data-delay=".8s">Check Availability</button>
                                    </div>     
                                    </li>
                                </ul>
                            </div>
                        
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Sliderone