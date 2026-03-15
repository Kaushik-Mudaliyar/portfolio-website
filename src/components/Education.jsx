import React from "react";

function Education() {
  return (
    <div
      id="education"
      className="lg:flex lg:p-4 mt-12 shadow items-start gap-20"
    >
      <h1 className="font-bold text-gray-200 block lg:hidden">EDUCATION</h1>
      <div className="mt-6">
        <span className="font-bold">2022-2026</span>
      </div>
      <div className="flex flex-col">
        <h3 className="text-xl font-bold text-slate-300">
          {" "}
          B.Tech (Gandhinagar University)
        </h3>

        <span>Computer Engineering</span>
        <span>CGPA: 8.18</span>
      </div>
    </div>
  );
}

export default Education;
