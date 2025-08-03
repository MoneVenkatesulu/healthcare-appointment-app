import { Link } from "react-router-dom";

import { FaDotCircle } from "react-icons/fa";

import StatusElement  from './styled-components.js';
import './index.css'

export default function DoctorDetails(props) {
    const {eachDoctor} = props;
    const {doctorId, name, specialization, status, image} = eachDoctor;


    return (
        <li className="doctor-details-item p-2 p-md-3">
            <Link to={`/doctor/${doctorId}`} className="doctor-details-item-link d-flex flex-column align-items-center gap-2 gap-md-3">
                <img src={image} alt={name} className="doctor-details-image" />

                <StatusElement className="d-flex align-items-center gap-1" $isavailable={ status }><FaDotCircle />
                    {status ? "Available" : "Unavailable"}
                </StatusElement>

                <h5 className="text-center">{name}</h5>
                
                <p className="text-black-50">{specialization}</p>
            </Link>
        </li>
    )
};