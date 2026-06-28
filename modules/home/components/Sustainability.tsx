"use client"
import { FaRecycle } from "react-icons/fa6"
import { FiMonitor } from "react-icons/fi"
import { MdAccessTimeFilled, MdDesignServices } from "react-icons/md"
import { useRouter } from "next/navigation";

export const sustainabilityList = [
    { icon: <FaRecycle />, name: "Sustainablility" },
    { icon: <MdAccessTimeFilled />, name: "Project On Time" },
    { icon: <FiMonitor />, name: "Modern Technology" },
    { icon: <MdDesignServices />, name: "Latest Design" }
]

export function Sustainability() {

    const router = useRouter()

    return (
        <section className="flex flex-col md:flex-row w-full">
            {/* Left panel */}
            <div className="sustainability-left bg-cover bg-center bg-no-repeat h-72 sm:h-96 md:h-120 w-full md:w-[50%]">
                <div className="bg-[#0E183E]/47 p-6 sm:p-8 lg:p-10 space-y-4 lg:space-y-5 h-full flex flex-col justify-center text-white">
                    <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold">Sustainability</h3>
                    <h2 className="text-2xl sm:text-3xl font-bold max-w-xs sm:max-w-sm lg:w-90">Committed To Keep People Healthy & Safe</h2>
                    <p className="text-sm sm:text-base">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque in ipsum id orci porta dapibus.</p>
                    <div>
                        <button
                            onClick={() => router.push("/contact-us")}
                            className="bg-[#FE9921] text-base sm:text-lg lg:text-xl font-bold text-white px-4 py-2 rounded-2xl cursor-pointer border-2 border-[#FE9921] hover:bg-transparent hover:border-white transition-colors duration-300"
                        >
                            Get in Touch
                        </button>
                    </div>
                </div>
            </div>

            {/* Right panel */}
            <div className="sustainability-right bg-cover bg-center bg-no-repeat h-72 sm:h-96 md:h-120 w-full md:w-[50%]">
                <div className="bg-[#FDC95E]/85 space-y-4 lg:space-y-5 p-6 sm:p-8 lg:p-10 h-full flex flex-col justify-center">
                    <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold">We Follow Best Practices</h3>
                    <p className="text-sm sm:text-base">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque in ipsum id orci porta dapibus.</p>
                    <ul className="space-y-2 lg:space-y-3 ml-4 sm:ml-6 lg:ml-10">
                        {sustainabilityList.map((item, index) =>
                            <li key={index} className="flex items-center gap-3 lg:gap-4 text-base sm:text-lg font-bold">
                                <i>{item.icon}</i>
                                <span>{item.name}</span>
                            </li>
                        )}
                    </ul>
                </div>
            </div>
        </section>
    )
}
