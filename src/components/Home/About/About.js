import React, { useState } from 'react';
import profilePic from '../../../images/sajib2X2.jpg';
import MessageModal from '../MessageModal/MessageModal';

import './About.css';

const About = () => {
    const [modalIsOpen, setIsOpen] = useState(false);
  console.log(setIsOpen);

  function openModal() {
    console.log("object");
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }
    return (

        <div id="about" className="about text-center">
            <img src={profilePic} alt="" style={{ width: '100px', height: '100px' }} className='mx-auto rounded-circle img-fluid' />
            <p className="lead font-weight-bold ml-5 mt-2">Engineer | Web Developer</p>  

            <div className="d-flex justify-content-center">
              <div>
                <button
                  onClick={openModal}
                  className="btn btn-outline-info"
                >
                  Send Massage
                </button>
                <MessageModal
                  modalIsOpen={modalIsOpen}
                  closeModal={closeModal}
                />
              </div>
              <div>
                <a href="https://drive.google.com/file/d/14ge-FvB8kaC38a-KdN6ze7Duet0ECJ0w/view?usp=sharing">
                  <button className="btn btn-info ml-3">
                    <strong>Download Resume</strong>
                  </button>
                </a>
              </div>
            </div> 
            <footer className=" text-center mt-2 pt-4">
                copyright orange labs 2020
            </footer>         
        </div>


















        // <section className="about p-3">

        //     <div className="row m-4">
        //         <div className="col-md-4">
        //         {/* <img src={profilePic} alt="" style={{ width: '100px', height: '100px' }} className='mx-auto rounded-circle img-fluid' /> */}
        //             {/* <p className="lead font-weight-bold">Engineer | Web Developer</p> */}
        //             <h1>Let us handle your</h1>
        //             <h1> project, professionally.</h1>
        //             <p>With well written codes, we build amazing apps for all platforms, mobile and web apps in general</p>
        //         </div>
        //         <div className="col-md-8">
        //             <form action="">
        //                 <div className="form-group">
        //                     <input type="text" className="form-control" placeholder="Your Email Address " />
        //                 </div>
        //                 <div className="form-group">
        //                     <input type="text" className="form-control" placeholder="Your name/Company's name" />
        //                 </div>
        //                 <div className="form-group">
        //                     <textarea name="" className="form-control" id="" cols="30" rows="10" placeholder="Your massage"></textarea>
        //                 </div>
        //                 <div className="form-group">
        //                     <button style={{ width: "100px" }} type="button" class="btn btn-dark">Send</button>
        //                 </div>
        //             </form>
        //         </div>
        //     </div>

            
        // </section> 

    );
};

export default About;