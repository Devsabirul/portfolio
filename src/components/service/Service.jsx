import React, { useState } from 'react'
import './service.css'
import Data from './ServiceData'
import ServiceInfo from './ServiceInfo';
const Service = () => {
    const [data, setData] = useState(Data);
    return (
        <>
            <div className="cotainer" id='service'>
                <div className="row p-3 pt-5 text-center">
                    <div className="con-lg-12 service_top_info">
                        <h1>What We Offer</h1>
                        <p>Subheading or information goes here</p>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <ServiceInfo serviceData={data} />
                </div>
            </div>
        </>
    )
}

export default Service
