"use client";
import React, { useState } from 'react';
import { FiPlus, FiMinus } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';
import { personalInfo, timelineData, TimelineItemType } from '@/data';

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

interface TimelineItemProps {
  item: TimelineItemType;
  toggleExpand: (id: number) => void;
}

const TimelineItem: React.FC<TimelineItemProps> = ({ item, toggleExpand }) => {
  const isExpanded = item.expanded;

  return (
    <div
      className="relative flex flex-col border-l-4 border-black pl-12 py-4 cursor-pointer group"
      onClick={() => toggleExpand(item.id)}
    >
      <div
        className={`absolute left-[-14px] w-6 h-6 rounded-full flex items-center justify-center border 
          transition-all duration-300 ease-in-out
          ${isExpanded ? 'bg-backgroundGreen border-black text-black' : 'bg-black text-white group-hover:text-green-500 group-hover:border-black'}`}
      >
        {isExpanded ? <FiMinus /> : <FiPlus />}
      </div>
      <p className="text-black font-semibold mb-1">{item.yearRange}</p>
      <h3 className="text-2xl font-bold mb-1 flex items-center">
        {item.company && (
          <span className="mr-2 border border-textGreen text-textGreen text-sm font-medium px-3 py-1 rounded-full">
            {item.company}
          </span>
        )}
        {item.title}
      </h3>
      
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            className="mt-2 ml-6 overflow-hidden"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <p>{item.description}</p>
            {Array.isArray(item.details) ? (
              <ul className="list-disc ml-4 mt-2">
                {item.details.map((detail, index) => (
                  <li key={index} className="mt-1">{detail}</li>
                ))}
              </ul>
            ) : (
              <p>{item.details}</p>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const Timeline: React.FC = () => {
  const [timeline, setTimeline] = useState<TimelineItemType[]>(timelineData);

  const toggleExpand = (id: number) => {
    setTimeline(prevTimeline =>
      prevTimeline.map(item =>
        item.id === id ? { ...item, expanded: !item.expanded } : item
      )
    );
  };

  return (
    <main className="min-h-screen bg-backgroundGreen text-textGreen font-sans p-8">
      <section className="text-center mb-12">
        <h1 className="text-6xl font-serif font-bold">{personalInfo.name}</h1>
        <p className="text-xl italic">ENGINEER. ARTIST. ENTREPRENEUR.</p>
      </section>

      <SectionWrapper title="">
        {timeline.map(item => (
          <TimelineItem key={item.id} item={item} toggleExpand={toggleExpand} />
        ))}
      </SectionWrapper>

      <footer className="mt-12 text-center">
        <p>© 2024 Elizabeth Hagearty</p>
      </footer>
    </main>
  );
};

export default Timeline;
