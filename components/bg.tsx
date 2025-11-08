import React from "react";

interface Skill {
  company : string,
  date : string, 
  role : string,
  location : string
}

const BgSection: React.FC = () => {
  const works: Skill[] = [
    {
    company : "Zeron", 
    date : "Dec 2025",
    role : "Upcoming Software Engineering Intern",
    location : "Remote"
   },
   {
    company : "Indian Institute of Technology, Guwahati", 
    date : "July 2023 - Present",
    role : "Engineering Undergraduate",
    location : "Assam, India"
   },
    {
    company : "Hacktoberfest", 
    date : "Oct 2025",
    role : "Open Source Contributor",
    location : "Remote"
   },
   {
    company : "Zeroes Research Labs(AdVise)", 
    date : "May 2025 - Jun 2025",
    role : "Full Stack Developer Intern",
    location : "Remote"
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

        <div className="relative border-l border-gray-200 ml-4 cursor-pointer">
          {works.map((work, index) => (
            <div key={index} className="mb-12 ml-6">
              <div className="absolute w-3 h-3 bg-gray-300 rounded-full -left-1.5 mt-2.5"></div>
                <div className="text-2xl font-semibold mb-2">
                {work.role}
                </div>
                 
                <div className="text-xl font-semibold text-gray-700 ">
                    {work.company}
                </div>
              <span
                    className="text-md font-semibold text-gray-500"
                  >
                    {work.date} {'\t•\t'} {work.location}
                  </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BgSection;
