import { Link } from 'react-router-dom';

import './index.css'


export default function Home() {
    return (
        <div className='home-container flex-grow-1 d-flex flex-column flex-md-row justify-content-center justify-content-md-around align-items-center'>
            <img src="https://res.cloudinary.com/dmlk7cxkm/image/upload/v1754026371/Screenshot_2025-08-01_105654_cpwua0.png" alt="doctor symbol" className='doctor-img order-md-1 pb-5' />

            <div className='d-flex flex-column align-items-center align-items-md-start '>
                <p className='home-text home-text-tagline fw-semibold'>TOTAL HEALTH CARE SOLUTIONS</p>
                <h1 className='home-text text-white fw-bold'>Best Care & Better Doctor.</h1>
                <Link to="/doctors" className='mt-3'>
                    <button type="button" className='btn btn-info text-white'>Go for Doctor</button>
                </Link>
            </div>
        </div>
    );
};