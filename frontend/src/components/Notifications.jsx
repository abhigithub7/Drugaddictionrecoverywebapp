/* eslint-disable no-unused-vars */
import React from 'react';
import { FaBook, FaVideo, FaHeadphones, FaLink } from 'react-icons/fa';

const resources = [
  {
    id: 1,
    type: 'article',
    title: 'Understanding Addiction',
    description: 'An in-depth article that explores the root causes of addiction and effective strategies for overcoming it.',
    link: '#',
    icon: <FaBook className="text-indigo-500" />,
  },
  {
    id: 2,
    type: 'video',
    title: 'Motivational Recovery Story',
    description: 'A motivational video sharing a personal journey of overcoming addiction.',
    link: '#',
    icon: <FaVideo className="text-red-500" />,
  },
  {
    id: 3,
    type: 'audio',
    title: 'Guided Meditation for Recovery',
    description: 'An audio guide to help manage cravings and stress through mindfulness and meditation.',
    link: '#',
    icon: <FaHeadphones className="text-green-500" />,
  },
  {
    id: 4,
    type: 'external-link',
    title: 'Support Groups and Resources',
    description: 'A curated list of support groups and resources for ongoing recovery support.',
    link: '#',
    icon: <FaLink className="text-blue-500" />,
  },
  // Add more resources as needed
];

const ResourcesPage = () => {
  return (
    <>
    <div className=" bg-gradient-to-r mt-16 from-pink-800 to-pink-800 text-white py-16 px-8">
      {/* Background Illustration */}
      <div
        className=" inset-0 bg-cover bg-center opacity-20"
        style={{
          backgroundImage:
            'url("https://source.unsplash.com/1600x900/?books,learning")',
        }}
      ></div>

      <div className=" max-w-6xl mx-auto flex flex-col md:flex-row items-center">
        {/* Text Section */}
        <div className="md:w-2/3 text-center md:text-left mb-8 md:mb-0">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Empower Your Recovery with Expert Resources
          </h2>
          <p className="text-lg md:text-xl mb-6">
            Access a wealth of articles, videos, and tools to support your
            journey toward recovery and better mental health.
          </p>
          <button className="bg-white text-green-600 py-3 px-6 rounded-full shadow hover:bg-gray-100 transition">
            Explore Resources
          </button>
        </div>

        {/* Image Section */}
        <div className="md:w-1/3 flex justify-center">
          <img
            src="https://source.unsplash.com/400x300/?books,help"
            alt="Resources"
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  
    <div className="min-h-screen dark:bg-neutral-950 mt-16 bg-gray-100 p-4 sm:p-8">
      <h2 className="text-3xl dark:text-white font-semibold text-center text-gray-800 mb-8">
        Recovery Resources
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {resources.map((resource) => (
          <div
            key={resource.id}
            className="bg-white dark:bg-neutral-900 p-6 rounded-lg shadow-lg flex flex-col items-center text-center"
          >
            <div className="text-5xl mb-4">{resource.icon}</div>
            <h3 className="text-xl dark:text-white font-bold text-gray-800">{resource.title}</h3>
            <p className="text-gray-600 dark:text-gray-200 mt-2 text-sm sm:text-base">
              {resource.description}
            </p>
            
            <a
              href={resource.link}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block bg-pink-800 text-white px-4 py-2 rounded-md text-sm sm:text-base hover:bg-indigo-600 transition duration-200"
            >
              Access Resource
            </a>
          </div>
        ))}
      </div>
    </div>
    </>
  );
};

export default ResourcesPage;
