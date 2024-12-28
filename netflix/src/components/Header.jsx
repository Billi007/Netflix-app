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
    <div className='flex items-center justify-between p-2 absolute w-full px-12 py-2 bg-gradient-to-b from-black z-10'>
    
      <img 
      className='w-44'
      src={logo} alt="logo" />     
     
        <div className='userbox cursor-pointer text-white'>
      {user ?
       (
        <div className='flex items-center gap-4'>
       <img 
       className='w-8 h-8'
       src={netflixAvatar} 
       alt="avatar" />

    
          <button className='font-semibold text-lg'>Account</button>
      

         <button onClick={handleSignOut}>Logout</button>
        </div>

      ) : 
      ''}
        </div>
       </div>
    
         
   </>
  )
}

export default Header