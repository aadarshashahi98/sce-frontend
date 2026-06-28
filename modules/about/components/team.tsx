export const teamList = [
    {
        image: "/assets/client2.jpg",
        alt: "Team 1",
        name: "Mike Rich",
        title: "Lead Architect"
    },{
        image: "/assets/client1.jpg",
        alt: "Team 2",
        name: "Jenny Smith",
        title: "Head Engineer (US)"
    },{
        image: "/assets/client3.jpg",
        alt: "Team 3",
        name: "George Doe",
        title: "Head Engineer (CN)"
    },{
        image: "/assets/client4.jpg",
        alt: "Team 4",
        name: "Maria Jay",
        title: "Head Engineer (AU)"
    },
]

export function Team() {
    return (
        <section className="bg-[#F5F5F5] px-6 py-12 md:p-20 flex flex-col justify-center items-center space-y-10 md:space-y-20">
            <div className="flex flex-col justify-center items-center space-y-5">
                <span>The Team</span>
                <h2 className="text-3xl font-bold">Our Experts</h2>
            </div>
            <div className="flex flex-wrap justify-center gap-10">
                {teamList.map((item, index) =>
                    <div key={index} className="group rounded-b-2xl hover:shadow-2xl transition-all duration-300">
                        <div className="w-60 h-65 rounded-t-2xl">
                            <img className="h-full w-full object-cover rounded-t-2xl" src={item.image} alt={item.alt} />
                        </div>
                        <div className="flex flex-col items-center py-3 bg-white rounded-b-2xl">
                            <span className="font-bold">{item.name}</span>
                            <span className="text-sm">{item.title}</span>
                        </div>
                    </div>
                )}
            </div>
        </section>
    )
}