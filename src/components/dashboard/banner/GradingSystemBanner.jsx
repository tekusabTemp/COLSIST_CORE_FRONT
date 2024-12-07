import React from "react";

const GradingSystemBanner = () => {
  return (
    <>
      <div className="bg-[#8186e9] min-h-[50%] p-4 flex flex-col justify-end items-start">
        <p className="text-black mt-auto">GRADING SYSTEM</p>
        <h2 className="text-black text-3xl font-bold">Grading System</h2>
      </div>
      <div className="bg-white min-h-[30%] p-4 flex-grow">
        <p className="text-black">What does this do?</p>
      </div>
    </>
  );
};

export default GradingSystemBanner;
