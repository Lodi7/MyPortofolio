import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"

import logo from "../../assets/logo.svg"
import DownloadCvButton from "../Ui/DownloadCvButton"

function Navbar() {

  const [isOpen, setIsOpen] = useState(false)
  const [showNavbar, setShowNavbar] = useState(true)

  // LOCK SCROLL
  useEffect(() => {

    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }

    return () => {
      document.body.style.overflow = "auto"
    }

  }, [isOpen])

  // NAV LINKS
  const navLinks = [
    "Home",
    "About",
    "Skills",
    "Projects",
    "Contact"
  ]

  // HIDE NAVBAR
  useEffect(() => {

    let lastScrollY = window.scrollY

    const handleScroll = () => {

      if (isOpen) return

      if (
        window.scrollY > lastScrollY &&
        window.scrollY > 100
      ) {
        setShowNavbar(false)
      } else {
        setShowNavbar(true)
      }

      lastScrollY = window.scrollY
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }

  }, [isOpen])

  // SCROLL TO SECTION
  const handleScrollToSection = (sectionId) => {

    setIsOpen(false)

    setTimeout(() => {

      document
        .getElementById(sectionId)
        ?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        })

    }, 200)
  }

  return (

    <>

      {/* NAVBAR */}
      <nav data-aos="fade-down"
        className={`
                fixed
                top-0
                left-0
                w-full
                z-50
                transition-all
                duration-500
                will-change-transform

                ${showNavbar
            ? "translate-y-0"
            : "-translate-y-full"}
                `}
      >

        {/* GLASS NAVBAR */}
        <div
          className="
                    relative
                    flex
                    items-center
                    justify-between

                    mx-4
                    sm:mx-6
                    md:mx-10
                    xl:mx-20
                    mt-4

                    rounded-2xl
                    border border-[#1F2B3D]
                    bg-[#192433]/70
                    backdrop-blur-xl

                    px-5
                    sm:px-6
                    md:px-8
                    py-4

                    shadow-[0_0_40px_rgba(3,206,254,0.08)]
                    "
        >

          {/* GLOW */}
          <div className="absolute inset-0 rounded-2xl bg-linear-to-r from-cyan-400/5 to-blue-500/5"></div>

          {/* LOGO */}
          <figure
            className="
                        relative
                        z-50
                        group
                        cursor-pointer
                        shrink-0
                        "
          >

            <img
              src={logo}
              alt="Logo"
              className="
                            w-10
                            h-10
                            sm:w-11
                            sm:h-11
                            md:w-13
                            md:h-13
                            lg:w-14
                            lg:h-14
                            transition-all
                            duration-500
                            group-hover:scale-110
                            group-hover:rotate-6
                            "
            />

          </figure>

          {/* DESKTOP MENU */}
          <div
            className="
                        hidden
                        lg:flex
                        items-center
                        gap-8
                        xl:gap-12
                        relative
                        z-20
                        "
          >

            {/* LINKS */}
            <ul className="flex items-center gap-6 xl:gap-10 text-white">

              {navLinks.map((link, index) => (

                <li
                  key={index}
                  className="
                                    group
                                    relative
                                    cursor-pointer
                                    text-sm
                                    xl:text-base
                                    font-semibold
                                    transition-all
                                    duration-300
                                    hover:text-cyan-300
                                    hover:-translate-y-1
                                    "
                >

                  <button
                    onClick={() =>
                      handleScrollToSection(
                        link.toLowerCase()
                      )
                    }
                  >
                    {link}
                  </button>

                  {/* UNDERLINE */}
                  <span
                    className="
                                        absolute
                                        left-0
                                        -bottom-1
                                        w-0
                                        h-0.5
                                        bg-cyan-400
                                        transition-all
                                        duration-300
                                        group-hover:w-full
                                        "
                  ></span>

                </li>

              ))}

            </ul>

            {/* BUTTON */}
            <div
              className="
                            transition-all
                            duration-300
                            hover:scale-105
                            hover:-translate-y-1
                            "
            >
              <DownloadCvButton />
            </div>

          </div>

          {/* MOBILE TOGGLE */}
          <button
            onClick={() => setIsOpen(true)}
            className="
    lg:hidden
    relative
    z-50
    flex
    items-center
    justify-center
    text-white
    transition-all
    duration-300
    hover:scale-110
    hover:rotate-12
    "
          >
            <Menu size={28} />
          </button>

        </div>

      </nav>

      {/* MOBILE / TABLET MENU */}
      <div
        className={`
                fixed
                inset-0
                z-999
                lg:hidden
                transition-all
                duration-500

                ${isOpen
            ? "opacity-100 visible"
            : "opacity-0 invisible"}
                `}
      >

        {/* BACKDROP */}
        <div
          className="
                    absolute
                    inset-0
                    bg-black/70
                    backdrop-blur-xl
                    "
          onClick={() => setIsOpen(false)}
        ></div>

        {/* MENU CONTENT */}
        <div
          className={`
                    absolute
                    top-0
                    right-0
                    h-full

                    w-[80%]
                    sm:w-[65%]
                    md:w-[40%]

                    bg-[#101826]
                    border-l
                    border-[#1F2B3D]

                    shadow-[-10px_0_40px_rgba(3,206,254,0.08)]

                    flex
                    flex-col
                    justify-center
                    items-center
                    gap-8
                    md:gap-10

                    transition-all
                    duration-500
                    ease-out

                    ${isOpen
              ? "translate-x-0"
              : "translate-x-full"}
                    `}
        >

          {/* CLOSE BUTTON */}
          <button
            onClick={() => setIsOpen(false)}
            className="
        absolute
        top-6
        right-6

        flex
        items-center
        justify-center

        w-12
        h-12

        rounded-xl
        border
        border-[#1F2B3D]

        bg-[#192433]

        text-white

        transition-all
        duration-300

        hover:scale-110
        hover:rotate-90
        hover:text-cyan-300
        hover:border-cyan-400/50
        "
          >
            <X size={26} />
          </button>

          {/* LINKS */}
          <ul className="flex flex-col gap-8 items-center">

            {navLinks.map((link, index) => (

              <li
                key={index}
                className="
                                group
                                relative
                                cursor-pointer
                                text-white
                                text-base
                                sm:text-lg
                                md:text-xl
                                font-semibold
                                transition-all
                                duration-300
                                hover:text-cyan-300
                                hover:scale-110
                                hover:-translate-y-1
                                active:scale-95
                                "
              >

                <button
                  onClick={() =>
                    handleScrollToSection(
                      link.toLowerCase()
                    )
                  }
                >
                  {link}
                </button>

                {/* UNDERLINE */}
                <span
                  className="
                                    absolute
                                    left-0
                                    -bottom-1
                                    w-0
                                    h-0.5
                                    bg-cyan-400
                                    transition-all
                                    duration-300
                                    group-hover:w-full
                                    "
                ></span>

              </li>

            ))}

          </ul>

          {/* BUTTON */}
          <div
            className="
                        transition-all
                        duration-300
                        hover:scale-105
                        hover:-translate-y-1
                        "
          >
            <DownloadCvButton />
          </div>

        </div>

      </div>

    </>

  )
}

export default Navbar