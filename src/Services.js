import React, { useState } from 'react'
import ServiceApi from './Api/ServiceApi.js';

const Services = () => {
    const [serviceData, setserviceData] = useState(ServiceApi);
    return (
        <>
            <section className="Services-main-container">
                <div className='container Service-container'>
                    <h1 className='main-heading text-center '>How to send money
                    </h1>
                    <div className='row'>
                        {serviceData.map((curElem) => {
                            const { id, logo, title, info } = curElem;

                            return (
                                <>
                                    <div className='col-12 col-lg-4 col-xxl-4 work-container-sub-div ' key={id}>
                                        <i className={`fontawesome-style ${logo}`}></i>
                                        <h2 className='sub-heading fw-bold'>{title}</h2>
                                        <p>
                                            {info}
                                        </p>
                                    </div>

                                </>);
                        })};

                    </div>
                </div>
            </section>
        </>
    )
}

export default Services;
