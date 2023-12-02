import React from "react";
import logo from "./logo.svg";

function App() {
  return (
    <div className="h-[100vh] w-[100vw] bg-dark-red flex justify-center items-center">
      <form className="h-[700px] w-[500px] bg-white flex flex-col items-center rounded-lg justify-evenly">
        <h1 className="font-bold text-[20px] animate-bounce">Login</h1>
        <input
          placeholder="Email"
          className="border-b-2 border-gray-500 transition-all duration-300 focus:border-[#980000] focus:outline-none"
        />
        <input
          type={"password"}
          placeholder="Password"
          className="border-b-2 border-gray-500 transition-all duration-300 focus:border-[#980000] focus:outline-none"
        />
        <button className="w-[40%] h-[5%] font-bold rounded-lg bg-[#980000] text-white transition-all duration-200 hover:bg-black hover:text-white">
          Submit
        </button>
      </form>
    </div>
  );
}

export default App;
