import { FaFacebook, FaInstagram, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import { FiPhone } from "react-icons/fi";
import { GoMail } from "react-icons/go";
import { MdLocationPin } from "react-icons/md";

export const socialIcons = [
    { icon: <FaFacebook />, link: "https://www.facebook.com/satipipal" },
    { icon: <FaXTwitter />, link: "https://www.twitter.com/satipipal" },
    { icon: <FaInstagram />, link: "https://www.instagram.com/satipipal" },
    { icon: <FaLinkedin />, link: "https://www.linkedin.com/company/satipipal" }
];

export const quickLinks = [
    { name: "Privacy Policy", link: "/privacy-policy" },
    { name: "Terms of Service", link: "/terms-of-service" },
    { name: "Credits", link: "/credits" },
    { name: "FAQs", link: "/faqs" }
];

export const services = [
    { name: "Construction", link: "/services/construction" },
    { name: "Electrical Work", link: "/services/electrical-work" },
    { name: "Maintenance", link: "/services/maintenance" },
    { name: "Consultation", link: "/services/consultation" }
];

export const contactInfo = [
    { text: "+123 456 7890",icon: <FiPhone /> },
    { text: "info@satipipal.com", icon: <GoMail /> },
    { text: "123 Main Street, City, Country", icon: <MdLocationPin /> }];

export function Footer() {

    const createIcons = () => {
        return(
            <div className="flex items-center mt-10">
                {socialIcons.map((item, index) => (
                    <a key={index} href={item.link} className="text-white text-2xl hover:text-blue-500 mr-4">
                        {item.icon}
                    </a>
                ))}
            </div>
        )
    }

    const createTitle = (title: string) => {
        return (
            <h2 className="text-xl font-bold mb-6">{title}</h2>
        );
    }

    const createLists = (title: string, array: any[]) => {
        return (
            <div>
                {createTitle(title)}
                <ul className="space-y-4">
                    {array.map((item, index) => (
                        <li key={index}>
                            <a href={item.link} target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#5092F6]">
                                {item.name}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        );
    }

    const createContactInfo = (title: string, contact: any[]) => {
        return (
            <div>
                {createTitle(title)}
                {contact.map((item, index) => (
                    <div key={index} className="flex items-center gap-3 mb-4">
                        <span className="text-white text-xl mr-2">{item.icon}</span>
                        <span className="text-white">{item.text}</span>
                    </div>
                ))}
            </div>
        )
    }

    return (
        <footer className="bg-gray-800 text-white p-10 py-15 pb-6">
            <div className="flex justify-between space-x-1">
                <div>
                    <div>
                        <img src="/assets/seclogo.png" alt="Satipipal Contracting and Electrical W.L.L. Logo" className="w-16 h-16 object-cover"/>
                    </div>
                    <div>
                        {createTitle("About Us")}
                        <p className="w-100">We are a leading contracting and electrical company dedicated to providing high-quality services to our clients.</p>
                    </div>
                    <div>
                        {createIcons()}
                    </div>
                </div>
                <div>
                    {createLists("Quick Links", quickLinks)}
                </div>
                <div>
                    {createLists("Our Services", services)}
                </div>
                <div>
                    {createContactInfo("Contact Us", contactInfo)}
                </div>
            </div>
            <div className="container px-4 text-center text-sm mt-15 pt-5 border-t border-t-[#99B1EB]">
                &copy; {new Date().getFullYear()} Satipipal Contracting and Electrical WLL, ساتيبال للمقاولات والكهربائية ذ.م.م. All rights reserved.
            </div>
        </footer>
  );
}