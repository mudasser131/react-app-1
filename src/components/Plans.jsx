import React from 'react'

const Plans = () => {
  return (
 <div className='py-[8rem] '>
    <h1 className='text-center text-4xl mb-5 font-bold'> Our Plans</h1>
 <div className=" max-w-[1240px] mx-auto grid md:grid-cols-3 gap-6">
 <div className="shadow-xl  h-[29rem] hover:scale-105 duration-400 flex flex-col justify-center items-center">
    <div class="p-4 ">
    <h2 class="text-xl font-semibold text-gray-800">Card Title</h2>
    <p class="text-gray-600 mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod.</p>
    <button class="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue active:bg-blue-800">
      Learn More
    </button>
  </div>
  </div>
<div className="shadow-xl  h-[29rem] bg-slate-200 hover:scale-105 duration-400 flex flex-col justify-center items-center">
    <div class="p-4 ">
    <h2 class="text-xl font-semibold text-gray-800">Card Title</h2>
    <p class="text-gray-600 mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod.</p>
    <button class="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue active:bg-blue-800">
      Learn More
    </button>
  </div>
  </div>
<div className="shadow-xl  h-[29rem] hover:scale-105 duration-400 flex flex-col justify-center items-center">
    <div class="p-4 ">
    <h2 class="text-xl font-semibold text-gray-800">Card Title</h2>
    <p class="text-gray-600 mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod.</p>
    <button class="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue active:bg-blue-800">
      Learn More
    </button>
  </div>
  </div>
 </div>



    </div>
  )
}

export default Plans