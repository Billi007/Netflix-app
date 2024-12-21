import { TbError404 } from "react-icons/tb";
import { Link } from "react-router-dom";
const Error = () => {
  return (
    <div className="p-5 m-auto space-y-1 flex flex-col justify-between items-center">
      <TbError404 className="text-[300px] text-gray-400"/> 
      <h2>Oops, This Page Not Found!</h2>
      <p>The resource requested  could not be found on this server!</p>
       <Link to='/browse'>
       <button className="bg-black py-2 px-2 rounded-sm text-sm mt-2 hover:bg-gray-900 text-white">Back to Home</button>
       </Link>
    </div>
  )
}

export default Error