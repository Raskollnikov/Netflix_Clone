import Login from "./Login";
import Browse from "./Browse";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Test from "./Test";
const Body = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/browse" element={<Browse />} />
          <Route path="/browse/:id" element={<Test />} />
        </Routes>
      </Router>
    </div>
  );
};

export default Body;
