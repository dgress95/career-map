"use client";

import React from "react";
import useQuestionnaireStore from "../../store/questionnaireStore";
import useSimulationStore from "@/store/simulationStore";
import { questions } from "@/data/questionnaire";

const Questionnaire = () => {
  const { answers, setAnswer } = useQuestionnaireStore();

  const handleSubmit = async () => {
    const answers = useQuestionnaireStore.getState().answers;

    try {
      const response = await fetch("/api/generateCareerPath", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ answers }),
      });

      if (!response.ok) {
        throw new Error("Failed to generate career path");
      }

      const data = await response.json();
      const { careerPath } = data;

      useSimulationStore.getState().setPath(careerPath);

      window.location.href = "/simulate";
    } catch (error) {
      console.error("Error submitting questionnaire:", error);
    }
  };

  return (
    <div>
      <h1 className="text-2xl font-bold">Army Career Questionnaire</h1>
      <div className="mt-6">
        {questions.map((q) => (
          <div key={q.id} className="mt-4">
            <h3 className="text-lg">{q.question}</h3>
            <ul>
              {q.options.map((option) => (
                <li key={option} className="mt-2">
                  <button
                    className={`px-4 py-2 rounded ${
                      answers[q.id] === option
                        ? "bg-blue-500 text-white"
                        : "bg-gray-200"
                    }`}
                    onClick={() => setAnswer(q.id, option)}
                  >
                    {option}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mt-6">
        <button
          className="bg-green-500 text-white px-4 py-2 rounded"
          onClick={() => {
            console.log("User Answers:", answers);
            handleSubmit();
          }}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default Questionnaire;
