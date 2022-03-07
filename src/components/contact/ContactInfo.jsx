import React from 'react'

const ContactInfo = () => {
    return (
        <>
            <div className="row mt-5 mb-5">
                <div className="col-lg-6 pb-0">
                    <div className="form_content">
                        <form action="">
                            <div className="row">
                                <div className="col-6">
                                    <div className="">
                                        <label htmlFor="">Name</label><br />
                                        <input type="text" placeholder='Name' required />
                                    </div>
                                    <div className="mt-4">
                                        <label htmlFor="">Email</label><br />
                                        <input type="email" placeholder='Email' required />
                                    </div>
                                    <div className="mt-4">
                                        <label htmlFor="">Subject</label><br />
                                        <input type="text" placeholder='Subject' required />
                                    </div>
                                </div>
                                <div className="col-lg-6 col-sm-12 mt-4">
                                    <textarea className="massageBox p-2" rows="10" cols="30" placeholder='Massage'></textarea>
                                </div>
                            </div>
                            <button className='button_content w-100' mt-2>Submit</button>
                        </form>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="contact_info">
                        <div className="contact_content">
                            <h1>What’s your story? Get in touch</h1>
                            <p>Always available for freelancing if the right project comes along, Feel free to contact me.</p>
                            <span>123 Stree NY, USA 750065</span>
                            <hr />
                            <p className='fs-5 '>support@domain.com</p>
                            <hr />
                            <p className='fs-5 '>+044 9696 9696 3636</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ContactInfo
