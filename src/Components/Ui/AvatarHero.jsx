function AvatarHero({ src }) {
    return (
        <div className="hidden xl:flex items-center justify-center">
            <div className="relative group">

                {/* Animated Border */}
                <div
                    className="
                    absolute
                    -top-4
                    -left-4
                    w-full
                    h-full
                    rounded-4xl
                    border
                    border-cyan-400/20
                    overflow-hidden
                    "
                >

                    {/* TOP */}
                    <div
                        className="
                        absolute
                        top-0
                        left-[-30%]
                        h-0.5
                        w-24
                        bg-linear-to-r
                        from-transparent
                        via-cyan-300/80
                        to-transparent
                        blur-[1px]
                        animate-traceTop
                        "
                    />

                    {/* RIGHT */}
                    <div
                        className="
                        absolute
                        top-[-30%]
                        right-0
                        w-0.5
                        h-24
                        bg-linear-to-b
                        from-transparent
                        via-cyan-300/80
                        to-transparent
                        blur-[1px]
                        animate-traceRight
                        "
                    />

                    {/* BOTTOM */}
                    <div
                        className="
                        absolute
                        bottom-0
                        right-[-30%]
                        h-0.5
                        w-24
                        bg-linear-to-l
                        from-transparent
                        via-cyan-300/80
                        to-transparent
                        blur-[1px]
                        animate-traceBottom
                        "
                    />

                    {/* LEFT */}
                    <div
                        className="
                        absolute
                        bottom-[-30%]
                        left-0
                        w-0.5
                        h-24
                        bg-linear-to-t
                        from-transparent
                        via-cyan-300/80
                        to-transparent
                        blur-[1px]
                        animate-traceLeft
                        "
                    />

                </div>

                {/* Background Border */}
                <div
                    className="
                    absolute
                    top-4
                    left-4
                    w-full
                    h-full
                    rounded-4xl
                    border
                    border-cyan-400/10
                    transition-all
                    duration-500
                    group-hover:translate-x-2
                    group-hover:translate-y-2
                    "
                />

                {/* Glow */}
                <div
                    className="
                    absolute
                    inset-0
                    bg-cyan-400/10
                    blur-3xl
                    scale-110
                    rounded-4xl
                    "
                />

                {/* Main Card */}
                <div
                    className="
                    relative
                    w-95
                    h-125
                    rounded-4xl
                    overflow-hidden
                    border
                    border-[#1F2B3D]
                    bg-[#101826]
                    shadow-[0_0_40px_rgba(3,206,254,0.08)]
                    "
                >

                    <img
                        src={src}
                        alt="Profile"
                        className="
                        w-full
                        h-full
                        object-cover
                        transition-all
                        duration-700
                        group-hover:scale-105
                        "
                    />

                    <div
                        className="
                        absolute
                        inset-0
                        bg-linear-to-t
                        from-[#101826]
                        via-transparent
                        to-transparent
                        "
                    />

                    <div
                        className="
    absolute
    bottom-0
    left-0
    right-0
    p-7
    "
                    >
                        <p
                            className="
        text-cyan-300
        text-sm
        font-medium
        tracking-wide
        "
                        >
                            Informatics Student
                        </p>

                        <h3
                            className="
        text-white
        text-4xl
        font-bold
        leading-tight
        mt-1
        "
                        >
                            Lodi Galang
                        </h3>
                    </div>

                </div>

            </div>
        </div>
    );
}

export default AvatarHero;