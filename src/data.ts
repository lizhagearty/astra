// Type Definitions
export interface Experience {
  company: string;
  title: string;
  duration: string;
  responsibilities: string[];
}

export interface Education {
  degree: string;
  school: string;
  location: string;
  years: string;
}

export interface PersonalInfo {
  name: string;
  title: string;
  location: string;
  website: string;
  email: string;
  phone: string;
  summary: string;
}

export interface TimelineItemType {
  id: number;
  yearRange: string;
  title: string;
  description: string;
  details: string | string[];
  expanded: boolean;
  company?: string;
  team?: string;
}

// Data Definitions
export const personalInfo: PersonalInfo = {
  name: "Elizabeth Hagearty",
  title: "Senior Software Engineer",
  location: "Remote | Portland, Oregon",
  website: "lizhagearty.com",
  email: "lizhagearty@gmail.com",
  phone: "(617) 347-4037",
  summary: "Senior Software Engineer turned Creative Entrepreneur. After 6+ years excelling in high-paced tech environments, I embraced my creative ambitions to successfully drive the artistic direction and media production for world-renowned music festivals and artists. I offer a unique blend of technical expertise, design acumen, creative insight, and multi-faceted communication strengths to cultivate projects where innovation and artistry intersect."
};

export const experienceData: Experience[] = [
  {
    company: "SQUARE, San Francisco, CA",
    title: "Lead Software Engineer, Frontend - Customer Data Platform",
    duration: "2020-2021",
    responsibilities: [
      "Architected the development of a React + TypeScript frontend for the internal platform, processing billions of daily events and millions of user attributes.",
      "Partnered with design to ensure a cohesive experience, optimizing for users across multiple teams.",
      "Led cross-functional collaboration between design, product, frontend, and backend teams, enhancing overall efficiency and communication.",
      "Developed modular, iterative, and uniform engineering practices, improving code quality and enabling faster iteration across the platform.",
      "Took on product responsibilities, driving the “why” and “how” of the product from concept to execution."
    ],
  },
  {
    company: "SQUARE, San Francisco, CA",
    title: "Senior Software Engineer - Square Dashboard",
    duration: "2019-2020",
    responsibilities: [
      "Led the redesign of the Square Dashboard home page, transitioning from Ember to React and TypeScript, modularizing the architecture, and resolving a decade of technical debt.",
      "Supported a platform used by millions of merchants, optimizing the shared aspects like navigation and UI components to enhance overall user experience and accessibility.",
      "Balanced developer and merchant needs, addressing unique product challenges while improving accessibility and usability for both user sets.",
      "Improved the development experience for 100+ engineers across 15+ teams, enhancing the modularity, maintainability, and scalability of the codebase.",
      "Collaborated cross-functionally with design, product, and engineering teams to ensure a consistent and high-quality user experience across the entire platform."
    ],
  },
  {
    company: "SQUARE, San Francisco, CA",
    title: "UI Engineer - UI Systems",
    duration: "2018-2019",
    responsibilities: [
      "Core member of a specialized team responsible for creating and implementing the Glass design system, standardizing UI/UX across all web teams at Square.",
      "Designed and built a custom documentation site with an interactive component playground, enabling engineers to seamlessly integrate design system components.",
      "Authored comprehensive documentation, providing clear guidelines and best practices that improved design consistency and accelerated onboarding across teams.",
      "Collaborated closely with design and engineering teams to develop and refine reusable UI components, ensuring they met high standards of accessibility and visual design.",
      "Drove adoption and integration of the design system across Square’s web platform, influencing the design and development practices of multiple teams."
    ],
  },
  {
    company: "SQUARE, San Francisco, CA",
    title: "Software Engineer - Dashboard Web",
    duration: "2016-2018",
    responsibilities: [
      "Infrastructure projects for Square Dashboard, including Ember upgrades and Data Event project migration.",
      "Promoted within 12 months due to strong performance and organizational impact.",
      "Organized and led a hackweek focused on cleaning up technical debt, enabling all engineers contributing to the Dashboard to collaborate and improve the codebase.",
      "Enhanced developer experience by reducing reload times and creating comprehensive documentation, streamlining development and reducing redundant work."
    ],
  },
  {
    company: "SQUARE, San Francisco, CA",
    title: "Software Engineering Intern - Customers",
    duration: "Summer 2015",
    responsibilities: [
      "Contributed to a product team building into the Square Dashboard, focusing on UI improvements for the Customers dashboard page.",
      "Gained hands-on experience in frontend development and product design within a fast-paced, collaborative environment."
    ],
  },
  {
    company: "STORYCUT, Portland, OR",
    title: "Co-founder, Frontend Engineer + Designer",
    duration: "2024-Present",
    responsibilities: [
      "Created for long form content creators (ie. youtubers) - novel solution to mark takes while you're recording so the application can automate rough cut generation, cutting editing time significantly.",
      "Designed in Figma and built with React, TypeScript, Next.js, and Tailwind."
    ],
  },
  {
    company: "FREELANCE, Los Angeles, CA | Portland, OR",
    title: "Videographer | Content Creator | Creative Director",
    duration: "2021-Present",
    responsibilities: [
      "Spent 2 years touring, working at events and festivals across the country, such as EDC, Bonnaroo, Electric Forest.",
      "Worked with major clients including Insomniac, Republic Records, GRiZ, Leah Kate, and itsmurph.",
      "Led end-to-end content creation, from ideation and pitching to filming, editing, and posting, resulting in over 150 million views.",
      "Mentored and trained other creatives in content production.",
      "Grew my own TikTok channel to 63k followers and 11 million views in 2022."
    ],
  }
];

