export function MessageFromCEO() {
    return (
        <section className="bg-[#F5F5F5] px-6 py-12 md:p-20 flex flex-col-reverse md:flex-row justify-between gap-10 md:gap-20">
            <div className="flex flex-col justify-center space-y-5 md:ml-10 flex-1">
                <span className="text-[#FE9921] font-semibold uppercase">Message From Founder</span>
                <h2 className="text-2xl font-semibold">Raja Ram Shahi</h2>
                <p>At Satipipal Contracting and Electrical WLL, the journey began after many years of experience in the electrical industry. Following the collapse of a previous storm construction company, I chose not to continue working under others, but to build my own path using over 20 years of hands-on experience in the field, including 8 years in storm construction.</p>
                <p>This company was created with a clear vision to deliver reliable, safe, and high-quality electrical solutions while building trust and long-term relationships with clients. Today, we continue to grow through dedication, skilled execution, and commitment to excellence in every project we undertake.</p>
            </div>
            <div className="w-full md:w-1/2 h-72 md:h-132 rounded-3xl shrink-0">
                <img className="w-full h-full object-cover rounded-3xl" src="assets/client3.jpg" alt="CEO" />
            </div>
        </section>
    )
}