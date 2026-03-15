import React from "react";

function Header() {
  return (
    <header className="lg:w-1/2 lg:h-screen p-5  lg:flex flex flex-col justify-between lg:sticky lg:top-0">
      <div className="lg:p-20  lg:flex lg:flex-col gap-4">
        <h1 className="text-3xl lg:text-4xl font-bold text-slate-200">
          Kaushik Mudaliyar
        </h1>
        <h3 className="text-xl lg:text-2xl text-slate-200 font-semibold">
          Full Stack Developer
        </h3>
        <p className="text-slate-300">
          Final year Computer Engineering student passionate about building
          robust backends and clean user interfaces.
        </p>
      </div>
      <div className="lg:px-25 lg:py-0">
        <nav className="hidden lg:block">
          <ul>
            <li className="group lg:flex items-center gap-2 lg:p-4">
              <hr className="w-10 border-slate-500 transition-all duration-300 group-hover:w-16 group-hover:border-slate-200" />
              <a href="#about">About</a>
            </li>
            <li className="group lg:flex items-center gap-2 lg:p-4 ">
              <hr className="w-10 border-slate-500 transition-all duration-300 group-hover:w-16 group-hover:border-slate-200" />

              <a href="#project">Projects</a>
            </li>
            <li className="group lg:flex items-center gap-2 lg:p-4">
              <hr className="w-10 border-slate-500 transition-all duration-300 group-hover:w-16 group-hover:border-slate-200" />
              <a href="#education">Education</a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="flex gap-4 lg:p-25 mt-10">
        <a href="https://github.com/Kaushik-Mudaliyar" target="_blank">
          Github
        </a>
        <a href="https://linkedin.com/in/kaushik-mudaliyar" target="_blank">
          Linkedin
        </a>
      </div>
    </header>
  );
}

export default Header;
