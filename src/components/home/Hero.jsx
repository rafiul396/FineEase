import React from 'react';
import banner from '../../assets/heroimg1.jpg'

const Hero = () => {
    return (
        <section className={`h-[calc(100vh-66.73px)] flex items-center justify-center text-white bg-cover bg-center rounded-xl m-5`} style={{ backgroundImage: `url(${banner})` }}>
            <div className='w-full h-full bg-[#ff690059] rounded-xl flex justify-center items-center'>
                <div className="flex-1 text-center md:text-left flex flex-col justify-center items-center">
                    <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
                        Take Control of Your Money, <br /> Shape Your Future
                    </h1>
                    <p className="text-lg text-gray-100 mb-6">
                        Track your income, expenses, and savings easily with FinEase.
                        Make every taka count.
                    </p>
                    <button className="bg-white text-indigo-700 font-semibold px-6 py-3 rounded-full shadow hover:bg-gray-100 transition-all duration-300">
                        Get Started
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Hero;