/* eslint-disable no-unused-vars */
import React from 'react';

const doctors = [
  {
    id: 1,
    name: 'Dr. Sarah Johnson',
    specialization: 'Addiction Specialist',
    email: 'sarah.johnson@example.com',
    phone: '123-456-7890',
  },
  {
    id: 2,
    name: 'Dr. Michael Smith',
    specialization: 'Psychiatrist',
    email: 'michael.smith@example.com',
    phone: '987-654-3210',
  },
  {
    id: 3,
    name: 'Dr. Michael Smith',
    specialization: 'Psychiatrist',
    email: 'michael.smith@example.com',
    phone: '987-654-3210',
  },
  {
    id: 4,
    name: 'Dr. Michael Smith',
    specialization: 'Psychiatrist',
    email: 'michael.smith@example.com',
    phone: '987-654-3210',
  },
  {
    id: 5,
    name: 'Dr. Michael Smith',
    specialization: 'Psychiatrist',
    email: 'michael.smith@example.com',
    phone: '987-654-3210',
  },
  {
    id: 5,
    name: 'Dr. Michael Smith',
    specialization: 'Psychiatrist',
    email: 'michael.smith@example.com',
    phone: '987-654-3210',
  },
  // Add more doctors as needed
];

const DoctorsPage = () => {
  return (
    <>
    <div className=" bg-pink-800 mt-16 py-16 px-8">
    {/* Background Image */}
    <div
      className=" inset-0 bg-cover bg-center opacity-20"
      style={{
        backgroundImage:
          'url("https://source.unsplash.com/1600x900/?doctor,healthcare")',
      }}
    ></div>

    <div className=" flex flex-col md:flex-row items-center max-w-6xl mx-auto">
      {/* Text Section */}
      <div className="md:w-1/2 text-center md:text-left mb-8 md:mb-0">
        <h2 className="text-3xl md:text-4xl text-white font-bold text-gray-800 mb-4">
          Expert Medical Guidance for Your Recovery
        </h2>
        <p className="text-gray-300  text-lg md:text-xl mb-6">
          Our certified doctors and healthcare professionals are here to
          support you with personalized care and evidence-based treatments.
        </p>
        <button className="bg-green-600 text-white py-3 px-6 rounded-full shadow hover:bg-blue-700 transition">
          Meet Our Doctors
        </button>
      </div>

      {/* Image Section */}
      <div className="md:w-1/2 flex justify-center">
        <img
          src=""
          alt="Medical Team"
          className="rounded-lg shadow-lg"
        />
      </div>
    </div>
  </div>
    <div className="min-h-screen mt-16 dark:bg-neutral-950 bg-gray-100 p-4 sm:p-8">
      <h2 className="text-3xl font-semibold dark:text-white text-center text-gray-800 mb-6">
        Our Specialists
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {doctors.map((doctor) => (
          <div
            key={doctor.id}
            className="bg-white dark:bg-neutral-900 p-6 rounded-lg shadow-lg flex flex-col items-center text-center"
          >
            <h3 className="text-xl dark:text-white font-bold text-gray-800">{doctor.name}</h3>
            <p className="text-gray-600 dark:text-gray-300 mt-1 text-sm sm:text-base">
              {doctor.specialization}
            </p>

            <div className="mt-4 text-sm sm:text-base">
              <p className="text-gray-700 dark:text-gray-400">
                <span className="font-semibold dark:text-gray-100">Email:</span> {doctor.email}
              </p>
              <p className="text-gray-700 dark:text-gray-300 mt-2">
                <span className="font-semibold">Phone:</span> {doctor.phone}
              </p>
            </div>

            <div className="mt-6 flex space-x-4">
              <button className="bg-pink-800 text-white px-4 py-2 rounded-md text-sm sm:text-base hover:bg-indigo-600 transition duration-200">
                View Profile
              </button>
              <button className="bg-green-700 text-white px-4 py-2 rounded-md text-sm sm:text-base hover:bg-green-600 transition duration-200">
                Book Appointment
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
    </>
  );
};

export default DoctorsPage;
