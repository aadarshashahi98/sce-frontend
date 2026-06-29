"use client";

import { useEffect, useState } from "react";

function Counter({
  end,
  duration = 4000,
}: {
  end: number;
  duration?: number;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [end, duration]);

  return <>{count}</>;
}

export function OurImpacts() {
  return (
    <section className="bg-white rounded-2xl shadow-lg z-10 w-fit max-w-full mx-auto sm:absolute sm:rounded-r-2xl sm:rounded-l-none sm:transform sm:-translate-y-14 lg:-translate-y-20">
      <div className="p-5 sm:p-6 lg:p-10">
        <h2 className="text-lg sm:text-2xl lg:text-3xl font-bold mb-4 sm:mb-0 sm:hidden">
          Our Impacts
        </h2>
        <div className="grid grid-cols-2 sm:flex sm:flex-row sm:items-center gap-5 sm:gap-12 lg:gap-16">
          <div className="hidden sm:block">
            <h2 className="text-2xl lg:text-3xl font-bold whitespace-nowrap">Our Impacts</h2>
          </div>

          <div className="flex flex-col">
            <h3 className="text-xl sm:text-xl lg:text-2xl font-bold leading-tight">
              <Counter end={100} />%
            </h3>
            <span className="text-xs sm:text-sm lg:text-base text-gray-600 mt-0.5">
              Customer Satisfaction
            </span>
          </div>

          <div className="flex flex-col">
            <h3 className="text-xl sm:text-xl lg:text-2xl font-bold leading-tight">
              <Counter end={150} />+
            </h3>
            <span className="text-xs sm:text-sm lg:text-base text-gray-600 mt-0.5">
              Projects Completed
            </span>
          </div>

          <div className="flex flex-col">
            <h3 className="text-xl sm:text-xl lg:text-2xl font-bold leading-tight">
              <Counter end={20} />+
            </h3>
            <span className="text-xs sm:text-sm lg:text-base text-gray-600 mt-0.5">
              Experienced Professionals
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}