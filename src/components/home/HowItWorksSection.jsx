import React from 'react';
import {
    FaUserPlus,
    FaPlusCircle,
    FaChartBar,
    FaBullseye,
    FaTrophy
} from 'react-icons/fa';
import Container from '../layout/Container';

const HowItWorksSection = () => {
    const steps = [
        {
            number: "1",
            icon: <FaUserPlus className="text-4xl text-white" />,
            title: "Sign Up in Seconds",
            desc: "Create your free account with email or Google. No complicated forms - just get started instantly.",
            color: "bg-blue-500",
        },
        {
            number: "2",
            icon: <FaPlusCircle className="text-4xl text-white" />,
            title: "Add Your Transactions",
            desc: "Log income and expenses effortlessly. Choose categories, add notes, and pick dates - all in a clean interface.",
            color: "bg-purple-500",
        },
        {
            number: "3",
            icon: <FaChartBar className="text-4xl text-white" />,
            title: "Set Budgets & View Reports",
            desc: "Create monthly budgets and watch beautiful charts show exactly where your money goes.",
            color: "bg-green-500",
        },
        {
            number: "4",
            icon: <FaBullseye className="text-4xl text-white" />,
            title: "Track Savings Goals",
            desc: "Set targets for vacations, emergencies, or big dreams. See progress grow with every smart choice.",
            color: "bg-orange-500",
        },
        {
            number: "5",
            icon: <FaTrophy className="text-4xl text-white" />,
            title: "Achieve Financial Peace",
            desc: "Watch habits improve, savings grow, and stress fade. You're in control – one step at a time.",
            color: "bg-pink-500",
        },
    ];

    return (
        <section className="py-20 bg-neutral">
            <Container>
                <div>
                    {/* Section Header */}
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6 animate__animated animate__fadeInUp">
                            How FinEase Works
                        </h2>
                        <p className="text-xl text-secondary max-w-3xl mx-auto animate__animated animate__fadeInUp animate__delay-1s">
                            Simple, intuitive steps to turn money chaos into clarity and confidence.
                        </p>
                    </div>

                    {/* Timeline Steps - Responsive Grid with Connecting Lines */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative">
                        {/* Connecting Line (visible on md+) */}
                        <div className="hidden md:block absolute top-20 left-0 right-0 h-1 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 rounded-full -z-10"></div>

                        {steps.map((step, index) => (
                            <div
                                key={index}
                                className={`flex flex-col items-center text-center group bg-info rounded-2xl p-6 animate__animated animate__fadeInUp animate__delay-${index + 2}s ${steps.length % 2 !== 0 && index === steps.length - 1 ? "md:col-span-2" : ""} `}
                            >
                                {/* Numbered Icon Circle */}
                                <div className={`w-24 h-24 ${step.color} rounded-full flex items-center justify-center shadow-2xl transform group-hover:scale-110 group-hover:-translate-y-2 transition-all duration-500 mb-6 relative`}>
                                    {/* Glow Effect */}
                                    <div className={`absolute inset-0 ${step.color} rounded-full opacity-50 blur-xl group-hover:blur-2xl transition-all`}></div>
                                    {/* <span className="text-white text-3xl font-bold relative z-10">{step.number}</span> */}
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        {step.icon}
                                    </div>
                                </div>

                                {/* Content */}
                                <h3 className="text-2xl font-bold text-primary mb-3">
                                    {step.title}
                                </h3>
                                <p className="text-secondary text-lg leading-relaxed max-w-xs">
                                    {step.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default HowItWorksSection;