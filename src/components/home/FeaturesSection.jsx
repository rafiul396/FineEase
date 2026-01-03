import React from 'react';
import {
  FaWallet,
  FaChartPie,
  FaPiggyBank,
  FaLock,
  FaMobileAlt,
  FaBullseye
} from 'react-icons/fa';
import Container from '../layout/Container';

const FeaturesSection = () => {
  const features = [
    {
      icon: <FaWallet className="text-4xl text-primary" />,
      title: "Easy Transaction Tracking",
      desc: "Add income & expenses in seconds. Categorize effortlessly and never miss a detail.",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      icon: <FaChartPie className="text-4xl text-primary" />,
      title: "Insightful Reports & Charts",
      desc: "Visualize spending patterns with beautiful pie charts, bar graphs, and monthly summaries.",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      icon: <FaPiggyBank className="text-4xl text-primary" />,
      title: "Smart Budgets & Goals",
      desc: "Set monthly budgets and savings targets. Get gentle reminders when you're close to limits.",
      gradient: "from-green-500 to-emerald-500",
    },
    {
      icon: <FaBullseye className="text-4xl text-primary" />,
      title: "Achieve Financial Goals",
      desc: "Track progress toward dreams like vacations, emergency funds, or big purchases.",
      gradient: "from-orange-500 to-red-500",
    },
    {
      icon: <FaLock className="text-4xl text-primary" />,
      title: "100% Private & Secure",
      desc: "Your data stays yours. Firebase-powered auth ensures no one else sees your finances.",
      gradient: "from-indigo-500 to-blue-500",
    },
    {
      icon: <FaMobileAlt className="text-4xl text-primary" />,
      title: "Fully Responsive Design",
      desc: "Manage money seamlessly on phone, tablet, or desktop – anywhere, anytime.",
      gradient: "from-teal-500 to-cyan-500",
    },
  ];

  return (
    <section className="py-20 bg-base-100">
      <Container>
        <div>
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6 animate__animated animate__fadeInUp">
              Why Thousands Love FinEase
            </h2>
            <p className="text-xl text-secondary max-w-3xl mx-auto animate__animated animate__fadeInUp animate__delay-1s">
              Simple tools that make complex money management feel effortless and empowering.
            </p>
          </div>

          {/* Features Grid - Alternating Layout for Creativity */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-500 
                          animate__animated animate__fadeInUp animate__delay-${(index % 3) + 2}s 
                          border border-base-300 overflow-hidden group`}
              >
                <div className={`h-2 bg-gradient-to-r ${feature.gradient}`} />
                <div className="card-body text-center p-8">
                  <div className="flex justify-center mb-6 transform group-hover:scale-110 transition-transform duration-300">
                    <div className="p-5 bg-base-200 rounded-2xl text-center">
                      {feature.icon}
                    </div>
                  </div>
                  <h3 className="text-center text-2xl text-primary mb-4 font-semibold">
                    {feature.title}
                  </h3>
                  <p className="text-secondary text-lg leading-relaxed">
                    {feature.desc}
                  </p>
                </div>
                <div className={`h-1 bg-gradient-to-r ${feature.gradient} opacity-0 group-hover:opacity-100 transition-opacity`} />
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default FeaturesSection;