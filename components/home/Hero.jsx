import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image'
import React from 'react'
// wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww w
const Hero = () => {
  return (
    <div className='d-flex'>
      <div className="container py-5">
        <div className="row">
          <div className="col-12 col-lg-6 my-4">
            <h1 className="display-3 fw-bolder">Code Igniter Shop</h1>
            <p className="lead">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet dolorum officia dolor nulla autem impedit perferendis odit animi? Dignissimos dolor officia doloribus repellat id repudiandae cumque, hic nihil nesciunt amet.</p>
            <div className="input-group mb-3">
              <input type="text" className="form-control" placeholder="Type Product" aria-label="Username" aria-describedby="basic-addon1" />
              <span className="input-group-text" id="basic-addon1">
                <FontAwesomeIcon icon={faMagnifyingGlass} className="text-secondary" />
              </span>
            </div>
          </div>
          <div className="d-sm-none d-lg-block col-lg-6 my-4">
            <div style={{ backgroundColor: "pink", borderRadius: "50%", width: "750", height: 'auto' }}>
              <Image alt="" src='/images/hero-img.png' width="720" height="700" />   
            </div>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default Hero