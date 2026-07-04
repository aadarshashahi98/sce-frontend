import { FaCheckCircle } from "react-icons/fa";

export function About() {
  return (
    <section className="bg-[#F5F5F5] px-6 sm:px-10 py-16 sm:py-24 lg:pt-25 lg:pb-20 overflow-hidden">
      <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start gap-12 lg:gap-10 max-w-7xl mx-auto">

        {/* Text content */}
        <div className="space-y-10 w-full lg:ml-10 lg:mt-20 text-center lg:text-left">
          <h3 className="text-[#FE9921] font-semibold tracking-wide uppercase text-sm">
            About Us
          </h3>
          <h2 className="text-2xl sm:text-3xl font-bold max-w-sm mx-auto lg:mx-0">
            Trusted Local Construction Partner in Qatar
          </h2>
          <p className="text-gray-600 leading-relaxed max-w-lg mx-auto lg:mx-0">
            We are a professional electrical contracting company based in Qatar, specializing in high-voltage, low-voltage, and industrial electrical solutions. Built on strong field experience, we are committed to delivering safe, efficient, and high-quality engineering services with precision, reliability, and a focus on long-term client satisfaction across all types of infrastructure projects.
          </p>
          <ul className="flex flex-col gap-3 items-center lg:items-start ml-5">
            {["150+ Projects", "Licensed & ISO Certified", "Experienced Team"].map(
              (item, index) => (
                <li key={index} className="flex items-center gap-3 text-gray-700 font-medium">
                  <FaCheckCircle className="text-lg shrink-0" />
                  <span>{item}</span>
                </li>
              )
            )}
          </ul>
        </div>

        {/* Image stack */}
        <div className="relative shrink-0 w-72 h-72 sm:w-96 sm:h-96 lg:w-140 lg:h-140 mx-auto lg:mx-0 mb-10 md:mb-14 lg:mb-16">

          {/* Large image */}
          <div className="absolute top-0 right-0 w-full h-full rounded-[40px] sm:rounded-[50px] lg:rounded-[70px] overflow-hidden">
            <img
              className="w-full h-full object-cover"
              src="/assets/heroimage.png"
              alt="About Us Image"
            />
          </div>

          {/* Small overlapping image */}
          <div className="hidden md:block absolute -bottom-10 -left-10 sm:-bottom-12 sm:-left-12 lg:-bottom-16 lg:-left-16 w-36 h-36 sm:w-48 sm:h-48 lg:w-64 lg:h-64 rounded-[30px] sm:rounded-[40px] lg:rounded-[50px] overflow-hidden shadow-xl border-4 border-[#F5F5F5] z-10">
            <img
              className="w-full h-full object-cover"
              src="/assets/about.png"
              alt="About Us Image"
            />
          </div>
        </div>

      </div>
    </section>
  );
}