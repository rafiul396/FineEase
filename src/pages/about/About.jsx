import React from "react";
import Container from "../../components/layout/Container";
import { FaLock, FaChartPie, FaUserCheck } from "react-icons/fa";

const About = () => {
  return (
    <section className="bg-neutral text-secondary py-20">
      <Container>

        {/* Page Header */}
        <div className="max-w-4xl mx-auto text-center mb-20">
          <h1 className="text-5xl font-semibold mb-6">
            About <span className="text-primary">FinEase</span>
          </h1>
          <p className="text-lg leading-relaxed">
            FinEase is a modern financial management platform built to help
            individuals gain clarity, control, and confidence over their
            personal finances.
          </p>
        </div>

        {/* Core Description */}
        <div className="grid md:grid-cols-2 gap-16 items-center mb-24">
          <div className="bg-base-100 rounded-2xl p-10 shadow-md space-y-6">
            <h2 className="text-3xl font-semibold">
              Designed for Financial Simplicity
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Managing personal finance can be overwhelming. FinEase simplifies
              this process by bringing budgeting, expense tracking, and
              financial insights into a single, intuitive platform.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Built with modern technology and a security-first approach,
              FinEase enables users to make informed decisions without
              unnecessary complexity.
            </p>
          </div>

          {/* Feature Highlights */}
          <div className="bg-base-100 rounded-2xl p-10 shadow-md space-y-8">
            <div className="flex gap-4">
              <FaLock className="text-primary text-2xl mt-1" />
              <div>
                <h4 className="font-semibold text-lg">Enterprise-Grade Security</h4>
                <p className="text-sm text-gray-600">
                  Secure authentication and data protection aligned with modern
                  industry standards.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <FaChartPie className="text-primary text-2xl mt-1" />
              <div>
                <h4 className="font-semibold text-lg">Actionable Financial Insights</h4>
                <p className="text-sm text-gray-600">
                  Clear analytics that help users understand spending patterns
                  and financial trends.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <FaUserCheck className="text-primary text-2xl mt-1" />
              <div>
                <h4 className="font-semibold text-lg">User-Centric Experience</h4>
                <p className="text-sm text-gray-600">
                  Thoughtfully designed workflows that prioritize clarity,
                  usability, and efficiency.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-12">
          <div className="bg-base-100 rounded-2xl p-10 shadow-sm">
            <h3 className="text-2xl font-semibold mb-4">Our Mission</h3>
            <p className="text-gray-600 leading-relaxed">
              To empower individuals with simple, secure, and reliable tools
              that enable smarter financial decisions and long-term financial
              stability.
            </p>
          </div>

          <div className="bg-base-100 rounded-2xl p-10 shadow-sm">
            <h3 className="text-2xl font-semibold mb-4">Our Vision</h3>
            <p className="text-gray-600 leading-relaxed">
              To become a trusted financial companion that helps people
              confidently manage their money in an increasingly digital world.
            </p>
          </div>
        </div>

      </Container>
    </section>
  );
};

export default About;
