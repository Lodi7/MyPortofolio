import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { BiLogoFigma } from "react-icons/bi";
function CardProject({
    title,
    description,
    image,
    tech,
    featured,
    github,
    demo,
    type = "development",
    figma,
}) {
    return (
        <div
            className="
            group
            relative
            flex
            flex-col
            h-full
            overflow-hidden

            rounded-2xl
            border
            border-[#1F2B3D]

            bg-[#192433]/80
            backdrop-blur-xl

            transition-all
            duration-500

            hover:-translate-y-2
            hover:shadow-[0_0_40px_rgba(3,206,254,0.15)]
            "
        >
            {/* Glow */}
            <div
                className="
                absolute
                inset-0
                bg-linear-to-br
                from-cyan-400/0
                via-cyan-400/0
                to-blue-500/0
                group-hover:from-cyan-400/5
                group-hover:to-blue-500/10
                transition-all
                duration-500
                "
            />

            {/* Image */}
            <figure
                className="
                relative
                p-3
                sm:p-4
                "
            >
                <div
                    className="
                    overflow-hidden
                    rounded-xl
                    border
                    border-[#1F2B3D]
                    bg-[#101826]
                    "
                >
                    <img
                        src={image}
                        alt={title}
                        className="
                        w-full
                        h-auto
                        object-contain
                        transition-all
                        duration-700
                        group-hover:scale-[1.02]
                        "
                    />
                </div>
            </figure>

            {/* Content */}
            <div
                className="
                relative
                z-10

                flex
                flex-col
                flex-1

                gap-4

                p-4
                sm:p-5
                md:p-6
                "
            >

                {featured && (
                    <span
                        className="
                        text-cyan-400
                        text-xs
                        font-semibold
                        tracking-widest
                        uppercase
                        "
                    >
                        Featured Project
                    </span>
                )}

                {/* Title */}
                <div>

                    <h2
                        className="
                        text-lg
                        sm:text-xl
                        md:text-2xl

                        font-bold
                        text-white

                        transition-all
                        duration-300

                        group-hover:text-cyan-300
                        "
                    >
                        {title}
                    </h2>

                    <p
                        className="
                        mt-3

                        text-sm
                        md:text-base

                        text-gray-400
                        leading-relaxed

                        line-clamp-3
                        "
                    >
                        {description}
                    </p>

                </div>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">

                    {tech.map((item, index) => (
                        <span
                            key={index}
                            className="
                            px-2.5
                            py-1
                            md:px-3
                            md:py-1.5
                            rounded-lg
                            bg-[#101826]
                            border
                            border-[#1F2B3D]
                            text-cyan-300
                            text-xs

                            transition-all duration-300
                            hover:scale-105
                          hover:border-cyan-400/50
                          hover:text-cyan-200
                            hover:shadow-[0_0_10px_rgba(3,206,254,0.2)]
                            cursor-default
                            "
                        >
                            {item}
                        </span>
                    ))}

                </div>

                {/* Footer */}
                <div
                    className="
    mt-auto
    pt-4
    border-t
    border-[#1F2B3D]
    flex
    flex-wrap
    items-center
    justify-between
    gap-3
    "
                >

                    {type === "design" ? (
                        <>
                            <a
                                href={demo}
                                target="_blank"
                                rel="noreferrer"
                                className="
                flex items-center gap-2
                text-cyan-400
                text-sm md:text-base
                font-medium
                hover:text-cyan-300
                transition-colors duration-300 hover:scale-110 
                "
                            >
                                View Prototype
                                <FaExternalLinkAlt className="text-xs shrink-0" />
                            </a>

                            <a
                                href={figma}
                                target="_blank"
                                rel="noreferrer"
                                className="
                flex items-center gap-2
                text-white
                text-sm md:text-base
                font-medium
                hover:text-cyan-300
                transition-colors duration-300 hover:scale-110 
                "
                            >
                                Open Figma
                                <BiLogoFigma className="text-xs shrink-0" />
                            </a>
                        </>
                    ) : (
                        <>
                            <a
                                href={demo}
                                target="_blank"
                                rel="noreferrer"
                                className="
                flex items-center gap-2
                text-cyan-400
                text-sm md:text-base
                font-medium
                hover:text-cyan-300
                transition-colors duration-300 hover:scale-110 
                "
                            >
                                Live Demo
                                <FaExternalLinkAlt className="text-xs shrink-0" />
                            </a>

                            <a
                                href={github}
                                target="_blank"
                                rel="noreferrer"
                                className="
                flex items-center gap-2
                text-white
                text-sm md:text-base
                font-medium
                hover:text-cyan-300
                transition-colors duration-300 hover:scale-110 
                "
                            >
                                Github
                                <FaGithub className="text-base shrink-0" />
                            </a>
                        </>
                    )}

                </div>

            </div>

        </div>
    );
}

export default CardProject;