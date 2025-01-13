import logo from '../../public/netflix_logo.png'
import netflixAvatar from '../../public/Netflix-avatar.png'
import { signOut } from "firebase/auth";
import {auth} from '../utils/Firebase'
import {useNavigate} from 'react-router-dom'
import { useSelector } from 'react-redux';
import { useEffect,} from 'react';
import {onAuthStateChanged } from "firebase/auth";
import {useDispatch} from 'react-redux'
import {addUser, removeUser} from '../redux/userSlice' 

const Header = () => {
 // const [showAccount, setShowAccount] = useState(false)
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
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
    

  return (
   <>
    <div className='top-0 sticky z-50'>
    <div className='absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex flex-col md:flex-row justify-between'>
      <img 
     className="w-40 mx-auto md:mx-0"
      src={logo} 
      alt="logo" />     
     
      <div className='userbox cursor-pointer text-white px-8'>
      {user ? 
      (<div className='flex items-center gap-4 mt-6'>
       <img 
       className='w-8 h-8'
       src={netflixAvatar} 
       alt="avatar" />

        <button className='font-semibold text-lg'>Account</button>
         <button onClick={handleSignOut}>Logout</button>
        </div>) 
        : ''}
        </div>
       </div>
    </div>
    
         
   </>
  )
}

export default Header