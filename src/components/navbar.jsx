import React, { useState, useEffect } from "react";
import { House, CircleUserRound, FolderGit2, Mail, Code } from "lucide-react";

const Navbar = () => {
    const [active, setActive] = useState("home");
    const [darkMode, setDarkMode] = useState(false);

    const handleSetActive = (section) => {
        setActive(section);
    };

    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    }, [darkMode]);

    return (
        <nav className="w-full text-blue-600 dark:text-emerald-500 md:fixed md:top-0 fixed bottom-0 h-fit z-50 bg-neutral-300 dark:bg-neutral-900">
            <div className="hidden md:flex justify-between items-center p-4">
                <ul className="flex justify-center gap-8 w-full">
                    <li>
                        <a
                            href="#home"
                            onClick={() => handleSetActive("home")}
                            className={`no-underline ${
                                active === "home"
                                    ? "text-green-500 font-bold"
                                    : darkMode
                                    ? "text-white"
                                    : "text-black"
                            } hover:text-green-500`}
                        >
                            Home
                        </a>
                    </li>
                    <li>
                        <a
                            href="#about"
                            onClick={() => handleSetActive("about")}
                            className={`no-underline ${
                                active === "about"
                                    ? "text-green-500 font-bold"
                                    : darkMode
                                    ? "text-white"
                                    : "text-black"
                            } hover:text-green-500`}
                        >
                            About
                        </a>
                    </li>
                    <li>
                        <a
                            href="#skills"
                            onClick={() => handleSetActive("skills")}
                            className={`no-underline ${
                                active === "skills"
                                    ? "text-green-500 font-bold"
                                    : darkMode
                                    ? "text-white"
                                    : "text-black"
                            } hover:text-green-500`}
                        >
                            Skills
                        </a>
                    </li>
                    <li>
                        <a
                            href="#projects"
                            onClick={() => handleSetActive("projects")}
                            className={`no-underline ${
                                active === "projects"
                                    ? "text-green-500 font-bold"
                                    : darkMode
                                    ? "text-white"
                                    : "text-black"
                            } hover:text-green-500`}
                        >
                            Projects
                        </a>
                    </li>
                    <li>
                        <a
                            href="#contact"
                            onClick={() => handleSetActive("contact")}
                            className={`no-underline ${
                                active === "contact"
                                    ? "text-green-500 font-bold"
                                    : darkMode
                                    ? "text-white"
                                    : "text-black"
                            } hover:text-green-500`}
                        >
                            Contact
                        </a>
                    </li>
                    <li 
                        onClick={() => setDarkMode(!darkMode)}
                        className={`no-underline ${
                            darkMode ? "text-white" : "text-black"
                        } hover:text-green-500 cursor-pointer`}
                    >
                        {darkMode ? "Light Mode" : "Dark Mode"}
                    </li>
                </ul>
            </div>
            <div className="flex md:hidden justify-around items-center p-5 bg-neutral-300 dark:bg-neutral-900 z-50">
                <ul className="flex justify-evenly w-full items-center">
                    <li>
                        <a
                            href="#hero"
                            onClick={() => handleSetActive("home")}
                            className="text-xl no-underline hover:text-green-500"
                        >
                            <House
                                size={26}
                                color={
                                    active === "home"
                                        ? "#3caf53"
                                        : darkMode
                                        ? "#ffffff"
                                        : "#000000"
                                }
                                strokeWidth={0.75}
                            />
                        </a>
                    </li>
                    <li>
                        <a
                            href="#about"
                            onClick={() => handleSetActive("about")}
                            className="text-xl no-underline hover:text-green-500"
                        >
                            <CircleUserRound
                                size={26}
                                color={
                                    active === "about"
                                        ? "#3caf53"
                                        : darkMode
                                        ? "#ffffff"
                                        : "#000000"
                                }
                                strokeWidth={0.75}
                            />
                        </a>
                    </li>
                    <li>
                        <a
                            href="#skills"
                            onClick={() => handleSetActive("skills")}
                            className="text-xl no-underline hover:text-green-500"
                        >
                            <Code
                                size={26}
                                color={
                                    active === "skills"
                                        ? "#3caf53"
                                        : darkMode
                                        ? "#ffffff"
                                        : "#000000"
                                }
                                strokeWidth={0.75}
                            />
                        </a>
                    </li>
                    <li>
                        <a
                            href="#projects"
                            onClick={() => handleSetActive("projects")}
                            className="text-xl no-underline hover:text-green-500"
                        >
                            <FolderGit2
                                size={26}
                                color={
                                    active === "projects"
                                        ? "#3caf53"
                                        : darkMode
                                        ? "#ffffff"
                                        : "#000000"
                                }
                                strokeWidth={0.75}
                            />
                        </a>
                    </li>
                    <li>
                        <a
                            href="#contact"
                            onClick={() => handleSetActive("contact")}
                            className="text-xl no-underline hover:text-green-500"
                        >
                            <Mail
                                size={26}
                                color={
                                    active === "contact"
                                        ? "#3caf53"
                                        : darkMode
                                        ? "#ffffff"
                                        : "#000000"
                                }
                                strokeWidth={0.75}
                            />
                        </a>
                    </li>
                    <li>
                        <p
                            onClick={() => {
                                handleSetActive("contact");
                                setDarkMode(!darkMode);
                            }}
                            className="text-xl no-underline hover:text-green-500 cursor-pointer"
                        >
                            {darkMode ? "☀️" : "🌙"}
                        </p>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
