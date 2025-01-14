import logo from '../../public/netflix_logo.png'
import netflixAvatar from '../../public/Netflix-avatar.png'
import { signOut } from "firebase/auth";
import {auth} from '../utils/Firebase'
import {useNavigate} from 'react-router-dom'
import { useSelector } from 'react-redux';
import { IoIosSearch } from "react-icons/io";
import { useEffect,} from 'react';
import {onAuthStateChanged } from "firebase/auth";
import {useDispatch} from 'react-redux'
import {addUser, removeUser} from '../redux/userSlice' 
import { toggleGptSearchView } from '../redux/SearchSlice'
import {supportedLanguage} from '../utils/Constants'
import { changeLanguage } from '../redux/configSlice';

const Header = () => {
 // const [showAccount, setShowAccount] = useState(false)
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const showGptSearch = useSelector(store => store.gpt.showGptSearch)
  const dispatch = useDispatch();

  // const toggleAcount = () => {
  //   setShowAccount(!showAccount)
  // }

    const handleSignOut = () => {
      signOut(auth)
      .then(() => {})
      .catch(() => {
        navigate("/error");
      });
   };


   useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, } = user;
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
    dispatch(toggleGptSearchView())
  };

  const handleChangeLanguage = (e) => {
    dispatch(changeLanguage(e.target.value))
  }
  
  return (
   <>
    <div className='top-0 sticky z-50'>
    <div className='absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex flex-col md:flex-row justify-between'>
      <img 
     className="w-40 mx-auto md:mx-0"
      src={logo} 
      alt="logo" />     
     
      <div className='userbox cursor-pointer text-white px-8'>
      {user &&
      (<div className='flex justify-center items-center gap-5 mt-6'>
       {showGptSearch && (
        <select onChange={handleChangeLanguage} className='bg-gray-950 text-sm p-1 text-white cursor-pointer'>
        {supportedLanguage.map(lang =>
       <option key={lang.identifier} value={lang.identifier} >{lang.name} </option>
        )}
        {/* <option value="hi">Hindi</option>
        <option value="ru">Russian</option>
        <option value="es">Spanish</option>
        <option value="ko"> Korean</option>
        <option value="ja">Japanese</option>
        <option value="chi">Chinese</option>
        <option value="fr">French</option>
        <option value="ur">Urdu</option>
        <option value="ar" >Arabic</option> */}
       </select>
       )}

        <button 
        onClick={HandleGptSearchClick}>
        {showGptSearch ? "Home" : <div className='text-2xl font-bold'><IoIosSearch/></div>}
        </button>
       <img 
       className='w-8 h-8'
       src={netflixAvatar} 
       alt="avatar" />

        <button>Account</button>
         <button onClick={handleSignOut}>Logout</button>
        </div>)}
        </div>
       </div>
    </div>
    
         
   </>
  )
}

export default Header