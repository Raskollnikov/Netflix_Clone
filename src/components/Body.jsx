import Login from "./Login";
import Browse from "./Browse";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { createBrowserRouter } from "react-router-dom";
// import { RouterProvider } from "react-router-dom";

const Body = () => {
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
