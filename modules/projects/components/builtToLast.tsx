import { FaCircleCheck } from "react-icons/fa6";

export const projectsList = [
    {
        image: "assets/terminals.png",
        title: "Modern Home",
        description: "2,800 sq. ft. 4BHK custom residential build with outdoor living space and energy-efficient upgrades. Full design-build, interior finishes, landscaping & Private Swimming Pool.",
        highlights: ["Completed in 6 months", "$450K budget", "Energy rating: 5-star"],
        type: "Residential"
    },{
        image: "assets/transformer.png",
        title: "Office Hub",
        description: "6,000 sq. ft. two-story office space with conference rooms, reception, and ADA compliance. Commercial construction, structural planning, HVAC integration. This site is RERA registered project with A+ rating.",
        highlights: ["Completed in 9 months", "20-person capacity", "Delivered 3 weeks early"],
        type: "Commercial"
    },{
        image: "assets/about.png",
        title: "Heritage Buildout",
        description: "Full interior fit-out of a dental clinic including treatment rooms and sterilization stations. Commercial interior build, plumbing, medical-grade fittings.",
        highlights: ["Built for 6-room practice", "Zero downtime for neighbors", "LEED-compliant design"],
        type: "Commercial"
    },{
        image: "assets/heroimage.png",
        title: "Vista Heights",
        description: "A premium multi-family residential community featuring 12 townhomes with modern architecture and energy-efficient features. Full design-build, utility layout.",
        highlights: ["Gated access & Green space", "Solar-ready construction", "2,100–2,400 sq. ft. units"],
        type: "Residential"
    },{
        image: "assets/transformer.png",
        title: "Retail Plaza",
        description: "A 10,000 sq. ft. retail center with 8 lease-ready units, parking, and ADA accessibility. Commercial site development, steel-frame structure, core and shell delivery.",
        highlights: ["Zoned for restaurants and retail", "Ample customer parking", "Traffic-heavy location"],
        type: "Commercial"
    }
]

export function BuiltToLast() {
    return (
        <section className="bg-[#F5F5F5] p-20 space-y-10">
            <div className="flex flex-col justify-center items-center space-y-5">
                <span>Built to Last</span>
                <h2 className="text-3xl font-bold text-center w-100">Where Ideas Become Landmarks</h2>
            </div>
            <div>
                <ul className="flex gap-5 justify-center items-center">
                    {["All", "Completed", "Ongoing", "Upcoming"].map((item, index) =>
                        <li key={index} className="text-center px-4 py-2 bg-white rounded-lg hover:bg-[#868686] hover:text-[#e8e8e8] transition-colors duration-300">{item}</li>
                    )}
                </ul>
            </div>
            <div className="grid grid-cols-2 gap-10">
                {projectsList.map((item, index) =>
                    <div key={index} className="hover:shadow-2xl transition-all duration-300">
                        <div className="w-133 h-70">
                            <img className="w-full h-full object-cover" src={item.image} alt={item.title} />
                        </div>
                        <div className="border-x border-b border-[#cecece] p-10 space-y-5">
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