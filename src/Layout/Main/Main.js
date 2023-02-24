import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../../Pages/Shared/Footer/Footer';
import Navbar from '../../Pages/Shared/Navbar/Navbar';

const Main = () => {
    const [darkMode, setdarkMode] = useState(false);
    return (
        <div>
            <Navbar darkMode={darkMode} setdarkMode={setdarkMode}/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default Main;