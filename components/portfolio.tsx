'use client'

import { useState, useEffect } from 'react';
import { Monitor } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import BgSection from './bg';
import SkillsSection from './skill';
import Connect from './connect';

const Portfolio = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const projects = [
    {
      title: "Carbon X",
      description: "A decentralized platform for tracking energy usage and enabling peer-to-peer energy trading supporting real-time trade broadcasting, secure order matching, and privacy-preserving transactions, with verified identities using NFTs as decentralized identifiers.",
      tags: ["# blockchain", "# microcontroller", "# defi"],
      link: "https://github.com/sgcodes7471/carbon-x"
    },
    {
      title: "Dream",
      description: "A platform that predicts and recommends optimal fantasy cricket teams using a Gradient Boosting Machine, provides detailed performance analysis with interactive visualizations, delivers automated email updates, and generates AI-driven commentary on matches.",
      tags: ["# generative-ai", "# gradient-boost", "# etl"],
      link: "https://github.com/D11-MP/Dream11-prototype"
    },
    {
      title: "ThreeTube",
      description: "A platform on ethereum chain for streaming, live broadcasting, and monetizing videos with NFT-based ownership, supporting real-time like updates, interactive viewing, and efficient indexing and querying of on-chain data for seamless user experience.",
      tags: ["# ffmpeg & hls", "# graph-protocol", "# websockets"],
      link: "https://github.com/Dappers24/ThreeTube"
    },
    {
      title: "Make.it",
      description: "A platform that generates complete websites with structured folders using Anthropic AI, supports follow-up prompts for iterative development, includes a file explorer and drag-and-drop component management, and runs live previews in browser.",
      tags: ["# web-conatainers", "# response-parsing", "# llms"],
      link: "https://github.com/sgcodes7471/make.it"
    },
    {
      title: "Custom DBMS",
      description: "A database management system supporting efficient data storage and retrieval with a B+ Tree index, providing insertion, deletion, modification, and search operations, and simulating persistent storage by mapping records to external files.",
      tags: ["# dbms", "# b+ tress", "# oops"],
      link: "https://github.com/sgcodes7471/Custom-DBMS"
    },
    {
      title: "Admin Panel",
      description: "An NPM package that enables the creation of fully functional admin panels for student web committee projects with a single setup, streamlining project management and interface generation.",
      tags: ["# npm-package", "# swc"],
      link: "https://github.com/swciitg/swc_admin_panel"
    }
  ];

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Header */}
      <header className="absolute top-0 left-0 right-0 z-50 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-8 py-4 flex justify-between items-center mb-0">
          <div className="text-3xl font-bold">sg<span className='text-red-500 text-4xl font-bold'>.</span></div>
          
          {/* <Link href="/connect">
          <button className="bg-black text-white px-6 py-2  cursor-pointer">
            Connect!
          </button>
          </Link> */}
          
        </div>
      </header>

      {/* Hero Section */}
      <section className="min-h-screen flex flex-col items-center justify-center px-8 mt-4">
        <div className="max-w-5xl text-center space-y-8">
          <h1 className="text-6xl md:text-7xl font-bold tracking-tight">
            SRINJOY GHOSH<span className='text-red-500 text-6xl md:text-7xl font-bold'>.</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 tracking-widest uppercase">
            Artificial Intelligence, Blockchain, Software Engineering, Computer Networks, Automated Programming, Open Source Contributions
          </p>
          {/* <p className={`text-lg text-gray-700 pt-2 font-sans`}>
            Learning Rust and Solana, Building Low Level Systems
          </p> */}
          <Connect/>
        </div>
        
        
      </section>


<BgSection/>
      

      {/* Projects Section */}
      <section id="projects" className="py-20 px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold tracking-wider mb-4">PINNED PROJECTS</h2>
            {/* <p className="text-gray-600">The pinned projects displays my work for easy reference.</p> */}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <a
                key={index}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
              >
              <div 
                className="bg-white cursor-pointer border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-start gap-3 mb-4">
                  <Monitor size={20} className="mt-1 flex-shrink-0" />
                  <h3 className="text-lg font-semibold underline">{project.title}</h3>
                </div>
                <p className="text-gray-700 text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, idx) => (
                    <span 
                      key={idx}
                      className="bg-gray-800 text-white text-xs px-3 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              </a>
            ))}
          </div>
        </div>

        <div className="text-center my-6">
          <p className="text-gray-600 text-lg mb-1">find more projects on</p>
          <Link
            href="https://github.com/sgcodes7471"
            target="_blank"
            className="text-4xl font-black hover:underline hover:text-gray-800 transition"
          >
            GitHub
          </Link>
        </div>
      </section>
            
            <SkillsSection/>

            




      {/* Contact Section */}
      <section className="py-32 px-8 bg-white">
        <div className="max-w-4xl mx-auto mb-12">
          <div className="flex flex-col md:flex-row gap-12 items-start">
            <div className="flex-shrink-0">
              <div className="w-32 h-32 bg-gray-300 rounded-full overflow-hidden">
                 <Image src="/profile.jpg" alt='profile' width={130} height={130}/>
                {/* <div className="w-full h-full bg-gradient-to-br from-gray-400 to-gray-600"></div> */}
              </div>
            </div>
            
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-normal leading-tight">
                Thanks for stopping by.
              </h2>
              <p className="text-xl md:text-2xl text-gray-700 leading-relaxed">
                Feel free to reach me through any channel.
              </p>
              <p className="text-xl md:text-2xl text-gray-700 leading-relaxed">
                I'm excited to connect with you all.
              </p>
              <p className="text-xl md:text-2xl text-gray-700 leading-relaxed pt-8">
                If you have a projects and desire to collaborate with me,{' '}
                <span className="underline font-medium">I'd love to hear from you</span>.
              </p>
            </div>
          </div>
        </div>
      </section>

      
    </div>
  );
};

export default Portfolio;