import { motion, useScroll, useTransform } from "framer-motion";
import { useInView } from "framer-motion";
import React,{ useRef } from "react";
import {Link} from "react-router-dom";
import { Download } from "lucide-react";



export default function About() {
    const sectionRef = useRef(null);
    const imageRef = useRef(null);
    const contentRef = useRef(null);
    const isInView = useInView(sectionRef, { once: true, amount: 0.3 });
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"],
    });

    const y = useTransform(scrollYProgress, [0, 1], [-50, 50]);
    const imageScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 1.1]);
    const rotation = useTransform(scrollYProgress, [0, 1], [-5, 5]);

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
        <section id="about" className="py-20 md:py-32 bg-white font-2xl relative overflow-hidden dark:bg-gray-800">
            <motion.div
                className="absolute inset-0 -z-10 opacity-30"
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.3 }}
                transition={{ duration: 1 }}
            >
                <motion.div
                    className="absolute top-0 right-0 w-96 h-96 rounded-full blur-3xl"
                    animate={{
                        x: [50, -50, 50],
                        y: [-50, 50, -50],
                    }}
                    transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
                />
                <motion.div
                    className="absolute bottom-0 left-0 w-96 h-96 rounded-full blur-3xl"
                    animate={{
                        x: [-50, 50, -50],
                        y: [50, -50, 50],
                    }}
                    transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
                />
            </motion.div>

            <div ref={sectionRef} className="container px-4 md:px-6">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    className="grid md:grid-cols-2 gap-12 items-center"
                >
                    <motion.div ref={imageRef} variants={itemVariants} style={{ y, scale: imageScale }} className="relative">
                        <motion.div
                            className="relative aspect-square overflow-hidden rounded-xl"
                            whileHover={{ scale: 1.03 }}
                            transition={{ type: "spring", stiffness: 300, damping: 20 }}
                        >
                            <img
                                src="./pranjal.jpg"
                                alt="John Doe"
                                width={600}
                                height={600}
                                className="object-cover"
                            />
                            <motion.div
                                className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 1 }}
                            />
                        </motion.div>
                        <motion.div
                            className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground p-4 rounded-lg shadow-lg"
                            initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
                            animate={{ opacity: 1, scale: 1, rotate: 0 }}
                            transition={{ delay: 0.5, duration: 0.5, type: "spring" }}
                            style={{ rotate: rotation }}
                        >
                        </motion.div>
                    </motion.div>

                    <motion.div ref={contentRef} style={{ y: useTransform(scrollYProgress, [0, 1], [50, -50]) }}>
                        <motion.h2
                            variants={itemVariants}
                            className="text-3xl font-bold mb-2"
                            initial={{ opacity: 0, x: 50 }}
                            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
                            transition={{ duration: 0.5 }}
                        >
                            About Me
                        </motion.h2>

                        <motion.div
                            variants={itemVariants}
                            className="w-20 h-1 bg-primary mb-6"
                            initial={{ width: 0 }}
                            animate={isInView ? { width: "5rem" } : { width: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                        />

                        <motion.p
                            variants={itemVariants}
                            className="text-lg mb-4 text-muted-foreground"
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                        >
                            I'm a pre-final year student pursuing my Bachelors of Technology fron National Institute of Technology Jamshdpur
                        </motion.p>

                        <motion.p
                            variants={itemVariants}
                            className="text-lg mb-6 text-muted-foreground"
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                        >
                            I have been working on web development and system design for more than two years and have good command over various tech stacks.
                        </motion.p>

                        <motion.div
                            variants={containerVariants}
                            initial="hidden"
                            animate={isInView ? "visible" : "hidden"}
                            className="grid md:grid-cols-2 gap-4 mb-8"
                        >
                            {[
                                { label: "Name:", value: "Pranjal Mishra" },
                                { label: "Email:", value: "pranjalnitjsr@gmail.com" },
                                { label: "Location:", value: "Jamshedpur, Jharkhand, India" },
                                { label: "Availability:", value: "Open to opportunities" },
                            ].map((item, index) => (
                                <motion.div
                                    key={index}
                                    variants={itemVariants}
                                    whileHover={{ scale: 1.03, x: 5 }}
                                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                                >
                                    <h3 className="font-bold mb-2">{item.label}</h3>
                                    <p className="text-muted-foreground">{item.value}</p>
                                </motion.div>
                            ))}
                        </motion.div>

                        <motion.div variants={itemVariants} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                            < button className="dark:bg-green-400 dark:text-white px-4 py-2 rounded-lg hover:bg-primary/80 transition duration-300 bg-white text-green-400 border-2 shadow-black shadow-2xl ">
                                <a href="#" className="flex items-center gap-2">
                                    <Download size={16} />
                                    Download Resume
                                </a>
                            </ button>
                        </motion.div>
                    </motion.div>
                </motion.div>
            </div>
        
        </section>
    );
}