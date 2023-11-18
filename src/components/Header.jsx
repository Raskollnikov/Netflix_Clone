import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { auth } from "../utils/firebase";
import { addUser, removeUser } from "../utils/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { Link } from "react-router-dom";
import { LOGO } from "../utils/constants";
const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleSignOut = async () => {
    try {
      await signOut(auth);
      navigate("/");
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(addUser({ uid, email, displayName, photoURL }));
        navigate("/browse");
      } else {
        //  signOut
        dispatch(removeUser());
        navigate("/");
      }
    });

    return () => {
      // Unsubscribe when the component is unmounted
      unsubscribe();
    };
  }, []);

  const user = useSelector((store) => store.user);
  return (
    <div
      className={`w-full absolute z-10 flex ${
        user ? "justify-between" : "items-start"
      } `}
    >
      <div className="z-10">
        <Link to="/">
          <img src={LOGO} alt={"loginPage_image"} className="w-44" />
        </Link>
      </div>
      {user && (
        <div className="flex gap-2 items-center pr-5 shadow-md">
          <div className="px-4 py-1 ">
            <img
              className="w-[40px]  cursor-pointer"
              src={user?.photoURL}
              alt={user?.displayName}
            />
          </div>

          <button
            className="font-bold text-red-600"
            onClick={() => handleSignOut()}
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
