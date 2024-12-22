/* eslint-disable no-unused-vars */
import React from 'react';

const AboutPage = () => {
  return (
    <div className="min-h-screen mt-16 dark:bg-neutral-950 bg-gray-100 p-4 sm:p-8">
      {/* Title Section */}
      <div className="text-center mb-10">
        <h2 className="text-3xl sm:text-4xl mt-3 dark:text-white font-semibold text-gray-800 mb-4">
          About Us
        </h2>
        <p className="text-lg sm:text-xl text-gray-700 dark:text-gray-300">
          Empowering individuals to recover and live healthier lives through support, education, and holistic therapies.
        </p>
      </div>

      {/* Mission Section */}
      <div className="bg-white dark:bg-neutral-900 p-8 rounded-lg shadow-lg mb-8">
        <h3 className="text-2xl font-semibold dark:text-white  text-gray-800 mb-4">Our Mission</h3>
        <p className="text-base text-gray-700 dark:text-gray-300">
          Our mission is to provide compassionate and effective support for those struggling with drug addiction. We believe in a holistic approach to recovery, combining therapy, education, and community to help individuals regain control of their lives and achieve lasting recovery.
        </p>
      </div>

      {/* Services Section */}
      <div className="bg-white dark:bg-neutral-900 p-8 rounded-lg shadow-lg mb-8">
        <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-4">Our Services</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="service-card bg-indigo-50 dark:bg-neutral-800 p-6 rounded-lg shadow-md">
            <h4 className="text-xl font-semibold dark:text-gray-200 text-gray-700 mb-2">Counseling & Therapy</h4>
            <p className="dark:text-gray-300 text-gray-700">
              One-on-one counseling and group therapy sessions led by experienced professionals to help address underlying causes of addiction.
            </p>
          </div>
          <div className="service-card dark:bg-neutral-800 bg-green-50 p-6 rounded-lg shadow-md">
            <h4 className="text-xl font-semibold dark:text-white text-gray-800 mb-2">Holistic Healing</h4>
            <p className="text-gray-600 dark:text-gray-300">
              Mindfulness, meditation, and other holistic healing practices designed to promote mental clarity, stress reduction, and overall well-being.
            </p>
          </div>
          <div className="service-card bg-blue-50 dark:bg-neutral-800 p-6 rounded-lg shadow-md">
            <h4 className="text-xl font-semibold dark:text-white text-gray-800 mb-2">Support Groups</h4>
            <p className="text-gray-600 dark:text-gray-300">
              Peer-led support groups that offer a safe space for individuals to share their recovery experiences and receive encouragement from others.
            </p>
          </div>
        </div>
      </div>

      {/* Our Team Section */}
      <div className="bg-white dark:bg-neutral-900 p-8 rounded-lg shadow-lg mb-8">
        <h3 className="text-2xl font-semibold dark:text-white text-gray-800 mb-4">Meet Our Team</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Team Member 1 */}
          <div className="team-member bg-gray-50 dark:bg-neutral-800 p-6 rounded-lg shadow-md">
            <img
              src="https://via.placeholder.com/150"
              alt="Team Member"
              className="w-32 h-32 rounded-full mx-auto mb-4"
            />
            <h4 className="text-lg dark:text-white font-semibold text-gray-800">Dr. Sarah Johnson</h4>
            <p className="text-gray-600 dark:text-gray-100">Addiction Specialist</p>
            <p className="text-gray-500 dark:text-gray-300 mt-2">
              Dr. Johnson is a licensed addiction specialist with over 10 years of experience helping individuals overcome substance abuse.
            </p>
          </div>
          {/* Team Member 2 */}
          <div className="team-member dark:bg-neutral-800 bg-gray-50 p-6 rounded-lg shadow-md">
            <img
              src="https://via.placeholder.com/150"
              alt="Team Member"
              className="w-32 h-32 rounded-full mx-auto mb-4"
            />
            <h4 className="text-lg font-semibold dark:text-white text-gray-800">John Smith</h4>
            <p className="text-gray-600 dark:text-gray-100">Therapist & Counselor</p>
            <p className="text-gray-500 dark:text-gray-300 mt-2">
              John specializes in cognitive behavioral therapy (CBT) and works with individuals to help them reframe negative thought patterns.
            </p>
          </div>
          {/* Team Member 3 */}
          <div className="team-member bg-gray-50 dark:bg-neutral-800 p-6 rounded-lg shadow-md">
            <img
              src="https://via.placeholder.com/150"
              alt="Team Member"
              className="w-32 h-32 rounded-full mx-auto mb-4"
            />
            <h4 className="text-lg dark:text-white font-semibold text-gray-800">Mary Lee</h4>
            <p className="text-gray-600 dark:text-gray-100">Recovery Coach</p>
            <p className="text-gray-500 dark:text-gray-300 mt-2">
              Mary is passionate about guiding individuals through the recovery process, offering mentorship and encouragement at every stage.
            </p>
          </div>
        </div>
      </div>

      {/* Get Involved Section */}
      <div className="bg-white p-8 dark:bg-neutral-900 rounded-lg shadow-lg mb-8">
        <h3 className="text-2xl font-semibold dark:text-white text-gray-800 mb-4">Get Involved</h3>
        <p className="text-base dark:text-gray-300  text-gray-700 mb-4">
          Whether you are looking for help or want to support others on their recovery journey, there are plenty of ways to get involved. Join our programs, become a volunteer, or donate to help those in need.
        </p>
        <a
          href="#"
          className="inline-block bg-pink-500 text-white px-6 py-3 rounded-md text-lg font-semibold hover:bg-indigo-600 transition duration-200"
        >
          Learn More
        </a>
      </div>

     
    </div>
  );
};

export default AboutPage;
