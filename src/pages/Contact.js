import React from 'react'
import './Contact.css'

function Contact() {
    return (
        <div className='hero-container'>
            <video src='/videos/back.mp4' autoPlay loop muted />
            <div className='contact-container'>
                <div className='contact-info'>
                    <div className='title-contact'>Contact</div>
                    <div id="single" className='top-single'>
                        <div className='office'><h1><i class="far fa-building"></i> Office</h1></div>
                        <h3>Complex Studențesc Hașdeu, Strada Bogdan Petriceicu Hasdeu 90-92, Cluj-Napoca 400000, Romania</h3>
                    </div>
                    <div id="single">
                        <div className='address'><h1><i class="far fa-envelope"></i> Mailing address</h1></div>
                        <h3>Complex Studențesc Hașdeu, Strada Bogdan Petriceicu Hasdeu 90-92, Cluj-Napoca 400000, Romania</h3>
                    </div>
                    <div id="single">
                        <div className='online'><h1><i class="fas fa-at"></i> Online</h1></div>
                        <h3>michal.lachowski@ubbcluj.ro</h3>
                    </div>
                        
                </div>
            </div>
        </div>
    )
}

export default Contact
