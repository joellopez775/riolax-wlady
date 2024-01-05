import React from 'react'

function Skill() {
    return (
        <>
            <section id="skill" className="skill-area p-relative fix" style={{ background: "#291d16" }}>
                <div className="animations-01"><img src="assets/img/bg/an-img-05.png" alt="contact-bg-an-05" /></div>
                <div className="container">
                    <div className="row justify-content-center align-items-center">
                        <div className="col-lg-6 col-md-12 col-sm-12">
                            <div className="skills-content s-about-content">
                                <div className="skills-title pb-20">
                                    <h5>Rio We Use</h5>
                                    <h2>
                                        We Offer Wide Selection of Hotel
                                    </h2>
                                </div>
                                <p>Vestibulum non ornare nunc. Maecenas a metus in est iaculis pretium. Aliquam ullamcorper nibh lacus, ac suscipit ipsum consequat porttitor.</p>
                                <div className="skills-content s-about-content mt-20">
                                    <div className="skills">
                                        <div className="skill mb-30">
                                            <div className="skill-name">Qulity Production</div>
                                            <div className="skill-bar">
                                                <div className="skill-per" id="80" style={{ width: "80%" }}></div>
                                            </div>
                                        </div>
                                        <div className="skill mb-30">
                                            <div className="skill-name">Maintenance Services</div>
                                            <div className="skill-bar">
                                                <div className="skill-per" id="90" style={{ width: "90%" }}></div>
                                            </div>
                                        </div>
                                        <div className="skill mb-30">
                                            <div className="skill-name">Product Managment</div>
                                            <div className="skill-bar">
                                                <div className="skill-per" id="70" style={{ width: "70%" }}></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12 col-sm-12 pr-30">
                            <div className="skills-img wow fadeInRight  animated" data-animation="fadeInRight" data-delay=".4s">
                                <img src="assets/img/bg/skills-img.png" alt="img" className="img" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Skill