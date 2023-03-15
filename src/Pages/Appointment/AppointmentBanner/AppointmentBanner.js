import React from "react";
import chair from '../../../assets/images/chair.png';
import { DayPicker } from 'react-day-picker';

const AppointmentBanner = ({selectedDate, setSelectedDate}) => {
  return (
    <header className="my-5 banner-bg p-5 lg:p-24">
        <div className="flex flex-col-reverse md:flex-row lg:flex-row items-center">
        <div className="my-4 w-full lg:w-1/2 flex justify-center">
        <DayPicker
                className="shadow-xl rounded-2xl p-4"
                mode="single"
                selected={selectedDate}
                onSelect={setSelectedDate}
            />
        </div>
        <div className="w-full lg:w-1/2">
        <img
          src={chair}
          className="rounded-lg shadow-lg" alt=""
        />
        </div>
      </div>
    </header>
  );
};

export default AppointmentBanner;
