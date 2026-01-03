import React, { use } from 'react';
import Hero from '../../components/home/Hero';
import Bugdeting from '../../components/home/Bugdeting';
import Overview from '../../components/home/Overview';
import { AuthContext } from '../../provider/AuthProvider';
import WhyFinancialPlanningMatters from '../../components/home/WhyFinancialPlanningMatters';
import FeaturesSection from '../../components/home/FeaturesSection';
import HowItWorksSection from '../../components/home/HowItWorksSection';
import TestimonialSection from '../../components/home/TestimonialSection';
import Newsletter from '../../components/home/Newsletter';
import FAQSection from '../../components/home/FAQSection';
import CTASection from '../../components/home/TASection';

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
            <TestimonialSection />
            <Newsletter />
            <FAQSection />
            {
                !user && <CTASection />
            }
        </>
    );
};

export default Home;