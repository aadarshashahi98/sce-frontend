import { FaCircleCheck } from "react-icons/fa6";

export const projectsList = [
    {
        image: "assets/terminals.png",
        title: "QPU Project - Power China",
        description: "Design and installation of a temporary power plant to support Power China's operations during the project phase. Full electrical setup delivered with strict attention to safety and reliability standards.",
        highlights: ["Completed in 1 week", "5-star rating"],
        type: "Government"
    },{
        image: "assets/transformer.png",
        title: "Al Masba Farm – Lightening Electromechanical",
        description: "Complete LV termination works carried out across the Al Masba Farm site, including all cable glanding and jointing. Delivered on a tight timeline without compromising on quality or safety compliance.",
        highlights: ["Completed in 3 days", "All glanding and termination work"],
        type: "Government"
    },{
        image: "assets/about.png",
        title: "GTC-194 MIRRIKH Contracting W.L.L",
        description: "MV/LV joints and termination work executed for MIRRIKH Contracting under a KAHRAMAA-regulated scope. All connections were tested and certified to meet utility-grade standards.",
        highlights: ["Completed in one week", "All joints and terminations"],
        type: "KAHRAMAA"
    },{
        image: "assets/heroimage.png",
        title: "GTC-1073/2022 Lighting Electro Mechanical W.L.L",
        description: "Ongoing MV/LV joints and termination works as part of a long-term KAHRAMAA infrastructure project. Continuous on-site presence since 2024 ensures consistent quality and rapid response to project needs.",
        highlights: ["From 2024 to till continue", "KAHRAMAA project"],
        type: "KAHRAMAA"
    },{
        image: "assets/transformer.png",
        title: "Al Bustan Highway Bridge – Gharrafa",
        description: "Facade lighting installation works along the Al Bustan Highway Bridge in partnership with Qatar Electromechanical Company. An ongoing engagement focused on durable, weather-resistant lighting solutions.",
        highlights: ["From 2024 to till continue"],
        type: "Ashghal"
    },{
        image: "assets/terminals.png",
        title: "Samsung C&T – Qatar's Largest-Ever Solar Project",
        description: "MV/LV termination works delivered for Crown Moon on Samsung C&T's landmark solar development at Mesaieed. A high-volume scope executed efficiently across multiple site zones within a compressed schedule.",
        highlights: ["660 terminations", "Completed in 2 months"],
        type: "Solar Plant Mesaieed / Qatar Energy / OPTICSENSE W.L.L"
    },{
        image: "assets/about.png",
        title: "CTJV Project – Ras Laffan",
        description: "High-voltage 33KV joints and termination works completed for the CTJV project at Ras Laffan. A demanding scope handled with precision, meeting Qatar Energy's strict safety and performance requirements.",
        highlights: ["36 joints / 63 terminations", "Completed in 40 days"],
        type: "Ras Laffan / Qatar Energy"
    }
]

export function BuiltToLast() {
    return (
        <section className="bg-[#F5F5F5] px-6 py-12 md:p-20 space-y-10">
            <div className="flex flex-col justify-center items-center space-y-5">
                <span className="text-[#FE9921] font-semibold uppercase">Built to Last</span>
                <h2 className="text-3xl font-bold text-center w-full md:w-100">Where Ideas Become Landmarks</h2>
            </div>
            <div>
                <ul className="flex flex-wrap gap-3 md:gap-5 justify-center items-center">
                    {["All", "Completed", "Ongoing", "Upcoming"].map((item, index) =>
                        <li key={index} className="text-center px-4 py-2 bg-white rounded-lg hover:bg-[#868686] hover:text-[#e8e8e8] transition-colors duration-300">{item}</li>
                    )}
                </ul>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                {projectsList.map((item, index) =>
                    <div key={index} className="hover:shadow-2xl transition-all duration-300">
                        <div className="w-full h-70">
                            <img className="w-full h-full object-cover" src={item.image} alt={item.title} />
                        </div>
                        <div className="border-x border-b border-[#cecece] p-6 md:p-10 space-y-5">
                            <h3 className="text-xl font-semibold">{item.title}</h3>
                            <p className="text-xs">{item.description}</p>
                            <div>
                                <span className="text-lg font-semibold">Highlights</span>
                                <ul className="space-y-2 ml-5 mt-5">
                                    {item.highlights.map((itemH, indexH) =>
                                        <li key={indexH} className="flex gap-2 items-center text-xs">
                                            <i><FaCircleCheck /></i>
                                            <span>{itemH}</span>
                                        </li>
                                    )}
                                </ul>
                            </div>
                        </div>
                        <div className="border border-t-0 border-[#cecece] px-4 py-2 text-xs">
                            <span>Type: {item.type}</span>
                        </div>
                    </div>
                )}
            </div>
        </section>
    )
}