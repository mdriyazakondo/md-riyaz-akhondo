import React, { useEffect, useState } from "react";
import CountUp from "react-countup";

const Expreance = () => {
  const [exprence, setExprence] = useState([]);
  const [years, setYears] = useState(0);
  const [months, setMonths] = useState(0);

  // Starting date (you can edit)
  const startDate = new Date("2025-01-01");

  useEffect(() => {
    // Fetch portfolio json
    fetch("/portfolio.json")
      .then((res) => res.json())
      .then((data) => setExprence(data));

    // Calculate time difference
    const today = new Date();
    const totalMonths =
      (today.getFullYear() - startDate.getFullYear()) * 12 +
      (today.getMonth() - startDate.getMonth());

    setMonths(totalMonths);

    const yearValue = totalMonths / 12;
    setYears(yearValue);
  }, []);

  // Determine CountUp value
  const displayedValue =
    months < 6 ? 6 : months < 12 ? months : parseFloat(years.toFixed(1));

  // Determine unit text
  const displayedUnit = months < 12 ? "Month" : "Years";

  return (
    <div className="flex items-center max-w-4xl mx-5 md:mx-auto justify-between mb-12">
      {/* Projects */}
      <div className="flex flex-col items-center">
        <CountUp
          start={0}
          end={exprence.length}
          duration={2}
          className="text-4xl font-bold text-blue-500"
        />
        <span className="text-xl font-semibold mt-1">Projects</span>
      </div>

      {/* Clients */}
      <div className="flex flex-col items-center">
        <CountUp
          start={0}
          end={0}
          duration={1}
          className="text-4xl font-bold text-blue-500"
        />
        <span className="text-xl font-semibold mt-1">Clients</span>
      </div>

      {/* Experience */}
      <div className="flex flex-col items-center">
        <CountUp
          start={0}
          end={displayedValue}
          duration={2}
          className="text-4xl font-bold text-blue-500"
        />
        <span className="text-xl font-semibold mt-1">
          {displayedUnit} Experience
        </span>
      </div>
    </div>
  );
};

export default Expreance;
