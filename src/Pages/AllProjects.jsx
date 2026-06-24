import { useState } from "react";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import CardProject from "../Components/Ui/CardProject";
import Particles from "../Components/Animations/Particles";

function AllProjects() {

    // DATA PROJECT
    const projects = [
        {
            id: 1,
            title: "LodiHealth",
            type: "development",
            description: "Platform layanan kesehatan digital yang menyediakan informasi dokter, rumah sakit, artikel kesehatan terbaru, serta pembelian obat dan suplemen. Mengintegrasikan berbagai sumber API untuk menghadirkan pengalaman kesehatan online yang mudah diakses dan informatif.",
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
            description: "Website portfolio pribadi yang dibangun menggunakan React dan Tailwind CSS dengan desain responsif, animasi interaktif, serta tampilan modern untuk menampilkan proyek dan keterampilan pengembangan.",
            image: "src/assets/images/portofolioWeb.png",
            tech: ["React", "Tailwind CSS", "JavaScript"],
            featured: true,
            github: "https://github.com/Lodi7/MyPortofolio",
            demo: "/",
        },

        {
            id: 3,
            title: "AI Health Assistant",
            type: "development",
            description: "Asisten kesehatan berbasis AI yang membantu pengguna memperoleh informasi kesehatan, mencari dokter, menemukan rumah sakit, dan mengakses berita kesehatan terbaru melalui antarmuka chatbot interaktif.",
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
            description: "Platform reservasi laboratorium komputer yang dirancang untuk meningkatkan efisiensi peminjaman ruangan. Menyediakan fitur registrasi dan autentikasi pengguna, verifikasi email OTP, pemesanan jadwal real-time, pelacakan status reservasi, serta dashboard administrasi untuk pengelolaan operasional laboratorium secara terpusat.",
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
            description: "Desain UI/UX aplikasi mobile untuk sistem e-voting PEMIRA yang mendukung proses pemilihan mahasiswa secara digital. Mencakup design system, komponen reusable, halaman kandidat, proses voting, hasil pemilihan, serta prototype interaktif.",
            image: "src/assets/images/PEMIRA.png",
            tech: ["Figma", "UI/UX Design"],
            featured: true,
            figma: "https://www.figma.com/design/epS7cDkSLqpjUcFl2OjNhz/PEMIRA-E-Voting-UI-UX?node-id=0-1&p=f&t=gzlnmHcOD7Lju6E6-0",
            demo: "https://www.figma.com/proto/epS7cDkSLqpjUcFl2OjNhz/PEMIRA-E-Voting-UI-UX?node-id=1-22485&p=f&t=gzlnmHcOD7Lju6E6-0&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1%3A22485",
        },
        {
            id: 6,
            title: "LodiHealth's Mobile UI/UX",
            type: "design",
            description: "Proyek UI/UX aplikasi mobile HealthTech yang dirancang menggunakan Figma, mencakup design system, komponen reusable, alur pengguna, serta prototype interaktif untuk layanan kesehatan digital yang modern dan mudah diakses.",
            image: "src/assets/images/LodiHealth-Mobile.png",
            tech: ["Figma", "UI/UX Design"],
            featured: false,
            figma: "https://www.figma.com/design/pLrznuo7pqUMXCuIk6gzcD/LodiHealths-Mobile-UI-UX?node-id=2-12297&p=f&t=M9IP1DVVE4FSU4x2-0",
            demo: "https://www.figma.com/proto/pLrznuo7pqUMXCuIk6gzcD/LodiHealths-Mobile-UI-UX?node-id=2-1313&p=f&t=M9IP1DVVE4FSU4x2-0&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=2%3A1313&show-proto-sidebar=1",
        },
    ];

    // FILTER ACTIVE
    const [activeFilter, setActiveFilter] = useState("Semua");
    const [currentPage, setCurrentPage] = useState(1);
    const projectsPerPage = 6;

    // AUTO FILTER
    const filters = [
        "Semua",
        ...new Set(projects.flatMap(project => project.tech))
    ];

    // FILTER PROJECT
    const filteredProjects =
        activeFilter === "Semua"
            ? projects
            : projects.filter(project =>
                project.tech.includes(activeFilter)
            );

    const indexOfLastProject = currentPage * projectsPerPage;

    const indexOfFirstProject =
        indexOfLastProject - projectsPerPage;

    const currentProjects =
        filteredProjects.slice(
            indexOfFirstProject,
            indexOfLastProject
        );

    const totalPages = Math.ceil(
        filteredProjects.length / projectsPerPage
    );
    // NAVIGATE
    const navigate = useNavigate();
    return (
        <div
            className="
            min-h-screen overflow-hidden bg-[#060816] relative
            "
        >
            <div className="fixed inset-0 z-0">
                <Particles
                    particleColors={["#03CEFE"]}
                    particleCount={500}
                    particleSpread={10}
                    speed={0.1}
                    particleBaseSize={100}
                    moveParticlesOnHover={false}
                    alphaParticles={false}
                    disableRotation
                    pixelRatio={1}
                />
            </div>

            {/* HERO */}
            <section
                className="
                relative
                px-4
                sm:px-6
                md:px-10
                xl:px-25
                pt-20
                pb-20
                overflow-hidden
                "
            >

                {/* Glow */}
                <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-400/10 blur-3xl rounded-full"></div>
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/10 blur-3xl rounded-full"></div>

                <div
                    className="
                    relative
                    flex
                    flex-col
                    gap-8
                    z-10
                    "
                >
                    <div data-aos="fade-right">
                        <button
                            onClick={() => navigate(-1)}
                            className="
    flex
    items-center
    gap-2
    w-fit
px-4
py-2.5
md:px-5
md:py-3
    rounded-2xl
    border border-[#1F2B3D]
    bg-[#101826]/80
    text-white
    font-mono
    transition-all
    duration-300
    hover:border-cyan-400
    hover:text-cyan-300
    hover:-translate-x-1
    "
                        >
                            <ArrowLeft className="w-4 h-4 md:w-4.5 md:h-4.5" />
                            Kembali
                        </button>
                    </div>
                    {/* Label */}
                    <div data-aos="fade-up"
                        className="
                        w-fit
                        px-4
                        py-2
                        rounded-full
                        border border-[#1F2B3D]
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
                            font-mono
                            text-xs
                            sm:text-sm
                            md:text-lg
                            tracking-wider
                            "
                        >
                            PROJECTS
                        </p>
                    </div>

                    {/* Heading */}
                    <div className="flex flex-col gap-4" data-aos="fade-up" data-aos-delay="100">

                        <h1
                            className="
                            text-4xl
                            sm:text-5xl
                            md:text-6xl
                            xl:text-7xl
                            font-black
                            font-mono
                            text-white
                            leading-tight
                            "
                        >
                            Semua{" "}
                            <span className="bg-linear-to-r from-[#BDE0FF] to-[#00E0FF] bg-clip-text text-transparent">
                                Projects
                            </span>
                        </h1>

                    </div>

                    {/* Description */}
                    <p data-aos="fade-up" data-aos-delay="200"
                        className="
                        text-gray-300
                        font-mono
                        leading-relaxed
                        max-w-2xl
                        text-sm
                        sm:text-base
                        lg:text-lg
                        "
                    >
                        Berikut adalah beberapa project yang pernah saya buat
                        untuk mengembangkan skill di bidang frontend,
                        backend, UI/UX, dan web development modern.
                    </p>

                    {/* FILTER BUTTON */}
                    <div data-aos="fade-up" data-aos-delay="300"
                        className="
                        flex
                        flex-wrap
                        gap-3
                        md:gap-4
                        mt-2
                        "
                    >

                        {filters.map((filter, index) => (

                            <button
                                key={index}
                                onClick={() => setActiveFilter(filter)}
                                className={`
                                group
                                relative
                                overflow-hidden
                                px-4
                                py-2.5
                                md:px-6
                                md:py-3
                                rounded-2xl
                                border
                                font-semibold
                                font-mono
                                transition-all
                                duration-500
                                hover:-translate-y-1
                                hover:scale-105
                                md:text-base
                                text-sm

                                ${activeFilter === filter
                                        ? "bg-[#03CEFE] text-black border-transparent shadow-[0_0_30px_rgba(3,206,254,0.4)]"
                                        : "bg-[#101826]/70 text-white border-[#1F2B3D] hover:border-cyan-400/50"}
                                `}
                            >

                                {/* Glow */}
                                <div
                                    className="
                                    absolute
                                    inset-0
                                    opacity-0
                                    group-hover:opacity-100
                                    bg-linear-to-r
                                    from-cyan-400/10
                                    to-blue-500/10
                                    transition-all
                                    duration-500
                                    "
                                ></div>

                                <span className="relative z-10">
                                    {filter}
                                </span>

                            </button>

                        ))}

                    </div>

                </div>

            </section>

            {/* PROJECT GRID */}
            <section
                className="
                px-4
                sm:px-6
                md:px-10
                xl:px-25
                pb-50
                overflow-hidden
                "
            >

                <div
                    className="
                    grid
                    grid-cols-1
                    md:grid-cols-2
                    xl:grid-cols-3
                    gap-6
                    md:gap-8
                    "
                >

                    {currentProjects.map((project, index) => (

                        <div
                            key={project.id}
                            data-aos="fade-up"
                            data-aos-delay={index * 150}
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

            </section>
            {totalPages > 1 && (
                <div className="flex justify-center gap-4 mt-10 md:mt-14" data-aos="fade-up" data-aos-delay="400">

                    {[...Array(totalPages)].map((_, index) => (

                        <button
                            key={index}
                            onClick={() => setCurrentPage(index + 1)}
                            className={`
            md:w-12
            md:h-12
            w-10
            h-10
            text-sm
            md:text-base
            rounded-xl
            font-mono
            font-bold
            transition-all
            duration-300

            ${currentPage === index + 1
                                    ? "bg-cyan-400 text-black shadow-[0_0_20px_rgba(34,211,238,0.5)]"
                                    : "bg-[#101826] text-white border border-[#1F2B3D] hover:border-cyan-400"}
            `}
                        >
                            {index + 1}
                        </button>

                    ))}

                </div>
            )}


        </div>
    );
}

export default AllProjects;