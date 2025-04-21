"use client";

import React from "react";
import useSimulationStore from "../../store/simulationStore";

const SimulatePath = () => {
  const { path, setPath } = useSimulationStore();

  // Example: Setting a dummy path
  React.useEffect(() => {
    const dummyPath = [
      { year: 0, milestone: "Enlisted as a Private" },
      { year: 5, milestone: "Promoted to Sergeant" },
    ];
    setPath(dummyPath);
  }, [setPath]);

  return (
    <div>
      <h1>Career Path</h1>
      {path.map((milestone, index) => (
        <div key={index}>
          <h3>Year {milestone.year}</h3>
          <p>{milestone.milestone}</p>
        </div>
      ))}
    </div>
  );
};

export default SimulatePath;
