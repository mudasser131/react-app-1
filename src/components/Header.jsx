import React, { useState } from 'react'
import { AiOutlineMenu } from "react-icons/ai"
import { IoClose } from "react-icons/io5";

const Header = () => {
    const [toggle,settoggle] = useState(false);
  return (
    <div className='bg-[#219ebc] p-3'>
        <div className='max-w-[1240px] py-[1rem] flex items-center justify-between  mx-auto'>
            <div className='text-3xl'>mudasser</div>

            {
                toggle ?
                <IoClose  onClick={()=>settoggle(!toggle)} className='text-white text-2xl md:hidden block'/> 
        
            :
            <AiOutlineMenu onClick={()=>settoggle(!toggle)}  className='text-white text-2xl md:hidden block'/> 
          
}
            <ul className=' hidden md:flex text-white gap-7'>
                <li>Home</li>
                <li>Contact</li>
                <li>Srrvices</li>
                <li>About us</li>
                <li>Contactus</li>
            </ul>
        {/* responsive  menu*/}
        <ul className={` duration-300  md:hidden w-full h-screen text-white bg-black fixed  top-[5.7rem] 
       ${toggle ?'left-[0]':  'left-[-100%]'}`}>
                <li className='p-3'>Home</li>
                <li className='p-3'>Contact</li>
                <li className='p-3'>Srrvices</li>
                <li className='p-3'>About us</li>
                <li className='p-3'>Contactus</li>
            </ul>

        </div></div>
  )
}

export default Header