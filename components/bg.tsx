import React from "react";

interface Skill {
  company : string,
  date : string, 
  role : string
}

const BgSection: React.FC = () => {
  const works: Skill[] = [
    {
    company : "Zeron", 
    date : "Dec 2025",
    role : "Upcoming CyberSecurity Engineering Intern"
   },
   {
    company : "Indian Institute of Technology, Guwahati", 
    date : "July 2023 - Present",
    role : "Engineering Undergrad"
   },
    {
    company : "Hacktoberfest", 
    date : "Oct 2025",
    role : "Open Source Contributor"
   },
   {
    company : "Zeroes Research Labs(AdVise)", 
    date : "May 2025 - Jun 2025",
    role : "AI Developer Intern"
   },
   
  ];

  return (
    <section className="py-20 px-8 bg-white border-b border-gray-100">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold tracking-wider mb-16">
            EXPERIENCE & EDUCATION
          </h2>
        </div>

        <div className="relative border-l border-gray-200 ml-4">
          {works.map((work, index) => (
            <div key={index} className="mb-10 ml-6">
              <div className="absolute w-3 h-3 bg-gray-300 rounded-full -left-1.5 mt-2.5"></div>
                <div className="text-2xl font-semibold mb-3">
                {work.role}
                </div>
                 
                <div className="text-xl font-semibold text-gray-700 mb-3">
                    {work.company}
                </div>
              <span
                    className="text-md font-semibold text-gray-500"
                  >
                    {work.date}
                  </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BgSection;
