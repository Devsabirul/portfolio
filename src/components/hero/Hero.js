import React from 'react'
import './hero.css'

const Hero = () => {
    return (
        <>
            <div className="hero" id='home'>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-5 hero_img hide-img">
                            <img src="cb1.png" alt="" />
                        </div>
                        <div className="col-lg-6 col-md-7 d-flex align-items-center  justify-content-end hero-sm-c">
                            <div className="content">
                                <h3>Hi There, I'm</h3>
                                <h1>John Doe</h1>
                                <p>based in Los Angeles, USA</p>
                                <button className='btn btn-info content-btn'>View My Works</button>
                                <button className='btn btn-info content-btn2'>Contact me</button>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Hero
