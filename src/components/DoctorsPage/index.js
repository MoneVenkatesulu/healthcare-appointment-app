import { useContext, useState, useEffect } from "react";

import { FaSearch } from "react-icons/fa";

import HealthcareAppointmentContext from '../../context/HealthcareAppointmentContext';
import Header from '../Header';
import DoctorDetails from '../DoctorDetails';

import './index.css'

export default function DoctorsPage() {
    const {doctorsList} =  useContext(HealthcareAppointmentContext);
    const [doctorsData, setDoctorsData] = useState([]);
    const [specilizationsList, setSpecilizationsList] = useState([]);
    const [userInput, setUserInput] = useState('');

    useEffect(() => {
        setDoctorsData(doctorsList);
    }, [doctorsList]);

    useEffect(() => {
        const specializations = doctorsList.map(eachItem => eachItem.specialization);
        setSpecilizationsList(["All Specializations", ...(new Set(specializations))]);
    }, [doctorsList]);

    const onChangeUserInput = event => {
        setUserInput(event.target.value);
    };

    function onClickSearchIcon() {
        setDoctorsData(doctorsList.filter(eachItem => eachItem.name.toLowerCase().includes(userInput.toLowerCase())));
    }

    function onChangeSpecialization(event) {
        const selected = event.target.value;
        setDoctorsData(doctorsList.filter(eachItem => selected === "All Specializations" || selected ===  eachItem.specialization));
    }

    const renderAllDoctors = () => (
        <ul className="doctors-list d-flex justify-content-center flex-wrap gap-2 gap-md-4">
            {doctorsData.map(eachItem => <DoctorDetails key={eachItem.id} eachDoctor={eachItem} />)}
        </ul>
    );

    return (
        <div className="doctors-container d-flex flex-column">
            <Header />
            <div className="doctors-content flex-grow-1 p-3 p-md-5 pt-md-4">
                <div className="d-flex flex-wrap gap-3 pb-3">
                    <div className="searchbar-container d-flex justify-content-between align-items-center">
                        <input type='search' placeholder='Doctor Name' className="searchbar" value={userInput} onChange={onChangeUserInput} />
                        <FaSearch className="search-icon" onClick={onClickSearchIcon}/>
                    </div>
                    <select className="specializations-bar" onChange={onChangeSpecialization}>
                        {specilizationsList.map(eachItem => <option key={eachItem} value={eachItem}>{eachItem}</option>)}
                    </select>
                </div>

                {renderAllDoctors()}
            </div>
        </div>
    );

};