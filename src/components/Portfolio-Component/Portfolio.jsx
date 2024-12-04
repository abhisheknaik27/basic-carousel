import React from "react";

const Portfolio = () => {
  return (
    <div className="container mx-auto flex items-center justify-center h-screen bg-gray-100">
      <div className="flex flex-col items-center justify-center bg-white rounded-lg shadow-md p-8">
        <div className="flex flex-col gap-4 mb-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col gap-2 border rounded-lg p-4">
              <h3 className="text-lg font-bold">About Me</h3>
              <p className="text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
            <div className="flex flex-col gap-2 border rounded-lg p-4">
              <h3 className="text-lg font-bold">Resume</h3>
              <p className="text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-4">
            <div className="flex flex-col gap-2 border rounded-lg p-4">
              <h3 className="text-lg font-bold">Projects</h3>
              <p className="text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
            <div className="flex flex-col gap-2 border rounded-lg p-4">
              <h3 className="text-lg font-bold">Skills</h3>
              <p className="text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
            <div className="flex flex-col gap-2 border rounded-lg p-4">
              <h3 className="text-lg font-bold">Contact</h3>
              <p className="text-gray-600">
                You can reach me at: email@example.com
              </p>
            </div>
          </div>
        </div>
        <h1 className="text-2xl font-bold text-center">ABHISHEK NAIK</h1>
      </div>
    </div>
  );
};

export default Portfolio;
