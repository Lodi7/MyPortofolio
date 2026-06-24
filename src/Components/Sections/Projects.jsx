import CardProject from "../Ui/CardProject"
import { FaArrowRight } from "react-icons/fa";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Type } from "lucide-react";

function Projects() {

    // DATA PROJECT
    const projects = [
        {
            id: 1,
            title: "LodiHealth",
            type: "development",
            description: "Platform layanan kesehatan digital yang menyediakan informasi dokter, rumah sakit, artikel kesehatan, serta pembelian obat secara online dengan integrasi API.",
            image: "src/assets/images/LodiHealth.png",
            tech: ["React", "Tailwind CSS", "JavaScript"],
            featured: true,
            github: "https://github.com/Lodi7/Lodi-Health",
            demo: "https://lodi-health.vercel.app/",
        },
        {
            id: 2,
            title: "Personal Portfolio Website",
            type: "development",
            description: "Website portfolio pribadi dengan React dan Tailwind CSS yang responsif, modern, dan dilengkapi animasi interaktif untuk menampilkan project dan skill.",
            image: "src/assets/images/portofolioWeb.png",
            tech: ["React", "Tailwind CSS", "JavaScript"],
            featured: true,
            github: "https://github.com/Lodi7/MyPortofolio",
            demo: "https://lodi-portfolio.vercel.app/",
        },
        {
            id: 3,
            title: "AI Health Assistant",
            type: "development",
            description: "Asisten kesehatan berbasis AI yang membantu pengguna mencari informasi kesehatan, dokter, rumah sakit, dan berita kesehatan melalui chatbot interaktif.",
            image: "src/assets/images/AIHealthAssistant.png",
            tech: ["Python", "Streamlit", "Gemini API"],
            featured: false,
            github: "https://github.com/Lodi7/AssistantKesehatan",
            demo: "https://assistantkesehatan.streamlit.app/",
        },
        {
            id: 4,
            title: "LabHub",
            type: "development",
            description: "Platform reservasi laboratorium dengan fitur OTP, jadwal real-time, dan dashboard admin untuk pengelolaan peminjaman ruangan secara efisien.",
            image: "src/assets/images/LabHub.png",
            tech: ["PHP", "Tailwind CSS", "MySQL", "JavaScript"],
            featured: true,
            github: "https://github.com/Lodi7/Sistem-Reservasi-Ruangan",
            demo: "https://sistem-reservasi-ruangan.freedev.app",
        },
        {
            id: 5,
            title: "PEMIRA E-Voting UI/UX",
            type: "design",
            description: "Desain UI/UX aplikasi mobile e-voting untuk PEMIRA dengan design system, user flow, dan prototype interaktif pemilihan mahasiswa.",
            image: "src/assets/images/PEMIRA.png",
            tech: ["Figma", "UI/UX Design"],
            featured: true,
            figma: "https://www.figma.com/design/epS7cDkSLqpjUcFl2OjNhz/PEMIRA-E-Voting-UI-UX?node-id=0-1&p=f&t=gzlnmHcOD7Lju6E6-0",
            demo: "https://www.figma.com/proto/epS7cDkSLqpjUcFl2OjNhz/PEMIRA-E-Voting-UI-UX?node-id=1-22485&p=f&t=gzlnmHcOD7Lju6E6-0&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1%3A22485",
        },
        {
            id: 6,
            title: "LodiHealth Mobile UI/UX",
            type: "design",
            description: "Desain aplikasi mobile HealthTech dengan fokus pada user flow, design system, komponen reusable, dan prototype interaktif untuk pengalaman pengguna yang mudah.",
            image: "src/assets/images/LodiHealth-Mobile.png",
            tech: ["Figma", "UI/UX Design"],
            featured: false,
            figma: "https://www.figma.com/design/pLrznuo7pqUMXCuIk6gzcD/LodiHealths-Mobile-UI-UX?node-id=2-12297&p=f&t=M9IP1DVVE4FSU4x2-0",
            demo: "https://www.figma.com/proto/pLrznuo7pqUMXCuIk6gzcD/LodiHealths-Mobile-UI-UX?node-id=2-1313&p=f&t=M9IP1DVVE4FSU4x2-0&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=2%3A1313&show-proto-sidebar=1",
        },
    ];

    // RANDOM PROJECT
    const getRandomProjects = () => {
        return [...projects]
            .sort(() => 0.5 - Math.random())
            .slice(0, 3);
    };

    const [randomProjects, setRandomProjects] = useState(
        getRandomProjects()
    );

    // ANIMATION STATE
    const [visible, setVisible] = useState(true);

    // AUTO CHANGE PROJECT
    useEffect(() => {

        const interval = setInterval(() => {

            // Fade Out
            setVisible(false);

            setTimeout(() => {

                // Change Projects
                setRandomProjects(getRandomProjects());

                // Fade In
                setVisible(true);

            }, 500);

        }, 10000);

        return () => clearInterval(interval);

    }, []);

    return (
        <section
            id="projects"
            className="px-4
sm:px-6
md:px-10
xl:px-25
mt-20
overflow-hidden"
        >

            {/* Main Container */}
            <div
                className="
                relative
                font-mono
                w-full
                flex
                flex-col
gap-10
md:gap-12

p-0.5
sm:p-2
md:p-4
lg:p-8
                "
            >

                {/* Header */}
                <div className="relative flex flex-col lg:flex-row gap-8 lg:gap-0 w-full z-10">

                    {/* Left */}
                    <div className="w-full flex flex-col gap-4 justify-center items-start">

                        {/* Small Label */}
                        <div data-aos="fade-up"
                            className="
                            px-4
                            py-2
                            rounded-full
                            border
                            border-[#1F2B3D]
                            bg-[#101826]
                            shadow-[0_0_20px_rgba(3,206,254,0.15)]
                            hover:scale-105
                            transition-all
                            duration-300
                            "
                        >

                            <p
                                className="
                                text-[#03CEFE]
                                font-bold
text-xs
sm:text-sm
md:text-lg
                                tracking-wider
                                "
                            >
                                PROJECTS
                            </p>

                        </div>

                        {/* Title */}
                        <div className="flex flex-col gap-3" data-aos="fade-up" data-aos-delay="100">

                            <h2
                                className="
text-3xl
sm:text-4xl
md:text-5xl
                                font-black
                                text-white
                                leading-tight
                                "
                            >

                                Beberapa{" "}

                                <span
                                    className="
                                    bg-linear-to-r
                                    from-[#BDE0FF]
                                    to-[#00E0FF]
                                    bg-clip-text
                                    text-transparent
                                    "
                                >
                                    Projects Saya
                                </span>{" "}



                            </h2>

                        </div>

                        {/* Description */}
                        <p data-aos="fade-up" data-aos-delay="200"
                            className="
                            text-gray-300
                            max-w-2xl
                            leading-relaxed
text-sm
md:text-base
lg:text-lg
                            "
                        >

                            Beberapa project yang telah saya buat
                            untuk mengembangkan kemampuan dalam
                            web development dan UI/UX modern.

                        </p>

                    </div>

                    {/* Right Link */}
                    <div className="flex items-end lg:justify-end w-full" data-aos="fade-right" data-aos-delay="300">

                        <Link
                            to="/projects"
                            className="
                            group
                            relative
                            overflow-hidden
                            flex
                            items-center
                            gap-3
px-5
py-3
md:px-6
md:py-4
                            rounded-2xl
                            border border-[#1F2B3D]
                            bg-[#101826]/80
                            text-[#03CEFE]
                            font-semibold
                            transition-all
                            duration-500
                           text-sm
md:text-base
                            hover:shadow-[0_0_35px_rgba(3,206,254,0.25)]
                            "
                        >

                            {/* Glow */}
                            <div
                                className="
                                absolute
                                inset-0
                                bg-linear-to-r
                                from-cyan-400/0
                                to-blue-500/0
                                group-hover:from-cyan-400/10
                                group-hover:to-blue-500/10
                                transition-all
                                duration-500
                                "
                            ></div>

                            {/* Text */}
                            <span
                                className="
                                relative
                                z-10
                                group-hover:text-white
                                transition-all
                                duration-300
                                group-hover:translate-x-1.5
                                "
                            >

                                Lihat Semua Projects

                            </span>

                            {/* Arrow */}
                            <FaArrowRight
                                className="
                                    w-4
                                    h-4
                                    md:w-5
                                    md:h-5
                                    relative
                                    z-10
                                    transition-all
                                    duration-500
                                    group-hover:translate-x-1.5
                                    group-hover:text-white
                                    "
                            />

                        </Link>

                    </div>

                </div>

                {/* Projects Grid */}
                <div
                    className={`
                    relative
                    grid
                    grid-cols-1
                    md:grid-cols-2
                    xl:grid-cols-3
                    gap-8
                    z-10
                    items-stretch
                    transition-all
                    duration-700
                    ease-in-out
                    
                    ${visible
                            ? "opacity-100 translate-y-0 blur-0"
                            : "opacity-0 translate-y-10 blur-sm"}
                    `}
                >

                    {randomProjects.map((project, index) => (

                        <div
                            key={`${project.id}-${index}`}
                            data-aos="fade-up"
                            data-aos-delay={index * 200}
                            className={`
                            transition-all
                            duration-700
                            
                            ${visible
                                    ? "opacity-100 translate-y-0"
                                    : "opacity-0 translate-y-5"}
                            `}
                            style={{
                                transitionDelay: `${index * 120}ms`
                            }}
                        >

                            <CardProject
                                title={project.title}
                                type={project.type}
                                description={project.description}
                                image={project.image}
                                tech={project.tech}
                                featured={project.featured}
                                github={project.github}
                                demo={project.demo}
                                figma={project.figma}
                            />

                        </div>

                    ))}

                </div>

            </div>

        </section>
    )
}

export default Projects