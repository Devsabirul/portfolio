import React from 'react'
import './contact.css'
import ContactInfo from './ContactInfo';
const Contact = () => {
    return (
        <>
            <div className="cotainer" id='contact'>
                <div className="row p-3 pt-5 text-center">
                    <div className="con-lg-12 service_top_info">
                        <h1>Contact Me</h1>
                        <p>Subheading or information goes here</p>
                    </div>
                </div>
            </div>
            <div className="container">
                <ContactInfo />
            </div>
        </>
    )
}

export default Contact;
