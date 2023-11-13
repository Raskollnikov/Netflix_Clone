import Header from "./Header";
import { useState } from "react";
const Login = () => {
  const [show, setShow] = useState(false);
  const [isSignedIn, setIsSignedIn] = useState(true);

  const toggleSign = () => setIsSignedIn(!isSignedIn);

  return (
    <div className="">
      <Header />
      <div className="absolute">
        <img
          src={
            "https://assets.nflxext.com/ffe/siteui/vlv3/77d35039-751f-4c3e-9c8d-1240c1ca6188/8caf0391-7d3c-46a5-b911-2e4eb1721385/GE-en-20231106-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          }
          alt={"loginPage_image"}
        />
      </div>
      <form className="rounded-xl absolute mx-auto text-white right-0 left-0 w-4/12 pt-10 px-10 pb-7 bg-black  bg-opacity-80  mt-20">
        <div className=" flex flex-col items-center justify-start ">
          <h1 className="font-bold text-3xl my-7  w-[90%]">
            {isSignedIn ? "Sign in" : "Sign up"}
          </h1>
          <input
            type="text"
            placeholder="Email or phone number"
            className="px-4 py-3 w-[90%]  rounded-md bg-[rgb(51,51,51)] placeholder-[#8c8c8c]"
          />
          {!isSignedIn && (
            <input
              type="text"
              placeholder="Full Name"
              className="px-4 py-3 w-[90%] my-4 rounded-md bg-[rgb(51,51,51)] placeholder-[#8c8c8c]"
            />
          )}
          <input
            type="password"
            placeholder="Password"
            className={`px-4 py-3 w-[90%] ${
              isSignedIn && "my-4"
            } bg-[rgb(51,51,51)] rounded-md placeholder-[#8c8c8c]`}
          />
          <button className="p-3 my-4 font-bold bg-[rgb(229,9,20)] w-[90%] text-center rounded-md">
            {isSignedIn ? "Sign in" : "Sign up"}
          </button>
          <div className="w-[90%] flex justify-between text-sm items-center">
            <div className="text-[rgb(179,179,179)] flex gap-1">
              <input type="checkbox" />
              <label>Remember Me</label>
            </div>
            <div className="text-[rgb(179,179,179)] text-sm hover:underline">
              Need help?
            </div>
          </div>

          {/*  */}

          <div className="w-[90%] mt-12">
            <div className="text-md flex gap-2 items-center">
              <span className="text-[rgb(179,179,179)] text-sm">
                New to Netflix?
              </span>
              <span
                className="text-white hover:underline cursor-pointer"
                onClick={toggleSign}
              >
                {isSignedIn ? "Sign up now." : "Sign in"}
              </span>
            </div>
            <div className="text-[rgb(179,179,179)] mt-3">
              <span className="text-sm">
                This page is protected by Google reCAPTCHA to ensure you're not
                a bot.
              </span>{" "}
              <span
                className="text-blue-700 font-bold cursor-pointer text-sm"
                onClick={() => setShow(!show)}
              >
                {show ? "show less." : "show more"}
              </span>
              <div className="mt-1">
                {show && (
                  <span className="text-xs">
                    The information collected by Google reCAPTCHA is subject to
                    the{" "}
                    <span className="text-blue-700 font-bold cursor-pointer">
                      Google Privacy Policy
                    </span>
                    and{"  "}
                    <span className="text-blue-700 font-bold cursor-pointer">
                      Terms of Service
                    </span>
                    , and is used for providing, maintaining, and improving the
                    reCAPTCHA service.
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
