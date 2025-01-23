import { Link } from 'react-router-dom'
import {useForm} from 'react-hook-form'
import {yupResolver} from '@hookform/resolvers/yup'
import signupSchema from '../schema/singup'
import { auth } from '../utils/Firebase'
import { createUserWithEmailAndPassword, updateProfile} from 'firebase/auth'
import { useState } from 'react'
import Header from "./Header";
import { useDispatch } from 'react-redux'
import { addUser } from '../redux/userSlice'
import Footer from './Footer'
import {netflixBgImage} from '../utils/Constants'
import {toast} from 'react-toastify'

const Signup = () => {
  const dispatch = useDispatch();
  const [errorMessages, setErrorMessages] = useState(null);
  const { handleSubmit, register, formState: { errors } } = useForm({
    defaultValues: {
      email: "",
      password: "",
      fullname: "",
    },
    resolver: yupResolver(signupSchema),
  });

  const onSubmit = (data) => {
    const { email, password, fullname } = data;
    createUserWithEmailAndPassword(auth, email, password)

      .then((userCredential) => {
        const user = userCredential.user;
        updateProfile(user, {
          displayName: fullname, 
        })
        .then(() => {
          const {uid, email, displayName} = auth.currentUser;
          dispatch(addUser({ uid ,email, displayName}))
          toast.success('User added successfully')
          console.log("User created:", user)
        })
        .catch((error) => {
          setErrorMessages(error.message)
        });
      })   
    
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setErrorMessages(errorMessage + "-" + errorCode)
        toast.error(errorMessage)
      });
  }

          

  return (
   <>
    <div className='bg-black'>
   <Header/>
      <div className="absolute w-full ">
      <img 
      className='relative h-screen w-full bg-cover bg-center'
      src={netflixBgImage}
      alt="img" />
       <div className="absolute inset-0 bg-black bg-opacity-60"></div>
      </div>
    <div className="flex justify-center items-center ">
    <form onSubmit={handleSubmit(onSubmit)} className="relative mb-28 w-64 md:w-[350px] py-10 px-9 bg-black bg-opacity-85 top-32 text-[#ffffff] ">

    <h1 className="font-bold text-2xl md:text-3xl py-2 md:py-4">Sign Up</h1>

    <div className='space-y-5 md:space-y-7'>
    <input 
    {...register("fullname")}
    className="py-2 px-3 md:py-3 md:px-3 m-2 w-full bg-zinc-900 bg-opacity-50 backdrop-blur-sm outline-neutral-300 placeholder:text-[#c9c9c9] placeholder:text-xs  border-[0.1px] rounded-sm border-[#858585] "
    placeholder="Full Name"
    type="text" />
    {errors.fullname && (
    <p className="text-red-500 text-xs md:text-sm">{errors.fullname.message}</p>
    )}

    <input 
    {...register("email")}
    className="py-2 px-3 md:py-3 md:px-3 m-2 w-full bg-zinc-900 bg-opacity-50 backdrop-blur-sm outline-neutral-300 placeholder:text-[#c9c9c9] placeholder:text-xs  border-[0.1px] rounded-sm border-[#858585] "
    placeholder="Email Address"
    type="email" />
    {errors.email && (
    <p className="text-red-500 text-xs md:text-sm">{errors.email.message}</p>
    )}

    <input 
    {...register("password")}
    className="py-2 px-3 md:py-3 md:px-3 m-2 w-full bg-zinc-900 bg-opacity-50 backdrop-blur-sm outline-neutral-300 placeholder:text-[#c9c9c9] placeholder:text-xs  border-[0.1px] rounded-sm border-[#858585] "
    placeholder="Password"
    type="password" />
    {errors.password && (
    <p className="text-red-500 text-xs md:text-sm">{errors.password.message}</p>
    )}

        {errorMessages && (
          <p className="text-red-500 text-sm mt-4 text-center">
            {errorMessages}
          </p>
        )}
    <button 
    className="py-1 md:py-2 m-2 md:text-sm bg-[#c11119] hover:bg-[#c1111ae5] w-full rounded-sm" 
    type="submit">
      Sign up</button>
      <p 
      className="text-xs md:text-sm font-thin px-1 md:pb-4 md:px-3 cursor-pointer">
      Already a member? 
     <Link to={'/signin'} className="font-medium"> Sign in.</Link></p>
    </div>
    </form>
    </div>
  <Footer/>
  </div>
   </>
  

  )
}

export default Signup