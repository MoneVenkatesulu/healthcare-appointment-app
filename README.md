In this project, a responsive website was built for booking healthcare appointments through the NirogGyan platform.

### Design Files

<details>
<summary>Home Route</summary>

- [Extra Small (Size < 576px) and Small (Size >= 576px) - Home](https://res.cloudinary.com/dmlk7cxkm/image/upload/v1754230650/Screenshot_2025-08-03_194608_dkiqoe.png)
- [Medium (Size >= 768px), Large (Size >= 992px) and Extra Large (Size >= 1200px) - Home](https://res.cloudinary.com/dmlk7cxkm/image/upload/v1754230761/Screenshot_2025-08-03_194849_jhbpqc.png)

</details>


<details>
<summary>Doctors Route</summary>

- [Extra Small (Size < 576px) and Small (Size >= 576px) - Doctors](https://res.cloudinary.com/dmlk7cxkm/image/upload/v1754230861/Screenshot_2025-08-03_195029_mumm7s.png)
- [Medium (Size >= 768px), Large (Size >= 992px) and Extra Large (Size >= 1200px) - Doctors](https://res.cloudinary.com/dmlk7cxkm/image/upload/v1754230940/Screenshot_2025-08-03_195151_xwzlfs.png)

</details>


<details>
<summary>DoctorProfile Route</summary>

- [Extra Small (Size < 576px) and Small (Size >= 576px) - DoctorProfile](https://res.cloudinary.com/dmlk7cxkm/image/upload/v1754231330/Screenshot_2025-08-03_195744_ilrkua.png)
- [Medium (Size >= 768px), Large (Size >= 992px) and Extra Large (Size >= 1200px) - DoctorProfile](https://res.cloudinary.com/dmlk7cxkm/image/upload/v1754231228/Screenshot_2025-08-03_195531_pvnydt.png)

</details>


<details>
<summary>About Route</summary>

- [Extra Small (Size < 576px) and Small (Size >= 576px) - About](https://res.cloudinary.com/dmlk7cxkm/image/upload/v1754231729/Screenshot_2025-08-03_200439_g64od4.png)
- [Medium (Size >= 768px), Large (Size >= 992px) and Extra Large (Size >= 1200px) - About](https://res.cloudinary.com/dmlk7cxkm/image/upload/v1754231781/Screenshot_2025-08-03_200456_yacolt.png)

</details>


<details>
<summary>NoDoctors View</summary>

- [Extra Small (Size < 576px) and Small (Size >= 576px) and Medium (Size >= 768px), Large (Size >= 992px) and Extra Large (Size >= 1200px) - NoDoctors](https://res.cloudinary.com/dmlk7cxkm/image/upload/v1754232074/Screenshot_2025-08-03_201014_a1yyzx.png)

</details>


<details>
<summary>Valid Form Data View</summary>

- [Extra Small (Size < 576px) and Small (Size >= 576px) and Medium (Size >= 768px), Large (Size >= 992px) and Extra Large (Size >= 1200px) - ValidFormData](https://res.cloudinary.com/dmlk7cxkm/image/upload/v1754232250/Screenshot_2025-08-03_195518_eq2c4c.png)

</details>


<details>
<summary>Invalid Form Data View</summary>

- [Extra Small (Size < 576px) and Small (Size >= 576px) and Medium (Size >= 768px), Large (Size >= 992px) and Extra Large (Size >= 1200px) - InvalidFormData](https://res.cloudinary.com/dmlk7cxkm/image/upload/v1754232325/Screenshot_2025-08-03_195618_tlnlh8.png)

</details>

### Set Up Instructions

<details>
<summary>Click to view</summary>

- Download dependencies by running `npm install`
- Start up the app using `npm start`
</details>

### Completion Instructions

<details>
<summary>Functionality to be added</summary>
<br/>

The app have the following functionalities

- **Home Route**

  - Welcoming interface introducing users to NirogGyan
  - Prominent CTA to explore and book doctors 
  
- **Doctors Route**

  - View a list of all available doctors with their name, specialization, and availability status
  - Real-time search by doctor name
  - Filter doctors by specialization
  - Reset/clear filters with one click
  
- **Doctor Profile Route**

  - Detailed profile for each doctor including:
    - Profile image
    - Specialization and expertise
    - Languages spoken
    - Available hours (slots)
    - Status (Available / Unavailable)
    - Consultation fee

  - Book appointment popup form with validation:
    - Name, Email, Date, and Time
    - Validates date is in the future
    - Validates time falls within the doctor's available slots
    - Prevents double booking of the same time slot
  
  - Booked Appointments:
    - View all successfully booked appointments under each doctor's profile
    - Displays patient name and appointment date/time

- **About Route**

  - Brief description of NirogGyan's purpose and mission
  - Social media icons for connection
  - Official website link

- **State Management**

  - Global state handled using React Context API for sharing doctor data and booking updates

- **Responsive Design**

  - Mobile-first design using Bootstrap
  - Layout adapts to all screen sizes (mobile, tablet, desktop)

### Important Note

<details>
<summary>Click to view</summary>

<br/>

**The following instructions are used for routing between Components**

- Render `Home` Route component when the path in URL matches `/`
- Render `Doctors` Route component when the path in URL matches `/doctors`
- Render `Doctor Profile` Route component when the path in URL matches `/doctor/:id`
- Render `About` Route component when the path in URL matches `/about`

</details>

### Quick Tips

<details>
<summary>Tools/Libraries</summary>

</br>


**Frameworks or Libraries used:**

- React
- Bootstrap

**React libraries**

- react-icons
- react-spinners
- reactjs-popup
- styled-components
- uuid

</details>

### Resources

<details>
<summary>Image URLs</summary>

- [https://res.cloudinary.com/dmlk7cxkm/image/upload/v1754123144/Screenshot_2025-08-02_133744_ogmcmf.png](https://res.cloudinary.com/dmlk7cxkm/image/upload/v1754123144/Screenshot_2025-08-02_133744_ogmcmf.png) **home background image**
- [https://res.cloudinary.com/dmlk7cxkm/image/upload/v1754026371/Screenshot_2025-08-01_105654_cpwua0.png](https://res.cloudinary.com/dmlk7cxkm/image/upload/v1754026371/Screenshot_2025-08-01_105654_cpwua0.png) alt should be **doctor symbol**
- [https://res.cloudinary.com/dmlk7cxkm/image/upload/v1754038457/Screenshot_2025-08-01_142217_u3heev.png](https://res.cloudinary.com/dmlk7cxkm/image/upload/v1754038457/Screenshot_2025-08-01_142217_u3heev.png) alt should be **doctor name**
- [https://res.cloudinary.com/dmlk7cxkm/image/upload/v1754038471/Screenshot_2025-08-01_142255_psfrj2.png](https://res.cloudinary.com/dmlk7cxkm/image/upload/v1754038471/Screenshot_2025-08-01_142255_psfrj2.png) alt should be **doctor name**
- [https://res.cloudinary.com/dmlk7cxkm/image/upload/v1754213712/Screenshot_2025-08-03_135558_xjv0ak.png](https://res.cloudinary.com/dmlk7cxkm/image/upload/v1754213712/Screenshot_2025-08-03_135558_xjv0ak.png) alt should be **doctors**

</details>

<details>
<summary>Colors</summary>

<div style="background-color: #000000; width: 150px; padding: 10px; color: white">Hex: #000000</div>
<div style="background-color: #00000050; width: 150px; padding: 10px; color: white">Hex: #00000050</div>
<div style="background-color: #202020; width: 150px; padding: 10px; color: white">Hex: #202020</div>
<div style="background-color: #6c757d; width: 150px; padding: 10px; color: white">Hex: #6c757d</div>
<div style="background-color: #7b7b7bff; width: 150px; padding: 10px; color: white">Hex: #7b7b7bff</div>
<div style="background-color: #808080; width: 150px; padding: 10px; color: white">Hex: #808080</div>
<div style="background-color: #828384; width: 150px; padding: 10px; color: white">Hex: #828384</div>
<div style="background-color: #f0f0f0; width: 150px; padding: 10px; color: black">Hex: #f0f0f0</div>
<div style="background-color: #f8f9fb; width: 150px; padding: 10px; color: black">Hex: #f8f9fb</div>
<div style="background-color: #ffffff; width: 150px; padding: 10px; color: black">Hex: #ffffff</div>
<div style="background-color: #d3f3ff; width: 150px; padding: 10px; color: black">Hex: #d3f3ff</div>
<div style="background-color: #0dcaf0; width: 150px; padding: 10px; color: white">Hex: #0dcaf0</div>
<div style="background-color: #26C6DA; width: 150px; padding: 10px; color: white">Hex: #26C6DA</div>
<div style="background-color: #10ba2fff; width: 150px; padding: 10px; color: white">Hex: #10ba2fff</div>
<div style="background-color: #dc3545; width: 150px; padding: 10px; color: white">Hex: #dc3545</div>
<div style="background-color: #ff0000; width: 150px; padding: 10px; color: white">Hex: #ff0000</div>
<div style="background-color: #0d6efd; width: 150px; padding: 10px; color: white">Hex: #0d6efd</div>

</details>

<details>
<summary>Font-families</summary>

- Roboto
- Arial

</details>


 
### Future Improvements

<details>
<summary>Smarter Appointment Slot Management</summary>

- Dynamically disable already booked slots in the booking form dropdown
- Show available time slots instead of manual time input

</details>

<details>
<summary>Backend Integration</summary>

- Replace static doctor list with dynamic API from a backend (Node.js/Express)
- Persist booked appointments in a database (MongoDB)
- Add authentication for secure data access (JWT, OAuth, etc.)

</details>

<details>
<summary>Doctor Dashboard</summary>

- Allow doctors to log in and manage their availability
- Manually mark time slots as unavailable

</details>

<details>
<summary>Patient Account System</summary>

- Patients can create accounts and manage bookings
- View appointment history and cancel/reschedule if needed

</details>
 
 ### Challenges Faced

<details>
<summary>Managing Date and Time Validation:</summary>
  
  - Implementing reliable validation for future appointment slots was challenging. It required handling edge cases like:
    - Preventing past bookings
    - Ensuring selected time matched the doctor’s available slot
    - Avoiding double-booking for the same slot

</details>


<details>
<summary>Backend Integration (Prototype Stage):</summary>
  
  - Initially explored building a backend to persist doctor and appointment data using Node.js. Although not fully integrated in this version, this laid the foundation for future scalability with real-time data and authentication

</details>

<details>
<summary>Overcoming Hurdles with AI Assistance:</summary>
  
  - Faced multiple technical challenges throughout the development process — like working with date and time, run time errors etc . Many of these were resolved effectively with the help of **ChatGPT**, which served as a valuable learning and debugging assistant.

</details>

