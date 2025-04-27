import React, { useState } from "react";
import { House, CircleUserRound, FolderGit2, Mail, Code } from "lucide-react";

const Navbar = () => {
    const [active, setActive] = useState("home");

    const handleSetActive = (section) => {
        setActive(section);
    };

    return (
        <nav className="w-full text-green-600 md:fixed md:top-0 fixed bottom-0 h-fit z-50">
            <div className="hidden md:flex justify-between items-center p-4">
                <ul className="flex justify-center w-full gap-8">
                    <li>
                        <a
                            href="#home"
                            onClick={() => handleSetActive("home")}
                            className={` no-underline hover:text-gray-400 ${
                                active === "home" ? "text-green-500" : ""
                            }`}
                        >
                            Home
                        </a>
                    </li>
                    <li>
                        <a
                            href="#about"
                            onClick={() => handleSetActive("about")}
                            className={` no-underline hover:text-gray-400 ${
                                active === "about" ? "text-green-500" : ""
                            }`}
                        >
                            About
                        </a>
                    </li>
                    <li>
                        <a
                            href="#skills"
                            onClick={() => handleSetActive("skills")}
                            className={` no-underline hover:text-gray-400 ${
                                active === "skills" ? "text-green-500" : ""
                            }`}
                        >
                            Skills
                        </a>
                    </li>
                    <li>
                        <a
                            href="#projects"
                            onClick={() => handleSetActive("projects")}
                            className={` no-underline hover:text-gray-400 ${
                                active === "projects" ? "text-green-500" : ""
                            }`}
                        >
                            Projects
                        </a>
                    </li>
                    <li>
                        <a
                            href="#contact"
                            onClick={() => handleSetActive("contact")}
                            className={` no-underline hover:text-gray-400 ${
                                active === "contact" ? "text-green-500" : ""
                            }`}
                        >
                            Contact
                        </a>
                    </li>
                </ul>
            </div>
            <div className="flex md:hidden justify-around items-center p-5 bg-gray-900 z-50">
                <ul className="flex justify-between w-full items-center">
                    <li>
                        <a
                            href="#hero"
                            onClick={() => handleSetActive("home")}
                            className="text-xl  no-underline hover:text-gray-400"
                        >
                            <House
                                size={26}
                                color={active === "home" ? "#3caf53" : "#ffffff"}
                                strokeWidth={0.75}
                            />
                        </a>
                    </li>
                    <li>
                        <a
                            href="#about"
                            onClick={() => handleSetActive("about")}
                            className="text-xl  no-underline hover:text-gray-400"
                        >
                            <CircleUserRound
                                size={26}
                                color={active === "about" ? "#3caf53" : "#ffffff"}
                                strokeWidth={0.75}
                            />
                        </a>
                    </li>
                    <li>
                        <a
                            href="#skills"
                            onClick={() => handleSetActive("skills")}
                            className="text-xl  no-underline hover:text-gray-400"
                        >
                            <Code
                                size={26}
                                color={active === "skills" ? "#3caf53" : "#ffffff"}
                                strokeWidth={0.75}
                            />
                        </a>
                    </li>
                    <li>
                        <a
                            href="#projects"
                            onClick={() => handleSetActive("projects")}
                            className="text-xl  no-underline hover:text-gray-400"
                        >
                            <FolderGit2
                                size={26}
                                color={active === "projects" ? "#3caf53" : "#ffffff"}
                                strokeWidth={0.75}
                            />
                        </a>
                    </li>
                    <li>
                        <a
                            href="#contact"
                            onClick={() => handleSetActive("contact")}
                            className="text-xl  no-underline hover:text-gray-400"
                        >
                            <Mail
                                size={26}
                                color={active === "contact" ? "#3caf53" : "#ffffff"}
                                strokeWidth={0.75}
                            />
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
