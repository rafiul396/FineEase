import React, { use } from 'react';
import Hero from '../../components/home/Hero';
import Bugdeting from '../../components/home/Bugdeting';
import Overview from '../../components/home/Overview';
import { AuthContext } from '../../provider/AuthProvider';
import WhyFinancialPlanningMatters from '../../components/home/WhyFinancialPlanningMatters';
import FeaturesSection from '../../components/home/FeaturesSection';
import HowItWorksSection from '../../components/home/HowItWorksSection';

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
            <FeaturesSection />
            <HowItWorksSection />
        </>
    );
};

export default Home;