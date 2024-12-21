import {Link} from 'react-router-dom'
import {useForm} from 'react-hook-form'
import {yupResolver} from '@hookform/resolvers/yup'
import signInSchema from '../schema/signin'
import {signInWithEmailAndPassword } from 'firebase/auth'
import { useState } from 'react'
import { auth } from '../utils/Firebase'
import Header from './Header'
import {signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { useNavigate } from 'react-router-dom'
const Login = () => {
  const navigate = useNavigate()
  const [errorMessages, setErrorMessages] = useState(null);
  
  const { handleSubmit, register, formState: { errors } } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: yupResolver(signInSchema),
  });
  
  
  const handleGoogle = () => {
  const provider = new GoogleAuthProvider();
  signInWithPopup(auth, provider)
    .then((result) => {
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      const user = result.user;
    }).catch((error) => {
       setErrorMessages(error.message)
    });
  }

const onSubmit = (data) => {
const { email, password } = data;
signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    const user = userCredential.user;
    navigate('/browse');
    console.log("User signed in:", user)
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMessages(errorMessage + "-" + errorCode)
    console.log(errorMessage + "-" + errorCode)
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

      <div className='space-y-4'>
      <form onSubmit={handleSubmit(onSubmit)} className="relative w-[350px] py-10 px-9 bg-black bg-opacity-85 top-32 text-[#ffffff] ">
      <h1 className="font-bold text-3xl py-4">Sign In</h1>

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

        {/* Firebase Authentication Errors */}
        {errorMessages && (
          <p className="text-red-500 text-sm mt-4 text-center">
            {errorMessages}
          </p>
        )}
     
      <button 
      className="py-2 m-2 bg-[#c11119] hover:bg-[#c1111ae5] w-full rounded-sm" 
      type="submit">
        Sign in</button>
        <p 
        className="text-sm font-thin py-4 px-3 cursor-pointer">
        New to Netflix? 
       <Link to={'/signup'} className="font-medium"> Sign up now.</Link></p>

       <button onClick={handleGoogle}>
        Google
       </button>
      </form>
      </div>
      </div>

    </div>
  )
}

export default Login