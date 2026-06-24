"use client"
import { SlHome } from "react-icons/sl";
import { HiOutlineOfficeBuilding } from "react-icons/hi"
import { SiRenovate } from "react-icons/si";
import { useRouter } from "next/navigation";

export const services = [{
        icon: <SlHome />,
        image: "/assets/about.png",
        title: "Residential Construction",
        description: "Custom-built homes designed with care, quality, and Austin’s unique character in mind."
    }, {
        icon: <HiOutlineOfficeBuilding />,
        image: "/assets/about.png",
        title: "Commercial Construction",
        description: "We specialize in commercial builds, delivering functional and innovative spaces."
    }, {
        icon: <SiRenovate />,
        image: "/assets/about.png",
        title: "Renovations Remodeling",
        description: "Transform your existing space with our expert renovation and remodeling services."
    }
]

export function WhatWeDo() {

    const router = useRouter()

    return (
        <section className="p-20 h-250 space-y-20 bg-[#EBEBEB]">
            <div className="flex flex-col justify-center items-center gap-5">
                <span>What We Do</span>
                <h2 className="text-3xl font-bold w-100 text-center">Our Full-Spectrum Construction Services</h2>
            </div>
            <div className="flex justify-between gap-7">
                {services.map((item, index) => (
                    <div key={index}>
                        <div className="rounded-[70px] w-90 h-110">
                            <img className="w-full h-full object-cover rounded-[70px]" src={item.image} alt={item.title} />
                        </div>
                        <div className="flex flex-col justify-center items-center bg-white text-center transform -translate-y-30 w-70 p-5 py-8 mx-auto rounded-[70px] space-y-3">
                            <i className="text-5xl font-extrabold">{item.icon}</i>
                            <h3 className="text-lg font-bold w-50">{item.title}</h3>
                            <p className="text-sm">{item.description}</p>
                            <button onClick={() => router.push("/services")} className="bg-[#FE9A22] text-white py-1 px-2 rounded text-xs font-semibold cursor-pointer">Read More</button>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}