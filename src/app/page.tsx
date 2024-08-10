import React from 'react';

// Data Definitions

const personalInfo = {
  name: "Elizabeth Hagearty",
  title: "Senior Software Engineer",
  location: "Remote | Portland, Oregon",
  website: "lizhagearty.com",
  email: "*",
  phone: "*",
  summary: "Senior Software Engineer turned Creative Entrepreneur. After 6+ years excelling in high-paced tech environments, I embraced my creative ambitions to successfully drive the artistic direction and media production for world-renowned music festivals and artists. I offer a unique blend of technical expertise, design acumen, creative insight, and multi-faceted communication strengths to cultivate projects where innovation and artistry intersect."
};

const experienceData = [
  {
    company: "SQUARE (BLOCK INC), San Francisco, CA",
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
    company: "SQUARE (BLOCK INC), San Francisco, CA",
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
    company: "SQUARE (BLOCK INC), San Francisco, CA",
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
    company: "SQUARE (BLOCK INC), San Francisco, CA",
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
    company: "SQUARE (BLOCK INC), San Francisco, CA",
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

const educationData = {
  degree: "BA, Major in Computer Science; Minor in Gender & Women’s Studies",
  school: "University of California, Berkeley",
  location: "Berkeley, CA",
  years: "2012-2015"
};

const skillsData = [
  "TypeScript",
  "JavaScript",
  "React",
  "NextJS",
  "CSS",
  "Tailwind",
  "Python"
];

// Helper Wrapper Component
const SectionWrapper = ({ title, children }) => (
  <section className="mb-12">
    <h2 className="text-3xl font-serif font-bold mb-4">{title}</h2>
    {children}
  </section>
);

// Inlined Experience Component
const Experience = ({ experience }) => {
  return (
    <div className="p-8">
      {experience.map((job, index) => (
        <div key={index} className="mt-4">
          <h3 className="text-2xl font-semibold">{job.company}</h3>
          <p className="italic">{job.title}, {job.duration}</p>
          <ul className="list-disc ml-8 mt-2">
            {job.responsibilities.map((responsibility, i) => (
              <li key={i}>{responsibility}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default function Home() {
  return (
    <main className="min-h-screen bg-backgroundGreen text-textGreen font-sans p-8">
      <section className="text-center mb-12">
        <h1 className="text-6xl font-serif font-bold">{personalInfo.name}</h1>
        <p className="text-xl italic">{personalInfo.title}</p>
        <p>{personalInfo.location}</p>
        <p>{personalInfo.website} | {personalInfo.email} | {personalInfo.phone}</p>
      </section>

      <SectionWrapper title="About">
        <p>{personalInfo.summary}</p>
      </SectionWrapper>

      <SectionWrapper title="Education">
        <p>{educationData.degree}</p>
        <p>{educationData.school}</p>
        <p>{educationData.location} ({educationData.years})</p>
      </SectionWrapper>

      <SectionWrapper title="Working Experience">
        <Experience experience={experienceData} />
      </SectionWrapper>

      <SectionWrapper title="Technical Skills">
        <div className="flex flex-wrap justify-center gap-4">
          {skillsData.map((skill, index) => (
            <span
              key={index}
              className="bg-gray-800 text-white text-sm font-medium px-4 py-2 rounded-full"
            >
              {skill}
            </span>
          ))}
        </div>
      </SectionWrapper>

      <footer className="mt-12 text-center">
        {/* <p>© 2024 Elizabeth Hagearty</p> */}
      </footer>
    </main>
  );
}
