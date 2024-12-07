import React from "react";
import { useState } from "react";

const GradingSystem = () => {
  const subjects = [
    { id: 1, name: "Mathematics", sections: "ST. JUDE", gradeLevel: "GRADE 8" },
    { id: 2, name: "Science", sections: "ST. JUDE", gradeLevel: "GRADE 8" },
    { id: 3, name: "History", sections: "ST. JUDE", gradeLevel: "GRADE 8" },
    { id: 4, name: "History", sections: "ST. JUDE", gradeLevel: "GRADE 8" },
    { id: 5, name: "History", sections: "ST. JUDE", gradeLevel: "GRADE 8" },
    { id: 6, name: "History", sections: "ST. JUDE", gradeLevel: "GRADE 8" },
    { id: 4, name: "History", sections: "ST. JUDE", gradeLevel: "GRADE 8" },
    { id: 5, name: "History", sections: "ST. JUDE", gradeLevel: "GRADE 8" },
    { id: 6, name: "History", sections: "ST. JUDE", gradeLevel: "GRADE 8" },
    { id: 7, name: "English", sections: "ST. JUDE", gradeLevel: ["GRADE 8"] }
  ];

  return (
    <div className="flex flex-col p-6 space-y-6 h-1">
      <h1 className="text-3xl text-black font-bold">Grading System</h1>
      <h1 className="text-black">Choose Subject & Section</h1>  
      {/* Recently selected subject */}
      <div>
        <h3 className="text-black text-2xl font-semibold mb-4">
          Recent Options
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {subjects.map((subject) => (
            <div
              key={subject.id}
              className="bg-white p-3 rounded-lg shadow-md cursor-pointer hover:bg-blue-200 transition"
            >
              <h4 className="text-black text-xl font-semibold">
                {subject.name}
              </h4>
              <div className="mt-4 flex flex-wrap">
                <span className="text-black">
                  {subject.gradeLevel} - {subject.sections}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Other subjects */}
      <div>
        <h3 className="text-black text-2xl font-semibold mb-4">
          Other Subjects
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {subjects.map((subject) => (
            <div
              key={subject.id}
              className="bg-white p-3 rounded-lg shadow-md cursor-pointer hover:bg-blue-200 transition"
            >
              <h4 className="text-black text-xl font-semibold">
                {subject.name}
              </h4>
              <div className="mt-4 flex flex-wrap">
                <span className="text-black">
                  {subject.gradeLevel} - {subject.sections}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GradingSystem;
