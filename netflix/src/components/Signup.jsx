import { Link } from 'react-router-dom'
import {useForm} from 'react-hook-form'
import {yupResolver} from '@hookform/resolvers/yup'
import signupSchema from '../schema/singup'

const Signup = () => {

  const { handleSubmit, register, formState: { errors } } = useForm({
    defaultValues: {
      email: "",
      password: "",
      fullName: "",
    },
    resolver: yupResolver(signupSchema),
  });

  const onSubmit = () => {

  }
  return (
    <div>
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