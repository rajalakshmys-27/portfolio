"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const Contact = () => {
  return (
    <section
      id="contact"
      className="md:min-h-screen bg-black text-white py-16 px-4 sm:px-8 lg:px-16 flex flex-col md:flex-row items-center justify-evenly gap-12"
    >
      {/* Left Section */}
      <motion.div
        className="text-center md:text-left"
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
          Let&apos;s work together.
        </h2>
        <motion.div
          className="relative w-64 sm:w-80 lg:w-96 mx-auto md:mx-0"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <Image
            src="/assets/contact.png"
            alt="Contact Illustration"
            layout="responsive"
            width={400}
            height={300}
            priority
            className="rounded-lg"
          />
        </motion.div>
      </motion.div>

      {/* Right Section */}
      <motion.div
        className="flex flex-col items-center gap-8 w-full md:w-1/2"
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <motion.div
          className="relative w-56 sm:w-64 lg:w-72 mx-auto md:mx-0"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <Image
            src="/assets/symbol.png"
            alt="Symbol Illustration"
            layout="responsive"
            width={300}
            height={300}
            priority
            className="rounded-full"
          />
        </motion.div>

        <div className="flex flex-col gap-6 text-center md:text-left">
          {/* Email Address */}
          <motion.div
            className="flex flex-col gap-1"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.7 }}
          >
            <p className="text-lg sm:text-xl font-semibold text-gray-400">
              Email Address
            </p>
            <p className="text-sm sm:text-lg">rajalakshmys27@gmail.com</p>
          </motion.div>

          {/* Phone Number */}
          <motion.div
            className="flex flex-col gap-1"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.9 }}
          >
            <p className="text-lg sm:text-xl font-semibold text-gray-400">
              Phone Number
            </p>
            <p className="text-sm sm:text-lg">+91 9074089543</p>
          </motion.div>
          <motion.div
            className="flex gap-6 justify-center md:justify-start mt-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.1 }}
          >
            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/rajalakshmys27/"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center"
            >
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-blue-600 hover:bg-blue-700 transition duration-300">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 448 512"
      className="w-6 h-6 text-white"
    >
      <path d="M100.28 448H7.4V149.54h92.88zm-46.44-344a53.25 53.25 0 1153.25-53.25 53.25 53.25 0 01-53.25 53.25zM447.9 448h-92.68V302.4c0-34.7-.7-79.3-48.34-79.3-48.4 0-55.8 37.8-55.8 76.8V448H158.3V149.54h89V184h1.3c12.4-23.6 42.5-48.4 87.4-48.4 93.4 0 110.6 61.5 110.6 141.3V448z" />
    </svg>
  </div>
            </a>
            {/* GitHub */}
            <a
              href="https://github.com/rajalakshmys-27"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center"
            >
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-800 hover:bg-gray-700 transition duration-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  className="w-6 h-6 text-white"
                >
                  <path d="M12 0c-6.63 0-12 5.37-12 12 0 5.3 3.438 9.8 8.207 11.385.6.11.793-.26.793-.577v-2.047c-3.338.726-4.043-1.6-4.043-1.6-.546-1.383-1.333-1.752-1.333-1.752-1.087-.742.083-.727.083-.727 1.2.084 1.833 1.236 1.833 1.236 1.07 1.832 2.807 1.304 3.493.997.107-.775.42-1.305.763-1.604-2.665-.304-5.467-1.334-5.467-5.933 0-1.31.467-2.381 1.233-3.22-.123-.303-.533-1.523.117-3.176 0 0 1.007-.322 3.3 1.23.957-.267 1.983-.4 3.003-.405 1.02.005 2.046.138 3.003.405 2.292-1.552 3.297-1.23 3.297-1.23.653 1.653.243 2.873.12 3.176.767.839 1.233 1.91 1.233 3.22 0 4.61-2.806 5.625-5.475 5.92.431.37.815 1.1.815 2.22v3.293c0 .32.192.694.801.576 4.769-1.584 8.203-6.084 8.203-11.384 0-6.63-5.37-12-12-12z" />
                </svg>
              </div>
            </a>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
