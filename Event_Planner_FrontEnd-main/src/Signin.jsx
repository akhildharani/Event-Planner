import React from "react";
import { useRef, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { useAuth } from "./AuthProvider";
import { useContent } from "./ContProvider";
import axios from 'axios';

const SignIn = () => {

  const user = useRef("");
  const pass = useRef("");
  const [err, setErr] = useState();
  const {signin,curruser}=useAuth();
  const {setData}=useContent();
  const [loading,setLoading]=useState(false);
  const handlesubmit = async () => {
    try {
      setLoading(true);
      setErr("");
      //console.log(`${user.current.value} ${pass.current.value}`);
      await signin(user.current.value, pass.current.value);
     
      pass.current.value = "";
        
     

      setLoading(false);
    } catch (err) {
      console.log(err);
      setErr("User not found");
    }

  };

  return  !curruser?(<main className="flex flex-col min-h-screen bg-blue-950 items-center justify-center text-center  ">
    <div className="text-5xl text-white">
    <b>Event Planner</b>
    </div>
      <h1 className="text-4xl text-blue-300 ">Sign In</h1>

      <form
        action=""
        className="my-5 flex flex-col justify-center items-center"
      >
        <input
          type="Email"
          placeholder="email address"
          className=" bg-slate-950 text-lg placeholder:text-slate-40 text-yellow-500 p-2  w-80 border-x border-y focus:outline-none rounded-lg"
          autoComplete="off"
          ref={user}
          required
        />
        <input
          type="password"
          placeholder="Password"
          className=" bg-slate-950 text-lg placeholder:text-slate-40 text-white p-2  w-80 border-x border-y  focus:outline-none  m-1 rounded-lg"
          autoComplete="off"
          ref={pass}
          required
        />

        <input
          type="button"
          value="Sign In"
          className=" rounded-xl text-lg text-slate-800 bg-blue-300 hover:bg-green-500 text-center p-2 transition-all  w-80 shadow-lg shadow-slate-900"
          onClick={handlesubmit}
        />

        <h1 className="text-xl text-slate-300">won't have an account.</h1>
        <Link to="/" className="text-xl text-yellow-500  hover:underline ">
          Signup
        </Link>
      </form>
      {err ? (
        <h1 className=" bg-red-300 rounded-lg border-red-600 border-2 p-2 text-xl text-red-900">
          {err}
        </h1>
      ) : null}
    </main>):!loading ? (
  
    user.current.value.includes(".org") ? (
      <Navigate to="/OrgProfile" />
    ) : (
      <Navigate to="/Profile" />
    )
  
) : (
  <h1>Loading...</h1>
);
     
};

export default SignIn;