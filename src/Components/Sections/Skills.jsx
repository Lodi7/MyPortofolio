import {
    SiReact,
    SiLaravel,
    SiHtml5,
    SiTailwindcss,
    SiCss,
    SiJavascript,
    SiPython,
    SiPhp,
    SiMysql,
    SiGit,
    SiGithub,
} from "react-icons/si";

import { VscVscode } from "react-icons/vsc";

import Figma from "../../assets/Figma.svg"

function Skills() {

    const skills = [
        {
            name: "HTML5",
            icon: <SiHtml5 color="#E34F26" size={60} />,
            glow: "hover:shadow-[0_0_40px_rgba(227,79,38,0.5)]"
        },
        {
            name: "CSS3",
            icon: <SiCss color="#1572B6" size={60} />,
            glow: "hover:shadow-[0_0_40px_rgba(21,114,182,0.5)]"
        },
        {
            name: "JavaScript",
            icon: <SiJavascript color="#F7DF1E" size={60} />,
            glow: "hover:shadow-[0_0_40px_rgba(247,223,30,0.5)]"
        },
        {
            name: "React",
            icon: <SiReact color="#3BC7D5" size={60} />,
            glow: "hover:shadow-[0_0_40px_rgba(59,199,213,0.5)]"
        },
        {
            name: "Tailwind",
            icon: <SiTailwindcss color="#06B6D4" size={60} />,
            glow: "hover:shadow-[0_0_40px_rgba(6,182,212,0.5)]"
        },
        {
            name: "PHP",
            icon: <SiPhp color="#777BB4" size={60} />,
            glow: "hover:shadow-[0_0_40px_rgba(119,123,180,0.5)]"
        },
        {
            name: "Laravel",
            icon: <SiLaravel color="#FF2D20" size={60} />,
            glow: "hover:shadow-[0_0_40px_rgba(255,45,32,0.5)]"
        },
        {
            name: "MySQL",
            icon: <SiMysql color="#4479A1" size={60} />,
            glow: "hover:shadow-[0_0_40px_rgba(68,121,161,0.5)]"
        },
        {
            name: "Python",
            icon: <SiPython color="#3776AB" size={60} />,
            glow: "hover:shadow-[0_0_40px_rgba(55,118,171,0.5)]"
        },
        {
            name: "Git",
            icon: <SiGit color="#F05032" size={60} />,
            glow: "hover:shadow-[0_0_40px_rgba(240,80,50,0.5)]"
        },
        {
            name: "Github",
            icon: <SiGithub color="#ffffff" size={60} />,
            glow: "hover:shadow-[0_0_40px_rgba(255,255,255,0.3)]"
        },
        {
            name: "Figma",
            icon: <img src={Figma} alt="Figma" width="60" height="60" />,
            glow: "hover:shadow-[0_0_40px_rgba(255,0,128,0.3)]"
        },
        {
            name: "VS Code",
            icon: <VscVscode color="#007ACC" size={60} />,
            glow: "hover:shadow-[0_0_40px_rgba(0,122,204,0.5)]"
        },
    ]

    return (
        <section
            id="skills"
            className="px-4
sm:px-6
md:px-10
xl:px-25
mt-20
overflow-hidden"
        >

            <div
                className="
                relative
                w-full
                flex
                flex-col
gap-10
md:gap-12

p-2
sm:p-6
md:p-10
                items-center
                "
            >

                {/* Heading */}
                <div className="relative w-full flex flex-col gap-4 justify-center items-center z-10">

                    {/* Label */}
                    <div data-aos="fade-up" className="px-4 py-2 rounded-full border border-[#1F2B3D] bg-[#101826] shadow-[0_0_20px_rgba(3,206,254,0.15)] hover:scale-105 transition-all duration-300">
                        <p className="text-[#03CEFE] font-bold font-mono text-xs sm:text-sm md:text-lg tracking-wider">
                            SKILLS
                        </p>
                    </div>

                    {/* Title */}
                    <div className="flex flex-col items-center gap-3" data-aos="fade-up" data-aos-delay="100">

                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white font-mono">
                            Tech <span className="bg-linear-to-r from-[#BDE0FF] to-[#00E0FF] bg-clip-text text-transparent">Stack</span>
                        </h2>


                    </div>

                    {/* Description */}
                    <p className="text-gray-300 text-center max-w-2xl font-mono leading-relaxed text-sm md:text-base lg:text-lg" data-aos="fade-up" data-aos-delay="200">
                        Teknologi dan tools yang saya gunakan untuk
                        membangun website modern, responsive,
                        dan interaktif.
                    </p>

                </div>

                {/* Mobile Grid */}
                <div className="grid grid-cols-2 gap-4 md:hidden w-full">
                    {skills.map((skill, index) => (
                        <div
                            key={index}
                            data-aos="fade-up"
                            data-aos-delay={index * 50}
                            className={`
                group
                relative
                flex
                flex-col
                items-center
                justify-center
                gap-3
                p-4
                md:p-5
                rounded-3xl
                border
                border-[#1F2B3D]
                bg-[#101826]/80
                backdrop-blur-lg
                transition-all
                duration-500
                ${skill.glow}
            `}
                        >
                            <div className="relative transition-all duration-500 group-hover:rotate-6 group-hover:scale-110">
                                {skill.icon}
                            </div>

                            <p className="text-white font-mono text-xs md:text-sm font-semibold">
                                {skill.name}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Desktop Marquee */}
                <div className="hidden md:flex flex-col gap-8 w-full overflow-x-hidden">

                    {/* Baris 1 */}
                    <div
                        className="relative w-full overflow-hidden py-4"
                        style={{
                            maskImage:
                                "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)",
                            WebkitMaskImage:
                                "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)",
                        }}
                    >
                        <div className="flex w-max gap-6 animate-marquee">

                            {[...skills.slice(0, 7), ...skills.slice(0, 7)].map((skill, index) => (
                                <div
                                    key={index}
                                    className={`
                        group
                        relative
                        flex
                        flex-col
                        items-center
                        justify-center
                        gap-3
                        min-w-34
                        h-34
                        p-5
                        rounded-3xl
                        border
                        border-[#1F2B3D]
                        bg-[#101826]/80
                        backdrop-blur-lg
                        transition-all
                        duration-500
                        hover:-translate-y-2
                        hover:scale-105
                        ${skill.glow}
                    `}
                                >

                                    <div className="absolute inset-0 rounded-3xl bg-white/0 group-hover:bg-white/3 transition-all duration-500"></div>

                                    <div className="relative transition-all duration-500 group-hover:rotate-6 group-hover:scale-110">
                                        {skill.icon}
                                    </div>

                                    <p className="text-white font-mono text-xs md:text-sm font-semibold">
                                        {skill.name}
                                    </p>

                                </div>
                            ))}

                        </div>
                    </div>

                    {/* Baris 2 */}
                    <div
                        className="relative w-full overflow-hidden py-4"
                        style={{
                            maskImage:
                                "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)",
                            WebkitMaskImage:
                                "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)",
                        }}
                    >
                        <div className="flex w-max gap-6 animate-marquee-reverse">

                            {[...skills.slice(7), ...skills.slice(7)].map((skill, index) => (
                                <div
                                    key={index}
                                    className={`
                        group
                        relative
                        flex
                        flex-col
                        items-center
                        justify-center
                        gap-3
                        min-w-34
                        h-34
                        p-5
                        rounded-3xl
                        border
                        border-[#1F2B3D]
                        bg-[#101826]/80
                        backdrop-blur-lg
                        transition-all
                        duration-500
                        hover:-translate-y-2
                        hover:scale-105
                        ${skill.glow}
                    `}
                                >

                                    <div className="absolute inset-0 rounded-3xl bg-white/0 group-hover:bg-white/3 transition-all duration-500"></div>

                                    <div className="relative transition-all duration-500 group-hover:rotate-6 group-hover:scale-110">
                                        {skill.icon}
                                    </div>

                                    <p className="text-white font-mono text-xs md:text-sm font-semibold">
                                        {skill.name}
                                    </p>

                                </div>
                            ))}

                        </div>
                    </div>

                </div>

            </div>

        </section>
    )
}

export default Skills