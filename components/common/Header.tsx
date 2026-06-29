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
      "Explore a showcase of the spaces we've proudly built — and a preview of what's coming next. Every build tells a story of trust, quality, and purpose.",
    align: "items-start",
    text: "text-left",
  },
  "/contact-us": {
    title: "Contact Us",
    subtitle:
      "Explore a showcase of the spaces we've proudly built — and a preview of what's coming next. Every build tells a story of trust, quality, and purpose.",
    align: "items-start",
    text: "text-left",
  },
};

export const nav = ["Home", "About Us", "Services", "Projects", "Contact Us"];

export function Header() {
  const pathname = usePathname();
  const router = useRouter();
  const content = headerContent[pathname] ?? headerContent["/"];
  const isHome = pathname === "/";

  const headerHeight = isHome
    ? "h-[60vh] sm:h-[70vh] md:h-[80vh] lg:h-[90vh]"
    : "h-[40vh] sm:h-[50vh] md:h-[60vh] lg:h-[80vh]";

  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header className={`relative w-full ${headerHeight}`}>
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-linear-to-b from-[#0B1F4F] from-0% via-[#0B1F4F]/75 via-19% to-[#0B1F4F]/75 to-100%" />

      {/* Navbar */}
      <div
        className={`
          fixed top-0 left-0 w-full z-50
          transition-all duration-300
          ${scrolled ? "bg-[#F5F5F5] shadow-md" : "bg-transparent"}
        `}
      >
        <div className="flex justify-between items-center px-4 sm:px-6 py-2">
          {/* Logo */}
          <div className="flex items-center min-w-0">
            <div className="w-12 h-12 sm:w-14 sm:h-14 shrink-0">
              <img
                src="/assets/seclogo.png"
                alt="Logo"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col ml-2 min-w-0">
              <span className="font-bold text-[10px] sm:text-xs text-[#529FE3] leading-tight truncate max-w-40 sm:max-w-none">
                Satipipal Contracting and Electrical W.L.L.
              </span>
              <span className="font-semibold text-[9px] sm:text-[10px] text-[#FE9A22] leading-tight truncate max-w-40 sm:max-w-none">
                ساتيبال للمقاولات والكهربائية ذ.م.م
              </span>
            </div>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden lg:block">
            <ul className="flex items-center space-x-8 xl:space-x-10 text-xs font-semibold mr-4">
              {nav.map((item) => {
                const href =
                  item === "Home"
                    ? "/"
                    : `/${item.toLowerCase().replace(" ", "-")}`;
                const isActive = pathname === href;

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
                      <span
                        className={`
                          absolute left-0 -bottom-1 h-0.5 bg-[#FE9921]
                          w-full origin-left transition-transform duration-300
                          ${isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"}
                        `}
                      />
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Hamburger Button */}
          <button
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            className={`
              lg:hidden flex flex-col justify-center items-center w-9 h-9 gap-1.5
              rounded-md transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FE9921]
              ${scrolled ? "text-black" : "text-white"}
            `}
          >
            <span
              className={`block w-5 h-0.5 rounded-full transition-all duration-300 origin-center bg-current
                ${menuOpen ? "rotate-45 translate-y-2" : ""}`}
            />
            <span
              className={`block w-5 h-0.5 rounded-full transition-all duration-300 bg-current
                ${menuOpen ? "opacity-0 scale-x-0" : ""}`}
            />
            <span
              className={`block w-5 h-0.5 rounded-full transition-all duration-300 origin-center bg-current
                ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}
            />
          </button>
        </div>
      </div>

      {/* Backdrop */}
      <div
        onClick={() => setMenuOpen(false)}
        className={`
          fixed inset-0 z-40 bg-black/50 lg:hidden
          transition-opacity duration-300
          ${menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}
        `}
      />

      {/* Right Drawer */}
      <div
        className={`
          fixed top-0 right-0 z-50 h-full w-full bg-[#0F172A] lg:hidden
          flex flex-col
          transition-transform duration-300 ease-in-out
          ${menuOpen ? "translate-x-0" : "translate-x-full"}
        `}
      >
        {/* Drawer Header */}
        <div className="flex justify-between items-center px-6 py-4 border-b border-white/10">
          <span className="text-white font-bold text-sm">Menu</span>
          <button
            onClick={() => setMenuOpen(false)}
            aria-label="Close menu"
            className="text-white hover:text-[#FE9921] transition-colors duration-200 focus:outline-none"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Drawer Nav Links */}
        <ul className="flex flex-col px-6 pt-4 space-y-1">
          {nav.map((item) => {
            const href =
              item === "Home"
                ? "/"
                : `/${item.toLowerCase().replace(" ", "-")}`;
            const isActive = pathname === href;

            return (
              <li key={item}>
                <a
                  href={href}
                  onClick={() => setMenuOpen(false)}
                  className={`
                    block py-3 px-2 text-sm font-semibold rounded-md
                    transition-colors duration-200 border-b border-white/10
                    ${isActive ? "text-[#FE9921]" : "text-white hover:text-[#FE9921]"}
                  `}
                >
                  {item}
                </a>
              </li>
            );
          })}
        </ul>
      </div>

      {/* Hero Content */}
      <div
        className={`relative z-10 w-full h-full flex flex-col justify-center space-y-4 sm:space-y-5 px-6 sm:px-10 ${content.text} ${content.align}`}
      >
        <h1
          className={`
            text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#dfdddd]
            w-full sm:w-80 md:w-100
            ${isHome ? "sm:ml-0" : ""}
          `}
        >
          {content.title}
        </h1>
        <p
          className={`
            text-base sm:text-lg text-[#dfdddd]
            w-full sm:w-full md:w-160 lg:w-200
          `}
        >
          {content.subtitle}
        </p>

        {isHome && (
          <div>
            <button
              onClick={() => router.push("/contact-us")}
              className="px-5 py-2.5 bg-[#FE9921] border-2 border-[#FE9921] hover:bg-transparent hover:text-[#FE9921] rounded-2xl cursor-pointer transition-colors duration-200 group"
            >
              <span className="font-semibold text-white group-hover:text-[#FE9921] transition-colors duration-200">
                Get in Touch
              </span>
            </button>
          </div>
        )}
      </div>
    </header>
  );
}
