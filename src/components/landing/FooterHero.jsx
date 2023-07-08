import { Text, Input, Button } from '@nextui-org/react'
import React from 'react'
import { BsFacebook, BsInstagram, BsLinkedin, BsTwitter } from 'react-icons/bs'

function FooterHero() {
    return (
        <>
            <footer class="footer">
                <div class="waves">
                    <div class="wave" id="wave1"></div>
                    <div class="wave" id="wave2"></div>
                    <div class="wave" id="wave3"></div>
                    <div class="wave" id="wave4"></div>
                </div>
                <div className='d-flex justify-content-around flex-wrap'>
                    <div className='mx-xl-5'>
                        <ul class="social-icon">
                            <li class="social-icon__item"><a class="social-icon__link" href="#">
                                <BsFacebook />
                            </a></li>
                            <li class="social-icon__item"><a class="social-icon__link" href="#">
                                <BsTwitter />
                            </a></li>
                            <li class="social-icon__item"><a class="social-icon__link" href="#">
                                <BsLinkedin />
                            </a></li>
                            <li class="social-icon__item"><a class="social-icon__link" href="#">
                                <BsInstagram />
                            </a></li>
                        </ul>
                        <ul class="menu">
                            <li class="menu__item"><a class="menu__link" href="#">Home</a></li>
                            <li class="menu__item"><a class="menu__link" href="#">About</a></li>
                            <li class="menu__item"><a class="menu__link" href="#">Services</a></li>
                            <li class="menu__item"><a class="menu__link" href="#">Team</a></li>
                            <li class="menu__item"><a class="menu__link" href="#">Contact</a></li>

                        </ul>
                    </div>
                    <div className='my-5 my-lg-0'>
                        <div className='mx-xl-5 d-flex'>
                            <Text h3 color='white' className='fw-normal'>Subscribe to our&nbsp;</Text>
                            <Text h3 color='error' className='fw-bold'>Newsletter</Text>
                        </div>
                        <div className='mx-lg-5 my-2'>
                            <Input
                                width='350px'
                                clearable
                                bordered
                                placeholder="Enter your email.."
                                color='warning'
                                size='lg'
                            />
                        </div>
                        <div className='d-flex justify-content-center'>
                            <Button color='secondary' auto>Send</Button>
                        </div>
                    </div>
                </div>
                <hr color='black' />
                <p>&copy;2023 nude | All Rights Reserved</p>
            </footer>
        </>
    )
}

export default FooterHero