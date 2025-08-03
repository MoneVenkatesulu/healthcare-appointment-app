import { useParams } from 'react-router-dom';
import { useContext, useState } from 'react'

import Popup from 'reactjs-popup'
import { IoMdClose } from "react-icons/io";


import HealthcareAppointmentContext from '../../context/HealthcareAppointmentContext';

import './index.css';

export default function DoctorProfile() {
    const { id } = useParams();
    const { doctorsList, updateDoctorsList } = useContext(HealthcareAppointmentContext);
    const [formData, setFormData] = useState({
        name: "", 
        email: "", 
        date: "", 
        time: ""
    });
    const [showErrorMsg, setErrorMsg] = useState(false);
    
    function onChangeName(event) {
        const name = event.target.value;
        setFormData(prevData => ({...prevData, name}));
    };
    
    function onChangeEmail(event) {
        const email = event.target.value;
        setFormData(prevData => ({...prevData, email}));
    };


    function onChangeDate(event) {
        const date = event.target.value;
        setFormData(prevData => ({...prevData, date}));
    };
    
    function onChangeTime(event) {
        const time = event.target.value;
        setFormData(prevData => ({...prevData, time}));
    };

    
    const doctorData =  doctorsList.find(eachItem => eachItem.doctorId === Number(id));
    const {name, specialization, fee, status, image, details, timingSlots, languages, appointments} = doctorData;

    function onSubmitPatientDetails(event, close) {
        event.preventDefault();

        const appointmentDateTime = new Date(`${formData.date}T${formData.time}`)
        const hour = appointmentDateTime.getHours();
        const minute = appointmentDateTime.getMinutes();

        const now = new Date();
        const isFuture = appointmentDateTime > now;
        const isValidTime = timingSlots.includes(hour) && minute === 0;
        const isInAvailableTimings = isFuture && isValidTime;

        const isAlreadyBooked = appointments.length === 0 
            ? false 
            : appointments.some(eachItem => new Date(eachItem.slotTime).getTime() === appointmentDateTime.getTime());

        const isValid = isInAvailableTimings && (!isAlreadyBooked) ;

        if (isValid) {
            setErrorMsg(false);
            updateDoctorsList({ id: Number(id), patientName: formData.name, slotTime: appointmentDateTime});
            setFormData({ name: "", email: "", date: "", time: "" });
            close();
            alert("Appointment Confirmed!")
            return;
        } else {
            setErrorMsg(true);
            return;
        }
    };


    function renderPopupElement() {
        return (
            <Popup modal trigger={<button type="button" className='btn btn-primary' disabled={!status}>Book Appointment</button>}>
                {
                    close => (
                        <div className='popup-container d-flex justify-content-center align-items-center vh-100 vw-100'>
                            <div className='d-flex flex-column gap-1 gap-md-3 bg-white p-3 p-md-5'>
                                <IoMdClose className='fs-1 fw-bold align-self-end' onClick={close} />
                                <form onSubmit={(event) => onSubmitPatientDetails(event, close)}>
                                    <label htmlFor="NAME" className='fw-semibold'>Full Name</label> <br />
                                    <input 
                                        type="text" 
                                        id="NAME" 
                                        className="patient-details-inputbars form-control" 
                                        placeholder='FULL NAME' 
                                        onChange={onChangeName} 
                                        value={formData.name}
                                        required 
                                    /> <br />

                                    <label htmlFor="EMAIL" className='fw-semibold'>Email</label> <br />
                                    <input 
                                        type="email" 
                                        id="EMAIL" 
                                        className="patient-details-inputbars form-control"
                                        placeholder='example@mail.com' 
                                        onChange={onChangeEmail} 
                                        value={formData.email}
                                        required 
                                    /> <br />

                                    <label htmlFor="DATE" className='fw-semibold'>Date</label> <br />
                                    <input 
                                        type="date" 
                                        min={new Date().toISOString().split("T")[0]}
                                        id="DATE" 
                                        className={ `patient-details-inputbars form-control ${ showErrorMsg ? "is-invalid" : "" }` } 
                                        onChange={onChangeDate} 
                                        value={formData.date}
                                        required 
                                    /> <br />
                                    
                                    <label htmlFor="TIME" className='fw-semibold'>Time</label> <br />
                                    <input 
                                        type="time" 
                                        id="TIME" 
                                        className={ `patient-details-inputbars form-control ${ showErrorMsg ? "is-invalid" : "" }` } 
                                        onChange={onChangeTime} 
                                        value={formData.time}
                                        required 
                                    /> <br />

                                    <input 
                                        type="submit" 
                                        className='btn btn-primary form-control' 
                                    /> <br />

                                    {showErrorMsg && <small className='error-msg'>*Please select a valid date and time.</small>}
                                </form>
                            </div>
                        </div>
                )}
            </Popup>
        )
    };

    return (
        <div className='doctor-profile-container flex-grow-1 px-2 px-md-3 px-xl-5 pt-3 pt-sm-5'>
            <div className='doctor-profile-cards bg-white shadow d-flex flex-column flex-sm-row align-items-center align-items-sm-start gap-3 gap-md-5 p-3'>
                <div className='d-flex flex-column gap-5'>
                    <img src={image} alt={name} className='doctor-profile-image' />
                    
                    {renderPopupElement()}
                </div>
                <div>
                    <h5 className='text-primary fw-bold pb-3'>{name}</h5>

                    <p><strong>Specialization : </strong>{specialization}</p>

                    <p><strong>Expert In : </strong>{details}</p>

                    <p><strong>Speaks : </strong> {languages.join(", ")}</p> 

                    <p><strong>Status : </strong>{ status ? "Available" : "Not Available" }</p>

                    <p><strong>TimingSlotHours : </strong>{timingSlots.join(", ")}</p>

                    <p><strong>Consultation Fee : </strong><em>Rs {fee}/-</em></p>

                    <small><em>*Appointments are booked for one hour per slot.</em></small>
                </div>
            </div>

            {appointments.length > 0 && (
                <div className='doctor-profile-cards bg-white shadow my-3 p-3'>
                    <h3 className='py-3'>Booked Appointments</h3>
                    <ul className='booked-appointments-list'>
                        {appointments.map(eachItem => (
                            <li key={eachItem.tokenId} className='d-flex gap-3 gap-md-5'>
                                <strong>{eachItem.patientName}</strong>
                                <p>{new Date(eachItem.slotTime).toLocaleString()}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            )}

        </div>
    );
};