import React from 'react'

const Newsletter = () => {
  return (
    <div className='w-full bg-[#219ebc] p-4 text-white mb-5'>

<div className='max-w-[1240px] mx-auto md:flex justify-between py-[3rem] m-2'>
<div  className=' '>
   <h1 className='text-white text-3xl font-bold mb-2'>want to learn latest it skills ?</h1>
   <span className='text-white'>sign up to our news letter to stay updated.</span>
   
   </div>
<div className='   m-2'>
  <input type="text" className='p-3 mx-2 rounded mb-2 text-gray-500 px-6' placeholder='Email   ' />
<button className='bg-black text-white p-3 px-5 rounded'>notify</button>
<br />
<p>we care about protection of your data. read our <br /> privacy policy .</p>

</div>

</div>
    </div>
  )
}

export default Newsletter