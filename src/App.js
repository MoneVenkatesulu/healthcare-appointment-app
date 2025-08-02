import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {useState, useEffect} from 'react'

import './App.css';

import HealthcareAppointmentContext from './context/HealthcareAppointmentContext';

const Home = lazy(() => import('./components/Home'));
const DoctorsPage = lazy(() => import('./components/DoctorsPage'));
const DoctorProfile = lazy(() => import('./components/DoctorProfile'));


const doctorsData = [
  {
    id: 1,
    name: "Dr. John Doe",
    specialization: "Cardiologist",
    status: "Available Today",
    image: "https://res.cloudinary.com/dmlk7cxkm/image/upload/v1754038457/Screenshot_2025-08-01_142217_u3heev.png",
    details: "Experienced cardiologist with 15 years of practice.",
    availability: [
      "2025-08-01 10:00",
      "2025-08-01 14:00"
    ]
  },
  {
    id: 2,
    name: "Dr. Jane Smith",
    specialization: "Dermatologist",
    status: "Fully Booked",
    image: "https://res.cloudinary.com/dmlk7cxkm/image/upload/v1754038471/Screenshot_2025-08-01_142255_psfrj2.png",
    details: "Skincare and dermatology expert.",
    availability: []
  },
  {
    id: 3,
    name: "Dr. Ayesha Khan",
    specialization: "Pediatrician",
    status: "Available Tomorrow",
    image: "https://res.cloudinary.com/dmlk7cxkm/image/upload/v1754038471/Screenshot_2025-08-01_142255_psfrj2.png",
    details: "Child healthcare specialist with a friendly approach.",
    availability: [
      "2025-08-02 09:00",
      "2025-08-02 12:30"
    ]
  },
  {
    id: 4,
    name: "Dr. Rahul Mehta",
    specialization: "Orthopedic Surgeon",
    status: "Available Today",
    image: "https://res.cloudinary.com/dmlk7cxkm/image/upload/v1754038457/Screenshot_2025-08-01_142217_u3heev.png",
    details: "Expert in joint and bone surgeries with 10+ years of experience.",
    availability: [
      "2025-08-01 11:00",
      "2025-08-01 16:00"
    ]
  },
  {
    id: 5,
    name: "Dr. Emily Watson",
    specialization: "Gynecologist",
    status: "On Leave",
    image: "https://res.cloudinary.com/dmlk7cxkm/image/upload/v1754038471/Screenshot_2025-08-01_142255_psfrj2.png",
    details: "Specializes in women\u2019s reproductive health.",
    availability: []
  },
  {
    id: 6,
    name: "Dr. Arjun Patel",
    specialization: "Neurologist",
    status: "Available Today",
    image: "https://res.cloudinary.com/dmlk7cxkm/image/upload/v1754038457/Screenshot_2025-08-01_142217_u3heev.png",
    details: "Specialist in brain and nervous system disorders.",
    availability: [
      "2025-08-01 13:00",
      "2025-08-01 15:30"
    ]
  },
  {
    id: 7,
    name: "Dr. Priya Verma",
    specialization: "Psychiatrist",
    status: "Available Next Week",
    image: "https://res.cloudinary.com/dmlk7cxkm/image/upload/v1754038471/Screenshot_2025-08-01_142255_psfrj2.png",
    details: "Mental health and therapy expert with 8 years of experience.",
    availability: [
      "2025-08-05 10:00",
      "2025-08-06 14:00"
    ]
  },
  {
    id: 8,
    name: "Dr. Manish Roy",
    specialization: "ENT Specialist",
    status: "Available Today",
    image: "https://res.cloudinary.com/dmlk7cxkm/image/upload/v1754038457/Screenshot_2025-08-01_142217_u3heev.png",
    details: "Expert in ear, nose, and throat issues.",
    availability: [
      "2025-08-01 10:30",
      "2025-08-01 12:00"
    ]
  },
  {
    id: 9,
    name: "Dr. Sara Fernandes",
    specialization: "Ophthalmologist",
    status: "Fully Booked",
    image: "https://res.cloudinary.com/dmlk7cxkm/image/upload/v1754038471/Screenshot_2025-08-01_142255_psfrj2.png",
    details: "Vision and eye care specialist.",
    availability: []
  },
  {
    id: 10,
    name: "Dr. Kunal Desai",
    specialization: "General Physician",
    status: "Available Today",
    image: "https://res.cloudinary.com/dmlk7cxkm/image/upload/v1754038457/Screenshot_2025-08-01_142217_u3heev.png",
    details: "Treats general health issues and preventive care.",
    availability: [
      "2025-08-01 09:00",
      "2025-08-01 17:00"
    ]
  }
]

function App() {
  const [doctorsList, setDoctorsList] = useState([]);

  useEffect(() => {
    updateDoctorsList();
  }, [])

  const updateDoctorsList = () => {
    setDoctorsList(doctorsData);
  }

  return (
    <HealthcareAppointmentContext.Provider value={{doctorsList, updateDoctorsList}}>
      <Router>
        <Suspense fallback={<div className='lazy-loading-contianer'><h2>...Loading</h2></div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/doctors" element={<DoctorsPage />} />
            <Route path="/doctor/:id" element={<DoctorProfile />} />
          </Routes>
        </Suspense>
      </Router>
    </HealthcareAppointmentContext.Provider>
  );
}

export default App;
