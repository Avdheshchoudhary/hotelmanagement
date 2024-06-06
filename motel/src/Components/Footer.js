import React from 'react'
import logo from '../images/logo.webp'
import Button from 'react-bootstrap/esm/Button'
import '@fortawesome/fontawesome-free/css/all.min.css';

const Footer = () => {
    return (
        <>
            <div className='bg-dark text-light'>
                <div className='row ms-2 '>
                    <div className='col-md-9 '>
                        <img className='mt-2' src={logo} alt='a' height={70} width={90} />
                        <span className='fs-2 ' style={{ marginLeft: '100px' }} >World's leading chain of hotels and homes</span>
                    </div>
                    <div className='col-md-2 mt-2'>
                        <Button className='btn-light border-dark btn-lg'>List your Property</Button>
                    </div>
                </div>
                <hr />
                <div className='row ms-5'>
                    <div className='col-md-3'>
                        <p>Download OYO app for exciting offers.</p>
                        <span>
                            <Button className='btn-lg btn-dark border-white'>App Store</Button>
                            <Button className='ms-2 btn-lg btn-dark border-white'>Play Store</Button>
                        </span>
                    </div>
                    <div className='col-md-1' style={{ borderLeft: '1px solid black' }}>
                        <h5>About Us</h5>
                        <h5>Teams/Careers</h5>
                        <h5>Support</h5>
                        <h5>Blog</h5>
                    </div>
                    <div className='col-md-2 text-end'>
                        <span>
                            <h5>Official Blog</h5>
                            <h5>Investor Relations</h5>
                            <h5>Circle</h5>
                            <h5>Firms</h5>
                        </span>
                    </div>
                    <div className='col-md-2 text-end' style={{ borderLeft: '1px solid black' }}>
                        <h5>Terms and Conditions</h5>
                        <h5>Guest Policy</h5>
                        <h5>Privacy Policy</h5>
                        <h5>Trust and Safety</h5>
                    </div>
                    <div className='col-md-2 text-end'>
                        <span>
                            <h5>Cyber Security</h5>
                            <h5>Awareness</h5>
                            <h5>Responsible</h5>
                            <h5>Firms</h5>
                        </span>
                    </div>
                </div>
                <hr />
                <div className=' ms-2 mb-3'>
                    <div className='col-md-6 d-flex justify-content-evenly  '>
                        <a href='https://www.instagram.com' className='text-light me-3'><i className='fab fa-instagram fa-2x'></i></a>
                        <a href='https://www.facebook.com' className='text-light me-3'><i className='fab fa-facebook fa-2x'></i></a>
                        <a href='https://twitter.com' className='text-light me-3'><i className='fab fa-twitter fa-2x'></i></a>
                        <a href='https://www.linkedin.com' className='text-light'><i className='fab fa-linkedin fa-2x'></i></a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer
