import React from 'react';
import Header from '../components/header/Header';
import { Outlet } from 'react-router';
import { ToastContainer } from 'react-toastify';
import { Toaster } from 'react-hot-toast';
import Footer from '../components/footer/Footer';

const Root = () => {
    return (
        <div className='overflow-x-hidden'>
            <Header />
            <Outlet />
            <Footer />
            <ToastContainer />
            <Toaster />
        </div>
    );
};

export default Root;