"use client"
import { FaArrowRightLong } from "react-icons/fa6"
import { useRouter } from "next/navigation"

export const projectImages = [
    "/assets/heroimage.png",
    "/assets/about.png",
    "/assets/transformer.png",
    "/assets/terminals.png"
]

const gridClasses = [
  "grid-1",
  "grid-2",
  "grid-3",
  "grid-4",
];

export function OurProjects() {

    const router = useRouter()

    return (
        <section className="bg-[#F5F5F5] p-10">
            <div className="flex justify-between items-end p-10">
                <div>
                    <span>Our Projects</span>
                    <h2 className="text-3xl font-bold">Built to Last.<br />Designed to Inspire</h2>
                </div>
                <div className="space-y-3">
                    <p className="w-105 text-sm">From high-end homes to modern office spaces, each Brikly project is a reflection of quality, detail, and dedication.</p>
                    <button onClick={() => router.push("/projects")} className="flex items-center gap-3 text-xs font-semibold bg-[#FE9921] text-white p-1 px-3 rounded-3xl cursor-pointer">
                        <span>View All</span>
                        <i><FaArrowRightLong /></i>
                    </button>
                </div>
            </div>
            <div className="grid-project-home">
                <div className="w-190 h-80 rounded-3xl grid-1">
                    <img className="w-full h-full object-cover rounded-3xl" src={projectImages[0]} alt="Project 1" />
                </div>
                <div className="w-100 h-80 rounded-3xl grid-2">
                    <img className="w-full h-full object-cover rounded-3xl" src={projectImages[1]} alt="Project 1" />
                </div>
                <div className="w-100 h-80 rounded-3xl grid-3">
                    <img className="w-full h-full object-cover rounded-3xl" src={projectImages[2]} alt="Project 1" />
                </div>
                <div className="w-190 h-80 rounded-3xl grid-4">
                    <img className="w-full h-full object-cover rounded-3xl" src={projectImages[3]} alt="Project 1" />
                </div>
            </div>
        </section>
    )
}