// pages/index.tsx
import type { NextPage } from "next";

const links = [
  { name: "Home", url: "/" },
  { name: "Resume", url: "/resume" },
  { name: "LinkedIn", url: "https://www.linkedin.com" },
  { name: "Github", url: "https://github.com" },
  { name: "Instagram", url: "https://www.instagram.com" },
  { name: "X", url: "https://twitter.com" },
];

const Home: NextPage = () => {
  return (
    <>
      <main className="min-h-screen flex items-center justify-center bg-white text-black w-[100vw] h-[100h]">
        <div className="grid grid-cols-3 grid-rows-2 text-center w-full h-[100vh]">
          {links.map((link) => (
            <div 
              key={link.name} className="border border-gray-300 ">
                <a
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
                className="underline w-full h-full text-4xl flex flex-col justify-center"
            >
              {link.name}
            </a>
            </div>
          ))}
        </div>
      </main>
    </>
  );
};

export default Home;
