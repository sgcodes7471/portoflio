import React, { JSX, useState } from "react";

interface Skill {
  company : string,
  date : string, 
  role : string,
  location : string,
  details: JSX.Element,
}

const BgSection: React.FC = () => {
  const works: Skill[] = [
    {
    company : "Zeron", 
    date : "Present",
    role : "Engineering Intern",
    location : "Remote",
    details : <>Researching to design Taxanomy, generating <b className="text-red-500">Synthetic Datasets</b>, and building and implementation of Quantitative Models for <b className="text-red-500">Cyber-Exploitations detection</b></>
   },
   {
     company : "Hacktoberfest", 
     date : "Oct 2025",
     role : "Open Source Contributor",
     location : "Remote",
     details : <>Contributed using <b className = "text-red-500">JavaScript</b> and <b className = "text-red-500">Supabase</b> to build content moderation system and a serverless realtime chat feature</>
   },
   {
     company : "Zeroes Research Labs", 
     date : "May 2025 - Jun 2025",
     role : "Full-Stack Developer Intern",
     location : "Remote",
     details : <>Worked with <b className = "text-red-500">Next.js</b> and <b className = "text-red-500">LLMs</b> to make AI Advertisement pipelines and Dashboards</>
    },
    {
     company : "Indian Institute of Technology", 
     date : "July 2023 - Present",
     role : "Engineering Undergraduate",
     location : "Guwahati, India",
     details : <>Took key <b className="text-red-500">Computer Sciences</b> courses of Data Structures, Networks and Database Management Systems while having a major in Chemistry</>
    }
  ];

  const [openedSection , setOpenedSection] = useState(-1);
  
  const handleOpenSection = (section_id : number) => {
    if(openedSection == section_id) {
      setOpenedSection(-1);
      return;
    }

    setOpenedSection(section_id);
  }

  return (
    <section className="py-20 px-8  border-b border-gray-100">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold tracking-wider mb-16">
            EXPERIENCE & EDUCATION
          </h2>
        </div>

        <div className="relative border-l border-gray-200 ml-4 cursor-pointer">
          {works.map((work, index) => {
              return(
                <div 
                  key={index} 
                  className="mb-12 ml-6 cursor-pointer" 
                  onClick={() => handleOpenSection(index)}
                  >
                  <div className="absolute w-3 h-3 bg-gray-300 rounded-full -left-1.5 mt-2.5"></div>
                    <div className="text-2xl font-semibold mb-2">
                      {work.role}
                      
                    </div>
                    
                    <div className="font-semibold text-gray-700 ">
                        <span className="text-xl ">{work.company}</span>
                        <span
                          className="text-md font-semibold text-gray-500">
                            {'\t•\t'} {work.location}
                        </span>
                    </div>
                    <span
                        className="text-md font-semibold text-gray-500"
                    >
                      {work.date} 
                    </span>
                 
                    <span className={`block text-gray-600 mt-2 text-md leading-relaxed text-wrap sm:w-1/2 w-full transition-all duration-500 ease-in-out overflow-hidden 
                      ${openedSection === index ? "max-h-40 opacity-100" : "max-h-0 opacity-100"}`}>
                      {work.details}
                    </span>
                  
                </div>
              )
          })}
        </div>
      </div>
    </section>
  );
};

export default BgSection;
