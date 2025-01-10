/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"
import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { useTheme } from "@/app/context/ThemeContext";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const { isLightMode } = useTheme();

  const handleChange = (e: { target: { name: any; value: any; }; }) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        alert("Failed to send the message.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <section
      id="contact"
      className={`md:min-h-screen ${isLightMode ? "text-black bg-[#ffffff]" : "text-white bg-[#141414]"} py-16 px-4 sm:px-8 lg:px-16 flex flex-col md:flex-row items-center justify-between gap-12`}
    >
      {/* Left Section */}
      <motion.div
        className="text-center md:text-left flex-1 flex flex-col gap-5 items-center"
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
        <div className="flex flex-col lg:flex-row gap-6 text-center md:text-left mt-4 md:mt-8">
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

      {/* Right Section */}
      <motion.form
        className={`${isLightMode ? "bg-gray-200" : "bg-gray-800"} p-6 rounded-lg shadow-lg flex flex-col gap-4 w-full flex-1`}
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        onSubmit={handleSubmit}
      >
        <h3 className={`text-2xl font-semibold mb-4 text-center ${isLightMode ? "text-gray-700" : "text-gray-300"}`}>Contact Me</h3>
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={formData.name}
          onChange={handleChange}
          required
          className={`p-3 rounded ${isLightMode ? "bg-gray-300 text-black" : "bg-gray-700  text-white"} focus:outline-none`}
        />
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={handleChange}
          required
          className={`p-3 rounded ${isLightMode ? "bg-gray-300 text-black" : "bg-gray-700  text-white"} focus:outline-none`}
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          required
          className={`p-3 rounded ${isLightMode ? "bg-gray-300 text-black" : "bg-gray-700  text-white"} focus:outline-none h-32`}
        />
        <button
          type="submit"
          className={`${isLightMode ? "bg-gray-700 hover:bg-gray-500 text-gray-300" : "bg-gray-900 hover:bg-gray-500 text-gray-300"} py-2 px-4 rounded focus:outline-none`}
        >
          Send Message
        </button>
      </motion.form>
    </section>
  );
};

export default Contact;
