import { FaCheckCircle } from "react-icons/fa";

export function About() {
    return (
        <section className="flex justify-between bg-[#F5F5F5] p-10 gap-10">
            <div className="space-y-5">
                <h3>About Us</h3>
                <h2 className="text-3xl font-bold">Trusted Local Construction Partner in Qatar</h2>
                <p>At Brikly, we are proud to serve Austin with reliable, high-quality construction services. From custom homes to commercial builds, our local expertise ensures every project is done right. We build with integrity, craftsmanship, and a commitment to your vision.</p>
                <ul className="ml-10">{["150+ Projects", "Licensed & ISO Certified", "Experienced Team"].map((item) => (
                    <li className="flex items-center space-x-4"><i><FaCheckCircle /></i><span>{item}</span></li>
                ))}</ul>
            </div>
            <div>
                <div className="w-[50%] h-[50%] rounded-[70px]">
                    <img className="w-full h-full object-cover rounded-[70px]" src="/assets/heroimage.png" alt="About Us Image" />
                </div>
                <div className="w-97.25 h-102.75">
                    <img className="w-full h-full object-cover rounded-[70px] transform -translate-y-50 -translate-x-50" src="/assets/about.png" alt="About Us Image" />
                </div>
            </div>
        </section>
    )
}