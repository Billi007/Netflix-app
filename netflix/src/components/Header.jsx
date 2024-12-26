import logo from '../../public/netflix_logo.png'
import netflixAvatar from '../../public/Netflix-avatar.png'
import { signOut } from "firebase/auth";
import {auth} from '../utils/Firebase'
import {useNavigate} from 'react-router-dom'
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import {onAuthStateChanged } from "firebase/auth";
import {useDispatch} from 'react-redux'
import {addUser, removeUser} from '../redux/userSlice' 

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector(store => store.user);
  const dispatch = useDispatch();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      const {uid, email, displayName, photoURL} = user;
      if (user) {
        dispatch(addUser({uid, email, displayName, photoURL}))
        navigate("/browse");
      } else {
        // User is signed out
       dispatch(removeUser())
       navigate('/')
      }
    });
      },[])
    


  const handleSignOut = () => {
    signOut(auth)
    .then(() => {
    navigate("/");
 
    })
    .catch(() => {
      navigate("/error");
    });
 }
  return (
   <>
    <div className='flex items-center justify-between p-2 absolute w-full px-12 py-2 bg-gradient-to-b from-black z-10'>
    
      <img 
      className='w-44'
      src={logo} alt="logo" />     
     
        <div className='userbox cursor-pointer text-white'>
      {user ?
       (
        <div>
       <img 
       className='w-8 h-8'
       src={netflixAvatar} 
       alt="avatar" />

        <img 
        className='w-14 h-14 rounded-full'
        src={user.photoURL} 
        alt="" />

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