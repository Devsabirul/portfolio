import React from 'react'
import './about.css'
const About = () => {
  return (
    <>
      <div className="container" id='about'>
        <div className="row  about_section">
          <div className="col-lg-6">
            <img src="./about-img.png" alt="" />
          </div>
          <div className="col-lg-6">
            <div className="about_content">
              <h1>About us</h1>
              <p className='sub_title'>Subheading or information goes here</p>
              <p className='content_1'>
                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
              </p>
              <p className='content_2'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat duis aute irure dolor in reprehende.
              </p>
              <button className='btn btn-success'> Contact now</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default About
