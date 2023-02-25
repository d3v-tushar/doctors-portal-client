import React from 'react';
import fluoride from '../../../assets/images/fluoride.png';
import cavity from '../../../assets/images/cavity.png';
import whitening from '../../../assets/images/whitening.png';
import Service from './Service';

const Services = () => {
    const servicesData = [
        {
            id: 1,
            name: 'Fluorie Treatment',
            discription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. monsectetur adipiscing plit',
            img: fluoride
        },
        {
            id: 2,
            name: 'Cavity Filling',
            discription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. monsectetur adipiscing plit',
            img: cavity
        },
        {
            id: 3,
            name: 'Teeth Whitening',
            discription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. monsectetur adipiscing plit',
            img: whitening
        },
    ];
    return (
        <div className='mt-16'>
            <div className='text-center'>
                <h2 className='text-primary uppercase text-xl font-bold'>Our Services</h2>
                <p className='text-3xl'>Services We Provide</p>
            </div>
            <div className='grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                servicesData.map(service => <Service key={service.id} service={service}/>)
                }
            </div>
        </div>
    );
};

export default Services;