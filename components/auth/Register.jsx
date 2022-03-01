import { faEnvelope, faKey, faLock, faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image'
import React, { useState } from 'react'
import { useRouter } from "next/router"
import axios from 'axios'

const Register = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    password_confirm: ''
  });

  const { firstname, lastname, email, password, password_confirm } =formData;

  const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async e => {
    e.preventDefault();
    if(password !== password_confirm) {
      window.alert('Password do not match')
    } else {
      const config = {
        headers: {
          "Content-Type": "application/json"
        }
      }

      const body = JSON.stringify({ firstname, lastname, email, password, password_confirm });

      try {
        const res = await axios.post('http://localhost:8080/user/register', body, config);

        window.alert('User Account Created Successfully')
      } catch (err) {
        console.error(err)
      }
    }
  }





  return (
    <section className="vh-100" style={{backgroundColor: "#eee"}}>
      <div className="container h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-lg-12 col-xl-11">
            <div className="card text-black" style={{borderRadius: "25px"}}>
              <div className="card-body p-md-5">
                <div className="row justify-content-center">
                  <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

                    <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>

                    <form onSubmit={e => onSubmit(e)} className="mx-1 mx-md-4">

                      <div className="d-flex flex-row align-items-center mb-4">
                        <FontAwesomeIcon icon={faUser} className="fa-lg me-3 fa-fw"/>
                        <div className="form-outline flex-fill mb-0">
                          <input 
                            type="text"
                            name='firstname'
                            onChange={e => onChange(e)}
                            value={firstname} 
                            placeholder='Firstname' 
                            id="form3Example1c" 
                            className="form-control" 
                          />
                        </div>
                      </div>

                      <div className="d-flex flex-row align-items-center mb-4">
                        <FontAwesomeIcon icon={faUser} className="fa-lg me-3 fa-fw"/>
                        <div className="form-outline flex-fill mb-0">
                          <input 
                            type="text" 
                            name='lastname'
                            onChange={e => onChange(e)} 
                            value={lastname} 
                            placeholder='Lastname' 
                            id="form3Example1ccc" 
                            className="form-control" 
                          />
                        </div>
                      </div>

                      <div className="d-flex flex-row align-items-center mb-4">
                        <FontAwesomeIcon icon={faEnvelope} className="fa-lg me-3 fa-fw"/>
                        <div className="form-outline flex-fill mb-0">
                          <input 
                            type="email" 
                            name='email'
                            onChange={e => onChange(e)} 
                            value={email} 
                            placeholder='Email' 
                            id="form3Example3c" 
                            className="form-control" 
                          />
                        </div>
                      </div>

                      <div className="d-flex flex-row align-items-center mb-4">
                        <FontAwesomeIcon icon={faLock} className="fa-lg me-3 fa-fw"/>
                        <div className="form-outline flex-fill mb-0">
                          <input 
                            type="password" 
                            name='password'
                            onChange={e => onChange(e)} 
                            value={password} 
                            placeholder='Password' 
                            id="form3Example4c" 
                            className="form-control" 
                          />
                        </div>
                      </div>

                      <div className="d-flex flex-row align-items-center mb-4">
                        <FontAwesomeIcon icon={faKey} className="fa-lg me-3 fa-fw"/>
                        <div className="form-outline flex-fill mb-0">
                          <input 
                            type="password" 
                            name='password_confirm'
                            onChange={e => onChange(e)} 
                            value={password_confirm} 
                            placeholder='Confirm Password' 
                            id="form3Example4cd" 
                            className="form-control" 
                          />
                        </div>
                      </div>

                      <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                        <input 
                          type="submit" 
                          value="Register" 
                          className="btn btn-primary btn-lg" 
                        />
                      </div>

                    </form>

                  </div>
                  <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center justify-content-center order-1 order-lg-2">

                    <Image width={480} height={320} src="/images/draw1.webp" className="img-fluid" alt="Sample image" />

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Register