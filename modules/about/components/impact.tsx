import { GoGoal } from "react-icons/go"
import { ImFlag } from "react-icons/im"
import { FaHandHoldingHeart } from "react-icons/fa";

export const impactList = [{
        icon: <GoGoal />,
        title: "Our Vision",
        description: "We aim to create lasting spaces that strengthen communities and inspire confidence — built with care and purpose."
    },{
        icon: <ImFlag />,
        title: "Our Mission",
        description: "We make construction simple and dependable through clear communication, skilled craftsmanship, and client-first service."
    },{
        icon: <FaHandHoldingHeart />,
        title: "Our Values",
        description: "We build with integrity, treat every project like our own, and prioritize quality over shortcuts. We are committed to doing it right."
    }
]

export function Impact() {
    return(
        <section className="bg-[#EBEBEB] px-6 py-12 md:p-20 flex flex-col items-center space-y-15">
            <div className="flex flex-col items-center space-y-5">
                <span>Impactful</span>
                <h2 className="text-3xl font-bold">Vision, Mission & Values</h2>
            </div>
            <div className="flex flex-wrap justify-center gap-10 w-full">
                {impactList.map((item, index) =>
                    <div key={index} className="bg-white flex flex-col items-center justify-center p-10 rounded-2xl w-80 space-y-5 hover:shadow-2xl transition-all duration-300">
                        <i className="text-5xl">{item.icon}</i>
                        <h3 className="text-xl font-bold">{item.title}</h3>
                        <p className="text-center text-sm">{item.description}</p>
                    </div>
                )}
            </div>
        </section>
    )
}