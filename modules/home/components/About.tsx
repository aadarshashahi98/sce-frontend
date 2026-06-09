import { FaCheckCircle } from "react-icons/fa";

export function About() {
    return (
        <section className="flex justify-between bg-[#F5F5F5] p-10 pb-0 gap-10 pt-50 h-230">
            <div className="space-y-5 ml-10 mt-10">
                <h3>About Us</h3>
                <h2 className="text-3xl font-bold w-90">Trusted Local Construction Partner in Qatar</h2>
                <p className="w-120">At Brikly, we are proud to serve Austin with reliable, high-quality construction services. From custom homes to commercial builds, our local expertise ensures every project is done right. We build with integrity, craftsmanship, and a commitment to your vision.</p>
                <ul className="ml-10 flex flex-col gap-3">{["150+ Projects", "Licensed & ISO Certified", "Experienced Team"].map((item, index) => (
                    <li key={index} className="flex items-center space-x-4"><i><FaCheckCircle /></i><span>{item}</span></li>
                ))}</ul>
            </div>
            <div>
                <div className="w-140 h-140 rounded-[70px]">
                    <img className="w-full h-full object-cover rounded-[70px]" src="/assets/heroimage.png" alt="About Us Image" />
                </div>
                <div className="w-70 h-70">
                    <img className="w-full h-full object-cover rounded-[70px] transform -translate-y-50 -translate-x-20" src="/assets/about.png" alt="About Us Image" />
                </div>
            </div>
        </section>
    )
}