import logo from '../../public/netflix_logo.png'
const Header = () => {
  return (
   <>
    <div className='absolute w-full px-12 py-2 bg-gradient-to-b from-black z-10'>
      <img 
      className='w-44'
      src={logo} alt="logo" />
    </div>
   </>
  )
}

export default Header