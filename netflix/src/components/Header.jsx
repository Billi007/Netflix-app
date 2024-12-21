import logo from '../../public/netflix_logo.png'
import netflixAvatar from '../../public/Netflix-avatar.png'
import { GoTriangleDown } from "react-icons/go";
import { useState } from 'react';
import { signOut } from "firebase/auth";
import {auth} from '../utils/Firebase'
import {useNavigate} from 'react-router-dom'

const Header = () => {
  const navigate = useNavigate();
  const [showOptions, setShowOptions] = useState(false);
  
  const toggleOptions = () => {
    setShowOptions((prev) => !prev);
  };
  
  const handleSignOut = () => {
  signOut(auth).then(() => {
  navigate('/login');
  console.log("Sign out successfully")
  }).catch((error) => {
   navigate('/error')
   console.log(error)
  });
 }
  return (
   <>
    <div className='flex items-center justify-between p-2 absolute w-full px-12 py-2 bg-gradient-to-b from-black z-10'>
    
      <img 
      className='w-44'
      src={logo} alt="logo" />

   
       <div className='flex gap-2'>
       <img 
       className='w-8 h-8'
       src={netflixAvatar} 
       alt="avatar" />
     
        <div className='userbox cursor-pointer text-white'>
      <GoTriangleDown onClick={toggleOptions} className='mt-2 '/>
      {showOptions ? (<div className=' w-20 text-xs bg-black rounded-sm p-2 transition duration-300 ease-in-out'>
       <ul>
         <button onClick={handleSignOut}>Sign Out</button>
         </ul>
      </div>) : 
      ''}
        </div>
       </div>
    
         
    </div>
   </>
  )
}

export default Header