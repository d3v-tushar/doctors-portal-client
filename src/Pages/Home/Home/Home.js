import React from 'react';
import Banner from '../Banner/Banner';
import Treatment from '../Treatment/Treatment';
import InfoCards from '../InfoCards/InfoCards';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div className='mx-5'>
           <Banner></Banner>
           <InfoCards></InfoCards>
           <Services></Services>
           <Treatment></Treatment>
        </div>
    );
};

export default Home;