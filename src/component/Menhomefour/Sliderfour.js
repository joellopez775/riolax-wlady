import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import BGImg from "../../assets/img/slider/slider_bg_01.png";


function Sliderfour() {

    const [hShow, sethShow] = useState()

    return (
        <>
            <section id="home" className="slider-area fix p-relative">
                <div className="slider-active" style={{ background: "#101010" }} >
                    <div className="single-slider slider-bg d-flex align-items-center" style={{ backgroundImage: `url(${BGImg})` }}>
                        <div className="container">
                            <div className="row justify-content-center align-items-center">
                                <div className="col-lg-7 col-md-7">
                                    <div className="slider-content s-slider-content mt-80 text-center">
                                        <h2 data-animation="fadeInUp" data-delay=".4s">Enjoy A Luxuary Experience</h2>
                                        <p data-animation="fadeInUp" data-delay=".6s">Donec vitae libero non enim placerat eleifend aliquam erat volutpat. Curabitur diam ex, dapibus purus sapien, cursus sed nisl tristique, commodo gravida lectus non.</p>

                                        <div className="slider-btn mt-30 mb-105">
                                            <Link to="/contact" className="btn ss-btn active mr-15" data-animation="fadeInLeft" data-delay=".4s">Discover More </Link>
                                            <Link to="#" onClick={() => sethShow(true)} className="video-i popup-video" data-animation="fadeInUp" data-delay=".8s" style={{ animation_delay: " 0.8s" }} tabIndex="0"><i className="fas fa-play"></i> Intro Video</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {hShow &&
                <>
                    <div className="mfp-bg mfp-ready"></div>
                    <div className="mfp-wrap mfp-close-btn-in mfp-auto-cursor mfp-ready" tabIndex="-1" style={{ overflow: "hidden" }}>
                        <div className="mfp-container mfp-s-ready mfp-iframe-holder">
                            <div className="mfp-content">
                                <div className="mfp-iframe-scaler">
                                    <button title="Close (Esc)" type="button" className="mfp-close" onClick={() => sethShow(false)}>×</button>
                                    <iframe className="mfp-iframe" src="//www.youtube.com/embed/gyGsPlt06bo?autoplay=1" frameborder="0" allowFullScreen=""></iframe>
                                </div>
                            </div>
                            <div className="mfp-preloader">Loading...</div>
                        </div>
                    </div>
                </>
            }
        </>
    )
}

export default Sliderfour