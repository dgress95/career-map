// File: src/data/milestones/path1-army-g2g.js

export const path1 = [
  {
    id: "p1-1",
    year: 0,
    age: 18,
    rank: "PVT",
    earningsToDate: 22000,
    savings: 1000,
    retirementAccount: 0,
    debt: 0,
    benefitValueToDate: 5000,
    benefits: {
      housing: 2500,
      food: 1000,
      healthcare: 1000,
      education: 0,
      training: 500,
    },
    milestone:
      "You enlisted in the Army after graduating high school and completed Basic Training.",
    aiContext:
      "User enlisted in the Army at age 18 and began basic training. They are planning to apply for the Green to Gold Program after completing 2 years of active-duty service so that they can earn an associates degree while on active duty. Give some brief information about the Green to Gold Active-Duty program and ask them what degree program they are interested in, between Political Science and Organizational Leadership.",
    achievements: [
      "Completed Basic Training",
      "Started earning military benefits",
    ],
    choices: [
      {
        label: "Political Science",
        aiContext: "User chose Political Science",
      },
      {
        label: "Organizational Leadership",
        aiContext: "User chose Organizational Leadership",
      },
    ],
  },
  {
    id: "p1-2",
    year: 1,
    age: 20,
    rank: "SPC",
    earningsToDate: 52000,
    savings: 3000,
    retirementAccount: 1000,
    debt: 0,
    benefitValueToDate: 10000,
    benefits: {
      housing: 4000,
      food: 1500,
      healthcare: 1500,
      education: 2500,
      training: 500,
    },
    milestone:
      "You were accepted into the Green to Gold Program and began a 2-year college degree while on active duty.",
    aiContext:
      "User joined the Green to Gold Program while on active duty and began college. Give the user a short explanation (max 1 paragraph) of how students balance active duty and a 2-year degree",
    achievements: [
      "Entered college on active duty",
      "Increased retirement contributions",
    ],
  },
  {
    id: "p1-3",
    year: 4,
    age: 22,
    rank: "2LT",
    earningsToDate: 162000,
    savings: 6000,
    retirementAccount: 3000,
    debt: 0,
    benefitValueToDate: 20000,
    benefits: {
      housing: 6000,
      food: 2000,
      healthcare: 3000,
      education: 8000,
      training: 1000,
    },
    milestone:
      "You completed your college degree through the Green to Gold Program and were commissioned as a Second Lieutenant (2LT).",
    aiContext:
      "User earned a associates's degree through the Green to Gold Program and commissioned as a 2LT at age 22.",
    achievements: [
      "Completed college",
      "Commissioned as an officer",
      "No student debt",
      "Purchased first car",
    ],
  },
  {
    id: "p1-4",
    year: 8,
    age: 26,
    rank: "CPT",
    earningsToDate: 372000,
    savings: 20000,
    retirementAccount: 15000,
    debt: 0,
    benefitValueToDate: 50000,
    benefits: {
      housing: 10000,
      food: 3000,
      healthcare: 5000,
      education: 0,
      training: 2000,
    },
    milestone: "You were promoted to Captain and took command of a company.",
    aiContext: "User was promoted to Captain and began leading a company.",
    achievements: ["Promoted to CPT", "Bought first home using VA loan"],
  },
  {
    id: "p1-5",
    year: 13,
    age: 31,
    rank: "MAJ",
    earningsToDate: 772000,
    savings: 40000,
    retirementAccount: 40000,
    debt: 0,
    benefitValueToDate: 90000,
    benefits: {
      housing: 12000,
      food: 3000,
      healthcare: 6000,
      education: 0,
      training: 3000,
    },
    milestone:
      "You were promoted to Major (O-4) and graduated from Command and General Staff College.",
    aiContext:
      "User was promoted to Major and completed mid-career officer education.",
    achievements: [
      "Promoted to MAJ",
      "Command & General Staff College",
      "Started a family",
    ],
  },
  {
    id: "p1-6",
    year: 18,
    age: 36,
    rank: "LTC",
    earningsToDate: 1372000,
    savings: 65000,
    retirementAccount: 75000,
    debt: 0,
    benefitValueToDate: 130000,
    benefits: {
      housing: 15000,
      food: 4000,
      healthcare: 7000,
      education: 0,
      training: 4000,
    },
    milestone:
      "You were promoted to Lieutenant Colonel (O-5) and commanded a battalion.",
    aiContext: "User was promoted to LTC and led a battalion.",
    achievements: [
      "Promoted to LTC",
      "Earned military commendation",
      "Started college fund for children",
    ],
  },
  {
    id: "p1-7",
    year: 20,
    age: 38,
    rank: "LTC",
    earningsToDate: 1432000,
    savings: 80000,
    retirementAccount: 100000,
    debt: 0,
    benefitValueToDate: 150000,
    benefits: {
      housing: 16000,
      food: 4000,
      healthcare: 8000,
      education: 0,
      training: 2000,
    },
    milestone:
      "You retired from the Army after 20 years of service with a pension and full benefits.",
    aiContext:
      "User retired from the Army as a Lieutenant Colonel after 20 years of service. You can now present them with three options to spend their time post retirement from the Army: Starting a second career in the private sector, Joining the Army Reserves or Go back to school and earning a master's degree.",
    achievements: [
      "Military retirement",
      "Eligible for Tricare and VA benefits",
    ],
    choices: [
      {
        label: "Start a second career in the private sector",
        earningsToDate: 3460000,
        pensionValue: 1620000,
        retirementAccountAt65: 370000,
      },
      {
        label: "Join the Army Reserves",
        earningsToDate: 2010000,
        pensionValue: 1620000,
        retirementAccountAt65: 235000,
      },
      {
        label: "Go back to school and earn a master's degree",
        earningsToDate: 3470000,
        pensionValue: 1620000,
        retirementAccountAt65: 400000,
      },
    ],
  },
];
