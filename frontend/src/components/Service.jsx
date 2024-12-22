/* eslint-disable no-unused-vars */
import React from 'react';

const supportCommunities = [
  {
    id: 1,
    name: 'Recovery Warriors Support Group',
    description:
      'A safe space for individuals in recovery to share experiences, challenges, and victories, providing mutual support and encouragement.',
    schedule: 'Every Monday & Wednesday, 7:00 PM - 8:30 PM',
    contact: 'recoverywarriors@example.com',
  },
  {
    id: 2,
    name: 'Family Support Network',
    description:
      'Supporting family members and loved ones of those in recovery through education, resources, and group discussions.',
    schedule: 'Every Tuesday, 6:00 PM - 7:30 PM',
    contact: 'familysupport@example.com',
  },
  {
    id: 3,
    name: 'Mindful Recovery Circle',
    description:
      'A group focused on mindfulness techniques, meditation, and stress-relief practices to support lasting recovery.',
    schedule: 'Every Thursday, 5:30 PM - 7:00 PM',
    contact: 'mindfulrecovery@example.com',
  },
  {
    id: 4,
    name: 'Teen Recovery Support',
    description:
      'A dedicated group for teens struggling with addiction, offering peer support, therapy, and coping mechanisms.',
    schedule: 'Every Friday, 4:00 PM - 5:30 PM',
    contact: 'teenrecovery@example.com',
  },
  // Add more support groups as needed
];

const SupportCommunityPage = () => {
  return (
    <>
     <div className=" bg-gradient-to-r mt-16 inset-0 z-50 from-pink-900 to-pink-900 text-white py-16 px-8">
      {/* Decorative Background Image */}
      <div
        className=" inset-0 container bg-cover bg-center "
        style={{
          backgroundImage:
            'url("https://source.unsplash.com/1600x900/?community,people")',
        }}
      ></div>

      <div className=" max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Together, We Recover
        </h2>
        <p className="text-lg md:text-xl mb-6">
          Join a compassionate community where you can share your journey,
          support others, and find strength in togetherness.
        </p>
        <button className="bg-white text-pink-600 font-semibold py-3 px-6 rounded-full shadow hover:bg-gray-100 transition">
          Join a Community
        </button>
      </div>
    </div>
    <div className="min-h-screen mt-16 dark:bg-neutral-950 bg-gray-100 p-4 sm:p-8">
      <div className="text-center mb-12">
        <h2 className="text-3xl dark:text-white sm:text-4xl font-semibold text-gray-800 mb-4">
          Join Our Support Communities
        </h2>
        <p className="text-lg sm:text-xl dark:text-gray-200 text-gray-600">
          Find a supportive group to help you on your recovery journey. Connect with others and gain the strength to move forward.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {supportCommunities.map((group) => (
          <div
            key={group.id}
            className="bg-white dark:bg-neutral-900 p-6 rounded-lg shadow-lg flex flex-col items-center text-center"
          >
            <h3 className="text-xl dark:text-white font-semibold text-gray-800">{group.name}</h3>
            <p className="text-gray-600 dark:text-gray-300 mt-2">{group.description}</p>
            <div className="mt-4">
              <p className="text-gray-700 dark:text-gray-300  font-semibold">Schedule:</p>
              <p className="text-gray-600 dark:text-gray-300 ">{group.schedule}</p>
            </div>
            <div className="mt-4">
              <p className="text-gray-700 dark:text-white font-semibold">Contact:</p>
              <p className="text-gray-600 dark:text-gray-300 ">{group.contact}</p>
            </div>
            <a
              href={`mailto:${group.contact}`}
              className="mt-6 inline-block bg-green-700 text-white px-6 py-3 rounded-md text-lg font-semibold hover:bg-indigo-600 transition duration-200"
            >
              Join Group
            </a>
          </div>
        ))}
      </div>
    </div>
    </>
  );
};

export default SupportCommunityPage;
