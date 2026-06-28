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
    <section className="absolute bg-white transform -translate-y-20 rounded-r-2xl shadow-lg">
      <div className="flex justify-between p-10 gap-25">
        <div>
          <h2 className="text-3xl font-bold">Our Impacts</h2>
        </div>

        <div className="max-w-20">
          <h3 className="text-2xl font-bold">
            <Counter end={100} />%
          </h3>
          <span>Customer Satisfaction</span>
        </div>

        <div className="max-w-20">
          <h3 className="text-2xl font-bold">
            <Counter end={150} />+
          </h3>
          <span>Projects Completed</span>
        </div>

        <div className="max-w-20">
          <h3 className="text-2xl font-bold">
            <Counter end={20} />+
          </h3>
          <span>Experienced Professionals</span>
        </div>
      </div>
    </section>
  );
}