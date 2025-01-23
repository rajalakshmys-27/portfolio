"use client";

import React, { useState } from "react";
import { clsx } from "clsx";
import { motion } from "framer-motion";

interface ContactFormProps {
    isLightMode: boolean;
}

const ContactForm: React.FC<ContactFormProps> = ({ isLightMode }) => {
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });
    const [modal, setModal] = useState({ isOpen: false, message: "" });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setModal({ isOpen: true, message: "Message sent successfully!" });
                setFormData({ name: "", email: "", message: "" });
            } else {
                setModal({ isOpen: true, message: "Failed to send the message!" });
            }
        } catch (error) {
            console.error("Error:", error);
            setModal({
                isOpen: true,
                message: "An error occurred. Please try again!",
            });
        }
    };

    const closeModal = () => {
        setModal({ isOpen: false, message: "" });
    };
    return (
        <>
            <motion.form
                className={clsx("contact-form-container", {
                    "bg-gray-200": isLightMode,
                    "bg-gray-800": !isLightMode
                })}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
                onSubmit={handleSubmit}
            >
                <h3 className={clsx("contact-form-heading", {
                    "text-gray-700": isLightMode,
                    "text-gray-300": !isLightMode
                })}>Contact Me</h3>
                <input
                    type="text"
                    name="name"
                    placeholder="Full Name"
                    value={formData.name}
                    onChange={handleChange}
                    autoComplete="name"
                    required
                    className={clsx("input-style", {
                        "input-light-mode": isLightMode,
                        "input-dark-mode": !isLightMode
                    })}
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={handleChange}
                    autoComplete="email"
                    required
                    className={clsx("input-style", {
                        "input-light-mode": isLightMode,
                        "input-dark-mode": !isLightMode
                    })}
                />
                <textarea
                    name="message"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className={clsx("input-style h-32", {
                        "input-light-mode": isLightMode,
                        "input-dark-mode": !isLightMode
                    })}
                />
                <button
                    type="submit"
                    className={clsx("button-style", {
                        "button-light-mode": isLightMode,
                        "button-dark-mode": !isLightMode
                    })}
                >
                    Send Message
                </button>
            </motion.form>

            {modal.isOpen && (
                <div
                    className="modal-container"
                    onClick={closeModal}
                >
                    <div
                        className={clsx("modal-body", {
                            "modal-body-light-mode": isLightMode,
                            "modal-body-dark-mode": !isLightMode
                        })}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <p className="modal-message">{modal.message}</p>
                        <button
                            onClick={closeModal}
                            className={clsx("close-button", {
                                "close-button-light-mode": isLightMode,
                                "close-button-dark-mode": !isLightMode
                            })}
                        >
                            Close
                        </button>
                    </div>
                </div>
            )
            }
        </>
    );
};

export default ContactForm;
