import React from 'react'
import './portfolio.css'

const PortfolioInfo = ({ gallery }) => {
    console.log(gallery)
    return (
        <>
            {
                gallery.map((data) => {
                    return (
                        <>
                            <div className="col-lg-4">
                                <div className="gallery">
                                    <img src={data.img} alt="" />
                                </div>
                            </div>
                        </>
                    )
                })
            }
        </>
    )
}

export default PortfolioInfo
