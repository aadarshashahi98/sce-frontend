export function MessageFromCEO() {
    return (
        <section className="bg-[#F5F5F5] px-6 py-12 md:p-20 flex flex-col-reverse md:flex-row justify-between gap-10 md:gap-20">
            <div className="flex flex-col justify-center space-y-5 md:ml-10 flex-1">
                <span className="text-[#FE9921] font-semibold uppercase">Message From CEO</span>
                <h2 className="text-2xl font-semibold">Christina Michael</h2>
                <p>At Manufacturing Company, our Chief Operating Officer (COO) plays a crucial role in overseeing and streamlining our operations to deliver top-notch results. With a strong focus on efficiency, our COO implements strategic plans, optimizes workflow processes, and maximizes resource allocation. With their expertise in lean manufacturing principles and proven track record in managing complex manufacturing systems, our COO ensures that our operations are running smoothly</p>
            </div>
            <div className="w-full md:w-1/2 h-72 md:h-132 rounded-3xl shrink-0">
                <img className="w-full h-full object-cover rounded-3xl" src="assets/client3.jpg" alt="CEO" />
            </div>
        </section>
    )
}