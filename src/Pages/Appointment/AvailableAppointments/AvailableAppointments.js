import React from 'react';
import { format } from 'date-fns';

const AvailableAppointments = ({selectedDate}) => {
    return (
        <section className='mt-16'>
            <p className='text-center text-secondary font-bold'>Available Appointments on {format(selectedDate, 'PPP')} </p>
        </section>
    );
};

export default AvailableAppointments;