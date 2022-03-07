import React from 'react'
import './service.css'

const ServiceInfo = ({ serviceData }) => {
  return (
    <>
      {
        serviceData.map((data) => {
          return (
            <>
              <div className="col-lg-4 pb-5 p-4">
                <div className="card_content">
                  <div className="card_body">
                    <h2 className='text-end card_header'>{data.id}</h2>
                    <h3 className="card_title mt-4">{data.title}</h3>
                    <p className="card_text mt-4">{data.discription}</p>
                  </div>
                </div>
              </div>
            </>
          )
        })
      }
    </>
  )
}

export default ServiceInfo
