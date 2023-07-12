import React from 'react'
import { FaEnvelope, FaFacebookSquare, FaInstagramSquare, FaLocationPin, FaMapPin, FaPhone, FaSearchLocation, FaTwitterSquare } from 'react-icons/fa'

function FooterHero() {
    return (
        <>
            <footer class="footer mt-5 pt-5 pb-3 px-3">
                {/* <div class="waves">
                    <div class="wave" id="wave1"></div>
                    <div class="wave" id="wave2"></div>
                    <div class="wave" id="wave3"></div>
                    <div class="wave" id="wave4"></div>
                </div> */}
                <div class="container">
                    <div class="row">
                        <div class="col-lg-5 col-xs-12 about-company">
                            <h2>nude<span className='text-danger'>.</span></h2>
                            <p class="pr-5 text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac ante mollis quam tristique convallis </p>
                            <p className='my-3 mb-5'>
                                <a href="#" className='mx-2'><FaFacebookSquare size={40} /></a>
                                <a href="#" className='mx-2'><FaInstagramSquare size={40} /></a>
                                <a href='#' className='mx-2'><FaTwitterSquare size={40} /></a>
                            </p>
                        </div>
                        <div class="col-lg-3 col-xs-12 links my-2">
                            <h3 class="mt-lg-0 mt-sm-3">Our Products</h3>
                            <ul class="m-0 p-0 mb-0">
                                <li className='text-danger'>- <a href="#">Lorem ipsum</a></li>
                                <li className='text-danger'>- <a href="#">Nam mauris velit</a></li>
                                <li className='text-danger'>- <a href="#">Etiam vitae mauris</a></li>
                                <li className='text-danger'>- <a href="#">Fusce scelerisque</a></li>
                            </ul>
                        </div>
                        <div class="col-lg-4 col-xs-12 location my-2">
                            <h3 class="mt-lg-0 mt-sm-4">Location</h3>
                            <p><FaMapPin size={20}/>&nbsp;&nbsp;22, Lorem ipsum dolor, consectetur adipiscing</p>
                            <p class="mb-0"><FaPhone size={20}/>&nbsp;&nbsp;+91 7008297411</p>
                            <p><FaEnvelope size={20}/>&nbsp;&nbsp;info@hsdf.com</p>
                        </div>
                    </div>
                    <div class="row mt-5">
                        <div class="col copyright">
                            <p class=""><small class="text-white-50">© 2019. All Rights Reserved.</small></p>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default FooterHero