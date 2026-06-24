import { useEffect, useState } from "react";

function LoadingScreen({ onFinish }) {
    const greetings = [
        "Hello World",            // English
        "Halo Dunia",             // Indonesia
        "Bonjour le Monde",       // French
        "Hola Mundo",             // Spanish
        "Hallo Welt",             // German
        "Ciao Mondo",             // Italian
        "Olá Mundo",              // Portuguese
        "Привет Мир",             // Russian
        "Witaj Świecie",          // Polish
        "Merhaba Dünya",          // Turkish
        "Salam Dunia",            // Malay
        "Hej Världen",            // Swedish
        "Ahoj Světe",             // Czech
        "Pozdravljen Svet",       // Slovenian
        "Helló Világ",            // Hungarian
        "Γειά σου Κόσμε",         // Greek
        "שלום עולם",              // Hebrew
        "مرحبا بالعالم",          // Arabic
        "नमस्ते दुनिया",          // Hindi
        "హలో వరల్డ్",            // Telugu
        "你好，世界",             // Chinese Simplified
        "こんにちは世界",         // Japanese
        "안녕하세요 세계",         // Korean
        "Xin chào Thế giới",      // Vietnamese
        "สวัสดีชาวโลก",          // Thai
        "Kamusta Mundo",          // Filipino
        "Sawubona Mhlaba",        // Zulu
        "Habari Dunia",           // Swahili
    ];

    const [index, setIndex] = useState(0);
    const [progress, setProgress] = useState(0);
    const [glitch, setGlitch] = useState(false);
    const [finalMode, setFinalMode] = useState(false);

    const TOTAL_DURATION = 5000;
    const FINAL_PHASE = 500;

    useEffect(() => {
        const greetingDuration =
            TOTAL_DURATION - FINAL_PHASE;

        const greetingInterval =
            greetingDuration / greetings.length;

        let currentIndex = 0;

        const interval = setInterval(() => {
            setGlitch(true);

            setTimeout(() => {
                setGlitch(false);

                currentIndex++;

                if (currentIndex < greetings.length) {
                    setIndex(currentIndex);
                }
            }, 80);
        }, greetingInterval);

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) {
                    clearInterval(interval);
                    return 100;
                }

                return prev + 1;
            });
        }, TOTAL_DURATION / 100);

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        if (progress >= 98) {
            setFinalMode(true);
        }
    }, [progress]);

    useEffect(() => {
        if (progress === 100) {

            const timer = setTimeout(() => {
                onFinish?.();
            }, 1200);

            return () => clearTimeout(timer);
        }
    }, [progress, onFinish]);
    return (
        <div
            className="
            fixed
            inset-0
            z-99999
            bg-[#050A16]
            flex
            items-center
            justify-center
            overflow-hidden
            font-mono
            "
        >
            {/* CRT Scanline */}
            <div
                className="
                absolute
                inset-0
                pointer-events-none
                opacity-20
                "
                style={{
                    background:
                        "repeating-linear-gradient(0deg, transparent 0px, transparent 2px, rgba(255,255,255,.04) 3px)"
                }}
            />

            {/* Glow */}
            <div className="absolute top-0 left-0 w-55 h-55

sm:w-75
sm:h-75

md:w-125
md:h-125 bg-cyan-400/10 blur-3xl rounded-full" />
            <div className="absolute bottom-0 right-0 w-55
h-55

sm:w-75
sm:h-75

md:w-125
md:h-125 bg-blue-500/10 blur-3xl rounded-full" />

            {/* Top Status */}
            <div className="absolute top-4 left-4 md:top-8 md:left-8 text-[#03CEFE] text-xs md:text-sm tracking-widest">
                SYSTEM INITIALIZING...
            </div>

            <div className="absolute top-4 right-4 md:top-8 md:right-8  flex items-center gap-2 text-[#03CEFE] text-[10px] sm:text-xs md:text-sm">
                Connected
                <div className="w-3 h-3 rounded-full bg-cyan-400 animate-pulse" />
            </div>

            <div
                className="
    relative
    flex
    flex-col
    items-center

    gap-6
    md:gap-8

    w-full

    px-4
    sm:px-6
    "
            >
                {/* Frame */}
                <div className="relative flex justify-center items-center w-full">

                    <div className="text-center flex flex-col gap-5">

                        <p
                            className="
    text-[#03CEFE]

    text-[10px]
    sm:text-xs
    md:text-sm

    tracking-[2px]
    md:tracking-[3px]
    "
                        >
                            // SAYING HELLO TO THE WORLD
                        </p>

                        <h1
                            className={`
    text-xl
    sm:text-3xl
    md:text-5xl
    lg:text-7xl
    xl:text-8xl
    leading-tight
    max-w-full                            
    font-black
    text-[#BDE0FF]

    transition-all
    duration-200

    wrap-break-word
    px-2

    ${glitch ? "tv-glitch" : ""}
    ${finalMode ? "scale-110" : ""}
    `}
                        >
                            {finalMode
                                ? "HELLO WORLD"
                                : greetings[index]}
                        </h1>

                        <p className="mt-5 text-gray-300 text-xs sm:text-sm md:text-base">
                            Selamat datang! Website portofolio sedang dimuat.
                        </p>

                    </div>

                </div>

                {/* Indicator */}
                <div className="flex gap-1.5 md:gap-3">
                    {[...Array(12)].map((_, i) => (
                        <div
                            key={i}
                            className={`
                            w-2
                            h-2    
                            md:w-3
                            md:h-3
                            rounded-full
                            transition-all
                            duration-300

                            ${i <= Math.floor(progress / 8.5)
                                    ? "bg-cyan-300"
                                    : "bg-white/80"
                                }
                            `}
                        />
                    ))}
                </div>

                {/* Progress */}
                <div
                    className="
                    w-[96vw]
    sm:w-[94vw]
    max-w-350

    bg-[#101826]
    border
    border-[#1F2B3D]

    rounded-md

    px-3
    sm:px-5
    md:px-8
    lg:px-12

    py-3
    md:py-4

    shadow-[0_0_30px_rgba(3,206,254,0.05)]
    "
                >
                    <p
                        className="
        text-[#03CEFE]
        mb-3

        text-[10px]
        sm:text-xs
        md:text-sm

        tracking-widest
        "
                    >
                        Loading Portfolio...
                    </p>

                    <div className="flex items-center gap-2 sm:gap-4">
                        {/* Mobile */}
                        <div className="flex-1 flex gap-0.5 md:hidden">
                            {[...Array(30)].map((_, i) => {
                                const active = i < Math.floor((progress / 100) * 30);

                                return (
                                    <div
                                        key={i}
                                        className="h-2 flex-1 rounded-[1px]"
                                        style={{
                                            background: active
                                                ? `hsl(${190 + (i * 35 / 30)}, 100%, 60%)`
                                                : "#162338",
                                        }}
                                    />
                                );
                            })}
                        </div>

                        {/* Desktop */}
                        <div className="hidden flex-1 md:flex gap-0.5">
                            {[...Array(100)].map((_, i) => {
                                const active = i < progress;

                                return (
                                    <div
                                        key={i}
                                        className="
                        h-2
                        md:h-3

                        flex-1

                        rounded-[1px]

                        transition-all
                        duration-100
                        "
                                        style={{
                                            background: active
                                                ? `hsl(${190 + (i * 35 / 100)}, 100%, 60%)`
                                                : "#162338",

                                            boxShadow: active
                                                ? "0 0 4px rgba(3,206,254,.4)"
                                                : "none",
                                        }}
                                    />
                                );
                            })}
                        </div>

                        <span
                            className="
            text-[#BDE0FF]

            text-xs
            sm:text-base
            md:text-2xl

            font-bold

            min-w-11.25
            sm:min-w-15
            md:min-w-17.5

            text-right
            "
                        >
                            {progress}%
                        </span>

                    </div>
                </div>

            </div>
        </div>
    );
}

export default LoadingScreen;