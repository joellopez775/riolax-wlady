import React from 'react'
import Slider from "react-slick"
import { Link } from 'react-router-dom'


function Teem() {

    const team = {
        dots: true,
        arrows: false,
        infinite: true,
        speed: 900,
        autoplay: true,
        slidesToShow: 4
    }

  return (
    <>
        <section className="team-area2 fix p-relative pt-105 pb-80">  
                <div className="container">  
                    <div className="row">   
                        <div className="col-lg-12 p-relative">
                            <div className="section-title center-align mb-40 text-center wow fadeInDown animated" data-animation="fadeInDown" data-delay=".4s">
                                 <h5>Our Team</h5>
                                <h2>
                                     Best Expert Hotel
                                </h2>
                                <p>Proin consectetur non dolor vitae pulvinar. Pellentesque sollicitudin dolor eget neque viverra, sed interdum metus interdum. Cras lobortis pulvinar dolor, sit amet ullamcorper dolor iaculis vel </p>
                            </div>
                        </div> 
                    </div>
                   <Slider className="row team-active" {...team}>                   
                        <div className="col-xl-4 col-md-6">
                            <div className="single-team mb-40" >
                                <div className="team-thumb">
                                    <div className="brd">
                                         <img src="assets/img/team/team01.jpg" alt="img" />
                                    </div>
                                </div>
                                <div className="team-info">
                                    <h4>Howard Holmes</h4>
                                    <p>Designer</p>
                                    <div className="team-social">
                                        <ul>
                                            <li><Link to="#"><i className="fab fa-facebook-f"></i></Link></li> 
                                            <li> <Link to="#"><i className="fab fa-twitter"></i></Link></li>   
                                            <li><Link to="#"><i className="fab fa-instagram"></i></Link></li>   
                                        </ul>       
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-md-6">
                            <div className="single-team mb-40" >
                                <div className="team-thumb">
                                    <div className="brd">
                                        <img src="assets/img/team/team02.jpg" alt="img" />
                                    </div>                                     
                                </div>
                                <div className="team-info">
                                    <h4>Ella Thompson</h4>
                                    <p>Designer</p>
                                    <div className="team-social">
                                        <ul>
                                            <li><Link to="#"><i className="fab fa-facebook-f"></i></Link></li> 
                                            <li> <Link to="#"><i className="fab fa-twitter"></i></Link></li>   
                                            <li><Link to="#"><i className="fab fa-instagram"></i></Link></li>   
                                        </ul>       
                                    </div>
                                </div>
                            </div>
                        </div>
                       <div className="col-xl-4 col-md-6">
                            <div className="single-team mb-40" >
                                <div className="team-thumb">
                                    <div className="brd">
                                        <img src="assets/img/team/team03.jpg" alt="img" />
                                    </div>
                                    
                                </div>
                                <div className="team-info">
                                    <h4>Vincent Cooper</h4>
                                    <p>Designer</p>
                                    <div className="team-social">
                                        <ul>
                                            <li><Link to="#"><i className="fab fa-facebook-f"></i></Link></li> 
                                            <li> <Link to="#"><i className="fab fa-twitter"></i></Link></li>   
                                            <li><Link to="#"><i className="fab fa-instagram"></i></Link></li>   
                                        </ul>       
                                    </div>
                                </div>
                            </div>
                        </div>
                         <div className="col-xl-4 col-md-6">
                            <div className="single-team mb-40" >
                                <div className="team-thumb">
                                    <div className="brd">
                                         <img src="assets/img/team/team04.jpg" alt="img" />
                                    </div>
                                
                                </div>
                                <div className="team-info">
                                    <h4>Danielle Bryant</h4>
                                    <p>Designer</p>
                                    <div className="team-social">
                                        <ul>
                                            <li><Link to="#"><i className="fab fa-facebook-f"></i></Link></li> 
                                            <li> <Link to="#"><i className="fab fa-twitter"></i></Link></li>   
                                            <li><Link to="#"><i className="fab fa-instagram"></i></Link></li>   
                                        </ul>       
                                    </div>
                                </div>
                            </div>
                        </div>
                       <div className="col-xl-4 col-md-6">
                            <div className="single-team mb-40" >
                                <div className="team-thumb">
                                    <div className="brd">
                                        <img src="assets/img/team/team05.jpg" alt="img" />
                                    </div>
                                    
                                </div>
                                <div className="team-info">
                                    <h4>Vincent Cooper</h4>
                                    <p>Designer</p>
                                    <div className="team-social">
                                        <ul>
                                            <li><Link to="#"><i className="fab fa-facebook-f"></i></Link></li> 
                                            <li> <Link to="#"><i className="fab fa-twitter"></i></Link></li>   
                                            <li><Link to="#"><i className="fab fa-instagram"></i></Link></li>   
                                        </ul>       
                                    </div>
                                </div>
                            </div>
                        </div>                        
                    </Slider>
                </div>
        </section>
    </>
  )
}

export default Teem