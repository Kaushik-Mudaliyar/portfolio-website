import React from "react";

function Project(props) {
  console.log(props);
  return (
    <div id="project" className="lg:w-full lg:flex gap-10 lg:items-center">
      <div className="w-full mt-6 h-24 bg-slate-400 shrink-0 rounded-xl md:w-40  ">
        <img
          src={props.image}
          alt={props.title}
          className="h-full w-full object-cover transition group-hover:scale-110 rounded-xl"
        />
      </div>
      <div className="mt-6 lg:p-5">
        <h3 className="text-lg text-slate-300 font-semibold">
          {/* Blog  Application */}
          {props.title}
        </h3>
        <p className="text-slate-400">
          {/* Full-stack MERN platform with Appwrite integration, featuring secure
          authentication, rich-text editing, and a mobile-first responsive
          design. */}
          {props.description}
        </p>
      </div>
    </div>
  );
}

export default Project;
