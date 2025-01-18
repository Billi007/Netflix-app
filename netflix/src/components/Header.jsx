import logo from "../../public/netflix_logo.png";
import netflixAvatar from "../../public/Netflix-avatar.png";
import { signOut } from "firebase/auth";
import { auth } from "../utils/Firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { IoIosSearch } from "react-icons/io";
import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../redux/userSlice";
import { toggleGptSearchView } from "../redux/SearchSlice";
import { supportedLanguage } from "../utils/Constants";
import { changeLanguage } from "../redux/configSlice";
import { SlLogout } from "react-icons/sl";
import { MdKeyboardArrowDown } from "react-icons/md";
import { MdAccountCircle } from "react-icons/md";
import { toast } from "react-toastify";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);
  const dispatch = useDispatch();


  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleSignOut = () => {
    setIsModalOpen(false);
    toast.success('User logged out!')
    signOut(auth)
      .then(() => {})
      .catch(() => {
        navigate("/error");
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(
          addUser({
            uid,
            email,
            displayName,
          })
        );
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });

    //unsubscribe when component will unmount
    return () => unsubscribe();
  }, []);

  const HandleGptSearchClick = () => {
    dispatch(toggleGptSearchView());
  };

  const handleChangeLanguage = (e) => {
    dispatch(changeLanguage(e.target.value));
  };

  return (
    <>
      <div className="top-0 sticky z-50">
        <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex flex-col md:flex-row justify-between">
          <img className="w-40 mx-auto md:mx-0" src={logo} alt="logo" />

          <div className="userbox cursor-pointer text-white px-8">
            {user && (
              <div className="flex justify-center items-center gap-3 mt-6">
                {showGptSearch && (
                  <select
                    onChange={handleChangeLanguage}
                    className="bg-[#1f1f1f] text-sm p-1 text-white cursor-pointer"
                  >
                    {supportedLanguage.map((lang) => (
                      <option key={lang.identifier} value={lang.identifier}>
                        {lang.name}{" "}
                      </option>
                    ))}
                  </select>
                )}

                <button onClick={HandleGptSearchClick}>
                  {showGptSearch ? (
                    "Home"
                  ) : (
                    <div className="text-2xl font-bold">
                      <IoIosSearch />
                    </div>
                  )}
                </button>

                <div>
                  <button
                    onClick={toggleDropdown}
                    className="inline-flex justify-center w-full shadow-sm px-4 py-2 
                    text-sm font-medium text-gray-700 
                    focus:outline-none"
                  >
                    {" "}
                    <img className="w-8 h-8" src={netflixAvatar} alt="avatar" />
                    <div className="text-xl ml-1 mt-2 text-white">
                      <MdKeyboardArrowDown />
                    </div>
                  </button>
                </div>

                {isOpen && (
                  <div
                    className="origin-bottom-left absolute right-10 mt-[9%] bg-black w-32 py-2 text-white
                    selection:shadow-lg ring-1 ring-black ring-opacity-5 rounded-sm
                    focus:outline-none"
                  >
                    <div className="py-1 ">
                      <button className="block px-2 py-2 w-full hover:bg-[#171717] text-sm">
                        <div className="flex gap-3 items-center">
                          <MdAccountCircle className="text-xl" />
                          Account
                        </div>
                      </button>
                      <button
                        onClick={() => setIsModalOpen(true)}
                        className="block px-2 py-2 w-full hover:bg-[#111111] text-sm"
                      >
                        <div className="flex gap-3 items-center">
                          <SlLogout className="text-lg" />
                          Logout
                        </div>
                      </button>
                      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 ">
          <div className="bg-black rounded-sm shadow-lg w-96 p-6">
            <h2 className="text-xl font-semibold mb-4 text-gray-300">
              Confirm Logout
            </h2>
            <p className="text-white mb-6">
              Are you sure you want to logout?
            </p>
            <div className="flex justify-end space-x-4 text-sm">
              {/* Cancel Button */}
              <button
                className="bg-gray-300 text-black px-3 py-1.5 rounded-sm hover:bg-opacity-95"
                onClick={() => setIsModalOpen(false)}
              >
                Cancel
              </button>

              {/* Confirm Button */}
              <button
                className="bg-red-700 text-white px-4 py-1.5 rounded-sm hover:bg-red-800"
                onClick={handleSignOut}
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      )}
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
