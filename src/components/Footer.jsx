import React from 'react'

const Footer = () => {
  return (
    <footer id='#footer' className='section footer-dark bg-dark-1'>
        <div className="container px-lg-5">
            <div className="row">
                <div className="col-lg-6 text-center text-lg-start">
                    <p className="mb-3 mb-lg-0 footer-copyright">
                        Copyright © 2024
                        <a href="#home" className='fw-500'> Davronbek </a>
                        . All Rights Reserved.
                    </p>
                </div>
                <div className="col-lg-6">
                    <ul className="nav nav-separator justify-content-center justify-content-lg-end">
                        <li className="nav-item">
                            <a
                            className="nav-link"
                            data-bs-toggle="modal"
                            data-bs-target="#terms-policy"
                            href="#terms-policy"
                            >
                            Terms &amp; Policy
                            </a>
                        </li>
                        <li className="nav-item">
                            <a
                            className="nav-link"
                            data-bs-toggle="modal"
                            data-bs-target="#disclaimer"
                            href="#disclaimer"
                            >
                            Disclaimer
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer