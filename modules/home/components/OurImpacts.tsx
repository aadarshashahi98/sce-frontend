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

      const progress = Math.min(
        (timestamp - startTime) / duration,
        1
      );

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
    <section className="w-full px-4 md:px-10 lg:px-20 py-12 bg-white overflow-hidden">
      
      {/* Title */}
      <div className="text-center mb-10">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold">
          Our Impacts
        </h2>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">

        {/* Item 1 */}
        <div className="flex flex-col items-center">
          <h3 className="text-2xl md:text-3xl font-bold">
            <Counter end={100} />%
          </h3>
          <p className="text-xs md:text-sm text-gray-600 mt-1">
            Customer Satisfaction
          </p>
        </div>

        {/* Item 2 */}
        <div className="flex flex-col items-center">
          <h3 className="text-2xl md:text-3xl font-bold">
            <Counter end={250} />+
          </h3>
          <p className="text-xs md:text-sm text-gray-600 mt-1">
            Projects Completed
          </p>
        </div>

        {/* Item 3 */}
        <div className="flex flex-col items-center">
          <h3 className="text-2xl md:text-3xl font-bold">
            <Counter end={50} />+
          </h3>
          <p className="text-xs md:text-sm text-gray-600 mt-1">
            Experienced Professionals
          </p>
        </div>

        {/* Item 4 (optional example if you add more later) */}
        <div className="flex flex-col items-center">
          <h3 className="text-2xl md:text-3xl font-bold">
            <Counter end={10} />+
          </h3>
          <p className="text-xs md:text-sm text-gray-600 mt-1">
            Years Experience
          </p>
        </div>

      </div>
    </section>
  );
}