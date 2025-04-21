"use client";

import React from "react";
import useSimulationStore from "../../store/simulationStore";

const SimulatePage = () => {
  const { path } = useSimulationStore();

  if (!path.length) return <p>Loading...</p>;

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Your Career Path</h1>
      <div className="mt-6 space-y-6">
        {path.map((milestone, index) => (
          <div key={index} className="p-4 border rounded">
            <h2 className="text-lg font-semibold">Year {milestone.year}</h2>
            <p>{milestone.age}</p>
            <p>{milestone.label}</p>
            <p>Rank: {milestone.rank}</p>
            <p>Earnings: ${milestone.earningsToDate}</p>
            <ul className="mt-2">
              {milestone.benefits.map((benefit, i) => (
                <li key={i}>- {benefit}</li>
              ))}
            </ul>
            <ul className="mt-2">
              {milestone.achievements.map((achievement, i) => (
                <li key={i}>- {achievement}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SimulatePage;
