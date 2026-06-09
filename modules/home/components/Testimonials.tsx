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
        <section className="bg-[#F5F5F5] p-20 space-y-20">
            <div className="flex flex-col items-center space-y-5">
                <span>Testimonials</span>
                <h2 className="text-3xl font-bold">What our Clients Say</h2>
            </div>
            <div className="flex gap-10">
                {testimonials.map((item, index) =>
                    <div key={index} className='bg-white p-10 rounded-3xl space-y-5'>
                        <div>
                            <Rating defaultValue={item.rating} />
                        </div>
                        <div>
                            <h3 className='text-xl font-bold'>{item.project}</h3>
                        </div>
                        <div>
                            <p className="text-lg">{item.description}</p>
                        </div>
                        <div className="flex gap-3 items-center">
                            <div className='w-15 h-15 rounded-full'>
                                <img className='w-full h-full object-cover rounded-full' src={item.clientImage} alt={item.project} />
                            </div>
                            <div>
                                <span>{item.clientName}</span>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </section>
    )
}