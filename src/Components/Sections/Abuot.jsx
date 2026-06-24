import InfoCard from '../Ui/InfoCard';
import Lanyard from "../Ui/Lanyard";
import { useInView } from "react-intersection-observer";
import { useState, useEffect } from "react";

function About() {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.3,
    });

    const [showLanyard, setShowLanyard] = useState(false);

    useEffect(() => {
        if (inView) {
            const timer = setTimeout(() => {
                setShowLanyard(true);
            }, 800); // tunggu AOS selesai
            return () => clearTimeout(timer);
        }
    }, [inView]);
    return (
        <section
            id="about"
            className="px-4 sm:px-6 md:px-10 xl:px-25 mt-20 overflow-hidden"
        >

            {/* Main Container */}
            <div
                className="
                relative
                flex flex-col xl:flex-row
                max-w-full
                px-5
                sm:px-6
                md:px-10
                py-8
                md:py-10
                gap-10
                md:gap-12
                xl:gap-15
                items-center
                bg-[#192433]/80
                backdrop-blur-xl
                rounded-3xl
                border border-[#1F2B3D]
                "
            >

                {/* Background Glow */}
                <div className="absolute top-0 left-0 w-72 h-72 bg-cyan-400/10 blur-3xl rounded-full"></div>
                <div className="absolute bottom-0 right-0 w-72 h-72 bg-blue-500/10 blur-3xl rounded-full"></div>

                {/* LEFT */}
                <div data-aos="fade-right" ref={ref}
                    className='
    hidden
    xl:flex
    relative
    w-full
    xl:w-1/3
    max-h-170
    justify-center
    items-center
    animate-float
    z-10
    '
                >



                    <div >
                        {showLanyard && (
                            <Lanyard
                                position={[0, 0, 22]}
                                gravity={[0, -40, 0]}
                            />
                        )}
                    </div>

                </div>

                {/* RIGHT */}
                <div className="relative flex flex-col gap-5 z-10">

                    {/* Small Label */}
                    <div data-aos="fade-up" className="w-fit px-4 py-2 rounded-full border border-[#1F2B3D] bg-[#101826] shadow-[0_0_20px_rgba(3,206,254,0.15)] hover:scale-105 transition-all duration-300">
                        <p className="text-[#03CEFE] font-bold font-mono text-xs sm:text-sm md:text-lg tracking-wider">
                            ABOUT ME
                        </p>
                    </div>

                    {/* Title */}
                    <div data-aos="fade-up" data-aos-delay="100" className="flex flex-col gap-2">

                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white font-mono leading-tight">
                            Tentang Saya
                        </h2>

                    </div>

                    {/* Description */}
                    <div data-aos="fade-up" data-aos-delay="200" className="flex flex-col gap-4">

                        <p className="text-gray-300 font-mono leading-relaxed max-w-4xl text-sm md:text-base hover:text-white transition-all duration-300">
                            Saya adalah mahasiswa Informatika yang memiliki
                            ketertarikan pada pengembangan web dan teknologi.
                            Saya senang memecahkan masalah serta membangun
                            project modern sebagai bagian dari proses belajar.
                        </p>

                        <p className="text-gray-300 font-mono leading-relaxed max-w-4xl text-sm md:text-base hover:text-white transition-all duration-300">
                            Saat ini, saya sedang memperdalam kemampuan di bidang
                            front-end dan mulai mempelajari back-end untuk menjadi
                            Full Stack Developer yang mampu membangun aplikasi
                            modern dan interaktif.
                        </p>

                    </div>

                    {/* Info Card */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 font-mono mt-3">

                        <div data-aos="zoom-in" data-aos-delay="100" className="transition-all duration-300 hover:scale-[1.02] hover:-translate-y-1">
                            <InfoCard
                                title="Nama"
                                description="Lodi"
                                path={
                                    <>
                                        <path d="M8 7C8 8.06087 8.42143 9.07828 9.17157 9.82843C9.92172 10.5786 10.9391 11 12 11C13.0609 11 14.0783 10.5786 14.8284 9.82843C15.5786 9.07828 16 8.06087 16 7C16 5.93913 15.5786 4.92172 14.8284 4.17157C14.0783 3.42143 13.0609 3 12 3C10.9391 3 9.92172 3.42143 9.17157 4.17157C8.42143 4.92172 8 5.93913 8 7Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                                        <path d="M6 21V19C6 17.9391 6.42143 16.9217 7.17157 16.1716C7.92172 15.4214 8.93913 15 10 15H14C15.0609 15 16.0783 15.4214 16.8284 16.1716C17.5786 16.9217 18 17.9391 18 19V21" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                                    </>
                                }
                            />
                        </div>

                        <div data-aos="zoom-in" data-aos-delay="200" className="transition-all duration-300 hover:scale-[1.02] hover:-translate-y-1">
                            <InfoCard
                                title="Pendidikan"
                                description="Mahasiswa Informatika"
                                path={
                                    <>
                                        <path d="M22 9L12 5L2 9L12 13L22 9ZM22 9V15" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M6 10.6V16C6 16.7956 6.63214 17.5587 7.75736 18.1213C8.88258 18.6839 10.4087 19 12 19C13.5913 19 15.1174 18.6839 16.2426 18.1213C17.3679 17.5587 18 16.7956 18 16V10.6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </>
                                }
                            />
                        </div>

                        <div data-aos="zoom-in" data-aos-delay="300" className="transition-all duration-300 hover:scale-[1.02] hover:-translate-y-1">
                            <InfoCard
                                title="Lokasi"
                                description="Indonesia"
                                path={
                                    <>
                                        <path d="M9 11C9 11.7956 9.31607 12.5587 9.87868 13.1213C10.4413 13.6839 11.2044 14 12 14C12.7956 14 13.5587 13.6839 14.1213 13.1213C14.6839 12.5587 15 11.7956 15 11C15 10.2044 14.6839 9.44129 14.1213 8.87868C13.5587 8.31607 12.7956 8 12 8C11.2044 8 10.4413 8.31607 9.87868 8.87868C9.31607 9.44129 9 10.2044 9 11Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M17.657 16.657L13.414 20.9C13.039 21.2746 12.5306 21.485 12.0005 21.485C11.4704 21.485 10.962 21.2746 10.587 20.9L6.343 16.657C5.22422 15.5381 4.46234 14.1127 4.15369 12.5608C3.84504 11.009 4.00349 9.40047 4.60901 7.93868C5.21452 6.4769 6.2399 5.22749 7.55548 4.34846C8.87107 3.46943 10.4178 3.00024 12 3.00024C13.5822 3.00024 15.1289 3.46943 16.4445 4.34846C17.7601 5.22749 18.7855 6.4769 19.391 7.93868C19.9965 9.40047 20.155 11.009 19.8463 12.5608C19.5377 14.1127 18.7758 15.5381 17.657 16.657Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </>
                                }
                            />
                        </div>

                        <div data-aos="zoom-in" data-aos-delay="400" className="transition-all duration-300 hover:scale-[1.02] hover:-translate-y-1">
                            <InfoCard
                                title="Email"
                                description="lodigalang3@gmail.com"
                                path={
                                    <>
                                        <path d="M22 6C22 4.9 21.1 4 20 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6ZM20 6L12 11L4 6H20ZM20 18H4V8L12 13L20 8V18Z" fill="white" stroke="white" />
                                    </>
                                }
                            />
                        </div>

                    </div>

                </div>

            </div>

        </section>
    );
}

export default About;