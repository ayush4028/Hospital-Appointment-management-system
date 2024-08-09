import React from "react";

const Biography = ({imageUrl}) => {
  return (
    <>
      <div className="container biography">
        <div className="banner">
          <img src={imageUrl} alt="whoweare" />
        </div>
        <div className="banner">
          <p>Biography</p>
          <h3>Who We Are</h3>
          <p>
          Welcome to our Ayush Doctor Appointment System, a cutting-edge platform designed to streamline the process of scheduling medical appointments. Leveraging the power of the MERN stack—MongoDB, Express.js, React, and Node.js—our application offers a seamless and user-friendly experience for both patients and healthcare providers.
          </p>
          <p>We are all in 2024!</p>
          <p>Doctor is a Noble Profession</p>
          <p>
          Our mission is to make healthcare more accessible and efficient by providing a platform that simplifies the appointment process. We aim to enhance patient satisfaction while helping healthcare providers manage their schedules effectively.
          </p>
          <p>Hope you book an Appointment</p>
          <p>Helping is fun!</p>
        </div>
      </div>
    </>
  );
};

export default Biography;
