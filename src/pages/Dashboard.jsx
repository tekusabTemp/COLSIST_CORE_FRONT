import React, { useState, useEffect } from "react";

const Dashboard = () => {
  const [time, setTime] = useState({
    hours: "00",
    minutes: "00",
    seconds: "00",
    ampm: "AM"
  });

  const updateTime = () => {
    const now = new Date(); // Get the current time
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    // Convert to 12-hour format and determine AM/PM
    const ampm = hours >= 12 ? "PM" : "AM";
    const formattedHours = hours % 12 || 12; // Convert 0 to 12 for 12-hour format
    const formattedMinutes = minutes.toString().padStart(2, "0");
    const formattedSeconds = seconds.toString().padStart(2, "0");

    // Update state
    setTime({
      hours: formattedHours.toString().padStart(2, "0"),
      minutes: formattedMinutes,
      seconds: formattedSeconds,
      ampm: ampm
    });
  };

  useEffect(() => {
    updateTime(); // Initialize the time
    const interval = setInterval(updateTime, 1000); // Update every second

    return () => clearInterval(interval); // Cleanup on component unmount
  }, []);
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
          <div className="flex flex-col justify-center w-fit gap-2 text-center items-center">
            <button className="btn btn-circle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <span className="text-xs">Main Module</span>
          </div>
          <div className="flex flex-col justify-center w-fit gap-2 text-center items-center">
            <button className="btn btn-circle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <span className="text-xs">Main Module</span>
          </div>
          <div className="flex flex-col justify-center w-fit gap-2 text-center items-center">
            <button className="btn btn-circle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <span className="text-xs">Main Module</span>
          </div>
          <div className="flex flex-col justify-center w-fit gap-2 text-center items-center">
            <button className="btn btn-circle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <span className="text-xs">Main Module</span>
          </div>
        </div>
        <h2 className="text-white text-lg mt-5">My Tools</h2>
        <ul className="menu  rounded-box w-full">
          <li>
            <a href="#">Item 1</a>
          </li>
          <li>
            <details>
              <summary>Parent</summary>
              <ul>
                <li>
                  <a href="#">Submenu 1</a>
                </li>
                <li>
                  <a href="#">Submenu 2</a>
                </li>
                <li>
                  <details>
                    <summary>Parent</summary>
                    <ul>
                      <li>
                        <a href="#">Submenu 1</a>
                      </li>
                      <li>
                        <a href="#">Submenu 2</a>
                      </li>
                    </ul>
                  </details>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <a href="#">Item 3</a>
          </li>
        </ul>
      </div>

      {/* Middle Column (75% or 100% when right column is hidden) */}
      <div
        className={` bg-[#e1e7ed] p-4 flex-grow flex flex-col relative overflow-hidden`}
      >
        {/* toggle button */}
        <div
          className={`${
            isRightColumnVisible ? "hidden" : "flex "
          } justify-end mb-2 absolute top-2 right-0 translate-x-1/2`}
        >
          <button
            onClick={toggleRightColumn}
            className="bg-gray-800 text-white p-2 rounded-full h-[40px] w-[40px] mg:hidden flex justify-start"
          >
            {isRightColumnVisible ? ">" : "<"}
          </button>
        </div>

        <div className="flex flex-col rounded-3xl overflow-hidden flex-grow">
          <div className="bg-[#8186e9] min-h-[50%] p-4 flex flex-col justify-end items-start">
            <p className="text-black mt-auto">GRADING SYSTEM</p>
            <h2 className="text-black text-3xl font-bold">Grading System</h2>
          </div>
          <div className="bg-white min-h-[30%] p-4 flex-grow">
            <p className="text-black">What does this do?</p>
          </div>
        </div>
        <div className="p-4 flex flex-end">
          <button className="w-[100px] font-bold bg-white text-black p-2 rounded ml-auto">
            Start
          </button>
        </div>
      </div>

      {/* Right Column (20%) */}
      <div
        className={`w-[250px] bg-[#1A1F7D] px-4 pt-3 flex flex-col gap-2 ${
          isRightColumnVisible ? "block" : "hidden"
        } block relative`}
      >
        <div className="flex justify-center items-center rounded-full bg-gray-800 w-[40px] h-[40px] absolute top-2 left-0 -translate-x-1/2 z-20">
          <button
            onClick={toggleRightColumn}
            className=" text-white p-2 rounded-md mg:hidden"
          >
            {isRightColumnVisible ? ">" : "<"}
          </button>
        </div>
        {/* Top part */}
        <div className="flex-grow flex flex-col gap-2 ">
          <details className="collapse bg-base-200 text-sm" open>
            <summary className="collapse-title text-lg font-medium">
              Progress
            </summary>
            <div className="collapse-content">
              <p>
                <ul className="steps steps-vertical">
                  <li className="step step-primary">Register</li>
                  <li className="step step-primary">Choose plan</li>
                  <li className="step">Purchase</li>
                  <li className="step">Receive Product</li>
                </ul>
              </p>
            </div>
          </details>

          <details className="collapse bg-base-200 text-sm" open>
            <summary className="collapse-title text-lg font-medium">
              Guiding Bees
            </summary>
            <div className="collapse-content">
              <p>
                <label className="swap swap-flip text-9xl">
                  {/* this hidden checkbox controls the state */}
                  <input type="checkbox" />

                  <div className="swap-on">😁</div>
                  <div className="swap-off">🐝</div>
                </label>
              </p>
            </div>
          </details>
        </div>

        <div className="bg-gray-800 rounded-t-2xl rounded-b-none p-2  flex flex-col">
          <div className="text-center text-white text-2xl font-bold">
            <span className="countdown font-mono text-2xl">
              <span style={{ "--value": time.hours }}>{time.hours}</span>:
              <span style={{ "--value": time.minutes }}>{time.minutes}</span>:
              <span style={{ "--value": time.seconds }}>{time.seconds}</span>
              &nbsp;
              {time.ampm}
            </span>
          </div>
          <span className="text-center text-white text-lg font-bold">
            2024-12-01 | Sun
          </span>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
