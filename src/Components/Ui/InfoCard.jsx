function InfoCard({ title, description, path }) {
    return (
        <div
            className="
            group
            relative
            overflow-hidden

            bg-[#1F2B3D]

            flex
            flex-row
            items-center

            gap-3
            md:gap-5

            rounded-2xl

            border
            border-[#282B30]

            px-4
            py-2.5
            md:px-5

            w-full
            min-w-fit

            transition-all
            duration-500
            hover:-translate-y-1
            hover:scale-[1.02]
            hover:border-cyan-400/40
            hover:shadow-[0_0_30px_rgba(3,206,254,0.15)]
            "
        >

            {/* Glow */}
            <div
                className="
                absolute
                inset-0
                opacity-0
                bg-linear-to-r
                from-cyan-400/5
                via-blue-500/5
                to-cyan-400/5
                transition-all
                duration-500
                group-hover:opacity-100
                "
            />

            {/* Icon */}
            <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="xMidYMid meet"
                className="
                relative
                z-10

                w-5
                h-5
                md:w-6
                md:h-6

                shrink-0

                transition-all
                duration-500
                group-hover:scale-110
                "
            >
                {path}
            </svg>

            {/* Content */}
            <div
                className="
                relative
                z-10
                flex
                flex-col
                gap-0.5
                min-w-0
                "
            >

                <p
                    className="
                    text-gray-400
                    text-xs
                    md:text-sm

                    transition-all
                    duration-300
                    group-hover:text-cyan-300
                    "
                >
                    {title}
                </p>

                <p
                    className="
                    text-white
                    text-sm
                    md:text-base
                    font-medium
                    wrap-break-word
                    transition-all
                    duration-300
                    group-hover:text-white
                    "
                >
                    {description}
                </p>

            </div>

        </div>
    );
}

export default InfoCard;