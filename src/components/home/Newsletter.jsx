import React from "react";

const Newsletter = () => {
  return (
    <section className="py-20 bg-neutral">
      <div className="max-w-3xl mx-auto text-center px-6">
        {/* Heading */}
        <h2 className="text-4xl font-bold text-primary dark:text-primary mb-4">
          Subscribe to Our Newsletter
        </h2>

        {/* Subtitle */}
        <p className="text-secondary dark:text-secondary mb-8 leading-relaxed">
          Get weekly finance tips, budgeting guides, and savings strategies delivered straight to your inbox.
        </p>

        {/* Input + Button */}
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <input
            type="email"
            placeholder="Enter your email"
            className="border border-accent rounded-lg px-4 py-3 w-full sm:w-72 focus:outline-none focus:ring-2 focus:ring-primary dark:bg-neutral dark:border-gray-600 dark:text-accent-content"
          />
          <button className="bg-primary text-accent-content px-6 py-3 rounded-lg hover:bg-accent transition w-full sm:w-auto">
            Subscribe
          </button>
        </div>

        {/* Optional small text */}
        <p className="text-sm text-gray-500 dark:text-gray-400 mt-4">
          We respect your privacy. Unsubscribe at any time.
        </p>
      </div>
    </section>
  );
};

export default Newsletter;
