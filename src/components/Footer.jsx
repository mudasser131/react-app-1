import React from 'react'

const Footer = () => {
  return (
    <div className="bg-[#219ebc] text-black py-8">
    <div className="container mx-auto flex flex-col items-center">
    <div className='text-3xl mb-3'>mudasser</div>
       
      </div>
      <p className="text-sm text-center">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod.
      </p>
     
      <div className="mt-4 text-center">
        <span className="text-black">Follow us:</span>
        <div className="flex mt-2 items-center justify-center">
          <a href="#" className="text-black hover:text-white mx-2 ">
            Twitter
          </a>
          <a href="#" className="text-black hover:text-white mx-2 ">
            Facebook
          </a>
          <a href="#" className="text-black hover:text-white mx-2 ">
            Instagram
          </a>
        </div>
      </div>
    </div>
  
  )
}

export default Footer