import { Rating } from '@mantine/core';

export const testimonials = [{ 
        rating: 4.5,
        project: "Residential Construction",
        description: "It turned our dream home into reality. The attention to detail and craftsmanship were truly outstanding.",
        clientImage: "/assets/client1.jpg",
        clientName: "Martin Roberts"
    }, {
        rating: 4.5,
        project: "Commercial Project",
        description: "Professional, punctual, and reliable — Brikly delivered our office space on time and beyond expectations.",
        clientImage: "/assets/client2.jpg",
        clientName: "Emily Blunt"
    }, {
        rating: 5,
        project: "Renovation",
        description: "From the first consultation to the final handover, Brikly made the process smooth and stress-free.",
        clientImage: "/assets/client3.jpg",
        clientName: "Sarah Johnson"
    }
]

export function Testimonials() {
    return (
        <section className="bg-[#F5F5F5] px-6 sm:px-12 lg:px-20 py-12 sm:py-16 lg:py-20 space-y-10 sm:space-y-14 lg:space-y-20 w-full">
            <div className="flex flex-col items-center space-y-5 w-full">
                <span className="text-[#FE9921] font-semibold uppercase">Testimonials</span>
                <h2 className="text-2xl sm:text-3xl font-bold">What our Clients Say</h2>
            </div>
            <div className="flex flex-col sm:flex-row gap-6 sm:gap-5 lg:gap-10 w-full">
                {testimonials.map((item, index) =>
                    <div key={index} className="bg-white p-6 sm:p-5 md:p-7 lg:p-10 rounded-3xl space-y-4 lg:space-y-5 hover:shadow-2xl transition-all duration-300 w-full sm:w-1/3">
                        <div>
                            <Rating defaultValue={item.rating} />
                        </div>
                        <div>
                            <h3 className="text-base sm:text-sm md:text-base lg:text-xl font-bold">{item.project}</h3>
                        </div>
                        <div>
                            <p className="text-sm sm:text-xs md:text-sm lg:text-base leading-relaxed">{item.description}</p>
                        </div>
                        <div className="flex gap-3 items-center">
                            <div className="w-10 h-10 sm:w-9 sm:h-9 md:w-11 md:h-11 lg:w-14 lg:h-14 rounded-full shrink-0">
                                <img className="w-full h-full object-cover rounded-full" src={item.clientImage} alt={item.project} />
                            </div>
                            <div>
                                <span className="text-sm sm:text-xs md:text-sm lg:text-base font-medium">{item.clientName}</span>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </section>
    )
}
