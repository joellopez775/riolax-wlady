import React, { useState } from "react";
import { Link } from 'react-router-dom'
import axios from "axios";


function First() {

        const [firstname, setFirstname] = useState("");
        const [email, setEmail] = useState("");
        const [writecomment, setWritecomment] = useState("");
        const [phone, setPhone] = useState("");
        const [subject, setSubjet] = useState("");

        const handleSumbit = (e) => {
            console.log("Ankit")
            const url = "http://localhost:3000/modal/contact.php";
            let fData = new FormData();
            fData.append("firstname", firstname);
            fData.append("email", email);
            fData.append("writecomment", writecomment);
            fData.append("phone", phone);
            fData.append("subject", subject);
            // axios
            //     .post(url, fData)
            //     .then((response) => {
            //         setFirstname("");
            //         setEmail("");
            //         setWritecomment("");
            //         setPhone("");
            //         setSubjet("");
            //     })
            //     .catch((error) => { });
        };
    

    return (
        <>
            <section id="contact" className="contact-area after-none contact-bg pt-120 pb-120 p-relative fix">
                <div className="container">
                    <div className="row justify-content-center align-items-center">
                        <div className="col-lg-4 order-1">
                            <div className="contact-info">
                                <div className="single-cta pb-30 mb-30 wow fadeInUp animated" data-animation="fadeInDown animated" data-delay=".2s">
                                    <div className="f-cta-icon">
                                        <i className="far fa-map"></i>
                                    </div>
                                    <h5>Office Address</h5>
                                    <p>380 St Kilda Road, Melbourne <br />
                                        VIC 3004, Australia</p>
                                </div>
                                <div className="single-cta pb-30 mb-30 wow fadeInUp animated" data-animation="fadeInDown animated" data-delay=".2s">
                                    <div className="f-cta-icon">
                                        <i className="far fa-clock"></i>
                                    </div>
                                    <h5>Working Hours</h5>
                                    <p>Monday to Friday 09:00 to 18:30 <br />
                                        Saturday 15:30</p>
                                </div>
                                <div className="single-cta wow fadeInUp animated" data-animation="fadeInDown animated" data-delay=".2s">
                                    <div className="f-cta-icon">
                                        <i className="far fa-envelope-open"></i>
                                    </div>
                                    <h5>Message Us</h5>
                                    <p> <Link to="#">support@example.com</Link><br /><Link to="#">info@example.com</Link></p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-8 order-2">
                            <div className="contact-bg02">
                                <div className="section-title center-align mb-40 text-center wow fadeInDown animated" data-animation="fadeInDown" data-delay=".4s">
                                    <h2>
                                        Get In Touch
                                    </h2>
                                </div>
                                <form className="contact-form mt-30" onSubmit={handleSumbit}>
                                    <div className="row">
                                        <div className="col-lg-6 col-md-6">
                                            <div className="contact-field p-relative c-name mb-20">
                                                <input type="text" placeholder="First Name" required value={firstname} onChange={(e)=>{setFirstname(e.target.value)}} />
                                            </div>
                                        </div>

                                        <div className="col-lg-6 col-md-6">
                                            <div className="contact-field p-relative c-subject mb-20">
                                                <input type="text" placeholder="Eamil" required value={email} onChange={(e)=>{setEmail(e.target.value)}} />
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-6">
                                            <div className="contact-field p-relative c-subject mb-20">
                                                <input type="text" placeholder="Phone No." required value={phone} onChange={(e)=>{setPhone(e.target.value)}}/>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-6">
                                            <div className="contact-field p-relative c-subject mb-20">
                                                <input type="text" placeholder="Subject" value={subject} onChange={(e)=>{setSubjet(e.target.value)}}/>
                                            </div>
                                        </div>
                                        <div className="col-lg-12">
                                            <div className="contact-field p-relative c-message mb-30">
                                                <textarea cols="30" rows="10" placeholder="Write comments" value={writecomment} onChange={(e)=>{setWritecomment(e.target.value)}}></textarea>
                                            </div>
                                            <div className="slider-btn">
                                                <button className="btn ss-btn" data-animation="fadeInRight" data-delay=".8s" type="submit"><span>Submit Now</span></button>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default First