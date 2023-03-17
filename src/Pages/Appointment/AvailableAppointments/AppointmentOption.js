import React from "react";

const AppointmentOption = ({ appointmentOption, setTreatment }) => {
  const { name, slots } = appointmentOption;
  return (
    <div className="card shadow-lg m-4 rounded-lg">
      <div className="card-body text-center">
        <h2 className="text-2xl text-center text-secondary font-bold">{name}</h2>
        <p>{slots.length} {slots.length > 1 ? 'Spaces' : 'Space'} Available</p>
        <div className="card-actions justify-center">
          <label onClick={() => setTreatment(appointmentOption)} htmlFor="booking-modal" className="btn btn-primary text-white">Book Appointment</label>
        </div>
      </div>
    </div>
  );
};

export default AppointmentOption;
