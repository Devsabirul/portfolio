import React, { useState } from 'react'
import Gallery from './PortfolioApi'
import PortfolioInfo from './PortfolioInfo';
const Portfolio = () => {
    const [data, setData] = useState(Gallery);
    return (
        <>
            <div className="container" id="portfolio">
                <div className="row p-3 pt-5 text-center">
                    <div className="con-lg-12 service_top_info">
                        <h1>Our Portfolio</h1>
                        <p>Subheading or information goes here</p>
                    </div>
                </div>
                <div className="row mb-5">
                    <PortfolioInfo gallery={data} />
                </div>
            </div>
        </>
    )
}

export default Portfolio
