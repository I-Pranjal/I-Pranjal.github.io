import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { useRef } from "react";
import { useInView } from "framer-motion";
import React from "react";
import DeveloperStats from "../components/devstats";

export default function Hero() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: false });

    const textVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.08,
            },
        },
    };

    const letterVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: "spring",
                damping: 12,
                stiffness: 100,
            },
        },
    };

    const title = "Pranjal Mishra";
    const subtitle = "Full Stack Developer";

    return (
        <section
            id="hero"
            className="relative h-auto py-20 flex flex-col justify-center items-center text-center px-4 overflow-hidden bg-white dark:bg-gray-900 text-gray-900 dark:text-emerald-500"
        >

            <motion.div
                className="relative inset-0 -z-10"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.5 }}
            >
                <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-background/0 dark:from-primary/10 dark:to-gray-900" />
                {Array.from({ length: 20 }).map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute rounded-full bg-primary/10 dark:bg-primary/20"
                        initial={{
                            x: Math.random() * 100 - 50 + "%",
                            y: Math.random() * 100 - 50 + "%",
                            scale: Math.random() * 0.5 + 0.5,
                        }}
                        animate={{
                            x: [Math.random() * 100 - 50 + "%", Math.random() * 100 - 50 + "%", Math.random() * 100 - 50 + "%"],
                            y: [Math.random() * 100 - 50 + "%", Math.random() * 100 - 50 + "%", Math.random() * 100 - 50 + "%"],
                        }}
                        transition={{
                            duration: Math.random() * 20 + 20,
                            repeat: Number.POSITIVE_INFINITY,
                            repeatType: "reverse",
                        }}
                        style={{
                            width: Math.random() * 300 + 50,
                            height: Math.random() * 300 + 50,
                            filter: "blur(100px)",
                            opacity: Math.random() * 0.3,
                        }}
                    />
                ))}
            </motion.div>

            <motion.div
                ref={ref}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="max-w-3xl mx-auto z-10"
            >
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    className="mb-2 text-primary dark:text-primary-light"
                >
                    <span className="text-lg md:text-xl">Hello, I'm</span>
                </motion.div>

                <motion.h2
                    variants={textVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    className="text-3xl md:text-6xl font-bold mb-4 flex justify-center flex-wrap"
                >
                    {title.split("").map((char, index) => (
                        <motion.span key={index} variants={letterVariants} className="inline-block">
                            {char === " " ? "\u00A0" : char}
                        </motion.span>
                    ))}
                </motion.h2>

                <motion.h2
                    variants={textVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    className="text-2xl md:text-3xl font-medium mb-6 text-muted-foreground dark:text-green-400 text-neutral-800 flex justify-center flex-wrap"
                >
                    {subtitle.split("").map((char, index) => (
                        <motion.span key={index} variants={letterVariants} className="inline-block">
                            {char === " " ? "\u00A0" : char}
                        </motion.span>
                    ))}
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8, duration: 0.5 }}
                    className="text-lg mb-8 max-w-2xl mx-auto text-muted-foreground text-black dark:text-green-400"
                >
                    I build exceptional digital experiences with modern web technologies. Specializing in React, Node.js, and
                    everything in between.
                </motion.p>
                <DeveloperStats />
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1, duration: 0.5 }}
                    className="flex flex-col sm:flex-row gap-4 justify-center"
                >
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                        <button size="lg" className="bg-primary text-green-600 p-2 border-2 rounded-md shadow-xl dark:text-white" >
                            <a href="#projects">View My Work</a>
                        </button>
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <button size="lg" className="bg-primary text-green-600 p-2 border-2 rounded-md shadow-xl dark:text-white" >
                            <a href="#contact">Contact Me</a>
                        </button>
                    </motion.div>
                </motion.div>
            </motion.div>

            
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 0.5 }}
                className="relative bottom-0 m-10"
            >
                <a
                    href="#about"
                    className="flex flex-col items-center text-muted-foreground hover:text-foreground text-green-300 dark:text-gray-400 dark:hover:text-emerald-500 transition-colors"
                >
                    <span className="text-sm mb-2">Scroll Down</span>
                    <motion.div
                        animate={{ y: [0, 10, 0] }}
                        transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}
                        className="relative"
                    >
                        <motion.div
                            animate={{ scale: [1, 1.2, 1] }}
                            transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}
                            className="absolute -inset-2 rounded-full bg-primary/20 dark:bg-primary/30 blur-md"
                        />
                        <ArrowDown size={20} />
                    </motion.div>
                </a>
            </motion.div>

            <motion.div className="absolute top-0 left-0 w-full h-full pointer-events-none" style={{ perspective: 1000 }}>
                {Array.from({ length: 15 }).map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute rounded-full bg-primary/30 dark:bg-primary/50"
                        initial={{
                            x: Math.random() * 100 + "%",
                            y: Math.random() * 100 + "%",
                            scale: Math.random() * 0.2 + 0.1,
                        }}
                        animate={{
                            y: [Math.random() * 100 + "%", Math.random() * 100 + "%", Math.random() * 100 + "%"],
                        }}
                        transition={{
                            duration: Math.random() * 10 + 10,
                            repeat: Number.POSITIVE_INFINITY,
                            repeatType: "mirror",
                        }}
                        style={{
                            width: Math.random() * 10 + 5,
                            height: Math.random() * 10 + 5,
                        }}
                    />
                ))}
            </motion.div>
        </section>
    );
}