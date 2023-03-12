import React from 'react';
import Banner from '../Banner/Banner';
import ExceptionalCare from '../ExceptionalCare/ExceptionalCare';
import InfoCards from '../InfoCards/InfoCards';
import MakeAppointment from '../MakeAppointment/MakeAppointment';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div className='mx-5'>
           <Banner/>
           <InfoCards/>
           <Services/>
           <ExceptionalCare/>
           <MakeAppointment/>
        </div>
    );
};

export default Home;