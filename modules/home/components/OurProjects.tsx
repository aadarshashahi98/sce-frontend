"use client";

import { FaArrowRightLong } from "react-icons/fa6";
import { useRouter } from "next/navigation";

export const projectImages = [
  "/assets/heroimage.png",
  "/assets/about.png",
  "/assets/transformer.png",
  "/assets/terminals.png",
];

export function OurProjects() {
  const router = useRouter();

  return (
    <section className="bg-[#F5F5F5] w-full px-4 py-10 md:px-8 lg:px-10 lg:py-16">
      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:justify-between lg:items-end gap-8 mb-10">
        <div>
          <span className="text-[#FE9921] font-semibold uppercase">
            Our Projects
          </span>

          <h2 className="mt-2 text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
            Built on Power.
            <br />
            Driven by Precision.
          </h2>
        </div>

        <div className="max-w-lg">
          <p className="text-sm md:text-base text-gray-700 leading-relaxed">
            From high-voltage infrastructure to MEP solutions, we deliver safe, reliable, and quality execution at every stage.
          </p>

          <button
            onClick={() => router.push("/projects")}
            className="mt-5 flex items-center gap-3 rounded-full border border-[#FE9921] bg-[#FE9921] px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-[#F5F5F5] hover:text-[#FE9921]"
          >
            <span>View All</span>
            <FaArrowRightLong />
          </button>
        </div>
      </div>

      {/* Projects */}
      <div className="grid-project-home w-full">
        <div className="grid-1 h-60 sm:h-72 md:h-80 overflow-hidden rounded-3xl">
          <img
            src={projectImages[0]}
            alt="Project 1"
            className="h-full w-full rounded-3xl object-cover transition-transform duration-500 hover:scale-105"
          />
        </div>

        <div className="grid-2 h-60 sm:h-72 md:h-80 overflow-hidden rounded-3xl">
          <img
            src={projectImages[1]}
            alt="Project 2"
            className="h-full w-full rounded-3xl object-cover transition-transform duration-500 hover:scale-105"
          />
        </div>

        <div className="grid-3 h-60 sm:h-72 md:h-80 overflow-hidden rounded-3xl">
          <img
            src={projectImages[2]}
            alt="Project 3"
            className="h-full w-full rounded-3xl object-cover transition-transform duration-500 hover:scale-105"
          />
        </div>

        <div className="grid-4 h-60 sm:h-72 md:h-80 overflow-hidden rounded-3xl">
          <img
            src={projectImages[3]}
            alt="Project 4"
            className="h-full w-full rounded-3xl object-cover transition-transform duration-500 hover:scale-105"
          />
        </div>
      </div>
    </section>
  );
}