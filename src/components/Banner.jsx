import React from 'react'
import Typed from 'react-typed';
const Banner = () => {
  return (
    <div className='bg-[#219ebc] w-full py-[6.5rem]'>
<div className='max-w-[1240px] mx-auto my-[6.3rem] text-center font-bold'> 
<div className=' text-xl md:text-4xl font-bold md:p-[1.5rem] '>
    learn with us
    
    </div>
    <h2 className='text-white font-bold text-3xl md:text-[4rem]  md:p-[1.5rem]  '>Grow with us</h2>
<div className='text-white  text-xl md:text-[3rem]  md:p-[1.5rem]'>
<Typed className='text-center'
                strings={[
                   'Hello my name is khan ', 'Iam a web developer &', ' UI/UX designer']}
                    typeSpeed={80}
                    backSpeed={50}
                    attr="placeholder"
                    loop >
                    <input type="text"/>
                </Typed>
                </div>
                <button className='bg-black text-white p-3 rounded'>Get started!</button>


    </div>


    </div>
  )
}

export default Banner