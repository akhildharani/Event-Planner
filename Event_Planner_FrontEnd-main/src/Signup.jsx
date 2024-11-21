import React from "react";
import { useRef, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import './index.css'
import { useAuth } from "./AuthProvider";

const Signup = () => {
  const user = useRef("");
  const pass = useRef("");
  const conpass = useRef("");
  const [err, setErr] = useState();
  const [signupSuccess, setSignupSuccess] = useState(false);

  const { signup } = useAuth();
  
  const handlesubmit = async (e) => {
    e.preventDefault();
    if (pass.current.value !== conpass.current.value) {
      return setErr("Please enter the password correctly");
    }

    try {
      setErr("");
      await signup(user.current.value, pass.current.value);
      user.current.value = "";
      pass.current.value = "";
      conpass.current.value = "";
      setSignupSuccess(true);
      setTimeout(() => {
        setSignupSuccess(false);
      }, 5000);
    } catch (err) {
      console.log(err);
      setErr("Account creation unsuccessful");
      
    }
  };
  return (
    <main className="flex flex-col min-h-screen bg-teal-40 items-center justify-center text-center bg-blue-950">
      <div className="text-5xl text-white">
        <b>Event Planner</b>
      </div>
      <h1 className="text-4xl text-blue-300">Sign Up</h1>

      <form
        action=""
        className="my-5 flex flex-col justify-center items-center"
      >
        <input
          type="Email"
          placeholder="email address"
          className="bg-slate-950 text-lg placeholder:text-slate-40 text-zinc-500 p-2  w-80 border-x border-y border-blue-700 focus:outline-none focus:ring-1 focus:ring-sky-50 rounded-lg"
          autoComplete="off"
          ref={user}
          required
        />
        <input
          type="password"
          placeholder="Password"
          className="bg-slate-950 text-lg placeholder:text-slate-40 text-zinc-500 p-2  w-80 border-x border-y border-blue-700 focus:outline-none focus:ring-sky-500 m-1 rounded-lg"
          autoComplete="off"
          ref={pass}
          required
        />
        <input
          type="password"
          placeholder="Confirm Password"
          className="bg-slate-950 text-lg placeholder:text-slate-40 text-zinc-500 p-2  w-80 border-x border-y border-blue-700 focus:outline-none focus:ring-sky-500 m-1 rounded-lg"
          autoComplete="off"
          ref={conpass}
          required
        />

        <input
          type="button"
          value="Sign Up"
          className="rounded-xl text-lg text-slate-800 bg-sky-300 hover:bg-green-5-500 text-center p-2 transition-all  w-80 shadow-lg shadow-slate-900"
          onClick={handlesubmit}
        />

        <h1 className="text-xl text-slate-300">
          Already have an account?{" "}
          <Link to="/signin" className="text-green-600 hover:underline">
            Sign In
          </Link>
        </h1>
      </form>

      {err && (
        <h1 className="bg-red-300 rounded-lg border-red-600 border-2 p-2 text-xl text-red-900">
          {err}
        </h1>
      )}

      {signupSuccess && (
        <h1 className="bg-green-300 rounded-lg border-green-600 border-2 p-2 text-xl text-green-900">
        Sign up successful! You can now <Link to="/Signin" className="text-green-600 hover:underline">sign in</Link>.
      </h1>
    )}
  </main>
);
};

export default Signup;
