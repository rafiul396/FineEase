import React, { use } from 'react';
import bannerLight from '../../assets/hero-banner.png'
import bannerDark from '../../assets/hero-banner-dark.png'
import ReportCard from './hero-section/ReportCard';
import StatCard from './hero-section/StatCard';
import leftChart from '../../assets/report2.png'
import rightChart from '../../assets/report1.png'
import { Link } from 'react-router';
import { AuthContext } from '../../provider/AuthProvider';
import 'animate.css';

const Hero = () => {
    const { user } = use(AuthContext)
    const { themeController } = use(AuthContext)

    return (
        <>
            <section className="md:min-h-screen flex justify-center items-center bg-contain md:bg-cover bg-no-repeat bg-center" style={{ backgroundImage: `url(${themeController === 'dark' ? bannerDark : bannerLight})` }}>
                <div className='py-5 md:py-0  flex justify-center items-center  md:min-h-screen w-full bg-gradient-to-b from-accent to-[#ff690000]'>
                    <div className="w-full lg:py-20 px-6 lg:px-20 flex flex-col items-center justify-center text-center relative">
                        <h1 className="text-primary text-2xl md:text-3xl xl:text-5xl font-bold leading-tight max-w-3xl animate__animated animate__fadeInDownBig">
                            Take control of your money, <br /> one smart step at a time
                        </h1>

                        <p className="mt-4 text-lg md:text-xl lg:text-2xl text-secondary max-w-xl">
                            No complications, just a smarter way to manage your money — Make peace with your money and watch your goals breathe easier.
                        </p>

                        {
                            !user && (
                                <div className="flex gap-4 mt-6">
                                    <Link to="/signup" className="bg-primary font-semibold text-white text-sm px-5 py-4 rounded-full hover:bg-primary transition">
                                        Get Started
                                    </Link>
                                </div>
                            )
                        }


                        <div className="absolute -left-64 top-10 rotate-[8deg] hidden lg:block animate__animated animate__fadeInLeft" >
                            <ReportCard image={leftChart} />
                        </div>

                        <div className="absolute -right-72 top-10 rotate-[-8deg] hidden lg:block animate__animated animate__fadeInRight">
                            <ReportCard image={rightChart} />
                        </div>
                        <div className="hidden  md:grid grid-cols-3 gap-6 mt-14">

                            <StatCard
                                title="Total Income"
                                amount="18,532"
                                change="look your expense"
                                changeColor="text-green-500"
                            />

                            <StatCard
                                title="Total Expense"
                                amount="3,177"
                                change="compare with income"
                                changeColor="text-orange-500"
                            />

                            <StatCard
                                title="Total Savings"
                                amount="1658"
                                change="remember your savings"
                                changeColor="text-blue-500"
                            />

                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Hero;