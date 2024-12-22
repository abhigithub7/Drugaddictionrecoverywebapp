/* eslint-disable no-unused-vars */
import React from 'react';

const Footer = () => {
  return (
    <footer className="dark:bg-neutral-950 bg-gray-200 text-white py-8 mt-8">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left">
          {/* Section 1: About */}
          <div className="mb-6 md:mb-0">
            <h3 className="text-2xl text-gray-900 dark:text-gray-300 font-semibold mb-4">Addiction Recovery Support</h3>
            <p className="text-lg text-gray-900 dark:text-gray-300">
              Helping you on your path to recovery.  We offer resources, guidance, and professional support for overcoming addiction.
            </p>
          </div>

          {/* Section 2: Resources */}
          <div className="mb-6 md:mb-0">
            <h4 className="text-xl text-gray-900 dark:text-gray-300 font-semibold mb-4">Resources</h4>
            <ul>
              <li>
                <a
                  href="https://www.samhsa.gov/find-help"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white text-gray-900 dark:text-gray-300 transition-colors duration-200"
                >
                  SAMHSA - Substance Abuse and Mental Health Services
                </a>
              </li>
              <li>
                <a
                  href="https://www.addictioncenter.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 text-gray-900 dark:text-gray-300 hover:text-white transition-colors duration-200"
                >
                  Addiction Center - Support & Resources
                </a>
              </li>
              <li>
                <a
                  href="https://www.na.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 text-gray-900 dark:text-gray-300 hover:text-white transition-colors duration-200"
                >
                  Narcotics Anonymous (NA)
                </a>
              </li>
            </ul>
          </div>

          {/* Section 3: Contact Information */}
          <div className="mb-6 md:mb-0">
            <h4 className="text-xl font-semibold dark:text-gray-300 text-gray-900 mb-4">Contact Us</h4>
            <ul>
              <li>
                <a
                  href="mailto:support@recoveryapp.com"
                  className="text-gray-400 hover:text-white dark:text-gray-300 text-gray-900 transition-colors duration-200"
                >
                  support@recoveryapp.com
                </a>
              </li>
              <li>
                <p className=" text-gray-900 dark:text-gray-300 text-gray-400">Phone: 1-800-123-4567</p>
              </li>
            </ul>
          </div>

       
        </div>

        {/* Footer Bottom */}
        <div className="text-center mt-8 border-t border-gray-700 pt-4">
          <p className="text-gray-400 dark:text-gray-300 text-gray-900 text-sm">
            &copy; {new Date().getFullYear()} Addiction Recovery App. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

