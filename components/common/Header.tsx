"use client";

import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";

const headerContent: Record<
  string,
  { title: string; subtitle?: string; align: string; text: string }
> = {
  "/": {
    title: "We are Global Manufacturing Leader",
    subtitle:
      "As a leading global manufacturing company, we pride ourselves in setting industry standards through our commitment to producing high-quality products and providing innovative solutions to cater to the diverse needs of our customers.",
    align: "items-end",
    text: "text-right",
  },
  "/about-us": {
    title: "About Us",
    subtitle:
      "Welcome to Manufacturing Company, where quality meets innovation. With years of experience and a commitment to excellence, we specialize in providing top-notch manufacturing solutions tailored to meet the needs of our clients.",
    align: "items-start",
    text: "text-left",
  },
  "/services": {
    title: "Our Services",
    subtitle:
      "Our manufacturing company offers a wide range of services, including product design, prototyping, fabrication, and assembly. We have a team of skilled professionals who ensure top-quality manufacturing solutions for our clients.",
    align: "items-start",
    text: "text-left",
  },
  "/projects": {
    title: "Our Projects",
    subtitle:
      "Explore a showcase of the spaces we’ve proudly built — and a preview of what’s coming next. Every build tells a story of trust, quality, and purpose.",
    align: "items-start",
    text: "text-left",
  },
  "/contact-us": {
    title: "Contact Us",
    subtitle:
      "Explore a showcase of the spaces we’ve proudly built — and a preview of what’s coming next. Every build tells a story of trust, quality, and purpose.",
    align: "items-start",
    text: "text-left",
  },
}

export const nav = ["Home", "About Us", "Services", "Projects", "Contact Us"]

export function Header() {
  const pathname = usePathname()
  const router = useRouter()
  const content = headerContent[pathname] ?? headerContent["/"]
  const isHome = pathname === "/"

  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    }
    handleScroll()
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <header className="relative w-full h-screen">
      <div className="absolute inset-0 bg-linear-to-b from-[#0B1F4F] from-0% via-[#0B1F4F]/56 via-19% to-[#0B1F4F]/56 to-100%" />

      <div
        className={`
          fixed top-0 left-0 w-full z-50
          flex justify-between items-center px-5 py-1
          transition-all duration-300
          ${scrolled ? "bg-[#F5F5F5] shadow-md" : "bg-transparent"}
        `}
      >

        <div className="flex items-center">
          <div className="w-15 h-15">
            <img
              src="/assets/seclogo.png"
              alt="Logo"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="flex flex-col text-xs ml-2">
            <span
              className="font-bold transition-colors text-[#529FE3]">
              Satipipal Contracting and Electrical W.L.L.
            </span>
            <span
              className="text-2xs font-semibold transition-colors text-[#FE9A22]">
              ساتيبال للمقاولات والكهربائية ذ.م.م
            </span>
          </div>
        </div>

        <nav>
          <ul className="flex items-center space-x-10 text-xs font-semibold mr-5">
            {nav.map((item) => {
              const href =
                item === "Home"
                  ? "/"
                  : `/${item.toLowerCase().replace(" ", "-")}`

              const isActive = pathname === href

              return (
                <li key={item}>
                    <a
                    href={href}
                    className={`
                        relative group transition-colors duration-200

                        ${
                        isActive
                            ? "text-[#FE9921]"
                            : scrolled
                            ? "text-black"
                            : "text-white"
                        }

                        hover:text-[#FE9921]
                    `}
                    >
                    {item}

                    {/* underline */}
                    <span
                        className={`
                        absolute left-0 -bottom-1 h-0.5 bg-[#FE9921]
                        w-full origin-left transition-transform duration-300

                        ${
                            isActive
                            ? "scale-x-100"
                            : "scale-x-0 group-hover:scale-x-100"
                        }
                        `}
                    />
                    </a>
                </li>
              )
            })}
          </ul>
        </nav>
      </div>

      <div
        className={`relative z-10 w-full h-full flex flex-col justify-center space-y-5 ${
          content.text
        } ${content.align}`}
      >
        <h1 className="text-3xl font-extrabold text-[#dfdddd] mx-10 w-100">
          {content.title}
        </h1>
        <p className="text-lg text-[#dfdddd] mx-10 w-200">
          {content.subtitle}
        </p>

        {isHome && (
          <button onClick={() => router.push("/contact-us")} className="px-4 py-2 bg-[#FE9921] rounded-2xl mx-10 cursor-pointer">
            <span className="font-semibold text-white">Get in Touch</span>
          </button>
        )}
      </div>
    </header>
  )
}