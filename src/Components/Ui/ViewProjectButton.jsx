import { Link } from "react-router-dom"

function ViewProjectButton() {
    return (
        <Link
            to="/projects"
            className="
            group
            relative
            overflow-hidden

            flex
            justify-center
            items-center

            gap-2.5
            sm:gap-3

            px-5
            py-3.5
            sm:px-6
            sm:py-4

            w-48
            h-12
            sm:w-52
            sm:h-14

            rounded-2xl
            bg-[#03CEFE]
            border
            border-transparent

            text-white
            text-sm
            sm:text-base

            font-semibold
            tracking-wide

            transition-all
            duration-500
            hover:scale-105
            hover:-translate-y-1
            hover:shadow-[0_0_35px_rgba(3,206,254,0.45)]
            "
        >

            {/* Gradient Hover Background */}
            <div
                className="
                absolute
                inset-0
                opacity-0
                group-hover:opacity-100
                transition-all
                duration-500
                bg-linear-to-r
                from-cyan-300
                via-cyan-400
                to-blue-400
                "
            />

            {/* Shine Effect */}
            <div
                className="
                absolute
                top-0
                -left-full
                w-1/2
                h-full
                bg-white/20
                skew-x-12
                group-hover:left-[150%]
                transition-all
                duration-1000
                "
            />

            {/* Text */}
            <span
                className="
                relative
                z-10
                transition-all
                duration-300
                group-hover:text-black
                "
            >
                Lihat Project
            </span>

            {/* Arrow Icon */}
            <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="
                relative
                z-10

                w-5
                h-5
                sm:w-6
                sm:h-6

                text-white
                transition-all
                duration-500
                group-hover:text-black
                group-hover:scale-110
                "
            >
                <path
                    d="M19 12L5 12"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />

                <path
                    d="M13 18L19 12"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />

                <path
                    d="M13 6L19 12"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </svg>

        </Link>
    )
}

export default ViewProjectButton