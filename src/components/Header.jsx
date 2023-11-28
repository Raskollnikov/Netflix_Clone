import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { auth } from "../utils/firebase";
import { addUser, removeUser } from "../utils/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { LOGO } from "../utils/constants";
import { toggleGptSearch } from "../utils/gptSlice";
import { SUPPORTED_LANGUAGES } from "../utils/constants";
import { changeLanguage } from "../utils/configSlice";
import { Link } from "react-router-dom";
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

  const handleGptSearchClick = () => {
    // Toggle Gpt search
    dispatch(toggleGptSearch());
  };

  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };
  const showGptSeach = useSelector((store) => store.gpt.showGptSearch);

  return (
    <div
      className={`w-full absolute z-10 flex ${
        user ? "justify-between" : "items-start"
      } flex-col items-center md:flex-row md:justify-between`}
    >
      <div className="z-10">
        {/* <Link to="/browse"> */}
        <img src={LOGO} alt={"loginPage_image"} className="w-44" />
        {/* </Link> */}
      </div>
      {user && (
        <div className="flex gap-4 items-center mr-5 ">
          {showGptSeach && (
            <select
              className="p-2 bg-gray-900 text-white  outline-none m-2"
              onChange={handleLanguageChange}
            >
              {SUPPORTED_LANGUAGES.map((each) => (
                <option key={each.identifier} value={each.identifier}>
                  {each.name}
                </option>
              ))}
            </select>
          )}

          <button
            onClick={handleGptSearchClick}
            className="py-2 px-4 mx-4 my-2 text-white bg-purple-800 rounded-lg "
          >
            {showGptSeach ? "Home Page" : "Gpt Search"}
          </button>
          <img
            className="hidden md:block w-12 h-12 cursor-pointer"
            src={user?.photoURL}
            alt={user?.displayName}
          />

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
