import React from "react";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";
import SmoothFollower from "../components/SmoothFollower";
import NeuralGlow from "../components/NeuralGlow";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Main = () => {
  return (
    <div
      style={{
        position: "relative",
        width: "100%",
      }}
    >
      {/* Persistent background */}
  

      {/* Main content */}
      <div style={{ position: "relative", zIndex: 1 }}>
        <Navbar />
        <main className="max-w-7xl mx-auto my-6 min-h-[76vh]">
          <Outlet />
        </main>
      </div>

      {/* Toast notifications */}
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
};

export default Main;
