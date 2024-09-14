"use client";
import React, { useState, useEffect, useRef } from 'react';
import { FiPlus, FiMinus } from 'react-icons/fi';
import { motion, AnimatePresence, useAnimation, useInView } from 'framer-motion';
import { personalInfo, timelineData, TimelineItemType, skillsData } from '@/data';
import { twMerge } from 'tailwind-merge';

interface SectionWrapperProps {
  title: string;
  children: React.ReactNode;
}

interface RevealProps {
  children: React.ReactNode;
  color?: string;
}


const Reveal: React.FC<RevealProps> = ({ children, color = "bg-slate-950" }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const mainControls = useAnimation();
  const slideControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
      slideControls.start("visible");
    }
  }, [isInView, mainControls, slideControls]);

  return (
    <div ref={ref} className="relative w-fit overflow-hidden">
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.5, delay: 0.25 }}
      >
        {children}
      </motion.div>
      <motion.div
        variants={{
          hidden: { left: 0 },
          visible: { left: "100%" },
        }}
        initial="hidden"
        animate={slideControls}
        transition={{ duration: 0.5, ease: "easeIn" }}
        className={twMerge("absolute bottom-1 left-0 right-0 top-1 z-20", color)}
      />
    </div>
  );
};

const SectionWrapper: React.FC<SectionWrapperProps> = ({ title, children }) => (
  <section className="mb-12">
    <h2 className="text-center text-3xl font-serif font-bold mb-4">{title}</h2>
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
    <motion.div
      className="relative flex flex-col border-l-4 border-black pl-6 py-4 cursor-pointer group"
      onClick={() => toggleExpand(item.id)}
    >
      <div
        className={`absolute left-[-14px] w-6 h-6 rounded-full flex items-center justify-center border 
          transition-all duration-300 ease-in-out
          ${isExpanded ? 'bg-slate-50 border-black text-black' : 'bg-black text-white group-hover:bg-slate-950 group-hover:border-black'}`}
      >
        {isExpanded ? <FiMinus /> : <FiPlus />}
      </div>
      <Reveal color="bg-black">
        <p className="text-black font-semibold mb-1 text-base">{item.yearRange}</p>
      </Reveal>
      <Reveal>
        <div className="flex flex-col sm:flex-row sm:items-center">
          {item.company && (
            <span className="inline-block max-w-[fit-content] mb-1 sm:mb-0 border border-slate-950 text-slate-950 text-sm font-medium px-3 py-1 rounded-full  sm:mr-2">
              {item.company}
            </span>
          )}
          <h3 className="text-l font-bold flex-none items-center">
            {item.title}
            {item.team && (
              <span className="text-sm font-medium ml-2 text-nowrap">
                | {item.team}
              </span>
            )}
          </h3>
        </div>
      </Reveal>
      
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            className="mt-2 text-sm max-w-lg overflow-hidden"
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
    </motion.div>
  );
};

const Home: React.FC = () => {
  const [timeline, setTimeline] = useState<TimelineItemType[]>(timelineData);

  const toggleExpand = (id: number) => {
    setTimeline(prevTimeline =>
      prevTimeline.map(item =>
        item.id === id ? { ...item, expanded: !item.expanded } : item
      )
    );
  };

  return (
    <main className="min-h-screen bg-slate-50 text-slate-950 font-courier p-8">
      <section className="text-left mb-12">
        <h1 className="text-3xl font-serif font-bold">{personalInfo.name}</h1>
        <p className="text-l">Engineer. Artist. Entrepreneur.</p>
      </section>

      <SectionWrapper title="">
        {timeline.map((item, index) => (
          <TimelineItem key={item.id} item={item} toggleExpand={toggleExpand} />
        ))}
      </SectionWrapper>
      <SectionWrapper title="Skills">
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
    </main>
  );
};

export default Home;
