import React, { useState } from 'react';
import HowTouse from './Api/Howtouse.js';

const Aboutus = () => {
    const [aboutData, setAboutData] = useState(HowTouse)
    return (
        <>
            <section className="common-section our-services">
                <div className="container mb-5">
                    <div className="row">
                        <div className="col-12 col-lg-5 text-center our-service-leftside-img">
                            <img src="./image/hero3.jpg" alt="aboutusIMg" />
                        </div>

                        {/* 1section right side data  */}
                        <div className="col-12 col-lg-7 our-services-list">
                            <h3 className="mini-title">
                                -- AVAILABLE @ GOOGLE AND IOS APP STORE ONLY
                            </h3>
                            <h1 className="main-heading">How to use the App?</h1>

                            {aboutData.map((curElem) => {
                                const { id, title, info } = curElem;
                                return (
                                    <>
                                        <div className="row our-services-info" key={id}>
                                            <div className="col-1 our-services-number">{id}</div>
                                            <div className="col-10 our-services-data">
                                                <h2>{title}</h2>
                                                <p className="main-hero-para">{info}</p>
                                            </div>
                                        </div>
                                    </>
                                );
                            })}

                            <br />
                            <button className="btn-style btn-style-border">learn more</button>
                        </div>
                    </div>
                </div>
            </section>

            { /*2nd part of About us------------*/ }

            <section className="common-section our-services">
                <div className="container mb-5">
                    <div className="row">
                        

                        {/* 1section right side data  */}
                        <div className="col-12 col-lg-7 our-services-list">
                            <h3 className="mini-title">
                                -- SUPPORT IN ANY LANGUAGE
                            </h3>
                            <h1 className="main-heading">World class support is <br />available 24/7 </h1>

                            {aboutData.map((curElem) => {
                                const { id, title, info } = curElem;
                                return (
                                    <>
                                        <div className="row our-services-info" key={id}>
                                            <div className="col-1 our-services-number">{id}</div>
                                            <div className="col-10 our-services-data">
                                                <h2>{title}</h2>
                                                <p className="main-hero-para">{info}</p>
                                            </div>
                                        </div>
                                    </>
                                );
                            })}

                            <br />
                            <button className="btn-style btn-style-border">learn more</button>
                        </div>

                        {/* ---------images section----------- */}
                        <div className="col-12 col-lg-5  our-service-righttside-img">
                            <img src="./image/callcenter.jpg" alt="aboutusIMg" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
};

export default Aboutus;
