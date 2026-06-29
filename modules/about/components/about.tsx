import { FaCircleCheck } from "react-icons/fa6";

export const aboutList = ["Building Staffs", "History Emphasis", "Economic Outcomes"];

export function About() {
    return (
        <section className="bg-[#F5F5F5] flex flex-col lg:flex-row justify-center items-center lg:space-x-20 gap-10 lg:gap-0 px-6 py-12 sm:px-10 sm:py-16 lg:p-20">
            {/* Image */}
            <div className="w-full max-w-sm sm:max-w-md lg:w-120 h-72 sm:h-96 lg:h-150 rounded-4xl shrink-0">
                <img
                    className="h-full w-full object-cover rounded-4xl"
                    src="/assets/about.png"
                    alt="This is about related image"
                />
            </div>

            {/* Text content */}
            <div className="flex flex-col justify-center space-y-6 lg:space-y-10 w-full max-w-sm sm:max-w-md lg:max-w-none lg:w-120">
                <span className="text-sm font-semibold tracking-wide text-gray-500 uppercase">
                    About Us
                </span>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold">
                    We Are Leading International Company In The World
                </h2>
                <p className="text-gray-600 leading-relaxed">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus,
                    luctus nec ullamcorper mattis, pulvinar dapibus leo.
                </p>
                <ul className="space-y-3">
                    {aboutList.map((item, index) => (
                        <li key={index} className="flex gap-3 items-center">
                            <i className="text-500 shrink-0">
                                <FaCircleCheck />
                            </i>
                            <span className="text-gray-700">{item}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}