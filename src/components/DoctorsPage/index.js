import { useContext } from "react";

import HealthcareAppointmentContext from '../../context/HealthcareAppointmentContext';
import Header from '../Header';
import DoctorDetails from '../DoctorDetails';

import './index.css'

export default function DoctorsPage() {
    const {doctorsList} =  useContext(HealthcareAppointmentContext);


    const renderAllDoctors = () => (
        <ul className="doctors-list d-flex justify-content-center flex-wrap gap-2 gap-md-4">
            {doctorsList.map(eachItem => <DoctorDetails key={eachItem.id} eachDoctor={eachItem} />)}
        </ul>
    );

    return (
        <div className="doctors-container d-flex flex-column">
            <Header />
            <div className="doctors-content flex-grow-1 p-3 p-md-5 pt-md-4">
                {renderAllDoctors()}
            </div>
        </div>
    );

};