export const educationData: Education = {
  degree: "BA, Major in Computer Science; Minor in Gender & Women’s Studies",
  school: "University of California, Berkeley",
  location: "Berkeley, CA",
  years: "2012-2015"
};

export const skillsData: string[] = [
  "TypeScript",
  "JavaScript",
  "React",
  "NextJS",
  "CSS",
  "Tailwind",
  "Python"
];

export const timelineData: TimelineItemType[] = [
  {
    id: 0,
    yearRange: "2012 - 2015",
    title: "University of California, Berkeley",
    description: "Studied Computer Science, gaining a strong foundation in software engineering principles.",
    details: "Details about your education experience at UC Berkeley.",
    expanded: false
  },
  {
    id: 1,
    yearRange: "Summer 2015",
    title: "Software Engineering Intern",
    company: "Square",
    team: "Customers",
    description: "Contributed to a product team building into the Square Dashboard, focusing on UI improvements for the Customers dashboard page.",
    details: [
      "Gained hands-on experience in frontend development and product design within a fast-paced, collaborative environment."
    ],
    expanded: false
  },
  {
    id: 2,
    yearRange: "2016 - 2018",
    title: "Software Engineer",
    company: "Square",
    team: "Dashboard Web",
    description: "Worked on infrastructure projects for Square Dashboard, including Ember upgrades and Data Event project migration.",
    details: [
      "Promoted within 12 months due to strong performance and organizational impact.",
      "Organized and led a hackweek focused on cleaning up technical debt, enabling all engineers contributing to the Dashboard to collaborate and improve the codebase.",
      "Enhanced developer experience by reducing reload times and creating comprehensive documentation, streamlining development and reducing redundant work."
    ],
    expanded: false
  },
  {
    id: 3,
    yearRange: "2018 - 2019",
    title: "UI Engineer",
    company: "Square",
    team: "UI Systems",
    description: "Core member of a specialized team responsible for creating and implementing the Glass design system, standardizing UI/UX across all web teams at Square.",
    details: [
      "Designed and built a custom documentation site with an interactive component playground, enabling engineers to seamlessly integrate design system components.",
      "Authored comprehensive documentation, providing clear guidelines and best practices that improved design consistency and accelerated onboarding across teams.",
      "Collaborated closely with design and engineering teams to develop and refine reusable UI components, ensuring they met high standards of accessibility and visual design.",
      "Drove adoption and integration of the design system across Square’s web platform, influencing the design and development practices of multiple teams."
    ],
    expanded: false
  },
  {
    id: 4,
    yearRange: "2019 - 2020",
    title: "Senior Software Engineer",
    company: "Square",
    team: "Square Dashboard",
    description: "Led the redesign of the Square Dashboard home page, transitioning from Ember to React and TypeScript.",
    details: [
      "Modularized the architecture and resolved a decade of technical debt.",
      "Supported a platform used by millions of merchants, optimizing the shared aspects like navigation and UI components to enhance overall user experience and accessibility.",
      "Balanced developer and merchant needs, addressing unique product challenges while improving accessibility and usability for both user sets.",
      "Improved the development experience for 100+ engineers across 15+ teams, enhancing the modularity, maintainability, and scalability of the codebase.",
      "Collaborated cross-functionally with design, product, and engineering teams to ensure a consistent and high-quality user experience across the entire platform."
    ],
    expanded: false
  },
  {
    id: 5,
    yearRange: "2020 - 2021",
    title: "Lead Software Engineer",
    company: "Square",
    team: "Customer Data Platform",
    description: "Led the development of a React + TypeScript frontend for the internal platform, processing billions of daily events and millions of user attributes.",
    details: [
      "Partnered with design to ensure a cohesive experience, optimizing for users across multiple teams.",
      "Led cross-functional collaboration between design, product, frontend, and backend teams, enhancing overall efficiency and communication.",
      "Developed modular, iterative, and uniform engineering practices, improving code quality and enabling faster iteration across the platform.",
      "Took on product responsibilities, driving the “why” and “how” of the product from concept to execution."
    ],
    expanded: false
  },
  {
    id: 6,
    yearRange: "2021 - Present",
    title: "Creative Entrepreneur",
    description: "Videographer, Content Creator, and Creative Director working in the music industry.",
    details: [
      "Spent 2 years touring, working at events and festivals across the country, such as EDC, Bonnaroo, and Electric Forest.",
      "Worked with major clients including Insomniac, Republic Records, GRiZ, Leah Kate, and itsmurph.",
      "Led end-to-end content creation, from ideation and pitching to filming, editing, and posting, resulting in over 150 million views.",
      "Mentored and trained other creatives in content production.",
      "Grew my own TikTok channel to 63k followers and 11 million views in 2022."
    ],
    expanded: false
  },
  {
    id: 7,
    yearRange: "2024 - Present",
    title: "Co-founder, Frontend Engineer + Designer",
    company: "StoryCut",
    description: "For a novel content creation tool.",
    details: [
      "Designed in Figma and built with React, TypeScript, Next.js, and Tailwind.",
      "Created for long-form content creators (e.g., YouTubers), providing a novel solution to mark takes while recording so the application can automate rough cut generation, cutting editing time significantly."
    ],
    expanded: false
  }
];

