import { useEffect } from "react";
import Browse from "./Browse";
import Signup from "./Signup";
import { auth } from "../utils/Firebase";
import {onAuthStateChanged } from "firebase/auth";
import {useDispatch} from 'react-redux'
import {addUser, removeUser} from '../redux/userSlice' 
import Header from "./Header";
const Body = () => {
const dispatch = useDispatch();

 useEffect(() => {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      const {uid, email, displayName} = user;
      dispatch(addUser({uid, email, displayName}));
    } else {
      // User is signed out here 
      dispatch(removeUser());
    }
  });
 },[])


  return (
   <>
    <Header/>
    <Signup/>
    <Browse/>

   </>
  )
}

export default Body