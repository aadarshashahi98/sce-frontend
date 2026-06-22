import { FaCircleCheck } from "react-icons/fa6";

export const aboutList = ["Building Staffs", "History Emphasis", "Economic Outcomes"]

export function About() {
    return(
        <section className="bg-[#F5F5F5] flex justify-center items-center space-x-20 p-20">
            <div className="w-120 h-150 rounded-4xl">
                <img className="h-full w-full object-cover rounded-4xl" src="/assets/about.png" alt="This is about related image"/>
            </div>
            <div className="flex flex-col justify-center space-y-10">
                <span>About Us</span>
                <h2 className="text-4xl font-bold w-120">We Are Leading International Company In The World</h2>
                <p className="w-120">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                <ul className="pl-5">
                    {aboutList.map((item, index) => 
                        <li key={index} className="flex gap-4 justify-start items-center">
                            <i><FaCircleCheck /></i>
                            <span>{item}</span>
                        </li>
                    )}
                </ul>
            </div>
        </section>
    )
}