import React, { useEffect, useState } from 'react';
import { format } from 'date-fns';
import AppointmentOption from './AppointmentOption';
import BookingModal from '../BookingModal/BookingModal';

const AvailableAppointments = ({selectedDate}) => {
    const [appointmentOptions, setAppointmentOptions] = useState([]);
    const [treatment, setTreatment] = useState(null);
    useEffect(() =>{
        fetch('appointmentOptions.json')
        .then(res => res.json())
        .then(data => setAppointmentOptions(data))
        .catch(error =>console.error(error));
    }, []);
    return (
        <section className='my-16'>
            <p className='text-center text-secondary font-bold'>Available Appointments on {format(selectedDate, 'PPP')} </p>
            <div className='grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-6'>
                {
                    appointmentOptions.map(option => <AppointmentOption 
                        key={option._id}
                        appointmentOption={option}
                        setTreatment={setTreatment}/>)
                }
            </div>
            {
                treatment && <BookingModal treatment={treatment}/>
            }
        </section>
    );
};

export default AvailableAppointments;