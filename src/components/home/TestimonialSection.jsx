import React from "react";

const testimonials = [
  {
    id: 1,
    name: "Alice Johnson",
    role: "Student",
    img: "https://randomuser.me/api/portraits/women/44.jpg",
    message: "FinEase helped me track my expenses like never before. The charts are super insightful!",
  },
  {
    id: 2,
    name: "Mark Thompson",
    role: "Software Engineer",
    img: "https://randomuser.me/api/portraits/men/32.jpg",
    message: "I love how easy it is to set saving goals and see my progress. Highly recommended!",
  },
  {
    id: 3,
    name: "Sara Williams",
    role: "Freelancer",
    img: "https://randomuser.me/api/portraits/women/65.jpg",
    message: "The UI is beautiful and intuitive. Managing my finances has never been so fun!",
  },
];

const TestimonialSection = () => {
  return (
    <section className="py-20 bg-base-100 dark:bg-neutral">
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Heading */}
        <h2 className="text-4xl font-bold text-primary dark:text-primary mb-4">
          What Our Users Say
        </h2>
        <p className="text-secondary dark:text-secondary max-w-2xl mx-auto mb-12">
          Real feedback from people who improved their finances with FinEase.
        </p>

        {/* Testimonials Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="bg-accent-content rounded-3xl shadow-lg p-6 hover:shadow-2xl transition flex flex-col items-center text-center"
            >
              {/* Quote Icon */}
              <svg
                className="w-10 h-10 text-accent dark:text-accent mb-4"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M7.17 6A5.002 5.002 0 002 11v3a1 1 0 001 1h3v-4a1 1 0 011-1h1V6H7.17zM17.17 6A5.002 5.002 0 0012 11v3a1 1 0 001 1h3v-4a1 1 0 011-1h1V6h-3.83z" />
              </svg>

              {/* Message */}
              <p className="text-gray-600 dark:text-info leading-relaxed mb-6">
                "{t.message}"
              </p>

              {/* User Info */}
              <img
                src={t.img}
                alt={t.name}
                className="w-16 h-16 rounded-full mb-2 object-cover"
              />
              <h4 className="text-xl font-bold text-secondary dark:text-secondary">
                {t.name}
              </h4>
              <p className="text-sm text-gray-500 dark:text-gray-400">{t.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
