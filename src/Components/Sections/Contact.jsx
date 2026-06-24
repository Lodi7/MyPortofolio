import {
    FaLinkedinIn,
    FaInstagram,
    FaGithub,
    FaWhatsapp
} from "react-icons/fa";
import toast from "react-hot-toast";
import { FiMail } from "react-icons/fi";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

function Contact() {
    const form = useRef();

    const [loading, setLoading] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();

        setLoading(true);

        emailjs
            .sendForm(
                import.meta.env.VITE_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
                form.current,
                import.meta.env.VITE_EMAILJS_PUBLIC_KEY
            )
            .then(
                () => {
                    toast.success("Pesan berhasil dikirim!");
                    form.current.reset();
                    setLoading(false);
                },
                (error) => {
                    toast.error("Gagal mengirim pesan!");
                    console.log(error.text);
                    setLoading(false);
                }
            );
    };
    return (
        <section
            id="contact"
            className="px-4
sm:px-6
md:px-10
xl:px-25
mt-20
overflow-hidden
scroll-mt-20"
        >

            {/* Main Container */}
            <div
                className="
                relative
                bg-[#192433]/70
                backdrop-blur-xl
                font-mono
                w-full
                rounded-3xl
                border border-[#1F2B3D]
               px-3
sm:px-6
md:px-10

py-8
md:py-10
                "
            >

                {/* Glow */}
                <div className="absolute top-0 left-0 w-72 h-72 bg-cyan-400/10 blur-3xl rounded-full"></div>
                <div className="absolute bottom-0 right-0 w-72 h-72 bg-blue-500/10 blur-3xl rounded-full"></div>

                <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-12 xl:gap-15 z-10">

                    {/* LEFT CONTENT */}
                    <div className="flex flex-col gap-6">

                        {/* Label */}
                        <div data-aos="fade-up" className="w-fit px-4 py-2 rounded-full border border-[#1F2B3D] bg-[#101826] shadow-[0_0_20px_rgba(3,206,254,0.15)] hover:scale-105 transition-all duration-300">
                            <p className="text-[#03CEFE] font-bold text-xs sm:text-sm md:text-lg tracking-wider">
                                CONTACT
                            </p>
                        </div>

                        {/* Heading */}
                        <div data-aos="fade-up" data-aos-delay="100" className="flex flex-col gap-3">

                            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white leading-tight">
                                Hubungi Saya
                            </h2>

                        </div>

                        {/* Description */}
                        <p data-aos="fade-up" data-aos-delay="200" className="text-gray-300 leading-relaxed text-sm md:text-base lg:text-lg max-w-xl">
                            Punya project atau ingin kerja sama?
                            Yuk, kirim pesan untuk diskusi lebih lanjut
                            mengenai website, UI/UX, atau project lainnya.
                        </p>

                        {/* Contact Info */}
                        <div data-aos="fade-right" data-aos-delay="300" className="flex flex-col gap-5 mt-3">

                            {/* WhatsApp */}
                            <div className="group flex items-center gap-4">

                                <div
                                    className="
                                    p-3
                                    md:p-4
                                    rounded-2xl
                                    bg-[#101826]
                                    border border-[#1F2B3D]
                                    transition-all
                                    duration-300
                                    group-hover:scale-110
                                    group-hover:shadow-[0_0_25px_rgba(37,211,102,0.35)]
                                    "
                                >
                                    <FaWhatsapp
                                        className="
w-5
h-5
md:w-6
md:h-6
text-green-400
"
                                    />
                                </div>

                                <div>
                                    <p className="text-gray-400 text-xs md:text-sm">
                                        WhatsApp
                                    </p>

                                    <p className="text-white font-semibold text-sm md:text-base">
                                        +62 812-5986-3548
                                    </p>
                                </div>

                            </div>

                            {/* Email */}
                            <div className="group flex items-center gap-4">

                                <div
                                    className="
                                    p-4
                                    rounded-2xl
                                    bg-[#101826]
                                    border border-[#1F2B3D]
                                    transition-all
                                    duration-300
                                    group-hover:scale-110
                                    group-hover:shadow-[0_0_25px_rgba(3,206,254,0.35)]
                                    "
                                >
                                    <FiMail
                                        className="
w-5
h-5
md:w-6
md:h-6
text-cyan-400
"
                                    />
                                </div>

                                <div>
                                    <p className="text-gray-400 text-xs md:text-sm">
                                        Email
                                    </p>

                                    <p className="text-white font-semibold text-sm md:text-base break-all">
                                        lodigalang3@gmail.com
                                    </p>
                                </div>

                            </div>

                            {/* Location */}
                            <div className="group flex items-center gap-4">

                                <div
                                    className="
                                    p-4
                                    rounded-2xl
                                    bg-[#101826]
                                    border border-[#1F2B3D]
                                    transition-all
                                    duration-300
                                    group-hover:scale-110
                                    group-hover:shadow-[0_0_25px_rgba(59,130,246,0.35)]
                                    "
                                >

                                    <svg
                                        className="
w-5
h-5
md:w-6
md:h-6
text-blue-400
"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                        />

                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                        />
                                    </svg>

                                </div>

                                <div>
                                    <p className="text-gray-400 text-xs md:text-sm">
                                        Lokasi
                                    </p>

                                    <p className="text-white font-semibold text-sm md:text-base">
                                        Indonesia
                                    </p>
                                </div>

                            </div>

                        </div>

                    </div>

                    {/* FORM */}
                    <div data-aos="fade-left" data-aos-delay="400"
                        className="
                        relative
                        bg-[#101826]/70
                        border border-[#1F2B3D]
                        rounded-xl
                        md:rounded-3xl
                        p-3
                        sm:p-6
                        md:p-8
                        backdrop-blur-xl
                        shadow-[0_0_40px_rgba(3,206,254,0.05)]
                        "
                    >

                        <form className="space-y-5  " ref={form} onSubmit={sendEmail}>

                            {/* Input Grid */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

                                <input
                                    name="name"
                                    type="text"
                                    placeholder="Nama"
                                    className="
                                    w-full
px-4
py-3.5
md:px-5
md:py-4
                                    border
                                    bg-[#192433]
                                    border-[#1F2B3D]
                                    rounded-lg
                                    md:rounded-2xl
                                    text-white
                                    placeholder:text-gray-500
                                    focus:outline-none
                                    focus:border-cyan-400
                                    focus:shadow-[0_0_20px_rgba(3,206,254,0.2)]
                                    transition-all
                                    duration-300
                                    "
                                    required
                                />

                                <input
                                    name="email"
                                    type="email"
                                    placeholder="Email"
                                    className="
                                    w-full
px-4
py-3.5
md:px-5
md:py-4
                                    border
                                    bg-[#192433]
                                    border-[#1F2B3D]
                                    rounded-lg
                                    md:rounded-2xl
                                    text-white
                                    placeholder:text-gray-500
                                    focus:outline-none
                                    focus:border-cyan-400
                                    focus:shadow-[0_0_20px_rgba(3,206,254,0.2)]
                                    transition-all
                                    duration-300
                                    "
                                    required
                                />

                            </div>

                            {/* Subject */}
                            <input
                                name="subject"
                                type="text"
                                placeholder="Subjek"
                                className="
                                w-full
px-4
py-3.5
md:px-5
md:py-4
                                border
                                bg-[#192433]
                                border-[#1F2B3D]
                                rounded-lg
                                md:rounded-2xl
                                text-white
                                placeholder:text-gray-500
                                focus:outline-none
                                focus:border-cyan-400
                                focus:shadow-[0_0_20px_rgba(3,206,254,0.2)]
                                transition-all
                                duration-300
                                "
                                required
                            />

                            {/* Message */}
                            <textarea
                                name="message"
                                rows="6"
                                placeholder="Pesan"
                                className="
                                w-full
                                px-4
                                py-3.5
                                md:px-5
                                md:py-4
                                border
                                bg-[#192433]
                                border-[#1F2B3D]
                                rounded-lg
                                md:rounded-2xl
                                text-white
                                placeholder:text-gray-500
                                focus:outline-none
                                focus:border-cyan-400
                                focus:shadow-[0_0_20px_rgba(3,206,254,0.2)]
                                transition-all
                                duration-300
                                resize-none
                                "
                                required
                            />

                            {/* Button */}
                            <button
                                type="submit"
                                disabled={loading}
                                className="
                                disabled:opacity-60
                                disabled:cursor-not-allowed
                                group
                                relative
                                overflow-hidden
                                w-full
px-6
py-3.5
md:px-8
md:py-4
                                rounded-2xl
                                bg-[#03CEFE]
                                text-white
                                font-semibold
                                text-base
                                md:text-lg
                                transition-all
                                duration-500
                                hover:scale-[1.02]
                                hover:shadow-[0_0_35px_rgba(3,206,254,0.4)]
                                "
                            >

                                {/* linear */}
                                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500 bg-linear-to-r from-cyan-300 to-blue-400"></div>

                                {/* Text */}
                                <span className="relative z-10 group-hover:text-black transition-all duration-300">
                                    {loading ? "Sending..." : "Send Message"}
                                </span>

                            </button>

                        </form>

                    </div>

                </div>

            </div>

        </section>
    );
}

export default Contact;