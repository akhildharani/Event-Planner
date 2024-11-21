import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <main className=" min-h-screen bg-slate-900 overflow-x-hidden">
      <div className="flex flex-col h-screen items-center justify-center flex-nowrap   z-50">
        <h1 className=" text-7xl bg-gradient-to-r from-blue-500 via-indigo-500 to-sky-500 bg-clip-text text-transparent font-michroma font-bold mb-10 -mt-5 mx-2 z-50 ">
          EVENT PLANNER
        </h1>

        <div class="text-center w-full ">
          <h1 className="my-1 lg:text-3xl text-xl text-sky-500 font-bold leading-tight ">
            Running Short For Event Planning?
          </h1>
          <h1 className="my-1 lg:text-3xl text-xl text-sky-500 font-bold leading-tight">
            {" "}
            Don't Worry! Just Relax{" "}
            <font className=" md:text-5xl text-3xl font-Proxima-Nova text-fuchsia-100	 font-extrabold font-outfit">
              You're Heard
            </font>
          </h1>
          <p className="mb-8 lg:text-lg text-slate-400 font-outfit text-sm">
            Our Platform Bridges The Gap Between You And Event Organisers
          </p>
          <div className="flex justify-center gap-5">
            <Link to="/signup">
              {" "}
              <button className="hover:bg-sky-500 transition-all delay-200 bg-white text-gray-800 font-bold rounded-full  lg:py-4 lg:px-8 py-2 px-4 hover:outline-4 hover:outline-sky-300 hover:outline">
                SIGN UP
              </button>
            </Link>
            <Link to='/signin'>
            <button className="hover:bg-sky-500 transition-all delay-200 bg-white text-gray-800 font-bold rounded-full  lg:py-4 lg:px-8 py-2 px-4  hover:outline-4 hover:outline-sky-300 hover:outline">
              SIGN IN
            </button>
            </Link>
          </div>
        </div>
      </div>

      <div className="w-80 h-80 rounded-full bg-indigo-900 opacity-60 blur-3xl absolute -top-3 -left-10 z-10 "></div>

      <div className="w-80 h-80 rounded-full  bg-blue-900 opacity-60 blur-3xl absolute top-28 right-10 z-10 "></div>
    </main>
  );
};

export default Home;