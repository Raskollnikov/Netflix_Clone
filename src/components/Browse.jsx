import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase.js";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
const Browse = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="w-full flex ">
      salami
      <button onClick={() => handleSignOut()}>go</button>
      <p>{user.displayName}</p>
      <img src={user.photoUrl} alt="asd" />
    </div>
  );
};

export default Browse;
