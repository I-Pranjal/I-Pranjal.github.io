import React from 'react';
import { Github, Linkedin, Twitter, Instagram } from 'lucide-react';

function Footer() {
    const links = [
        { name: "GitHub", url: "github.com/I-Pranjal", icon: Github },
        { name: "LinkedIn", url: "www.linkedin.com/in/pranjal-mishra-10bb18258/", icon: Linkedin },
        { name: "Twitter", url: "twitter.com/PranjalMishra_1", icon: Twitter },
        { name: "Instagram", url: "instagram.com/pranjalmishra_1", icon: Instagram },
    ];

    return (
        <div className="bg-muted/30 py-10 text-center">
            <p className="text-3xl font-normal-bold">Pranjal Mishra</p>
            {/* Links */}
            <div className="flex justify-center items-center gap-8 mt-4">
                {links.map((link) => (
                    <a
                        key={link.name}
                        href={`https://${link.url}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors duration-300"
                    >
                        <link.icon />
                    </a>
                ))}
            </div>
            {/* All rights reserved  */}
            <p className="text-sm text-muted-foreground mt-4 font-serif">© 2023 Pranjal Mishra. All rights reserved.</p>

        </div>
    );
}

export default Footer;
