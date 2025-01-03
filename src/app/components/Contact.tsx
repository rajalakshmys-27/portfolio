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
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
