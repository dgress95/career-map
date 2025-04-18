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
      "User enlisted in the Army at age 18 and completed basic training.",
    achievements: [
      "Completed Basic Training",
      "Started earning military benefits",
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
      education: 25000,
      training: 500,
    },
    milestone:
      "You are a Private First Class (E-3) and plan to pursue a 2-year college degree while on active duty through the Green to Gold Program.",
    aiContext:
      "User is now a Private First Class (E-3). They are planning to apply for the Green to Gold Program after completing 2 years of active-duty service so that they can earn an associates degree while on active duty. Give some brief information about the Green to Gold Active-Duty program and ask them what degree program they are interested in, between Political Science and Organizational Leadership.",
    achievements: [
      "Applied for Green to Gold",
      "Increased retirement contributions",
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
      education: 25000,
      training: 1000,
    },
    milestone:
      "You completed your associate's degree through the Green to Gold Program and were commissioned as a Second Lieutenant (2LT).",
    aiContext:
      "User earned a associates's degree through the Green to Gold Program and commissioned as a 2LT at age 22. They have some savings at this point, so give them the option to either increase their retirement contributions or buy their first new car",
    achievements: [
      "Completed college",
      "Commissioned as an officer",
      "No student debt",
      "Bought first new car",
    ],
    choices: [
      {
        label: "Increase Retirement Savings",
        aiContext: "User chose to increase retirement savings",
      },
      {
        label: "Buy first New Car",
        aiContext: "User chose to buy their first car",
      },
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
    aiContext:
      "User was promoted to Captain and began leading a company. They are planning to buy a home. Give them 1-2 sentences about the VA loan for home buyers and how it could benefit them. Ask them if they'd like to buy a fixer-upper or a new build.",
    achievements: ["Promoted to CPT", "Bought first home using VA loan"],
    choices: [
      {
        label: "Buy a fixer upper",
        aiContext: "User chose to buy a fixer-upper house",
      },
      {
        label: "Buy a new build",
        aiContext: "User chose to buy a new build house",
      },
    ],
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
      "User was promoted to Major and completed mid-career officer education. They got married and have started a family. They are at an important point in their career and can choose from 1 of three options: Commit to staying in until 20 for retirement, Pursue a specialized track (e.g. Foreign Area Officer or Acquisition Corps), Begin planning for civilian transition",
    achievements: [
      "Promoted to MAJ",
      "Command & General Staff College",
      "Started a family",
    ],
    choices: [
      {
        label: "Commit to staying in until 20 for retirement",
        nextId: "p1-6",
        aiContext:
          "User committed to serving a full 20-year military career to earn pension and long-term benefits.",
      },
      {
        label:
          "Pursue a specialized track (e.g. Foreign Area Officer or Acquisition Corps)",
        nextPath: "path1-specialized-track",
        aiContext:
          "User pursued a specialized career path in the Army, expanding their expertise and preparing for post-military opportunities.",
      },
      {
        label: "Begin planning for civilian transition",
        nextPath: "civilian-transition-track",
        aiContext:
          "User began preparing for transition out of the Army, building a civilian resume and starting a graduate program.",
      },
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
    aiContext:
      "User was promoted to LTC and led a battalion. They are two years from being able to retire from the Army with full benefits. They've saved well and want to take a vacation. Ask them if they want to visit Europe or take a tropical vacation.",
    achievements: [
      "Promoted to LTC",
      "Earned military commendation",
      "Started college fund for children",
    ],
    choices: [
      {
        label: "Visit Europe",
        aiContext:
          "User took a two week vacation with the family to explore Europe on a sight-seeing trip.",
      },
      {
        label: "Take a Tropical Vacation",
        aiContext:
          "User took his family to the Caribbean for a week and stayed at a 5-star resort.",
      },
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
