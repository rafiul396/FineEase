import React from 'react';
import Header from '../components/header/Header';
import { Outlet } from 'react-router';

const Root = () => {
    return (
        <div className='box-box'>
            <Header />
            <Outlet />
        </div>
    );
};

export default Root;