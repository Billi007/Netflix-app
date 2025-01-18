
const Footer = () => {
  return (
    <div className='w-full text-stone-300 text-xs mt-[10%] bg-black opacity-80 '>
    <p className="mx-10">Questions? Call <span className='decoration-slate-100 underline'>000-800-919-1743</span></p>
    <div className='flex underline  decoration-slate-100 justify-evenly items-center mt-10 gap-3 mb-28 text-sm max-w-4xl m-auto '>

    <ul className='flex flex-col space-y-3 text-xs '>
   <a href="https://help.netflix.com/en/node/412">FAQ</a>
   <a href="https://ir.netflix.net/ir-overview/profile/default.aspx">Media Centre</a>
   <a href="https://help.netflix.com/legal/privacy">Ways to Watch</a>
   <a href="https://www.netflix.com/in/">Cookie Preferences</a>
   <a href="https://fast.com/">Speed Test</a>
    </ul>
   

   
    <ul className='flex flex-col space-y-3'>
   <a href="https://help.netflix.com/en">Help Centre</a>
   <a href="https://ir.netflix.net/ir-overview/profile/default.aspx">Investor Relations</a>
   <a href="https://help.netflix.com/legal/termsofuse">Terms of Use</a>
   <a href="https://help.netflix.com/en/node/134094">Corporate Information</a>
   <a href="https://help.netflix.com/legal/notices">Legal Notices</a>
    </ul>
  

   
    <ul className='flex flex-col space-y-3'>
   <a href="https://www.netflix.com/login?nextpage=https%3A%2F%2Fwww.netflix.com%2Fyouraccount">Account</a>
   <a href="https://jobs.netflix.com/">Jobs</a>
   <a href="https://help.netflix.com/legal/privacy">Privacy</a>
   <a href="https://help.netflix.com/en/contactus">Contact Us</a>
   <a href="">Only on Netflix</a>
    </ul>
    </div>
      
      <p>Netflix India</p>
    </div>
  )
}

export default Footer