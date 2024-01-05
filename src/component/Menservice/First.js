import React from 'react'
import { Link } from 'react-router-dom'

function First() {
  return (
    <>
        <section id="service-details2" className="pt-120 pb-90 p-relative">
                <div className="animations-01"><img src="assets/img/bg/an-img-01.png" alt="an-img-01" /></div>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-4 col-md-6">
                                <div className="services-08-item mb-30">
                                    <div className="services-icon2">
                                       <img src="assets/img/icon/fe-icon01.png" alt="img"/>
                                    </div>
                                    <div className="services-08-thumb">
                                     <img src="assets/img/icon/fe-icon01.png" alt="img"/>
                                    </div>
                                    <div className="services-08-content">
                                        <h3><Link to="/service-details"> Qulity Room</Link></h3>
                                        <p>Nullam molestie lacus sit amet velit fermentum feugiat. Mauris auctor eget nunc sit amet.</p>
                                        <Link to="/service-details">Read More <i className="fal fa-long-arrow-right"></i></Link>
                                    </div>
                                </div>
                            </div>
                              <div className="col-lg-4 col-md-6">                                  
                                <div className="services-08-item mb-30">
                                     <div className="services-icon2">
                                       <img src="assets/img/icon/fe-icon04.png" alt="img"/>
                                    </div>
                                    <div className="services-08-thumb">
                                   <img src="assets/img/icon/fe-icon04.png" alt="img"/>
                                    </div>
                                    <div className="services-08-content">
                                        <h3><Link to="/service-details">Privet Beach</Link></h3>
                                       <p>Nullam molestie lacus sit amet velit fermentum feugiat. Mauris auctor eget nunc sit amet.</p>
                                         <Link to="/service-details">Read More <i className="fal fa-long-arrow-right"></i></Link>
                                    </div>
                                </div>
                            </div>
                             <div className="col-lg-4 col-md-6">
                               <div className="services-08-item mb-30">
                                     <div className="services-icon2">
                                       <img src="assets/img/icon/fe-icon05.png" alt="img"/>
                                    </div>
                                    <div className="services-08-thumb">
                                     <img src="assets/img/icon/fe-icon05.png" alt="img"/>
                                    </div>
                                    <div className="services-08-content">
                                        <h3><Link to="/service-details">Best Accommodation</Link></h3>
                                        <p>Nullam molestie lacus sit amet velit fermentum feugiat. Mauris auctor eget nunc sit amet.</p>
                                         <Link to="/service-details">Read More <i className="fal fa-long-arrow-right"></i></Link>
                                    </div>
                                </div>
                            </div>
                         <div className="col-lg-4 col-md-6">
                               <div className="services-08-item mb-30">
                                     <div className="services-icon2">
                                       <img src="assets/img/icon/fe-icon06.png" alt="img"/>
                                    </div>
                                    <div className="services-08-thumb">
                                     <img src="assets/img/icon/fe-icon06.png" alt="img"/>
                                    </div>
                                    <div className="services-08-content">
                                        <h3><Link to="/service-details"> Wellness & Spa</Link></h3>
                                        <p>Nullam molestie lacus sit amet velit fermentum feugiat. Mauris auctor eget nunc sit amet.</p>
                                        <Link to="/service-details">Read More <i className="fal fa-long-arrow-right"></i></Link>
                                    </div>
                                </div>
                            </div>
                              <div className="col-lg-4 col-md-6">
                               <div className="services-08-item mb-30">
                                   <div className="services-icon2">
                                       <img src="assets/img/icon/fe-icon07.png" alt="img"/>
                                    </div>
                                    <div className="services-08-thumb">
                                   <img src="assets/img/icon/fe-icon07.png" alt="img"/>
                                    </div>
                                    <div className="services-08-content">
                                        <h3><Link to="/service-details">Restaurants & Bars</Link></h3>
                                       <p>Nullam molestie lacus sit amet velit fermentum feugiat. Mauris auctor eget nunc sit amet.</p>
                                         <Link to="/service-details">Read More <i className="fal fa-long-arrow-right"></i></Link>
                                    </div>
                                </div>
                            </div>
                             <div className="col-lg-4 col-md-6">
                                <div className="services-08-item mb-30">
                                    <div className="services-icon2">
                                       <img src="assets/img/icon/fe-icon08.png" alt="img"/>
                                    </div>
                                    <div className="services-08-thumb">
                                     <img src="assets/img/icon/fe-icon08.png" alt="img"/>
                                    </div>
                                    <div className="services-08-content">
                                        <h3><Link to="/service-details">Special Offers</Link></h3>
                                        <p>Nullam molestie lacus sit amet velit fermentum feugiat. Mauris auctor eget nunc sit amet.</p>
                                         <Link to="/service-details">Read More <i className="fal fa-long-arrow-right"></i></Link>
                                    </div>
                                </div>
                            </div>
                    </div>
                </div>
        </section>
    </>
  )
}

export default First