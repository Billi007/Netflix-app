import { Link } from 'react-router-dom'
import {useForm} from 'react-hook-form'
import {yupResolver} from '@hookform/resolvers/yup'
import signupSchema from '../schema/singup'
import { auth } from '../utils/Firebase'
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth'
import { useState } from 'react'
import Header from "./Header";
import { useNavigate } from 'react-router-dom'

const Signup = () => {
  const navigate = useNavigate()
  const [errorMessages, setErrorMessages] = useState(null);
  const { handleSubmit, register, formState: { errors } } = useForm({
    defaultValues: {
      email: "",
      password: "",
      fullName: "",
    },
    resolver: yupResolver(signupSchema),
  });

  const onSubmit = (data) => {
    const { email, password, fullName } = data;
    console.log(data)
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        updateProfile(user, {
          displayName: fullName, photoURL: "https://example.com/jane-q-user/profile.jpg"
        }).then(() => {
          navigate('/browse');
          console.log("User created:", user)
        }).catch((error) => {
          setErrorMessages(error.message)
        });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setErrorMessages(errorMessage + "-" + errorCode)
      });
    
  }

          

  return (
    <div>
   <Header/>
      <div className="absolute w-full">
      <img 
      className='relative h-screen w-full bg-cover bg-center'
      src="https://assets.nflxext.com/ffe/siteui/vlv3/729ce5c2-d831-436a-8c9d-f38fea0b99b3/web/IN-en-20241209-TRIFECTA-perspective_4aef76eb-7d5b-4be0-93c0-5f67320fd878_small.jpg" 
      alt="img" />
       <div className="absolute inset-0 bg-black bg-opacity-60"></div>
      </div>
    <div className="flex justify-center items-center">
    <form onSubmit={handleSubmit(onSubmit)} className="relative w-[350px] py-10 px-9 bg-black bg-opacity-85 top-32 text-[#ffffff] ">

    <h1 className="font-bold text-3xl py-4">Sign Up</h1>

    <input 
    {...register("fullname")}
    className="py-3 px-3 m-2 w-full bg-zinc-900 bg-opacity-50 backdrop-blur-sm outline-neutral-300 placeholder:text-[#c9c9c9] placeholder:text-xs  border-[0.1px] rounded-sm border-[#858585] "
    placeholder="Full Name"
    type="text" />
    {errors.fullname && (
    <p className="text-red-500 text-sm">{errors.fullname.message}</p>
    )}

    <input 
    {...register("email")}
    className="py-3 px-3 m-2 w-full bg-zinc-900 bg-opacity-50 backdrop-blur-sm outline-neutral-300 placeholder:text-[#c9c9c9] placeholder:text-xs  border-[0.1px] rounded-sm border-[#858585] "
    placeholder="Email Address"
    type="email" />
    {errors.email && (
    <p className="text-red-500 text-sm">{errors.email.message}</p>
    )}

    <input 
    {...register("password")}
    className="py-3 px-3 m-2 w-full bg-zinc-900 bg-opacity-50 backdrop-blur-sm outline-neutral-300 placeholder:text-[#c9c9c9] placeholder:text-xs  border-[0.1px] rounded-sm border-[#7c7c7c]  "
    placeholder="Password"
    type="password" />
    {errors.password && (
    <p className="text-red-500 text-sm">{errors.password.message}</p>
    )}

        {errorMessages && (
          <p className="text-red-500 text-sm mt-4 text-center">
            {errorMessages}
          </p>
        )}
    <button 
    className="py-1.5 m-2 bg-[#c11119] hover:bg-[#c1111ae5] w-full rounded-sm" 
    type="submit">
      Sign up</button>
      <p 
      className="text-sm font-thin py-4 px-3 cursor-pointer">
      Already a member? 
     <Link to={'/login'} className="font-medium"> Sign in.</Link></p>
    </form>
    </div>

  </div>
  )
}

export default Signup