import React, { useEffect, useState } from 'react';
import AppointmentBanner from '../AppointmentBanner/AppointmentBanner';
import AvailableAppointments from '../AvailableAppointments/AvailableAppointments';

const Appointment = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());
    useEffect(() =>{
        window.scrollTo({
            top: 100,
            behavior: "smooth",
          });
    }, [])
    return (
        <div>
            <AppointmentBanner selectedDate={selectedDate} setSelectedDate={setSelectedDate}/>
            <AvailableAppointments selectedDate={selectedDate}/>
        </div>
    );
};

export default Appointment;