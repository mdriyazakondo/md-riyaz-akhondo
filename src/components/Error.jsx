import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="min-h-screen flex items-center justify-center flex-col space-y-5">
      <h3 className="text-6xl font4 ">404</h3>
      <h4 className="text-2xl font1 ">Page Is Not Found</h4>
      <Link
        className="px-6 py-1.5 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-md text-xl font2"
        to="/"
      >
        Go Back
      </Link>
    </div>
  );
};

export default Error;
