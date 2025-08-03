import { useContext, useState, useEffect } from "react";

import HealthcareAppointmentContext from '../../context/HealthcareAppointmentContext';
import DoctorDetails from '../DoctorDetails';

import './index.css';

export default function DoctorsPage() {
    const {doctorsList} =  useContext(HealthcareAppointmentContext);
    const [doctorsData, setDoctorsData] = useState([]);
    const [specializationsList, setSpecializationsList] = useState([]);
    const [userInput, setUserInput] = useState('');
    const [selectedSpecialization, setSpecialization] = useState("All Specializations");

    useEffect(() => {
        setDoctorsData(doctorsList);
    }, [doctorsList]);

    useEffect(() => {
        const specializationsSet = new Set(doctorsList.map(doc => doc.specialization));
        setSpecializationsList(["All Specializations", ...specializationsSet]);
    }, [doctorsList]);

    useEffect(() => {
        setDoctorsData(
            doctorsList.filter(doctor => {
                const matchName = doctor.name.toLowerCase().includes(userInput.toLowerCase());
                const matchSpec = selectedSpecialization === "All Specializations" || selectedSpecialization === doctor.specialization;
                return matchName && matchSpec;
            })
        );
    }, [doctorsList, userInput, selectedSpecialization]);

    const onChangeUserInput = event => {
        const input = event.target.value;
        setUserInput(input);
    };

    function onChangeSpecialization(event) {
        const spec = event.target.value;
        setSpecialization(spec);
    };

    function onClickClearFilterButton() {
        setUserInput("");
        setSpecialization("All Specializations");
    }

    const renderAllDoctors = () => (
        doctorsData.length === 0
        ? <div className="d-flex flex-column align-items-center gap-3 pt-5">
            <img 
                src="https://res.cloudinary.com/dmlk7cxkm/image/upload/v1754200221/Screenshot_2025-08-03_111845_f0fm0g.png"
                alt="no doctors"
                className="no-doctors-img w-25"
            />
            <h3 className="text-secondary">No Doctors Available</h3>
            <p>Please choose another Doctor!</p>
        </div>
        : <ul className="doctors-list d-flex justify-content-center justify-content-sm-start flex-wrap gap-3 gap-md-4">
            {doctorsData.map(eachItem => <DoctorDetails key={eachItem.doctorId} eachDoctor={eachItem} />)}
        </ul>
    );

    return (
        <div className="doctors-content flex-grow-1 px-2 px-md-4 px-lg-5 py-2 py-md-3">
            <div className="d-flex flex-wrap gap-3 pb-3">
                <input 
                    type='search' 
                    placeholder='Doctor Name' 
                    className="searchbar" 
                    value={userInput} 
                    onChange={onChangeUserInput} 
                    onKeyDown={e => e.key === 'Enter'}
                />
                <select className="specializations-bar" value={selectedSpecialization} onChange={onChangeSpecialization}>
                    {specializationsList.map(eachItem => <option key={eachItem} value={eachItem}>{eachItem}</option>)}
                </select>
                <button type="button" className="filters-clear-button" onClick={onClickClearFilterButton}>Clear Filters</button>
            </div>

            {renderAllDoctors()}
        </div>
    );

};