function DownloadCvButton() {
    return (
        <a
            href="/cv.pdf"
            download="cv.pdf"
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
            border
            border-[#03CEFE]
            bg-[#03CEFE]/5
            backdrop-blur-md

            text-sm
            sm:text-base

            text-white
            font-semibold
            tracking-wide

            transition-all
            duration-500
            hover:scale-105
            hover:-translate-y-0.5
            hover:shadow-[0_0_35px_rgba(3,206,254,0.45)]
            hover:rotate-4
            "
        >

            {/* Animated Glow Background */}
            <div
                className="
                absolute
                inset-0
                bg-linear-to-r
                from-[#03CEFE]
                via-cyan-400
                to-[#03CEFE]
                opacity-0
                group-hover:opacity-100
                transition-all
                duration-500
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
                group-hover:scale-110
                group-hover:rotate-2
                group-hover:text-black
                "
            >
                Download CV
            </span>

            {/* Icon */}
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
                transition-all
                duration-500
                group-hover:rotate-4
                group-hover:translate-y-1
                group-hover:scale-115
                group-hover:text-black
                "
            >
                <path
                    d="M21.375 13.5V19.5C21.375 19.7984 21.2565 20.0845 21.0455 20.2955C20.8345 20.5065 20.5484 20.625 20.25 20.625H3.75C3.45163 20.625 3.16548 20.5065 2.9545 20.2955C2.74353 20.0845 2.625 19.7984 2.625 19.5V13.5C2.625 13.2016 2.74353 12.9155 2.9545 12.7045C3.16548 12.4935 3.45163 12.375 3.75 12.375C4.04837 12.375 4.33452 12.4935 4.5455 12.7045C4.75647 12.9155 4.875 13.2016 4.875 13.5V18.375H19.125V13.5C19.125 13.2016 19.2435 12.9155 19.4545 12.7045C19.6655 12.4935 19.9516 12.375 20.25 12.375C20.5484 12.375 20.8345 12.4935 21.0455 12.7045C21.2565 12.9155 21.375 13.2016 21.375 13.5ZM11.2041 14.2959C11.3086 14.4008 11.4328 14.484 11.5695 14.5408C11.7063 14.5976 11.8529 14.6268 12.0009 14.6268C12.149 14.6268 12.2956 14.5976 12.4324 14.5408C12.5691 14.484 12.6933 14.4008 12.7978 14.2959L16.5478 10.5459C16.7592 10.3346 16.8779 10.0479 16.8779 9.74906C16.8779 9.45018 16.7592 9.16353 16.5478 8.95219C16.3365 8.74084 16.0498 8.62211 15.7509 8.62211C15.4521 8.62211 15.1654 8.74084 14.9541 8.95219L13.125 10.7812V3C13.125 2.70163 13.0065 2.41548 12.7955 2.2045C12.5845 1.99353 12.2984 1.875 12 1.875C11.7016 1.875 11.4155 1.99353 11.2045 2.2045C10.9935 2.41548 10.875 2.70163 10.875 3V10.7812L9.04594 8.95406C8.94129 8.84942 8.81706 8.7664 8.68033 8.70977C8.5436 8.65314 8.39706 8.62399 8.24906 8.62399C7.95018 8.62399 7.66353 8.74272 7.45219 8.95406C7.34754 9.05871 7.26453 9.18294 7.2079 9.31967C7.15126 9.4564 7.12211 9.60294 7.12211 9.75094C7.12211 10.0498 7.24084 10.3365 7.45219 10.5478L11.2041 14.2959Z"
                    fill="currentColor"
                />
            </svg>

        </a>
    );
}

export default DownloadCvButton;