import Login from "./Login";
import Browse from "./Browse";
import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice.js";

// import { createBrowserRouter } from "react-router-dom";
// import { RouterProvider } from "react-router-dom";

const Body = () => {
  const dispatch = useDispatch();
  //   const appRouter = createBrowserRouter([
  //     {
  //       path: "/",
  //       element: <Login />,
  //     },
  //     {
  //       path: "/browse",
  //       element: <Browse />,
  //     },
  //   ]);
  //   <RouterProvider router={appRouter} />;

  // const item = useSelector((user) => user.user);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(addUser({ uid, email, displayName, photoURL }));
      } else {
        //  signOut
        dispatch(removeUser());
      }
    });
  }, []);
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/browse" element={<Browse />} />
        </Routes>
      </Router>
    </div>
  );
};

export default Body;
