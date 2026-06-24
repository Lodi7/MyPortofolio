import Logo from "../../assets/logo.svg"
import { FaLinkedinIn, FaInstagram, FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

function Footer() {
    return (
        <footer className="relative overflow-hidden bg-[#192433]/70 backdrop-blur-xl text-white py-8 md:py-10 px-4 sm:px-6 md:px-10 xl:px-25 mt-20 border-t border-[#1F2B3D]">



            <div className="relative container mx-auto px-4 z-10">

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">

                    {/* Logo */}
                    <div className="flex flex-col gap-4">

                        <div className="flex flex-row space-x-5 items-center group">

                            <div
                                className="
                                p-2
                                rounded-2xl
                                transition-all
                                duration-500
                                group-hover:rotate-6
                                group-hover:scale-105
                        
                                "
                            >
                                <img
                                    src={Logo}
                                    alt="logo"
                                    className="md:w-12 md:h-12 w-10 h-10"
                                />
                            </div>

                            <h4 className="text-2xl md:text-3xl font-black font-mono bg-linear-to-r from-[#BDE0FF] to-[#00E0FF] bg-clip-text text-transparent">
                                LodiDev
                            </h4>

                        </div>

                        <p className="text-sm md:text-basetext-gray-300 leading-relaxed">
                            Membangun Website yang bermanfaat melalui kode dan kreativitas.
                        </p>

                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg md:text-xl font-bold mb-5">
                            Quick Links
                        </h4>

                        <ul className="gap-4 grid grid-cols-2 text-gray-400">

                            <li>
                                <a
                                    href="#home"
                                    className="
                                    transition-all
                                    duration-300
                                    hover:text-cyan-300
                                    hover:translate-x-1
                                    inline-block
                                    "
                                >
                                    Home
                                </a>
                            </li>

                            <li>
                                <a
                                    href="#about"
                                    className="
                                    transition-all
                                    duration-300
                                    hover:text-cyan-300
                                    hover:translate-x-1
                                    inline-block
                                    "
                                >
                                    About
                                </a>
                            </li>

                            <li>
                                <a
                                    href="#skills"
                                    className="
                                    transition-all
                                    duration-300
                                    hover:text-cyan-300
                                    hover:translate-x-1
                                    inline-block
                                    "
                                >
                                    Skills
                                </a>
                            </li>

                            <li>
                                <a
                                    href="#projects"
                                    className="
                                    transition-all
                                    duration-300
                                    hover:text-cyan-300
                                    hover:translate-x-1
                                    inline-block
                                    "
                                >
                                    Projects
                                </a>
                            </li>

                            <li>
                                <a
                                    href="#contact"
                                    className="
                                    transition-all
                                    duration-300
                                    hover:text-cyan-300
                                    hover:translate-x-1
                                    inline-block
                                    "
                                >
                                    Contact
                                </a>
                            </li>

                        </ul>
                    </div>

                    {/* Social */}
                    <div>
                        <h4 className="text-lg md:text-xl font-bold mb-5">
                            Connect
                        </h4>

                        <div className="space-x-3 flex flex-row">

                            {/* Github */}
                            <a
                                href="https://github.com/Lodi7"
                                target="_blank"
                                className="
                                group
                                rounded-2xl
                                border
                                p-2.5
                                md:p-3
                                bg-[#101826]
                                border-[#1F2B3D]
                                transition-all
                                duration-500
                                hover:-translate-y-2
                                hover:scale-110
                                hover:shadow-[0_0_30px_rgba(255,255,255,0.2)]
                                inline-flex
                                "
                            >
                                <FaGithub
                                    className="
                                    text-white
                                    transition-all
                                    duration-300
                                    group-hover:rotate-12
                                        w-5
    h-5
    md:w-7
    md:h-7
                                    "

                                />
                            </a>

                            {/* Linkedin */}
                            <a
                                href="https://linkedin.com/in/lodigalang"
                                target="_blank"
                                className="
                                group
                                rounded-2xl
                                border
                                bg-[#101826]
                                p-2.5
                                md:p-3
                                border-[#1F2B3D]
                                transition-all
                                duration-500
                                hover:-translate-y-2
                                hover:scale-110
                                hover:shadow-[0_0_30px_rgba(0,119,181,0.35)]
                                inline-flex
                                "
                            >
                                <FaLinkedinIn
                                    className="
                                    text-[#0A66C2]
                                    transition-all
                                    duration-300
                                    group-hover:rotate-12
                                        w-5
    h-5
    md:w-7
    md:h-7
                                    "

                                />
                            </a>

                            {/* Instagram */}
                            <a
                                href="/"
                                className="
                                group
                                rounded-2xl
                                border
                                bg-[#101826]
                                p-2.5
                                md:p-3
                                border-[#1F2B3D]
                                transition-all
                                duration-500
                                hover:-translate-y-2
                                hover:scale-110
                                hover:shadow-[0_0_30px_rgba(255,0,128,0.3)]
                                inline-flex
                                "
                            >
                                <FaInstagram
                                    className="
                                    text-pink-400
                                    transition-all
                                    duration-300
                                    group-hover:rotate-12
                                        w-5
    h-5
    md:w-7
    md:h-7
                                    "

                                />
                            </a>

                            {/* Email */}
                            <a
                                href="mailto:lodigalang3@gmail.com"
                                className="
                                group
                                rounded-2xl
                                border
                                bg-[#101826]
                                p-2.5
                                md:p-3
                                border-[#1F2B3D]
                                transition-all
                                duration-500
                                hover:-translate-y-2
                                hover:scale-110
                                hover:shadow-[0_0_30px_rgba(3,206,254,0.3)]
                                inline-flex
                                "
                            >
                                <MdEmail
                                    className="
                                    text-cyan-400
                                    transition-all
                                    duration-300
                                    group-hover:rotate-12
                                        w-5
    h-5
    md:w-7
    md:h-7
                                    "

                                />
                            </a>

                        </div>
                    </div>

                    {/* Copyright */}
                    <div className="h-full flex items-center">

                        <p className="text-gray-400 leading-relaxed">
                            © 2026 LodiDev. <br />
                            All rights reserved.
                        </p>

                    </div>

                </div>

            </div>

        </footer>
    );
}

export default Footer;