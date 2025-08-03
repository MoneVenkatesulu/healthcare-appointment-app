import { FaTwitterSquare, FaInstagramSquare, FaFacebookSquare } from "react-icons/fa";

import './index.css';

export default function About(){

    return (
        
        <div className='about-container flex-grow-1 d-flex flex-column flex-md-row justify-content-md-around align-items-center gap-3  px-2 px-md-3 px-xl-5  pt-3'>
            <img 
                src="https://res.cloudinary.com/dmlk7cxkm/image/upload/v1754213712/Screenshot_2025-08-03_135558_xjv0ak.png" 
                alt="doctors" 
                className="about-img order-md-1 w-50" 
            />

            <div>
                <section>
                    <h5>What is NirogGyan?</h5>
                    <p>NirogGyan is a modern digital platform designed to simplify healthcare appointment bookings.</p>
                </section>
                <section>
                    <h5>Our Mission</h5>
                    <p>Our mission is to bridge the gap between patients and quality healthcare.</p>
                </section>
                <div className=" text-center text-md-start pt-2 pt-md-3">
                    <h4 className='fw-bold'>Contact Us?</h4>
                    <ul className="social-networks-container d-flex justify-content-center justify-content-md-start gap-2 gap-3 p-0 pt-2">
                        <li><FaTwitterSquare className="social-networks-icons text-info" /></li>
                        <li><FaInstagramSquare className="social-networks-icons text-danger" /></li>
                        <li><FaFacebookSquare className="social-networks-icons text-primary" /></li>
                    </ul>
                    <p className="m-0">Website</p>
                    <small className="website-url"><em className="text-primary">www.niroggyan.healthcare</em></small>
                </div>
            </div>
            
        </div>
    );

};