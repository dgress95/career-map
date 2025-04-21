import { OpenAI } from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export default async function handler(req, res) {
  console.log("API route called");
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed. Use POST." });
  }

  console.log("Request body:", req.body);

  const { answers } = req.body || {};
  if (!answers || typeof answers !== "object") {
    return res.status(400).json({
      error: 'Invalid input: "answers" is required and must be an object',
    });
  }

  const prompt = `You are an expert Army career advisor and simulation designer. Based on the user’s responses to five interest and career planning questions, your job is to generate a realistic 20-year Army career path.

        Each milestone should occur every 5 years (Year 1, 5, 10, 15, and 20), and reflect the user's likely career progression, financial growth, and achievements over time. Each milestone must include:

        - id: string (e.g. "custom-1")
        - year: number (starting at 1, then 5, 10, 15, 20)
        - age: number (starting around 18–22, increasing accordingly)
        - rank: string (e.g. “PVT”, “CPT”, “MAJ”)
        - earningsToDate: cumulative salary to date
        - savings: total saved by that year
        - retirementAccount: estimated TSP balance
        - debt: student or personal debt
        - benefitValueToDate: cumulative military benefit value
        - benefits: {
            housing: number,
            food: number,
            healthcare: number,
            education: number,
            training: number
        }
        - label: Brief summary of what happened during this stage
        - achievements: array of key wins or life events (e.g. “Promoted to CPT”, “Bought a home”)

        Respond in **JSON format only** as an array of 5 milestone objects.

        User Preferences:
        - Do you plan to go to college: ${answers.q1 || "Not answered"}
        - What kind of work interests you the most: ${
          answers.q2 || "Not answered"
        }
        - Are you open to being deployed or stationed internationally: ${
          answers.q4 || "Not answered"
        }
        - What kind of environment do you see yourself in: ${
          answers.q3 || "Not answered"
        }
        - Do you want to pursue leadership opportunities early in your career: ${
          answers.q5 || "Not answered"
        }

        Output a realistic Army career path that fits the above inputs, using officer or enlisted tracks as appropriate.`;

  try {
    const response = await openai.chat.completions.create({
      model: "gpt-4.1-mini",
      messages: [
        {
          role: "system",
          content: "You are an assistant generating Army career paths.",
        },
        {
          role: "user",
          content: prompt,
        },
      ],
    });
    const careerPath = JSON.parse(response.choices[0].message.content.trim());
    return res.status(200).json({ careerPath });
  } catch (error) {
    console.error("Error generating career path:", error);
    return res.status(500).json({ error: "Failed to generate career path" });
  }
}
