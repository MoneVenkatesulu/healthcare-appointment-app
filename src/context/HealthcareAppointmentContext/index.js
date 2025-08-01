import React from "react";

const HealthcareAppointmentContext = React.createContext({
    doctorsList: [], 
    updateDoctorsList: () => {}
});

export default HealthcareAppointmentContext;