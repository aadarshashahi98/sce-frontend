import { FaCheckCircle } from "react-icons/fa";

export function About() {
  return (
    <section className="bg-[#F5F5F5] px-6 sm:px-10 py-16 sm:py-24 lg:pt-40 lg:pb-0 overflow-hidden">
      <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start gap-12 lg:gap-10 max-w-7xl mx-auto">

        {/* Text content */}
        <div className="space-y-5 w-full lg:ml-10 lg:mt-10 text-center lg:text-left">
          <h3 className="text-[#FE9921] font-semibold tracking-wide uppercase text-sm">
            About Us
          </h3>
          <h2 className="text-2xl sm:text-3xl font-bold max-w-sm mx-auto lg:mx-0">
            Trusted Local Construction Partner in Qatar
          </h2>
          <p className="text-gray-600 leading-relaxed max-w-lg mx-auto lg:mx-0">
            At Satipipal, we are proud to serve Qatar with reliable, high-quality
            construction services. From custom builds to commercial projects, our
            local expertise ensures every project is done right. We build with
            integrity, craftsmanship, and a commitment to your vision.
          </p>
          <ul className="flex flex-col gap-3 items-center lg:items-start">
            {["150+ Projects", "Licensed & ISO Certified", "Experienced Team"].map(
              (item, index) => (
                <li key={index} className="flex items-center gap-3 text-gray-700 font-medium">
                  <FaCheckCircle className="text-[#FE9921] text-lg flex-shrink-0" />
                  <span>{item}</span>
                </li>
              )
            )}
          </ul>
        </div>

        {/* Image stack — outer div is the positioning context with explicit size */}
        <div className="relative flex-shrink-0 w-72 h-72 sm:w-96 sm:h-96 lg:w-[560px] lg:h-[560px] mx-auto lg:mx-0 mb-16 md:mb-20 lg:mb-0">

          {/* Large image fills the container */}
          <div className="absolute top-0 right-0 w-full h-full rounded-[40px] sm:rounded-[50px] lg:rounded-[70px] overflow-hidden">
            <img
              className="w-full h-full object-cover"
              src="/assets/heroimage.png"
              alt="About Us Image"
            />
          </div>

          {/* Small image — anchored to bottom-left of the container, protruding outward */}
          <div className="hidden md:block absolute -bottom-10 -left-10 sm:-bottom-12 sm:-left-12 lg:-bottom-16 lg:-left-16 w-36 h-36 sm:w-48 sm:h-48 lg:w-64 lg:h-64 rounded-[30px] sm:rounded-[40px] lg:rounded-[50px] overflow-hidden shadow-xl border-4 border-white z-10">
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
