import React from "react";
import doctor from '../../../assets/images/doctor-small.png';
import appointmentBg from '../../../assets/images/appointment.png';
import PrimaryButton from "../../../components/PrimaryButton/PrimaryButton";

const MakeAppointment = () => {
  return (
    <section className="mt-64"
    style={{background: `url(${appointmentBg})`}}
    >
      <div className="hero">
        <div className="hero-content p-1 flex-col lg:flex-row">
          <img
            src={doctor}
            alt='doctor'
            className="-mt-28 hidden lg:block lg:w-1/2 rounded-lg"
          />
          <div>
            <h3 className="text-lg text-primary my-5 font-bold">Appointment</h3>
            <h1 className="text-4xl text-white font-bold">Make an Appointment!</h1>
            <p className="py-6 text-white">
            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page
            </p>
            <PrimaryButton>Get Appointment</PrimaryButton>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MakeAppointment;
