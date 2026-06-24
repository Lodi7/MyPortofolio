import TextType from '../Animations/TextType'
import DownloadCvButton from '../Ui/DownloadCvButton'
import ViewProjectButton from '../Ui/ViewProjectButton'
import AvatarHero from '../Ui/AvatarHero'
import Profile from '../../Assets/Profile.jpg'

import { FaLinkedinIn, FaInstagram, FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

function Hero() {
    return (
        <section
            id="home"
            className="
            px-4
            sm:px-6
            md:px-10
            xl:px-25
            py-28
            md:py-32
            min-h-screen
            max-w-full
            flex
            items-center
            overflow-hidden
            "
        >

            <div
                className="
                flex
                flex-col-reverse
                xl:flex-row
                w-full
                items-center
                gap-10
                md:gap-12
                xl:gap-20
                "
            >
                {/* LEFT CONTENT */}
                <div
                    className="
                    flex
                    flex-col
                    gap-5
                    w-full
                    xl:w-1/2
                    "
                    data-aos="fade-right"
                >

                    <div className='flex flex-col gap-3 w-full'>

                        {/* Intro Text */}
                        <div
                            className="
                            w-fit
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

                            <TextType
                                text={"// INITIALIZING PORTFOLIO..."}
                                typingSpeed={50}
                                pauseDuration={50000}
                                showCursor
                                cursorCharacter="▎"
                                deletingSpeed={50}
                                cursorBlinkDuration={0.5}
                                className="text-[#03CEFE] text-xs sm:text-sm md:text-lg font-mono font-medium"
                            />

                        </div>

                        {/* Heading */}
                        <div className='flex flex-col gap-3'>

                            <h2
                                className="
                                font-mono
                                    text-3xl
                                    sm:text-4xl
                                    md:text-5xl
                                    lg:text-6xl
                                font-bold
                                text-white
                                leading-tight
                                "
                            >
                                Hello World
                            </h2>

                            <h1
                                className="
                                font-mono
text-4xl
sm:text-5xl
md:text-6xl
lg:text-7xl
                                font-black
                                bg-clip-text
                                text-transparent
                                bg-linear-to-r
                                from-[#BDE0FF]
                                via-[#67DFFF]
                                to-[#00E0FF]
                                w-fit
                                hover:scale-105
                                transition-all
                                duration-500
                                cursor-default
                                "
                            >
                                I'm Lodi
                            </h1>

                        </div>

                        {/* Typing Roles */}
                        <div className='flex items-center gap-2'>

                            <span className='text-[#03CEFE] text-xl animate-pulse mb-1.5'>
                                ●
                            </span>

                            <TextType
                                text={[
                                    "Informatics Student",
                                    "Web Developer",
                                    "UI/UX Enthusiast",
                                    "Frontend Engineer"
                                ]}
                                typingSpeed={50}
                                pauseDuration={2500}
                                showCursor
                                cursorCharacter="▎"
                                deletingSpeed={50}
                                cursorBlinkDuration={0.5}
                                className="text-[#03CEFE] text-sm sm:text-base md:text-lg font-mono font-medium"
                            />

                        </div>

                        {/* Description */}
                        <p
                            className="
                            font-mono
text-sm
sm:text-base
lg:text-lg
                            text-gray-300
                            leading-relaxed
                            max-w-xl
                            xl:max-w-2xl
                            hover:text-white
                            transition-all
                            duration-300
                            "
                        >
                            Mahasiswa Informatika yang sedang belajar dan
                            mengembangkan skill di dunia web development.
                            Fokus pada pembuatan project modern,
                            responsive, dan interaktif untuk terus berkembang.
                        </p>

                    </div>

                    {/* Buttons */}
                    <div
                        className="
                        flex
                        flex-col
                        sm:flex-row
                        gap-4
                        text-white
                        font-semibold
                        text-base
                        w-full
                        sm:w-fit
                        "
                    >

                        <div
                            className="
                            transition-all
                            duration-300
                            hover:-translate-y-1
                            hover:scale-105
                            "
                        >
                            <ViewProjectButton />
                        </div>
                    </div>

                    {/* Social Media */}
                    <div className='flex flex-col gap-4'>

                        <p
                            className="
                            font-mono
                            text-gray-400
                            text-sm
                            sm:text-base
                            tracking-wide
                            "
                        >
                            Temukan saya di
                        </p>

                        <div className='flex flex-wrap gap-4'>

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
w-5
h-5
md:w-6
md:h-6
text-white
transition-all
duration-300
group-hover:rotate-12
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
w-5
h-5
md:w-6
md:h-6
text-[#0A66C2]
transition-all
duration-300
group-hover:rotate-12
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
w-5
h-5
md:w-6
md:h-6
text-pink-400
transition-all
duration-300
group-hover:rotate-12
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
w-5
h-5
md:w-6
md:h-6
text-cyan-400
transition-all
duration-300
group-hover:rotate-12
"
                                />

                            </a>

                        </div>

                    </div>

                </div>

                {/* RIGHT IMAGE */}
                <div
                    className="
                    relative
                    flex
                    justify-center
                    items-center
                    w-full
                    xl:w-1/2

                    "
                    data-aos="fade-left"
                >

                    {/* Glow */}
                    <div
                        className="
                        absolute
                        w-64
                        h-64
                        sm:w-80
                        sm:h-80
                        xl:w-96
                        xl:h-96
                        bg-cyan-400/20
                        blur-3xl
                        rounded-full
                        animate-pulse
                        "
                    ></div>

                    {/* Avatar */}
                    <div
                        className="
                        relative
                        z-10
                        transition-all
                        duration-500
                        hover:-translate-y-2
                        "
                    >
                        <AvatarHero src={Profile} />
                    </div>

                </div>

            </div>

        </section>
    )
}

export default Hero