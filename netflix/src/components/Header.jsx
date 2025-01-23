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
        <div className="absolute md:w-screen py-1 px-4 md:px-10 md:py-2 bg-gradient-to-b from-black z-10 flex w-screen justify-between items-center">
          <img className="w-32 md:w-40 md:mx-0" src={logo} alt="logo" />

          <div className="userbox cursor-pointer text-white px-8">
            {user && (
              <div className="flex justify-between items-center gap-4 md:gap-6 md:-mt-34">
                {showGptSearch && (
                  <select
                    onChange={handleChangeLanguage}
                    className="bg-[#1f1f1f] text-xs md:text-sm p-1 text-white cursor-pointer"
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
                   <div className=" md:text-lg text-sm">Home</div>
                  ) : (
                    <div className=" text-xl md:text-2xl font-bold">
                      <IoIosSearch />
                    </div>
                  )}
                </button>

                <div>
                  <button
                    onClick={toggleDropdown}
                    className="inline-flex justify-center w-full shadow-sm py-2 
                    text-sm font-medium text-gray-700 
                    focus:outline-none"
                  >
                    {" "}
                    <img className="md:w-9 md:h-9 w-5 md:mr-2" src={netflixAvatar} alt="avatar" />
                    <div className=" text-sm md:text-xl mt-1 text-white">
                      <MdKeyboardArrowDown />
                    </div>
                  </button>
                </div>

                {isOpen && (
                  <div
                    className="origin-bottom-left absolute right-7 md:right-10 mt-[26%] md:mt-[9%] bg-gray-900 w-24 md:w-32 py-2 text-white
                    selection:shadow-lg ring-1 ring-black ring-opacity-5 rounded-sm
                    focus:outline-none"
                  >
                    <div className="py-1 ">
                      <button className="block py-[5px] px-2 md:py-2 w-full hover:bg-slate-950 text-xs md:text-sm">
                        <div className="flex gap-3 items-center">
                          <MdAccountCircle className="text-lg md:text-xl" />
                          Account
                        </div>
                      </button>
                      <button
                        onClick={() => setIsModalOpen(true)}
                        className="block px-2 py-2 w-full hover:bg-slate-950 text-xs md:text-sm"
                      >
                        <div className="flex gap-3 items-center">
                          <SlLogout className="text-lg md:text-xl" />
                          Logout
                        </div>
                      </button>
                      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 ">
          <div className="bg-black rounded-sm shadow-lg w-60 p-5 md:w-96 md:p-6">
            <h2 className=" text-sm md:text-2xl font-semibold mb-4 text-gray-300">
              Confirm Logout
            </h2>
            <p className="text-white text-xs md:text-[1rem] mb-6">
              Are you sure you want to logout?
            </p>
            <div className="flex justify-end space-x-4 text-sm">
              {/* Cancel Button */}
              <button
                className="bg-gray-300 text-black py-1 px-1.5 text-xs md:text-sm md:px-3 md:py-1.5 rounded-sm hover:bg-opacity-95"
                onClick={() => setIsModalOpen(false)}
              >
                Cancel
              </button>

              {/* Confirm Button */}
              <button
                className="bg-red-700 text-white py-1 px-2  md:text-sm md:px-4 md:py-1.5 rounded-sm hover:bg-red-800"
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
