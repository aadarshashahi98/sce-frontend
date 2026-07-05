export const serviceList = [
    {
        image: "/assets/11kv-joints-termination.png",
        title: "33KV Jointing & Termination",
        description: "Expert cable jointing and termination for 33KV systems, ensuring safe and reliable high-voltage connections."
    },{
        image: "/assets/11kv-joints-termination.png",
        title: "11KV Jointing & Termination",
        description: "Precision cable jointing and termination for 11KV systems, built for long-term performance and safety."
    },{
        image: "/assets/LV-joints-termination.png",
        title: "LV Cable Jointing & Termination",
        description: "Secure low-voltage cable jointing and termination for consistent, uninterrupted power distribution."
    },{
        image: "/assets/LV-joints-termination.png",
        title: "Cable Pulling (LV & 11KV)",
        description: "Professional cable pulling services for both low-voltage and 11KV networks, carried out to industry safety standards."
    },{
        image: "/assets/11kv-joints-termination.png",
        title: "Cable Fault Locating",
        description: "Accurate fault detection and location services to minimize downtime and speed up repair work."
    },{
        image: "/assets/mep-work.png",
        title: "Street Light & High Mast Installation",
        description: "Complete assembly, installation, and maintenance of street lighting and high mast systems."
    },{
        image: "/assets/mep-work.png",
        title: "MICC Cable Wiring & Glanding",
        description: "Precision wiring and glanding of MICC cables for reliable, fire-resistant electrical installations."
    },{
        image: "/assets/mep-work.png",
        title: "MEP Works",
        description: "Coordinated mechanical, electrical, and plumbing solutions that improve performance and reliability."
    },{
        image: "/assets/11kv-joints-termination.png",
        title: "Fire Alarm Systems",
        description: "Installation and maintenance of fire alarm systems built for early detection and rapid response."
    },{
        image: "/assets/mep-work.png",
        title: "Industrial Electrical Work",
        description: "Comprehensive electrical services tailored to industrial facilities and heavy-duty operations."
    },{
        image: "/assets/LV-joints-termination.png",
        title: "LV Panel Installation",
        description: "Safe and efficient installation of low-voltage panels for dependable power management."
    },{
        image: "/assets/11kv-joints-termination.png",
        title: "General Fitters Work",
        description: "Skilled fitting services covering a wide range of electrical and mechanical installation needs."
    }
]

export function TrustTheExperience() {
    return (
        <section className="bg-[#F5F5F5] px-6 py-10 md:p-10 space-y-10 md:space-y-20">
            <div className="flex flex-col justify-center items-center space-y-5">
                <span className="text-[#FE9921] font-semibold uppercase">Our Services</span>
                <h2 className="text-3xl font-bold">Trust The Experience</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {serviceList.map((item, index) => 
                    <div key={index} className="rounded-3xl bg-white hover:shadow-2xl transition-all duration-300">
                        <div className="w-full h-50 rounded-t-3xl">
                            <img className="w-full h-full object-cover rounded-t-3xl" src={item.image} alt={item.title} />
                        </div>
                        <div className="p-5 space-y-3">
                            <h3 className="text-xl font-semibold">{item.title}</h3>
                            <p className="text-sm">{item.description}</p>
                        </div>
                    </div>
                )}
            </div>
        </section>
    )
}