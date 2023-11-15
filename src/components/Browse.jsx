import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase.js";
import { useNavigate } from "react-router-dom";
const Browse = () => {
  const navigate = useNavigate();

  signOut(auth)
    .then(() => {
      navigate("/");
    })
    .catch((error) => {
      // An error happened.
    });
  return <div className="w-full flex "></div>;
};

export default Browse;
