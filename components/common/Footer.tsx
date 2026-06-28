import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaXTwitter,
} from "react-icons/fa6";
import { FiPhone } from "react-icons/fi";
import { GoMail } from "react-icons/go";
import { MdLocationPin } from "react-icons/md";

export const socialIcons = [
  { icon: <FaFacebook />, link: "https://www.facebook.com/satipipal" },
  { icon: <FaXTwitter />, link: "https://www.twitter.com/satipipal" },
  { icon: <FaInstagram />, link: "https://www.instagram.com/satipipal" },
  { icon: <FaLinkedin />, link: "https://www.linkedin.com/company/satipipal" },
];

export const quickLinks = [
  { name: "Privacy Policy", link: "/privacy-policy" },
  { name: "Terms of Service", link: "/terms-of-service" },
  { name: "Credits", link: "/credits" },
  { name: "FAQs", link: "/faqs" },
];

export const services = [
  { name: "Construction", link: "/services/construction" },
  { name: "Electrical Work", link: "/services/electrical-work" },
  { name: "Maintenance", link: "/services/maintenance" },
  { name: "Consultation", link: "/services/consultation" },
];

export const contactInfo = [
  { text: "+123 456 7890", icon: <FiPhone /> },
  { text: "info@satipipal.com", icon: <GoMail /> },
  { text: "123 Main Street, City, Country", icon: <MdLocationPin /> },
];

export function Footer() {
  return (
    <footer className="bg-[#0F172A] text-white px-6 py-12 md:px-10 lg:px-20">
      {/* Main grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

        {/* Column 1 — Brand */}
        <div className="text-center md:text-left sm:col-span-2 lg:col-span-1 flex flex-col items-center md:items-start">
          <img
            src="/assets/seclogo.png"
            alt="Logo"
            className="w-14 h-14 object-cover mb-4"
          />

          <h2 className="text-xl font-bold mb-4">About Us</h2>

          <p className="text-gray-300 text-sm leading-relaxed max-w-xs">
            We are a leading contracting and electrical company dedicated to
            providing high-quality services to our clients.
          </p>

          {/* Social icons */}
          <div className="flex items-center justify-center md:justify-start gap-4 mt-6">
            {socialIcons.map((item, index) => (
              <a
                key={index}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white text-2xl hover:text-blue-400 transition"
              >
                {item.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Column 2 — Quick Links */}
        <div className="text-center md:text-left">
          <h2 className="text-xl font-bold mb-6">Quick Links</h2>
          <ul className="space-y-4">
            {quickLinks.map((item, index) => (
              <li key={index}>
                <a className="text-gray-300 hover:text-[#5092F6] text-sm">
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3 — Services */}
        <div className="text-center md:text-left">
          <h2 className="text-xl font-bold mb-6">Our Services</h2>
          <ul className="space-y-4">
            {services.map((item, index) => (
              <li key={index}>
                <a className="text-gray-300 hover:text-[#5092F6] text-sm">
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 4 — Contact */}
        <div className="text-center md:text-left">
          <h2 className="text-xl font-bold mb-6">Contact Us</h2>

          <div className="space-y-4">
            {contactInfo.map((item, index) => (
              <div
                key={index}
                className="flex items-center md:items-start gap-3 justify-center md:justify-start"
              >
                <span className="text-white text-lg">{item.icon}</span>
                <span className="text-gray-300 text-sm">
                  {item.text}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="text-center text-xs sm:text-sm text-gray-400 mt-12 pt-5 border-t border-[#334155]">
        &copy; {new Date().getFullYear()} Satipipal Contracting and Electrical WLL.
        All rights reserved.
      </div>
    </footer>
  );
}