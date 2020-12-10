import { faFacebook, faFacebookF, faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import Typical from 'react-typical'

const Headermain = () => {
    return (
        <div className="d-flex flex-column text-center text-white">
            <h1 class="display-3">Hello, I am <span className="highlight-text">Sajib</span></h1>
            {/* <Typical className="highlight-text"
                steps={[
                  "Hello, I am Sumita",
                  9000,
                  ".",
                  9000,
                //   "according to my qualifications during my job.",
                //   2000,
                ]}
                loop={Infinity}
                wrapper="h1"
              /> */}
            <p className="lead"><span className="text-slider-items">A self-motivated, energetic and active person,<br /> I want to be a perfect aiding-hand of your organization<br /> according to my qualifications during my job.</span></p>
            <div className="social-media">
                <a href="https://www.facebook.com/sumita.sumi.56/" target="_blank"><FontAwesomeIcon className="icon" icon={faFacebook} /></a>
                <a href="" target="_blank"><FontAwesomeIcon className="icon" icon={faLinkedinIn} /></a>
                <a href="https://github.com/Sumita5" target="_blank"><FontAwesomeIcon className="icon" icon={faGithub} /></a>
            </div>

        </div>
    );
};

export default Headermain;