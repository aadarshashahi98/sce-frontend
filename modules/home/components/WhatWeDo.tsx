"use client"
import { BsFillLightningChargeFill } from "react-icons/bs"
import { BsPlugFill } from "react-icons/bs";
import { GiCrane } from "react-icons/gi";
import { useRouter } from "next/navigation";

export const services = [{
        icon: <BsFillLightningChargeFill/>,
        image: "/assets/11kv-joints-termination.png",
        title: "11KV Cable Jointing & Termination",
        description: "Built for maximum safety, seamless power transmission, and long-term system reliability."
    }, {
        icon: <BsPlugFill />,
        image: "/assets/LV-joints-termination.png",
        title: "LV Cable Jointing & Termination",
        description: "Providing secure electrical connections that ensure efficient and uninterrupted power distribution."
    }, {
        icon: <GiCrane />,
        image: "/assets/mep-work.png",
        title: "MEP Services",
        description: "Coordinated building solutions that improve performance, efficiency, and operational reliability."
    }
]

export function WhatWeDo() {
    const router = useRouter()

    return (
        <section className="px-6 sm:px-10 md:px-14 lg:px-20 py-16 sm:py-20 bg-[#EBEBEB]">
            {/* Heading */}
            <div className="flex flex-col justify-center items-center gap-5 mb-10 sm:mb-14 lg:mb-20">
                <span className="text-[#FE9921] font-semibold uppercase">What We Do</span>
                <h2 className="text-2xl sm:text-3xl font-bold max-w-xs sm:max-w-sm lg:w-100 text-center">
                    Our Full-Spectrum Construction Services
                </h2>
            </div>

            {/* Cards */}
            <div className="flex flex-col sm:flex-row justify-between gap-10 sm:gap-4 md:gap-5 lg:gap-7 items-center sm:items-start">
                {services.map((item, index) => (
                    <div key={index} className="w-full sm:w-1/3 flex flex-col items-center">
                        {/* Image */}
                        <div className="w-full h-64 sm:h-56 md:h-64 lg:h-96 xl:h-110 rounded-[40px] sm:rounded-[40px] md:rounded-[50px] lg:rounded-[70px] overflow-hidden">
                            <img
                                className="w-full h-full object-cover"
                                src={item.image}
                                alt={item.title}
                            />
                        </div>
                        {/* Info card — width tracks image width minus a small margin each side */}
                        <div className="flex flex-col justify-center items-center bg-white text-center
                            w-[82%] sm:w-44 md:w-52 lg:w-64 xl:w-70
                            p-4 sm:p-3 md:p-4 lg:p-5
                            py-6 sm:py-5 md:py-6 lg:py-8
                            mx-auto
                            rounded-[40px] sm:rounded-[40px] md:rounded-[50px] lg:rounded-[70px]
                            space-y-2 lg:space-y-3
                            -mt-14 sm:-mt-12 md:-mt-14 lg:-mt-24 xl:-mt-30
                            shadow-md">
                            <i className="text-3xl text-[#FE9A22] sm:text-3xl md:text-4xl lg:text-5xl font-extrabold">{item.icon}</i>
                            <h3 className="text-sm sm:text-xs md:text-sm lg:text-base xl:text-lg font-bold w-[80%] sm:w-28 md:w-36 lg:w-44 xl:w-50">{item.title}</h3>
                            <p className="text-xs sm:text-[10px] md:text-xs lg:text-sm leading-relaxed">{item.description}</p>
                            <button
                                onClick={() => router.push("/services")}
                                className="bg-[#FE9A22] text-white py-1 px-2 rounded text-xs font-semibold cursor-pointer hover:bg-white border border-[#FE9A22] hover:text-[#FE9A22] transition-all duration-300"
                            >
                                Read More
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}
