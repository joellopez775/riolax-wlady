import React from 'react'
import Slider from "react-slick"
import Brand1 from "../../assets/img/brand/b-logo1.png"
import Brand2 from "../../assets/img/brand/b-logo2.png"
import Brand3 from "../../assets/img/brand/b-logo3.png"
import Brand4 from "../../assets/img/brand/b-logo4.png"
import Brand5 from "../../assets/img/brand/b-logo5.png"

function Brand() {

    const brand = {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 900,
        autoplay: true,
        slidesToShow: 4,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    }


  return (
    <>
        <div className="brand-area pt-60 pb-60"  style={{background :"#f7f5f1"}}>
                <div className="container">
                    <Slider className="row brand-active" {...brand}>
                        <div className="col-xl-2">
                            <div className="single-brand">
                                <img src={Brand1} alt="img"/>
                            </div>
                        </div>
                        <div className="col-xl-2">
                            <div className="single-brand">
                                 <img src={Brand2} alt="img"/>
                            </div>
                        </div>
                        <div className="col-xl-2">
                            <div className="single-brand">
                                 <img src={Brand3} alt="img"/>
                            </div>
                        </div>
                        <div className="col-xl-2">
                            <div className="single-brand">
                                  <img src={Brand4} alt="img"/>
                            </div>
                        </div>
                        <div className="col-xl-2">
                            <div className="single-brand">
                                 <img src={Brand5} alt="img"/>
                            </div>
                        </div>
                    </Slider>
                </div>
        </div>
    </>
  )
}

export default Brand