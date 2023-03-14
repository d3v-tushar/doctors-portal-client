import React from 'react';
import treatment from '../../../assets/images/treatment.png';

const ExceptionalCare = () => {
    return (
        <section className='mt-24 grid grid-cols-1 lg:grid-cols-2 items-center gap-24  w-4/5 mx-auto'>
            <img className='rounded-xl' src={treatment} alt="dental treatment" />
            <div>
                <h1 className='text-5xl font-bold my-4'>Exceptional Dental Care, on your Terms</h1>
                <p className='my-4 text-justify'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                <button className="btn btn-primary bg-gradient-to-r from-primary to-secondary text-white">Get Started</button>
            </div>
        </section>
    );
};

export default ExceptionalCare;