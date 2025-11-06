import React from "react";

interface Skill {
  category: string;
  items: string[];
}

const SkillsSection: React.FC = () => {
  const skills: Skill[] = [
    { category: "Programming Languages", items: ["Python", "JavaScript", "TypeScript", "C++", "SQL"] },
    { category: "Computer Fundamentals", items: ["Data Structures & Algorithms", "OOPS", "Networks", "DBMS"] },
    { category: "Development", items: ["React", "Next.js", "Node.js", "FastAPI", "Flask", "React Native", "Websockets"] },
    { category: "Blockchain", items: ["Solidity", "ZK-SNARKs", "IPFS", "Graph Protocol"] },
    { category: "AI & Data Science", items: ["Pandas", "NumPy", "Scikit-learn", "Data Analysis", "Supervised Learning", "AI Pipelines"] },
    { category: "Tools", items: ["Git", "Docker", "AWS", "Supabase", "MongoDB"] },
  ];

  return (
    <section className="py-20 px-8 bg-white">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl font-bold tracking-wider mb-16">SKILLS & EXPERTISE</h2>
        {/* <p className="text-gray-600 ">Technologies and tools I work with.</p> */}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {skills.map((skill, idx) => (
            <div key={idx} className="text-left">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{skill.category}</h3>
              <div className="flex flex-wrap gap-3">
                {skill.items.map((item, i) => (
                  <span key={i} className="bg-gray-100 text-gray-800 text-sm px-3 py-1 rounded border border-gray-200">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
