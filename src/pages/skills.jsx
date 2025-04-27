import { motion, useScroll, useTransform } from "framer-motion";
import { useInView } from "framer-motion";
import React, { useRef } from "react";
import { Code, Database, Globe, Server, Smartphone, Figma, GitBranch, Terminal } from "lucide-react";

"use client";

export default function Skills() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.2 });
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"],
    });

    const skills = [
        {
            name: "Frontend Development",
            icon: <Code size={24} />,
            description: "React, Tailwind CSS",
        },
        {
            name: "Backend Development",
            icon: <Server size={24} />,
            description: "Node.js, Express, Django, GraphQL",
        },
        { 
            name: "Database", 
            icon: <Database size={24} />, 
            description: "MongoDB,  MySQL", 
        },
        // { 
        //     name: "Mobile Development", 
        //     icon: <Smartphone size={24} />, 
        //     description: "React Native, Expo", 
        // },
        // { 
        //     name: "UI/UX Design", 
        //     icon: <Figma size={24} />, 
        //     description: "Figma, Adobe XD, Responsive Design", 
        // },
        { 
            name: "DevOps", 
            icon: <Terminal size={24} />, 
            description: "Docker, CI/CD, Firebase, Vercel", 
        },
        { 
            name: "Version Control", 
            icon: <GitBranch size={24} />, 
            description: "Git, GitHub", 
        },
        { 
            name: "Web Performance", 
            icon: <Globe size={24} />, 
            description: "Optimization, SEO, Analytics", 
        },
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    };

    return (
        <section id="skills" className="py-20 md:py-32 relative overflow-hidden">
            <div className="container px-4 md:px-6 mx-auto">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ duration: 0.5 }}
                        className="text-3xl font-bold mb-2"
                    >
                        My Skills
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
                        className="text-lg text-muted-foreground max-w-2xl mx-auto"
                    >
                        I've worked with a variety of technologies in the web development world. Here are my main areas of
                        expertise:
                    </motion.p>
                </div>

                <motion.div
                    ref={ref}
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mx-auto"
                >
                    {skills.map((skill, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            whileHover={{
                                y: -10,
                                boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                                borderColor: "rgb(80, 200, 120)",
                            }}
                            transition={{ type: "spring", stiffness: 300, damping: 20 }}
                            className="bg-card p-6 rounded-xl shadow-sm border border-border hover:border-primary transition-all"
                        >
                            <motion.div
                                className="text-primary mb-4"
                                initial={{ scale: 0.8, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                transition={{ delay: 0.2 + index * 0.1, duration: 0.5 }}
                            >
                                {skill.icon}
                            </motion.div>
                            <h3 className="text-xl font-bold mb-2">{skill.name}</h3>
                            <p className="text-muted-foreground">{skill.description}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
