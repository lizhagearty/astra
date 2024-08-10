"use client";
import React from 'react';
import { personalInfo, educationData, experienceData, skillsData, Experience } from '@/data';

interface SectionWrapperProps {
  title: string;
  children: React.ReactNode;
}

const SectionWrapper: React.FC<SectionWrapperProps> = ({ title, children }) => (
  <section className="mb-12">
    <h2 className="text-3xl font-serif font-bold mb-4">{title}</h2>
    {children}
  </section>
);

interface ExperienceProps {
  experience: Experience[];
}

const ExperienceComponent: React.FC<ExperienceProps> = ({ experience }) => {
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

const Resume: React.FC = () => {
  return (
    <main className="min-h-screen bg-backgroundGreen text-textGreen font-sans p-8">
      <section className="text-center mb-12">
        <h1 className="text-6xl font-serif font-bold">{personalInfo.name}</h1>
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
        <ExperienceComponent experience={experienceData} />
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
        <p>© 2024 Elizabeth Hagearty</p>
      </footer>
    </main>
  );
};

export default Resume;
