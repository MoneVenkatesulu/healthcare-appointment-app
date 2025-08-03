import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import { useState, useEffect } from 'react'

import { v4 as uuidv4 } from 'uuid';
import { ClipLoader } from 'react-spinners';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import HealthcareAppointmentContext from './context/HealthcareAppointmentContext';
import Header from './components/Header';


const Home = lazy(() => import('./components/Home'));
const DoctorsPage = lazy(() => import('./components/DoctorsPage'));
const DoctorProfile = lazy(() => import('./components/DoctorProfile'));
const About = lazy(() => import('./components/About'));


const doctorsData = [
  {
    doctorId: 1,
    name: "Dr. John Doe",
    specialization: "Cardiologist",
    fee: 500,
    status: true,
    image: "https://res.cloudinary.com/dmlk7cxkm/image/upload/v1754038457/Screenshot_2025-08-01_142217_u3heev.png",
    details: "Experienced cardiologist with 15 years of practice.",
    timingSlots: [10, 11, 12, 14, 15, 16],
    languages: ["English", "Hindi", "Telugu", "Kannada", "Tamil"], 
    appointments: []
  },
  {
    doctorId: 2,
    name: "Dr. Jane Smith",
    specialization: "Dermatologist",
    fee: 600,
    status: false,
    image: "https://res.cloudinary.com/dmlk7cxkm/image/upload/v1754038471/Screenshot_2025-08-01_142255_psfrj2.png",
    details: "Skincare and dermatology expert.",
    timingSlots: [10, 11, 12, 14, 15, 16],
    languages: ["English", "Hindi", "Telugu", "Kannada"], 
    appointments: []
  },
  {
    doctorId: 3,
    name: "Dr. Ayesha Khan",
    specialization: "Pediatrician",
    fee: 500,
    status: true,
    image: "https://res.cloudinary.com/dmlk7cxkm/image/upload/v1754038471/Screenshot_2025-08-01_142255_psfrj2.png",
    details: "Child healthcare specialist with a friendly approach.",
    timingSlots: [10, 11, 12, 14, 15, 16],
    languages: ["English", "Hindi", "Kannada", "Tamil"], 
    appointments: []
  },
  {
    doctorId: 4,
    name: "Dr. Rahul Mehta",
    specialization: "Orthopedic Surgeon",
    fee: 1000,
    status: false,
    image: "https://res.cloudinary.com/dmlk7cxkm/image/upload/v1754038457/Screenshot_2025-08-01_142217_u3heev.png",
    details: "Expert in joint and bone surgeries with 10+ years of experience.",
    timingSlots: [10, 11, 12, 14, 15, 16],
    languages: ["English", "Telugu", "Kannada", "Tamil"], 
    appointments: []
  },
  {
    doctorId: 5,
    name: "Dr. Emily Watson",
    specialization: "Gynecologist",
    fee: 500,
    status: true,
    image: "https://res.cloudinary.com/dmlk7cxkm/image/upload/v1754038471/Screenshot_2025-08-01_142255_psfrj2.png",
    details: "Specializes in women\u2019s reproductive health.",
    timingSlots: [10, 11, 12, 14, 15, 16],
    languages: ["English", "Hindi", "Telugu", "Tamil"], 
    appointments: []
  },
  {
    doctorId: 6,
    name: "Dr. Arjun Patel",
    specialization: "Neurologist",
    fee: 700,
    status: true,
    image: "https://res.cloudinary.com/dmlk7cxkm/image/upload/v1754038457/Screenshot_2025-08-01_142217_u3heev.png",
    details: "Specialist in brain and nervous system disorders.",
    timingSlots: [10, 11, 12, 14, 15, 16],
    languages: ["English", "Hindi", "Telugu", "Kannada"], 
    appointments: []
  },
  {
    doctorId: 7,
    name: "Dr. Priya Verma",
    specialization: "Psychiatrist",
    fee: 900,
    status: false,
    image: "https://res.cloudinary.com/dmlk7cxkm/image/upload/v1754038471/Screenshot_2025-08-01_142255_psfrj2.png",
    details: "Mental health and therapy expert with 8 years of experience.",
    timingSlots: [10, 11, 12, 14, 15, 16],
    languages: ["English", "Hindi", "Telugu"], 
    appointments: []
  },
  {
    doctorId: 8,
    name: "Dr. Manish Roy",
    specialization: "ENT Specialist",
    fee: 800,
    status: true,
    image: "https://res.cloudinary.com/dmlk7cxkm/image/upload/v1754038457/Screenshot_2025-08-01_142217_u3heev.png",
    details: "Expert in ear, nose, and throat issues.",
    timingSlots: [10, 11, 12, 14, 15, 16],
    languages: ["English", "Hindi", "Tamil"], 
    appointments: []
  },
  {
    doctorId: 9,
    name: "Dr. Sara Fernandes",
    specialization: "Ophthalmologist",
    fee: 1000,
    status: false,
    image: "https://res.cloudinary.com/dmlk7cxkm/image/upload/v1754038471/Screenshot_2025-08-01_142255_psfrj2.png",
    details: "Vision and eye care specialist.",
    timingSlots: [10, 11, 12, 14, 15, 16],
    languages: ["English", "Kannada", "Tamil"], 
    appointments: []
  },
  {
    doctorId: 10,
    name: "Dr. Kunal Desai",
    specialization: "General Physician",
    fee: 400,
    status: true,
    image: "https://res.cloudinary.com/dmlk7cxkm/image/upload/v1754038457/Screenshot_2025-08-01_142217_u3heev.png",
    details: "Treats general health issues and preventive care.",
    timingSlots: [10, 11, 12, 14, 15, 16],
    languages: ["English", "Hindi"], 
    appointments: []
  }
]

function App() {
  const [doctorsList, setDoctorsList] = useState([]);

  useEffect(() => {
    document.title = "NirogGyan | book healthcare appointment"
  }, []);

  useEffect(() => {
    setDoctorsList(doctorsData);
  }, [])

  function updateDoctorsList({id, patientName, slotTime}) {
    setDoctorsList(prevList => (
      prevList.map(eachItem => {
      if (eachItem.doctorId === id) {
        const appointments = [...eachItem.appointments, { tokenId: uuidv4(), patientName, slotTime }];
        return {...eachItem, appointments}
      } 
      return {...eachItem};
    })
    ));
  };

  function bootstrapSpinner() {
    return <div className='vh-100 d-flex justify-content-center align-items-center'><ClipLoader color='#00c3ff' size={80} /></div>
  }

  return (
    <HealthcareAppointmentContext.Provider value={{doctorsList, updateDoctorsList}}>
      <Router>
          <Suspense fallback={bootstrapSpinner()}>
            <div className='d-flex flex-column vh-100'>
              <Header />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/doctors" element={<DoctorsPage />} />
                <Route path="/doctor/:id" element={<DoctorProfile />} />
                <Route path="/about" element={<About />} />
              </Routes>
            </div>
          </Suspense>
      </Router>
    </HealthcareAppointmentContext.Provider>
  );
}

export default App;
