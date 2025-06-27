import { motion, useScroll, useTransform } from "framer-motion";
import { useInView } from "framer-motion";
import React, { useRef } from "react";
import { Github, ExternalLink } from "lucide-react";

export default function Projects() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.1 });
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"],
    });

    const projects = [
        {
            title: "Magnews (Blogging and News Website)",
            description:
                "A full-stack web app integrating a news portal and blogging platform, with user authentication, real-time notifications, and personalized content recommendations.",
            image: "./magnews.png",
            tags: ["MongoDB", "ReactJS", "Node.js", "Express.js", "Firebase", "Tailwind CSS"],
            githubUrl: "https://github.com/I-Pranjal/Blognews-",
            liveUrl: "https://blognews-delta.vercel.app/",
        },
        {
            title: "Aviation Team Website",
            description:
                "A dynamic website for showcasing projects, sponsors, and events, with real-time updates via Firebase and a fully responsive UI.",
            image: "./phoenix.png",
            tags: ["ReactJS", "Node.js", "Express.js", "Firebase", "Tailwind CSS", "Vite"],
            githubUrl: "https://github.com/I-Pranjal/Team-Phoenix-",
            liveUrl: "https://teamphoenixnitjsr.netlify.app/",
        },
        {
            title: "Smart India Hackathon Project",
            description:
                "A prototype dashboard for Smart India Hackathon problem statements, with mentor feedback loops and real-world collaboration features.",
            image: "./sih.png",
            tags: ["ReactJS", "Node.js", "Express.js", "MongoDB", "Firebase"],
            githubUrl: "https://github.com/I-Pranjal/SIHclone",
            liveUrl: "https://sihclone.netlify.app/",
        },
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2 },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
    };

    const yParallax = useTransform(scrollYProgress, [0, 1], [-100, 100]);

    return (
        <section id="projects" className="py-20 md:py-32 bg-white dark:bg-gray-900 relative overflow-hidden flex flex-col items-center">
            <motion.div
                className="absolute -top-20 -right-20 w-96 h-96 rounded-full bg-white dark:bg-gray-900 blur-3xl -z-10"
                style={{ y: yParallax }}
            />
            <motion.div
                className="absolute -bottom-20 -left-20 w-96 h-96 rounded-full bg-white dark:bg-gray-900 blur-3xl -z-10"
                style={{ y: useTransform(scrollYProgress, [0, 1], [100, -100]) }}
            />

            <div className="container px-4 md:px-6">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ duration: 0.5 }}
                        className="text-3xl font-bold mb-2 text-black dark:text-green-500"
                    >
                        My Projects
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
                        className="text-lg text-black dark:text-green-500 max-w-2xl mx-auto mb-8"
                    >
                        Here are some of my highlighted projects, demonstrating practical skills in full-stack development and teamwork.
                    </motion.p>
                </div>

                <motion.div
                    ref={ref}
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    className="grid grid-cols-1 md:grid-cols-2 gap-8"
                >
                    {projects.map((project) => (
                        <motion.div
                            key={project.title}
                            variants={itemVariants}
                            whileHover={{
                                y: -10,
                                transition: { type: "spring", stiffness: 300, damping: 20 },
                            }}
                            className="h-full"
                        >
                            <div className="overflow-hidden h-full group border rounded-lg shadow-md dark:border-gray-700">
                                <div className="relative aspect-video overflow-hidden">
                                    <motion.div
                                        className="absolute inset-0 bg-primary/20 dark:bg-primary/30 z-10 opacity-0 group-hover:opacity-100 flex items-center justify-center"
                                        transition={{ duration: 0.3 }}
                                    >
                                        <motion.div
                                            initial={{ opacity: 0, scale: 0.8 }}
                                            whileInView={{ opacity: 1, scale: 1 }}
                                            transition={{ delay: 0.2, duration: 0.3 }}
                                            className="flex gap-4"
                                        >
                                            <a
                                                href={project.githubUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="px-4 py-2 bg-secondary text-white rounded-md flex items-center gap-2"
                                            >
                                                <Github size={16} />
                                                Code
                                            </a>
                                            <a
                                                href={project.liveUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="px-4 py-2 bg-primary text-white rounded-md flex items-center gap-2"
                                            >
                                                <ExternalLink size={16} />
                                                Live Demo
                                            </a>
                                        </motion.div>
                                    </motion.div>
                                    <motion.img
                                        src={project.image || "/placeholder.svg"}
                                        alt={project.title}
                                        className="object-cover transition-all duration-500 group-hover:scale-105 group-hover:blur-sm"
                                    />
                                </div>
                                <div className="p-6">
                                    <motion.h3
                                        className="text-xl font-bold mb-2 text-black dark:text-green-500"
                                        initial={{ opacity: 0, y: 10 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.1, duration: 0.3 }}
                                    >
                                        {project.title}
                                    </motion.h3>
                                    <motion.p
                                        className="text-black dark:text-green-500 mb-4"
                                        initial={{ opacity: 0, y: 10 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.2, duration: 0.3 }}
                                    >
                                        {project.description}
                                    </motion.p>

                                    <motion.div
                                        className="flex flex-wrap gap-2 mb-6"
                                        initial={{ opacity: 0 }}
                                        whileInView={{ opacity: 1 }}
                                        transition={{ delay: 0.3, duration: 0.3 }}
                                    >
                                        {project.tags.map((tag, tagIndex) => (
                                            <motion.span
                                                key={tagIndex}
                                                className="bg-white text-primary dark:bg-gray-900 dark:text-primary-foreground text-xs px-3 py-1 rounded-full"
                                                initial={{ opacity: 0, scale: 0.8 }}
                                                whileInView={{ opacity: 1, scale: 1 }}
                                                transition={{ delay: 0.4 + tagIndex * 0.1, duration: 0.2 }}
                                                whileHover={{ scale: 1.1 }}
                                            >
                                                {tag}
                                            </motion.span>
                                        ))}
                                    </motion.div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ duration: 0.5, delay: 0.8 }}
                    className="text-center mt-12"
                >
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                        <a
                            href="https://github.com/I-Pranjal"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-6 py-3 border border-primary text-primary rounded-md flex items-center justify-center gap-2"
                        >
                            <Github className="mr-2 h-4 w-4" />
                            See More on GitHub
                        </a>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
