"use client"
import { motion } from "framer-motion";
import Image from "next/image";
import clsx from "clsx";
import { useTheme } from "@/app/context/ThemeContext";
import ContactForm from "@/app/components/ContactForm";
import "@/app/styles/contact.css";

const Contact = () => {
  const { isLightMode } = useTheme();

  const contactDetails = [
    {
      "id": 14,
      "name": "Email Address",
      "value": "rajalakshmys27@gmail.com"
    },
    {
      "id": 15,
      "name": "Phone Number",
      "value": "+91 9074089543"
    }
  ]

  return (
    <section
      id="contact"
      className={clsx("nav-section contact-section", {
        "light-mode-section": isLightMode,
        "dark-mode-section": !isLightMode
      })}
    >
      <motion.div
        className="contact-heading-container"
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <h2 className="contact-heading">
          Let&apos;s work together.
        </h2>
        <motion.div
          className="contact-image-container"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <Image
            src="/assets/contact.png"
            alt="Contact Illustration"
            width={400}
            height={300}
            priority
            className="rounded-lg"
            style={{ width: '100%', height: 'auto' }}
          />
        </motion.div>
        <div className="contact-details-container">
          {contactDetails.map((item) => (
            <motion.div
              className="flex flex-col gap-1"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.7 }}
              key={item.id}
            >
              <p className="contact-detail-name">{item.name}</p>
              <p className="contact-detail-value">{item.value}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
      <ContactForm isLightMode={isLightMode} />
    </section >
  );
};

export default Contact;
