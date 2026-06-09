export const trustedPartners = [
    { name: "Qatar Penthouse", logo: "/assets/qatarpenthouse.png" },
    { name: "Qatar Penthouse", logo: "/assets/qatarpenthouse.png" },
    { name: "Qatar Penthouse", logo: "/assets/qatarpenthouse.png" },
    { name: "Qatar Penthouse", logo: "/assets/qatarpenthouse.png" },
    { name: "Qatar Penthouse", logo: "/assets/qatarpenthouse.png" },
    { name: "Qatar Penthouse", logo: "/assets/qatarpenthouse.png" },
    { name: "Qatar Penthouse", logo: "/assets/qatarpenthouse.png" },
    { name: "Qatar Penthouse", logo: "/assets/qatarpenthouse.png" },
]

export function TrustedPartners() {
    return (
        <section className="bg-[#EBEBEB] p-10 space-y-10">
            <div className="space-y-5">
                <h2 className="text-3xl font-bold text-center">Our Trusted Partner</h2>
                <p className="text-center">Join hundreds of leading organizations who trust us with their corporate procurement needs</p>
            </div>
            <div className="grid grid-cols-4 gap-4">
                { trustedPartners.map((item, index) =>
                    <div key={index} className="bg-white flex gap-2 items-center rounded-3xl">
                        <div className="w-25 h-25">
                            <img className="w-full h-full object-cover" src={item.logo} alt={item.name} />
                        </div>
                        <div>
                            <span className="text-lg font-semibold text-[#515050]">{item.name}</span>
                        </div>
                    </div>
                )}
            </div>
        </section>
    )
}