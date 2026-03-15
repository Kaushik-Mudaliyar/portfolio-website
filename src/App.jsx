import { useState } from "react";
import Header from "./components/Header";
import About from "./components/About";
import Education from "./components/Education";
import Project from "./components/Project";

function App() {
  const projects = [
    {
      id: 1,
      title: "Blog Application",
      description:
        "Full-stack MERN platform with Appwrite integration, featuring secure authentication, rich-text editing, and a mobile-first responsive design.",
      image: "./blog.png", // You can pass custom classes or image URLs here
    },
    {
      id: 2,
      title: "VideoTube (YouTube like backend)",
      description:
        "Scalable Node.js & MongoDB API featuring JWT authentication, Cloudinary media management, and custom middleware for complex video-sharing functionality.",
      image: "./backend.png",
    },
  ];

  return (
    <>
      <div className="lg:flex bg-slate-900 text-gray-50">
        {/* Left side Sticky Header */}
        <Header />
        <main className="lg:w-1/2 text-slate-300 mt-6 lg:mt-0">
          <section className="flex flex-col lg:p-20 p-5">
            {/* About Section */}
            <h1 className="font-bold text-gray-200 block lg:hidden">ABOUT</h1>
            <About />
            {/* Project Section */}
            <h1 className="font-bold text-gray-200 block lg:hidden mt-10">
              PROJECTS
            </h1>

            {projects.map((item) => (
              <Project
                key={item.id}
                title={item.title}
                description={item.description}
                image={item.image}
              />
            ))}

            {/* Education Section */}
            <Education />
          </section>
        </main>
      </div>
    </>
  );
}

export default App;
