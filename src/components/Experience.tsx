import React from 'react';

interface ExperienceProps {
  experience: {
    company: string;
    title: string;
    duration: string;
    responsibilities: string[];
  }[];
}

const Experience: React.FC<ExperienceProps> = ({ experience }) => {
  return (
    <div className="space-y-8">
      {experience.map((job, index) => (
        <div key={index} className="bg-backgroundLight p-6 rounded-lg shadow-md">
          <h3 className="text-2xl font-semibold mb-1">{job.company}</h3>
          <p className="text-xl italic mb-2">{job.title}</p>
          <p className="text-sm mb-4">{job.duration}</p>
          <ul className="list-disc ml-6 space-y-2">
            {job.responsibilities.map((responsibility, i) => (
              <li key={i} className="text-sm">{responsibility}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Experience;