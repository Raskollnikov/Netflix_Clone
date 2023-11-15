import Header from "./Header";
import { useState, useRef } from "react";
import "../index.css";
import { checkValidateData } from "../utils/validate.js";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { useDispatch } from "react-redux";

import { auth } from "../utils/firebase.js";
import { useNavigate } from "react-router-dom";
import { addUser } from "../utils/userSlice.js";

const Login = () => {
  const [show, setShow] = useState(false);
  const [isSignedIn, setIsSignedIn] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const toggleSign = () => setIsSignedIn(!isSignedIn);

  const handleButtonClick = () => {
    const message = checkValidateData(
      email.current.value,
      password.current.value
    );
    setErrorMessage(message);
    // sign in / sign up

    if (message) return;

    // craete New user, sign in / sign up
    if (!isSignedIn) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;

          updateProfile(user, {
            displayName: name.current.value,
            photoURL: "https://picsum.photos/200/300",
          })
            .then(() => {
              const { uid, email, displayName, photoURL } = auth.currentUser;

              dispatch(addUser({ uid, email, displayName, photoURL }));
              navigate("/browse");
            })
            .catch((error) => {
              setErrorMessage(error.message);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + " " + errorMessage);
        });
    } else {
      // sign in logic
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          navigate("/browse");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + errorMessage);
        });
    }
    email.current.value = "";
    password.current.value = "";
  };
  return (
    <div>
      <Header />
      <div className="absolute bottom-0 top-0 left-0 right-0">
        <img
          src={
            "https://assets.nflxext.com/ffe/siteui/vlv3/77d35039-751f-4c3e-9c8d-1240c1ca6188/8caf0391-7d3c-46a5-b911-2e4eb1721385/GE-en-20231106-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          }
          alt={"loginPage_image"}
        />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="rounded-xl absolute mx-auto text-white right-0 left-0 w-4/12 pt-10 px-10 pb-7 bg-black  bg-opacity-80  mt-20"
      >
        <div className=" flex flex-col items-center justify-start ">
          <h1 className="font-bold text-3xl my-7  w-[90%]">
            {isSignedIn ? "Sign in" : "Sign up"}
          </h1>
          <input
            ref={email}
            type="text"
            placeholder="Email or phone number"
            className="px-4 py-3 w-[90%]  rounded-md bg-[rgb(51,51,51)] placeholder-[#8c8c8c]"
          />
          {!isSignedIn && (
            <input
              type="text"
              ref={name}
              placeholder="Full Name"
              className="px-4 py-3 w-[90%] my-4 rounded-md bg-[rgb(51,51,51)] placeholder-[#8c8c8c]"
            />
          )}
          <input
            type="password"
            ref={password}
            placeholder="Password"
            className={`px-4 py-3 w-[90%] ${
              isSignedIn && "my-4"
            } bg-[rgb(51,51,51)] rounded-md placeholder-[#8c8c8c]`}
          />
          <p className="font-bold text-md w-[90%] text-red-600 ">
            {errorMessage}
          </p>
          <button
            className="p-3 my-4 font-bold bg-[rgb(229,9,20)] w-[90%] text-center rounded-md"
            onClick={handleButtonClick}
          >
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
