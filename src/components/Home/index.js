import { Link } from 'react-router-dom';

import Header from '../Header';

import './index.css'


export default function Home() {
    return (
        <div className='home-container d-flex flex-column'>
            <Header />
            <div className='home-content flex-grow-1 d-flex flex-column justify-content-center p-3 p-md-5'>
                <img src="https://res.cloudinary.com/dmlk7cxkm/image/upload/v1754026371/Screenshot_2025-08-01_105654_cpwua0.png" alt="doctor-symbol" className='doctor-symbol pb-5' />
        
                <p className='home-text home-text-tagline fw-semibold'>TOTAL HEALTH CARE SOLUTIONS</p>
                <h1 className='home-text text-white fw-bold'>Best Care & Better Doctor.</h1>
                <Link to="/doctors" className='react-link-element mt-3'>
                    <button type="button" className='btn btn-primary text-white'>Go for Doctor</button>
                </Link>
            </div>
        </div>
    );
};