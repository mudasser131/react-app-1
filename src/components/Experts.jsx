import React from 'react'
import Laptop from"../assets/laptop.png"
const Experts = () => {
  return (
   
    <div className='max-w-[1240px] mx-auto my-10 grid md:grid-cols-2 gap-8 m-2'>
  <div className='col-span-1'>
    <img src={Laptop} alt="" className='h-full' />
  </div>
  <div className='col-span-1 p-5 flex flex-col justify-center mx-auto m-2'>
    <h1 className='text-[#90e0ef] font-bold my-2 text-3xl'>Learn from experts</h1>
    <p className='my-3 text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
       ducimus magnam nihil eos reprehenderit? At modi deserunt rem dicta odit. 
       Dolores delectus aperiam dolorum odit, optio culpa dolore itaque magnam!</p>
    <button className='bg-black w-[30%] text-white p-3 my-3 rounded'>Get started!</button>
  </div>
</div>

  )
} 

export default Experts