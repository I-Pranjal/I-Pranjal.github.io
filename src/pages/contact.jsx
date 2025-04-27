import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import React, { useRef } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export default function Contact() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.2 });

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    };

    return (
        <section id="contact" className="py-20 md:py-32 bg-neutral-900">
            <div className="container px-4 md:px-6">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ duration: 0.5 }}
                        className="text-3xl font-bold mb-2"
                    >
                        Get In Touch
                    </motion.h2>

                    <motion.div
                        initial={{ opacity: 0, width: 0 }}
                        animate={isInView ? { opacity: 1, width: "5rem" } : { opacity: 0, width: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="h-1 bg-primary mx-auto mb-6"
                    />

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="text-lg text-gray-200 max-w-2xl mx-auto"
                    >
                        Have a project in mind or want to discuss potential opportunities? Feel free to reach out to me through the
                        form below or via my contact information.
                    </motion.p>
                </div>

                <motion.div
                    ref={ref}
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    className="grid md:grid-cols-3 gap-8"
                >
                    <div className="md:col-span-1 space-y-6">
                        <motion.div variants={itemVariants} className="p-6 border rounded-lg shadow-md flex items-start gap-4">
                            <div className="bg-gray-800 p-3 rounded-full text-green-500">
                                <Mail size={24} />
                            </div>
                            <div>
                                <h3 className="font-bold mb-1">Email</h3>
                                <p className="">pranjalnitjsr@gmail.com</p>
                            </div>
                        </motion.div>

                        <motion.div variants={itemVariants} className="p-6 border rounded-lg shadow-md flex items-start gap-4">
                            <div className="bg-gray-800 p-3 rounded-full text-green-500">
                                <Phone size={24} />
                            </div>
                            <div>
                                <h3 className="font-bold mb-1">Phone</h3>
                                <p className="text-gray-600">+91 8858641124</p>
                            </div>
                        </motion.div>

                        <motion.div variants={itemVariants} className="p-6 border rounded-lg shadow-md flex items-start gap-4">
                            <div className="bg-gray-800 p-3 rounded-full text-green-500">
                                <MapPin size={24} />
                            </div>
                            <div>
                                <h3 className="font-bold mb-1">Location</h3>
                                <p className="text-gray-600">Jamshedpur, Jharkhand, India</p>
                            </div>
                        </motion.div>
                    </div>

                    <motion.div variants={itemVariants} className="md:col-span-2">
                        <div className="p-6 border rounded-lg shadow-md">
                            <form className="space-y-6">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label htmlFor="name" className="text-sm font-medium">
                                            Name
                                        </label>
                                        <input
                                            id="name"
                                            placeholder="Your name"
                                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label htmlFor="email" className="text-sm font-medium">
                                            Email
                                        </label>
                                        <input
                                            id="email"
                                            type="email"
                                            placeholder="Your email"
                                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="subject" className="text-sm font-medium">
                                        Subject
                                    </label>
                                    <input
                                        id="subject"
                                        placeholder="Subject"
                                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="message" className="text-sm font-medium">
                                        Message
                                    </label>
                                    <textarea
                                        id="message"
                                        placeholder="Your message"
                                        rows={6}
                                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    />
                                </div>

                                <button
                                    type="submit"
                                    className="w-full sm:w-auto px-6 py-3 bg-green-500 rounded-lg text-white hover:bg-green-600 flex items-center justify-center"
                                >
                                    <Send className="mr-2 h-4 w-4" />
                                    Send Message
                                </button>
                            </form>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}