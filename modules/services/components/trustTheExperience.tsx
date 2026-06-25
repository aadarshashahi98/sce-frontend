export const serviceList = [
    {
        image: "/assets/terminals.png",
        title: "Roof Installations",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo."
    },{
        image: "/assets/about.png",
        title: "Roof Repair",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo."
    },{
        image: "/assets/transformer.png",
        title: "Leak Repair",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo."
    },{
        image: "/assets/heroimage.png",
        title: "Vegetative Roofing​",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo."
    },{
        image: "/assets/transformer.png",
        title: "Roof Installations​",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo."
    },{
        image: "/assets/about.png",
        title: "Specialty Metal​​",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo."
    }
]

export function TrustTheExperience() {
    return (
        <section className="bg-[#F5F5F5] p-10 space-y-20">
            <div className="flex flex-col justify-center items-center space-y-5">
                <span>Our Services</span>
                <h2 className="text-3xl font-bold">Trust The Experience</h2>
            </div>
            <div className="grid grid-cols-3 mx-10 gap-10">
                {serviceList.map((item, index) => 
                    <div key={index} className="rounded-3xl bg-white hover:shadow-2xl transition-all duration-300">
                        <div className="w-85.3 h-50 rounded-t-3xl">
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