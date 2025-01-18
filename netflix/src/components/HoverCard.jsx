

const HoverCard = ({vote,language ,title,desc})=> {
  return (
         <div className="max-w-xl bg-black rounded-sm text-white absolute top-32">
        <img src="" alt="" />
        <h1>{title} </h1>
        <div className='text-gray-200'>
         <button className='py-2 px-4 bg-[#4d4d4dd9] opacity-50'>year</button>
         <button className='py-2 px-4 bg-[#4d4d4dd9] opacity-50'>{vote}</button>
         <button className='py-2 px-4 bg-[#4d4d4dd9] opacity-50'>{language}</button>
        </div>
   
        <p className='max-w-xl text-sm '>{desc}</p>
       </div>
  )
}

export default HoverCard