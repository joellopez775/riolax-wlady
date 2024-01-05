import React from 'react'
import { Link } from 'react-router-dom';
import BGImg from "../../assets/img/bg/bdrc-bg.jpg";

function Second({title,subtitle,newtitle }) {
  return (
    <>
        <section className="breadcrumb-area d-flex align-items-center"  style={{ background : `url(${BGImg})`}}>
            <div className="container">
                <div className="row align-items-center">
                        <div className="col-xl-12 col-lg-12">
                            <div className="breadcrumb-wrap text-left">
                                <div className="breadcrumb-title">
                                    <h2>{title}</h2>    
                                    <div className="breadcrumb-wrap">
                                        <nav aria-label="breadcrumb">
                                            <ol className="breadcrumb">
                                                <li className="breadcrumb-item"><Link to="/">{subtitle}</Link></li>
                                                <li className="breadcrumb-item active" aria-current="page">{newtitle}</li>
                                            </ol>
                                        </nav>
                                    </div>
                                </div>
                            </div>
                        </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Second