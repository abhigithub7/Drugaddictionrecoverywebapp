/* eslint-disable no-unused-vars */
import React, { useState } from 'react';

const HelplineSupport = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const validate = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = "Name is required.";
    if (!formData.phone) newErrors.phone = "Phone number is required.";
    if (formData.phone && !/^\d{10}$/.test(formData.phone))
      newErrors.phone = "Enter a valid 10-digit phone number.";
    if (formData.email && !/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Enter a valid email address.";
    if (!formData.message) newErrors.message = "Message is required.";
    return newErrors;
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      // Simulate form submission
      console.log("Form submitted: ", formData);
      setSuccess(true);
      setFormData({ name: "", phone: "", email: "", message: "" });
    }
  };

  const [isHelpRequested, setIsHelpRequested] = useState(false);

  // Helplines for various countries (can be extended as needed)
  const helplines = {
    usa: '1-800-662-HELP (4357) - National Helpline for Substance Abuse and Mental Health Services',
    uk: '116 123 - Samaritans Helpline (UK)',
    canada: '1-800-668-6868 - Kids Help Phone (Canada)',
    australia: '13 11 14 - Lifeline Australia',
  };

  // Default hotline (USA)
  const helpline = helplines.usa;

  const handleRequestHelp = () => {
    setIsHelpRequested(true);
  };

  return (
    <>
     <div className=" bg-pink-800 mt-16 text-white py-16 px-8">
      {/* Background Image */}
      <div
        className=" inset-0 bg-cover bg-center opacity-20"
        style={{
          backgroundImage:
            'url("https://source.unsplash.com/1600x900/?support,help")',
        }}
      ></div>

      <div className=" max-w-6xl mx-auto flex flex-col md:flex-row items-center">
        {/* Text Section */}
        <div className="md:w-2/3 text-center md:text-left mb-8 md:mb-0">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Need Immediate Help? We’re Here for You.
          </h2>
          <p className="text-lg md:text-xl mb-6">
            Our emergency support team is available 24/7 to provide assistance
            during a crisis. Dont hesitate to reach out.
          </p>
          <div className="flex flex-col md:flex-row gap-4">
            <a
              href="tel:1-800-HELP-NOW"
              className="bg-white text-red-600 py-3 px-6 rounded-full shadow hover:bg-gray-100 transition"
            >
              Call Now: 1-800-HELP-NOW
            </a>
            <a
              href="/chat"
              className="bg-white text-red-600 py-3 px-6 rounded-full shadow hover:bg-gray-100 transition"
            >
              Start Live Chat
            </a>
          </div>
        </div>

        {/* Image Section */}
        <div className="md:w-1/3 flex justify-center">
          <img
            src="https://source.unsplash.com/400x300/?help,support"
            alt="Emergency Support"
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
      </div>
    <div className="min-h-screen bg-gray-100 dark:bg-black p-6  flex items-center justify-center">
      <div className="bg-white  dark:bg-neutral-950 p-8 rounded-xl shadow-lg max-w-4xl w-full">
        <h2 className="text-2xl font-semibold dark:text-white text-center text-gray-900 mb-6">
          Helpline Support for Drug Addiction Recovery
        </h2>

        <p className="text-gray-700 dark:text-white text-center text-lg mb-6">
          If you are struggling with addiction or need immediate support, reaching out for help is a crucial step towards recovery.
          Below you all find the helplines that can assist you immediately.
        </p>

        {/* Helpline Section */}
        <div className="bg-red-500 text-white p-4 rounded-lg mb-6">
          <h3 className="text-xl text-center font-bold">Call for Immediate Help</h3>
          <p className="text-lg text-center">{helpline}</p>
        </div>

        <button
          onClick={handleRequestHelp}
          className="w-full bg-pink-900 text-white py-2 rounded-lg text-lg hover:bg-pink-500 transition duration-200"
        >
          Request Help Now
        </button>

        {/* Help Request Confirmation */}
        {isHelpRequested && (
          <div className="mt-6 text-green-700 bg-green-100 p-4 rounded-lg">
            <h4 className="text-xl font-semibold">Help is on the way!</h4>
            <p>A professional will be in touch with you soon. Please stay safe.</p>
          </div>
        )}

        {/* Additional Resources */}
        <div className="mt-8">
          <h3 className="text-xl font-semibold mb-4">Other Helpful Resources:</h3>
          <ul className="list-disc list-inside space-y-2">
            <li>
              <a
                href="https://www.samhsa.gov/find-help"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                Substance Abuse and Mental Health Services Administration (SAMHSA)
              </a>
            </li>
            <li>
              <a
                href="https://www.addictioncenter.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                Addiction Center - Support & Resources
              </a>
            </li>
            <li>
              <a
                href="https://www.na.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                Narcotics Anonymous (NA)
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div className="max-w-lg mx-auto bg-white dark:bg-black shadow-lg rounded-lg p-8">
      <h2 className="text-2xl font-bold text-center mb-6">Emergency Contact</h2>
      {success && (
        <div className="bg-green-100 text-green-800 p-4 rounded mb-4">
          Your message has been sent successfully!
        </div>
      )}
      <form onSubmit={handleSubmit}>
        {/* Name */}
        <div className="mb-4">
          <label className="block text-gray-700 dark:text-gray-200 mb-2" htmlFor="name">
            Full Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-3 border dark:bg-black rounded focus:outline-none focus:ring-2 focus:ring-pink-900"
          />
          {errors.name && (
            <p className="text-red-500 text-sm mt-1">{errors.name}</p>
          )}
        </div>

        {/* Phone */}
        <div className="mb-4">
          <label className="block text-gray-700 dark:text-gray-200 mb-2" htmlFor="phone">
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full p-3 border dark:bg-black rounded focus:outline-none focus:ring-2 focus:ring-pink-900"
          />
          {errors.phone && (
            <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
          )}
        </div>

        {/* Email */}
        <div className="mb-4">
          <label className="block text-gray-700 dark:text-gray-200 mb-2" htmlFor="email">
            Email (optional)
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-3 border dark:bg-black rounded focus:outline-none focus:ring-2 focus:ring-pink-900"
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email}</p>
          )}
        </div>

        {/* Message */}
        <div className="mb-4">
          <label className="block text-gray-700 dark:text-gray-200 mb-2" htmlFor="message">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows="4"
            className="w-full p-3 border dark:bg-black rounded focus:outline-none focus:ring-2 focus:ring-pink-900"
          ></textarea>
          {errors.message && (
            <p className="text-red-500 text-sm mt-1">{errors.message}</p>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-pink-800 text-white py-3 px-4 rounded hover:bg-pink-300 transition"
        >
          Submit
        </button>
      </form>
    </div>
    </>
  );
};

export default HelplineSupport;
