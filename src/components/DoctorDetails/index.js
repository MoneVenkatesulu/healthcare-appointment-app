import { Link } from "react-router-dom";

import './index.css'

export default function DoctorDetails(props) {
    const {eachDoctor} = props;
    const {id, name, specialization, status, image} = eachDoctor

    return (
        <li className="doctor-details-item p-2 p-md-3">
            <Link to={`/doctor/${id}`} className="react-link-element d-flex flex-column align-items-center gap-2 gap-md-3">
                <img src={image} alt={name} className="doctor-image" />
                <p>{status}</p>
                <h5 className="text-center">{name}</h5>
                <p>{specialization}</p>
            </Link>
        </li>
    )
};