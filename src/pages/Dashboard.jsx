import React, { useState } from "react";

const Dashboard = () => {
  // State to track whether the right column is visible or not
  const [isRightColumnVisible, setIsRightColumnVisible] = useState(true);

  // Function to toggle visibility of the right column
  const toggleRightColumn = () => {
    setIsRightColumnVisible(!isRightColumnVisible);
  };

  return (
    <div className="flex min-h-[calc(100vh_-_68px)]">
      {/* Left Column (25%) */}
      <div className="w-[300px] bg-[#1A1F7D] p-4">
        <h2 className="text-white text-lg">Easy Access</h2>
        <div className="flex gap-3 p-2">
          <div className="flex flex-col justify-center w-fit">
            <div className="bg-white w-10 h-10 rounded-full border mx-auto"></div>
            <span className="text-xs">Main Module</span>
          </div>
          <div className="flex flex-col justify-center w-fit">
            <div className="bg-white w-10 h-10 rounded-full border mx-auto"></div>
            <span className="text-xs">Main Module</span>
          </div>
          <div className="flex flex-col justify-center w-fit">
            <div className="bg-white w-10 h-10 rounded-full border mx-auto"></div>
            <span className="text-xs">Main Module</span>
          </div>
          <div className="flex flex-col justify-center w-fit">
            <div className="bg-white w-10 h-10 rounded-full border mx-auto"></div>
            <span className="text-xs">Main Module</span>
          </div>
        </div>

        <h2 className="text-white text-lg mt-5">My Tools</h2>
        <div className="flex flex-col gap-3 p-2">
          <div className="flex gap-2 justify-center w-fit">
            <div className="bg-white w-6 h-6 rounded-full border mx-auto"></div>
            <span className="text-xs my-auto">Main Module</span>
          </div>

          <div className="flex gap-2 justify-center w-fit ml-8">
            <div className="bg-white w-6 h-6 rounded-full border mx-auto"></div>
            <span className="text-xs my-auto">Feature</span>
          </div>

          <div className="flex gap-2 justify-center w-fit ml-16">
            <div className="bg-white w-6 h-6 rounded-full border mx-auto"></div>
            <span className="text-xs my-auto">Feature Action</span>
          </div>
        </div>
      </div>

      {/* Middle Column (75% or 100% when right column is hidden) */}
      <div
        className={` bg-[#e1e7ed] p-4 ${
          !isRightColumnVisible ? "flex-grow" : "flex-grow"
        }`}
      >
        {/* toggle button */}
        <div
          className={`${
            isRightColumnVisible ? "hidden" : "flex"
          } justify-end mb-2`}
        >
          <button
            onClick={toggleRightColumn}
            className="bg-[#1A1F7D] text-white p-2 rounded-md mg:hidden"
          >
            {isRightColumnVisible ? "Hide" : "Show"}
          </button>
        </div>

        <div className="bg-[#8186e9] min-h-[50%] p-4 flex flex-col">
          <p className="text-black mt-auto">GRADING SYSTEM</p>
          <h2 className="text-black text-3xl font-bold">Grading System</h2>
        </div>

        <div className="bg-white min-h-[30%] p-4">
          <p className="text-black">What does this do?</p>
        </div>

        <div className="p-4 flex flex-end">
          <button className="w-[100px] font-bold bg-white text-black p-2 rounded ml-auto">
            Start
          </button>
        </div>
      </div>

      {/* Right Column (20%) */}
      <div
        className={`w-[250px] bg-[#1A1F7D] p-4 ${
          isRightColumnVisible ? "block" : "hidden"
        } block`}
      >
        <div className="flex justify-end">
          <button
            onClick={toggleRightColumn}
            className=" text-white p-2 rounded-md mg:hidden"
          >
            {isRightColumnVisible ? "Hide" : "Show"}
          </button>
        </div>

        <div className="bg-[#e1e7ed] rounded p-4 min-h-[40%] mb-4">
          <h1 className="text-black text-2xl">Progress</h1>
        </div>

        <div className="bg-[#e1e7ed] rounded p-4 min-h-[30%] mb-4">
          <h1 className="text-black text-2xl">Guiding Bees</h1>
        </div>

        <div className="bg-[#e8a9aa] rounded p-2 min-h-[10%] flex flex-col">
          <span className="text-center text-black text-2xl font-bold">
            12:00 PM
          </span>
          <span className="text-center text-black text-lg font-bold">
            Jan 01, 2024
          </span>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
