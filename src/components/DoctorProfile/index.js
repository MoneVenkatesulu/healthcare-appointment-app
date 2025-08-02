import { useParams } from 'react-router-dom';
import {useContext} from 'react'


import HealthcareAppointmentContext from '../../context/HealthcareAppointmentContext';

export default function DoctorProfile(props) {
    const {id} = useParams();
    const {doctorsList} = useContext(HealthcareAppointmentContext);

    const doctorData =  doctorsList.find(eachItem => eachItem.id === Number(id));
    console.log(doctorData)

    return <h2>{doctorData.name}</h2>
};