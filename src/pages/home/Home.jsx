import React, { use } from 'react';
import Hero from '../../components/home/Hero';
import Bugdeting from '../../components/home/Bugdeting';
import Overview from '../../components/home/Overview';
import { AuthContext } from '../../provider/AuthProvider';
import WhyFinancialPlanningMatters from '../../components/home/WhyFinancialPlanningMatters';

const Home = () => {
    const {user} = use(AuthContext);
    return (
        <>
        <title>Home | FinEase</title>
            <Hero />
            {
                user && <Overview />
            }
            <Bugdeting />
            <WhyFinancialPlanningMatters />
        </>
    );
};

export default Home;